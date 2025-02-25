# Copyright Glen Knowles 2006.
# Distributed under the Boost Software License, Version 1.0.
#
# application.rb - gw1builds rails

# Filters added to this controller apply to all controllers in the application.
# Likewise, all the methods added will be available for all controllers.

class ApplicationController < ActionController::Base
  # Pick a unique cookie name to distinguish our session data from others'
  session :session_key => '_bns_session_id'

  def current_user
    session[:user]
  end
  def current_user=(user)
    session[:user] = user
  end

  def self.is_dev
    ENV['RAILS_ENV'] == 'development'
  end

  def render_json(json = @json)
    if request.xhr?
      render :text => "/*\n" + json.to_json + "\n*/\n"
    else
      errors = json[:errors]
      if errors.nil? or errors.empty?
        render :text => json.to_json
      else
        render :text => errors.join('<br>')
      end
    end
  end # render_json

  def ensure_method(*methods)
    if methods.index(:xhr) and not request.xhr?
      render :text => 'Operation must be invoke via XMLHttpRequest'
      return false
    end
    if methods.index(:post) and not request.post?
      render_json(:result => :bad, :errors => [
        'Get method used to invoke mutating operation',
        request.request_uri] )
      return false
    end
    true
  end # ensure_method

  def ensure_member(min_role = User::MEMBER)
    if current_user.nil?
      @json = { :result => :guest,
        :errors => ["State: Authorization required"] }
    else
      return true if current_user.role >= min_role
      @json = { :result => :bad,
        :errors => ["Access denied"] }
    end
    render_json
    false
  end # ensure_member

  def ensure_guest
    return true if current_user.nil?
    render_json({:result => :bad,
      :errors => ["State: You're currently logged in!"]})
    false
  end # ensure_guest

  def ensure_presence_of(*options)
    errs = []
    for p in options.flatten
      steps = p.to_s.split('.')
      step = params
      for s in steps
        step = step[s]
        if step.nil?
          errs << '<b>' + p + "</b>: must be defined"
          break
        end
      end
    end
    if errs.length > 0
      json = { :result => :bad, :errors => errs }
      render_json json
      return false
    end
    true
  end # ensure_presence_of

  def ensure_group_member(min_role)
    return false unless
      ensure_presence_of 'group.name'

    group = Group.find_by_name(params[:group][:name],
      :include => :users,
      :conditions => ["users.id = ? and group_users.role >= ?",
        current_user.id, min_role]
      )
    unless group.nil?
      params[:group][:id] = group.id
      return true
    end

    render_json({ :result => :bad,
      :errors => ["group.id: No accessible matching group"] })
    false
  end # ensure_group_member


  def check_presence_of(*options)
    for p in options.flatten
      steps = p.to_s.split('.')
      step = params
      for s in steps
        step = step[s]
        return false if step.nil?
      end
    end
    true
  end # check_presence_of

  def check_partial_presence_of(*options)
    catch (:more) do
      for p in options.flatten
        steps = p.to_s.split('.')
        step = params
        for s in steps
          step = step[s]
          throw :more if step.nil?
        end
        return true
      end
    end # catch
    true
  end # check_partial_presence_of


  def decode_filter_string str
    out = {}
    pairs = str.split('&');
    for pair in pairs
      pair = pair.split('=');
      out[pair[0]] = pair[1].split(',');
    end
    out
  end # decode_filter_string


  def get_group_list result, force = false
    return unless force == true or check_presence_of('account.rev')

    current_user.reload
    return if not force and
      current_user.rev == params[:account][:rev]

    # all groups you are a member of
    groups = Group.find(:all,
      :include => :group_users,
      :conditions => ["group_users.user_id = ?", current_user.id])
    grps = []
    for group in groups
      numMembers = GroupUser.count(
        :conditions => ['group_id = ? and role >= ?',
          group.id, User::MEMBER])
      guser = group.group_users.find_by_user_id(current_user.id)
      grps << {
        :name => group.name,
        :id => group.id,
        :groupRole => guser.role,
        :numMembers => numMembers
        }
    end
    result[:group] = {
      :acctRev => current_user.rev,
      :list => grps
    }
  end # get_group_list

end
