# Copyright Glen Knowles 2006 - 2025.
# Distributed under the Boost Software License, Version 1.0.
#
# group_controller.rb - gw1builds rails

class GroupController < ApplicationController
  MAX_GROUPS_PER_USER = 10
  MAX_INVITES_PER_USER = 50

  def list
    return unless
      ensure_method(:xhr) and
      ensure_member

    results = {}
    get_group_list results
    get_group_detail results
    results[:result] = results[:error].nil? ? :ok : :bad;
    render_json results
  end # list


  def create
    return unless
      ensure_method(:post, :xhr) and
      ensure_member and
      ensure_presence_of('group.name')

    # you can create a group unless you are already in the
    # maximum number of groups
    num = GroupUser.count(:conditions => ['user_id = ? and role >= ?',
      current_user.id, User::MEMBER])
    if num >= MAX_GROUPS_PER_USER
      render_json(:result => :bad,
        :errors => ["Limit of #{MAX_GROUPS_PER_USER} memberships per user"])
      return
    end
    group = Group.new params[:group]

    saved = false
    if group.name? and group.name[0] == '~'
      render_json(:result => :bad,
        :errors => ["Name has invalid format"])
      return
    end

    begin
      Group.transaction do
        if group.save
          group.group_users.build(
            :user_id => current_user.id,
            :role => User::ADMIN
            )
          group.group_events.build(
            :event => "#{group.name} created by #{current_user.name}"
          )
          saved = group.save
        end
        raise RollbackHackException unless saved
      end
    rescue RollbackHackException
    end

    @json = { :result => :ok }
    if saved
      get_group_list @json
      get_group_detail @json
    else
      @json[:errors] = group.errors.full_messages
    end
    @json[:result] = :bad unless @json[:errors].nil?
    render_json
  end # create


  def invite_user
    return unless
      ensure_method(:post, :xhr) and
      ensure_member and
      ensure_group_member(User::ADMIN) and # sets group.id
      ensure_presence_of('group.id', 'user.name')

    # you can
    user_name = params[:user][:name]
    group_id = params[:group][:id]
    user = User.find_by_name(user_name)
    if user.nil?
      render_json(:result => :bad,
        :user => { :name => user_name },
        :errors => ["User '" + user_name + "' not found"] )
      return
    end
    if GroupUser.count(:conditions => ['user_id = ? and group_id = ?',
        user.id, group_id]) > 0
      render_json(:result => :bad,
        :user => { :name => user_name },
        :errors => ["'" + user_name + "' has already been invited"] )
      return
    end
    num = GroupUser.count(:conditions => ['user_id = ? and role = ?',
      user.id, User::GUEST])
    if num >= MAX_INVITES_PER_USER
      render_json(:result => :bad, :errors => [
        "Limit of #{MAX_INVITES_PER_USER} pending invitations per user"] )
      return
    end
    guser = GroupUser.new({
      :user_id => user.id,
      :group_id => group_id,
      :role => User::GUEST
    });
    save_and_render_lists guser,
      "#{user_name} invited by #{current_user.name}"
  end # invite_user


  def promote_member
    return unless
      ensure_method(:post, :xhr) and
      ensure_member and
      ensure_group_member(User::ADMIN) and
      ensure_presence_of('group.id', 'user.name')

    user_name = params[:user][:name]
    guser = GroupUser.find_by_group_id(params[:group][:id],
      :include => :user,
      :conditions => ["users.name = ?", user_name]
    )
    if guser.nil?
      render_json(:result => :bad, :errors => ["No matching membership"] )
      return
    end
    guser.role += 1 unless guser.role == User::ADMIN
    save_and_render_lists guser, "#{user_name} promoted" \
      " to #{User::Roles.index(guser.role)}" \
      " by #{current_user.name}"
  end # promote_member


  def demote_member
    return unless
      ensure_method(:post, :xhr) and
      ensure_member and
      ensure_group_member(User::ADMIN) and
      ensure_presence_of('group.id', 'user.name')

    user_name = params[:user][:name]
    guser = GroupUser.find_by_group_id(params[:group][:id],
      :include => :user,
      :conditions => ["users.name = ?", user_name]
    )
    if guser.nil?
      render_json(:result => :bad, :errors => ["No matching membership"] )
      return
    end
    numAdmins = GroupUser.count(:conditions => [
      "group_users.group_id = ? and group_users.role >= ?",
      guser.group_id, User::ADMIN]);
    if (guser.role == User::ADMIN && numAdmins == 1)
      render_json(:result => :bad,
        :errors => ["Groups must have at least one administrator"] )
      return
    end
    guser.role -= 1 unless guser.role <= User::MEMBER
    save_and_render_lists guser, "#{user_name} demoted" \
      " to #{User::Roles.index(guser.role)}" \
      " by #{current_user.name}"
  end # demote_member


  def kick_member
    return unless
      ensure_method(:post, :xhr) and
      ensure_member and
      ensure_group_member(User::ADMIN) and
      ensure_presence_of('group.id', 'user.name')

    guser = GroupUser.find_by_group_id(params[:group][:id],
      :include => :user,
      :conditions => ["users.name = ?", params[:user][:name]]
    )
    if guser.nil?
      render_json(:result => :bad, :errors => ["No matching membership"] )
      return
    end
    group = guser.group

    # Note: a user can't be kicked from their private
    #       group (name is nil)
    if group.name == nil
      render_json(:result => :bad,
        :errors => ["Can't kick member from private group"] )
      return
    end

    # you can't kick yourself, you have to leave instead :)
    if guser.user_id == current_user.id
      render_json(:result => :bad,
        :errors => ["Can't kick yourself, you have to leave instead"] )
      return
    end

    destroy_member_and_render_lists guser,
      "#{user_name} kicked by #{current_user.name}"
  end # kick_member


  def join
    return unless
      ensure_method(:post, :xhr) and
      ensure_member and
      ensure_presence_of('group.name')

    guser = GroupUser.find_by_user_id(current_user.id,
      :include => :group,
      :conditions => ["groups.name = ?", params[:group][:name]])
    if guser.nil?
      render_json(:result => :bad,
        :errors => ["No matching invitation"] )
      return
    end
    guser.role = User::MEMBER
    save_and_render_lists guser,
      "#{current_user.name} joined"
  end # join


  def leave
    return unless
      ensure_method(:post, :xhr) and
      ensure_member and
      ensure_presence_of('group.name')

    guser = GroupUser.find_by_user_id(current_user.id,
      :include => :group,
      :conditions => ["groups.name = ?", params[:group][:name]])
    # no membership or its your private group? can't leave, fail
    if guser.nil? or guser.group.name == '~' + current_user.name
      render_json(:result => :bad,
        :errors => ["No matching membership"] )
      return
    end
    group = guser.group

    if guser.role == User::ADMIN && group.group_users.size > 1
      numAdmins = GroupUser.count(:conditions => [
        "group_users.group_id = ? and group_users.role >= ?",
        guser.group_id, User::ADMIN]);
      if numAdmins == 1
        render_json(:result => :bad,
          :errors => ["Groups must have at least one administrator"] )
        return
      end
    end

    destroy_member_and_render_lists guser,
      "#{current_user.name} left"
  end # leave


private
  def get_group_detail result, force = false
    return unless check_presence_of('group.name') and
      (force == true or check_presence_of('group.rev'))

    # you can only see member lists of groups that you are a member
    # of or have been invited to join
    group_name = params[:group][:name]
    group = Group.find_by_name(group_name,
      :conditions => ["group_users.user_id = ?", current_user.id],
      :include => :group_users)
    if group.nil?
      result[:errors] = [] if result[:errors].nil?
      result[:errors] << "No accessible matching group [#{group_name}]";
      return
    end

    return if not force and
      group.rev == params[:group][:rev]
    memArray = []
    for guser in group.group_users(true)
      member = guser.user
      memArray << {
        :name => member.name,
        :id => member.id,
        :groupRole => guser.role
      }
    end
    evtArray = []
    for evt in group.group_events.find(:all,
        :limit => 50, :order => 'created_at desc')
      evtArray << {
        :created_at => evt.created_at.iso8601,
        :event => evt.event
      }
    end
    result[:member] = {
      :groupName => group.name,
      :groupRev => group.rev,
      :list => memArray,
      :events => evtArray
    }
  end # get_group_detail


  def save_and_render_lists guser, event
    @json = { :result => :ok }
    saved = false
    begin
      Group.transaction do
        if guser.save
          raise RollbackHackException unless
            guser.group.group_events.create(:event => event)
        end
        saved = true
      end
    rescue RollbackHackException
    end

    if saved
      get_group_list @json
      get_group_detail @json
    else
      @json[:errors] = guser.errors.full_messages
    end
    @json[:result] = :bad unless @json[:errors].nil?
    render_json
  end # save_and_render_lists

  def destroy_member_and_render_lists guser, event
    group = guser.group
    saved = false
    begin
      Group.transaction do
        raise RollbackHackException unless
          guser.destroy and
          group.group_events.create(:event => event)

        # last user removed from group? remove group too
        if group.group_users.size == 0
          raise RollbackHackException unless
            group.destroy
        end
        saved = true
      end
    rescue RollbackHackException
    end

    if saved
      @json = { :result => :ok }
      get_group_list @json
      get_group_detail @json
    else
      errs = guser.errors.full_messages
      errs << group.errors.full_messages
      @json = { :errors => errs }
    end
    @json[:result] = :bad unless @json[:errors].nil?
    render_json
  end
end
