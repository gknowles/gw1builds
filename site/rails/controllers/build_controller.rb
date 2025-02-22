# Copyright Glen Knowles 2006.
# Distributed under the Boost Software License, Version 1.0.
#
# build_controller.rb - gw1builds rails

class BuildController < ApplicationController

  def list
    return unless
      ensure_method(:xhr)

    pbld = params['build'] || {}

    select = "builds.*"
    where = []
    filter = decode_filter_string(pbld['filter'])
    unless current_user
      where << 'builds.viewer_id is null' # include all public
    else
      case filter['viewer'] ? filter['viewer'][0] : nil # assoc or all
      when 'assoc'
        where << "group_users.user_id = #{current_user.id} and " \
          "group_users.role >= #{User::MEMBER}";
        joins = " left join groups on " \
          "(groups.id = builds.owner_id or groups.id = builds.viewer_id) " \
          "left join group_users on groups.id = group_users.group_id"
      else
        where << 'builds.viewer_id is null'
        where << "group_users.user_id = #{current_user.id} and " \
          "group_users.role >= #{User::MEMBER}";
        joins = "left join groups on groups.id = builds.viewer_id " \
          "left join group_users on groups.id = group_users.group_id"
      end
    end
    order = case pbld[:sort]
      when 'name' then 'builds.name'
      when 'owner' then 'builds.owner_id, builds.name'
      when 'cat' then 'builds.is_pve desc, builds.build_type, ' \
        'builds.is_team, builds.name'
      else
        'builds.name'
    end
    params['page'] = pbld['page']
    pageSize = pbld['pageSize'].to_i
    @build_pages, @builds = paginate :builds,
      :per_page => pageSize,
      :select => select,
      :joins => joins,
      :conditions => where.join(' or '),
      :order => order
    blds = @builds.collect { |t|
      t.to_json(current_user)
    }
    @json = { :result => :ok, :list => blds,
      :searched => 0,
      :matched => @build_pages.item_count,
      :pages => {
        :current => @build_pages.current_page.number,
        :count => @build_pages.page_count,
        :pageSize => @build_pages.items_per_page
      }
    }
    render_json
  end # index


  # If 'replace' param is not present, and a toon with the same
  # name and owner already exists, the result will be :exists.
  # Otherwise the preexisting one is replaced
  #
  def create
    return unless
      ensure_method(:post, :xhr) and
      ensure_member and
      ensure_presence_of('build.name', 'build.size',
        'build.is_team', 'build.is_pve', 'build.build_type',
        'build.owner', 'build.viewer')

    pbld = params['build'] || {}
    build = decode_build(pbld)

    oname = pbld['owner'];
    vname = pbld['viewer'];

    if not (oname.length > 1 && oname[0,1] == '~' || # personal, any viewer
      vname == '~' || # any owner, public viewer
      oname == vname # group owner and not public, viewer same as owner
    )
      render_json(:result => :bad, :errors => [
        "Invalid combination of ownership and visibility"])
      return
    end

    ogu = GroupUser.find_by_user_id(current_user.id,
      :include => :group,
      :conditions => ["groups.name = ?", oname])
    if vname == oname
      vgu = ogu
    elsif vname != '~' # not public
      vgu = GroupUser.find_by_user_id(current_user.id,
        :include => :group,
        :conditions => ["groups.name = ?", vname])
    end
    if ogu.nil? or vgu.nil? && vname != '~'
      render_json(:result => :bad, :errors => [
        "id:#{current_user.id},'#{oname}','#{vname}'",
        "Proposed owner and/or viewer inaccessible"])
      return
    end

    # editor access to proposed owner?
    if ogu.role < User::EDITOR
      render_json(:result => :bad, :errors => [
        "Insufficient access to proposed owner"])
      return
    end

    build.owner_id = ogu.group_id
    build.viewer_id = vgu.group_id if vgu

    begin
      Build.transaction do
        obuild = Build.find_by_owner_id_and_name(
          build.owner_id, build.name)
        if obuild
          if not params['replace']
            render_json(:result => :exists)
            return
          end
          obuild.destroy
        end
        for tc in build.build_characters
          if tc.character.save
            tc.character_id = tc.character.id
          else
            for msg in tc.character.errors.full_messages
              build.errors.add('member', "'#{tc.character.name}' #{msg}");
            end
          end
        end
        raise RollbackHackException unless
          build.errors.empty? and build.save
      end # transaction
    rescue RollbackHackException
      render_json(:result => :bad, :errors => build.errors.full_messages)
      return
    end

    # done
    render_json(:result => :ok, :build => build.to_json(current_user))
  end # create


  def update
    return unless
      ensure_method(:post, :xhr) and
      ensure_member and
      ensure_presence_of('build.name', 'build.owner', 'build.size',
        'build.is_team', 'build.is_pve', 'build.build_type',
        'build.description')

    pbld = params['build']
    owner = pbld['owner']
    name = pbld['name']
    build = nil
    begin
      Build.transaction do
        build = Build.find_for_update(name, owner, current_user)
        if build.nil?
          render_json(:result => :bad, :errors => [
            "#{owner}/#{name}: No accessible matching build"]
            )
          return
        end
        nbuild = decode_build(pbld)
        build.update_from_unpacked(nbuild)
        for tc in build.build_characters(true)
          if tc.character.save
            tc.character_id = tc.character.id
          else
            for msg in tc.character.errors.full_messages
              build.errors.add('member', "'#{tc.character.name}' #{msg}");
            end
          end
        end
        raise RollbackHackException unless
          build.errors.empty? and build.save
      end # transaction
    rescue RollbackHackException
      render_json(:result => :bad, :errors => build.errors.full_messages)
      return
    end

    #done
    render_json(:result => :ok, :build => build.to_json(current_user))
  end # update


  def destroy
    return unless
      ensure_method(:post, :xhr) and
      ensure_member and
      ensure_presence_of('build.owner', 'build.name')

    pbld = params['build']
    owner = pbld['owner']
    name = pbld['name']
    build = Build.find_for_update(name, owner, current_user)
    if build.nil?
      render_json(:result => :bad, :errors => [
        "#{owner}/#{name}: No accessible matching build"]
        )
      return
    end

    unless build.destroy
      render_json(:result => :bad, :errors => build.errors.full_messages)
      return
    end

    # done
    return self.list if pbld['page']
    render_json(:result => :ok)
  end # destroy


private
  def decode_build pbld
    build = Build.new
    build.name = pbld['name']
    build.description = pbld['description']
    build.is_team = pbld['is_team']
    build.is_pve = pbld['is_pve']
    build.build_type = pbld['build_type']
    build.size = pbld['size']
    for i in 0...build.size
      ptoon = pbld[i.to_s]
      break if ptoon.nil?
      toon = Character.unpack(ptoon['packed'])
      toon.name = ptoon['name']
      toon.description = ptoon['description']
      member = build.build_characters.build(
        :slot => ptoon[:pos],
        :alternate => ptoon[:alt])
      member.character = toon
    end
    build
  end

end
