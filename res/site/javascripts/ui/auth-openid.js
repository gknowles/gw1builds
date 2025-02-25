/*
Copyright Glen Knowles 2006 - 2025.
Distributed under the Boost Software License, Version 1.0.

auth-openid.js - gw1builds ui
*/

/**
 * FUNCTIONS
 *   api.user.current
 *   api.user.login
 *   api.user.logout
 *   api.user.signup
 */


api.user = {
 /**
  * Query user info for current session
  *
  * handler gets:
  * { result: 'ok', user: { id:, name:, role: }
  */
  current: function(handler) {
    api.impl.query(api.group._listShim(handler), 'api.user.current', '');
  }, // current

 /**
  * Login using an existing and activated account.
  *
  * handler gets:
  * { result:
  *     bad - name and/or password is bad
  *     setup_needed - user must authenticate with their openid provider
  *     signup_needed - authenticated, but user doesn't have an account
  *     ok - user has been logged in
  *   errors:
  *   user: { id:, name:, role: } }
  */
  login: function(handler, identity_url) {
    var qs = [
      'openid_url=' + encodeURIComponent(identity_url)
    ].join('&');
    api.impl.handler = api.group._listShim(handler);
    api.impl.query(loginHandler, 'api.user.login', qs);

    // receives either 'bad' or 'check_id'
    function loginHandler(data) {
      if (data.result != 'check_id') return api.impl.handler(data);
      var el = document.getElementById('hiddenIframe');
      el.src = data.checkid_url;
    }
  }, // login

 /**
  * Logout
  *
  * handler gets:
  * { result: 'ok', user: { role: GUEST } }
  */
  logout: function(handler) {
    api.impl.query(handler, 'api.user.logout', '');
  } // logout

 /**
  * Create a new account, user param is a hash with:
  *   name, pass, passCopy, email, emailCopy
  *
  * handler gets:
  * { result:, errors:, user: { id:, name: } }
  */
  signup: function(handler, user) {
    var qs = [
      'user[name]=' + encodeURIComponent(user.name)
    ].join('&');
    api.impl.query(handler, 'api.user.signup', qs);
  }, // signup

} // api.user.*
