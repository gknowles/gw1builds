
# Copyright Glen Knowles 2006.
# Distributed under the Boost Software License, Version 1.0.
#
# group_controller.rb - gw1builds rails

class UserController < ApplicationController
  attr_accessor :trust_root

  # Returns json object with :result, :errors, and :user. :errors is an
  # array of errors, :user is {:name, :role} and :result is
  # one of the following:
  #   bad           - the name and/or password is bad
  #   check_id      - openid must be checked by provider
  def login
    return unless
      ensure_guest and
      ensure_presence_of('openid_url')

    identity_url = params[:openid_url]
    if identity_url.blank?
      render_json(:result => :bad, :errors => ['OpenID: Not found'])
      return
    end
    identity_url = normalize_url(identity_url)

    if (UserController.is_dev && identity_url[-5..-1] == '.dev/')
      render_json(:result => :check_id,
        :checkid_url => "#{ url_for(:action => 'complete') }" +
          "?open_id_dev=1&openid_url=#{URI.escape(identity_url)}"
      )
      return
    end

    oi_request = timeout_protection_from_identity_server {
      open_id_consumer.begin(identity_url)
    }
    case oi_request.status
    when OpenID::SUCCESS
      add_simple_registration_fields(oi_request,
        :optional => [ :nickname ])
      trust_root = TRUST_ROOT || url_for(:controller => '/')
      return_to = url_for(:action => 'complete')
      checkid_url = oi_request.redirect_url(trust_root, return_to, true)
      session[:checkid_setup] =
        oi_request.redirect_url(trust_root, return_to)
      @json = { :result => :check_id, :checkid_url => checkid_url }
    when OpenID::FAILURE
      @json = { :result => :bad, :errors => [
        oi_request.msg || "OpenID server not found"] }
    else
      @json = { :result => :bad, :errors => ["Unknown error"] }
    end
    @json[:user] = { :identity_url => identity_url, :role => User::GUEST }
    render_json
  end


  # result is one of the following:
  #   bad           - the name and/or password is bad
  #   setup_needed  - user must authenticate with their openid provider
  #   signup_needed - authenticated, but user doesn't have an account
  #   ok            - user has been logged in
  def complete
    if UserController.is_dev && params['open_id_dev']
      identity_url = params['openid_url']
      nickname = identity_url.match(/\/(\w+)\./)[1]
      status = OpenID::SUCCESS
    else
      consumer = open_id_consumer
      oi_response = timeout_protection_from_identity_server {
        consumer.complete(params)
      }
      identity_url = oi_response.identity_url
      identity_url = normalize_url(identity_url) if identity_url
      status = oi_response.status
    end

    case status
    when OpenID::SUCCESS
      session[:checkid_setup] = nil
      user = User.find_by_identity_url(identity_url)
      if user.nil?
        unless nickname
          fields = oi_response.extension_response('sreg')
          nickname = fields['nickname']
        end
        session[:identity_url] = identity_url
        @json = { :result => :signup_needed,
          :user => { :name => nickname, :identity_url => identity_url,
            :role => User::GUEST }
          }
      else
        user.login_at = ActiveRecord::Base.default_timezone == :utc ?
          Time.now.utc : Time.now
        user.save
        @json = { :result => :ok, :user => {
          :id => user.id, :name => user.name, :role => user.role } }
        # For some reason this 'current_user = user' isn't reflected inside
        # the ApplicationController::* methods
        session[:user] = user
        get_group_list @json, true
      end
    when OpenID::SETUP_NEEDED
      @json = { :result => :setup_needed,
        :user => { :identity_url => identity_url, :role => User::GUEST },
        :setup_url => session[:checkid_setup] } # oi_response.setup_url }
    when OpenID::CANCEL
      @json = { :result => :bad, :errors => ["Verification cancelled"] }
    when OpenID::FAILURE
      @json = { :result => :bad, :errors => [
        oi_response.msg || "Verification failed"] }
    else
      @json = { :result => :bad,
        :errors => ["Unknown response from OpenID server"] }
    end
  end # complete


  def signup
    return unless
      ensure_method(:post, :xhr) and
      ensure_guest and
      ensure_presence_of('user.name')

    unless session[:identity_url]
      render_json(:result => :bad, :errors => [
        'Attempt to signup without being authenticated',
        request.request_uri] )
      return
    end

    user = User.new
    user.attributes = params[:user]
    user.identity_url = session[:identity_url]
    user.login_at = ActiveRecord::Base.default_timezone == :utc ?
      Time.now.utc : Time.now

    # save wrapped in transaction with email, so that failure to send
    # rolls back the user
    if user.save
      @json = { :result => :ok, :user => {
        :id => user.id, :name => user.name, :role => user.role } }
      session[:user] = user;
      get_group_list @json, true
    else
      group = user.groups[0]
      errors = []
      errors << user.errors.full_messages if user.errors
      errors << group.errors.full_messages if group
      @json = { :result => :bad, :errors => errors.flatten }
    end
    render_json
  end # signup


  def current
    user = current_user
    if user.nil?
      render_json(:result => :ok, :user => { :role => User::GUEST })
    else
      @json = { :result => :ok,
        :user => { :id => user.id, :name => user.name, :role => user.role }
        }
      get_group_list @json, true
      render_json
    end
  end # current


  def logout
    reset_session
    render_json(:result => :ok, :user => { :role => User::GUEST })
  end # logout

end
