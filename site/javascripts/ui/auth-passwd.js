/*
Copyright Glen Knowles 2006 - 2024.
Distributed under the Boost Software License, Version 1.0.

auth-passwd.js - gw1builds ui
*/

/**
 * Defines the interface to the backend authentication and data
 * storage, primary goals are:
 * - single point of definition for enums, constants etc
 * - minimize number of round trips required
 * - allow for the possibility of some enterprising soul implementing
 *   a backend for a different application stack
 *
 * FUNCTIONS
 *   api.user.current
 *   api.user.signup
 *   api.user.activate
 *   api.user.login
 *   api.user.logout
 *   api.user.recoverActivation
 *   api.user.resetPassword
 *   api.user.changePassword
 *   api.user.changeEmail
 */


api.user = {
 /**
  * Query user info for current session
  *
  * handler gets:
  * { result: 'ok', user: { id:, name:, role: }
  */
  current: function(handler) {
    api.impl.query(handler, 'api.user.current', '');
  }, // current

 /**
  * Create a new account, user param is a hash with:
  *   name, pass, passCopy, email, emailCopy
  *
  * handler gets:
  * { result:, errors:, user: { id:, name: } }
  */
  signup: function(handler, user) {
    var qs = [
      'user[name]=' + encodeURIComponent(user.name),
      'user[password]=' + encodeURIComponent(user.pass),
      'user[password_confirmation]=' + encodeURIComponent(user.passCopy),
      'user[email]=' + encodeURIComponent(user.email),
      'user[email_confirmation]=' + encodeURIComponent(user.emailCopy)
    ].join('&');
    api.impl.query(handler, 'api.user.signup', qs);
  }, // signup

 /**
  * Activate a created account so that it can be used. Generally
  * used to verify the address by emailing the key needed to activate
  * the account.
  *
  * handler gets:
  * { result:, errors:, user: { id:, name: } }
  */
  activate: function(handler, name, key) {
    var qs = [
      'name=' + encodeURIComponent(name),
      'activation_key=' + encodeURIComponent(key)
    ].join('&');
    api.impl.query(handler, 'api.user.activate', qs);
  }, // activate

 /**
  * Login using an existing and activated account.
  *
  * handler gets:
  * { result:
  *     bad - name and/or password is bad
  *     must_activate - name and password good, but the account needs
  *       to be activated, user is not logged in
  *     ok - user has been logged in
  *   errors:
  *   user: { id:, name:, role: } }
  */
  login: function(handler, name, pass) {
    var qs = [
      'user[name]=' + encodeURIComponent(name),
      'user[password]=' + encodeURIComponent(pass)
    ].join('&');
    api.impl.query(handler, 'api.user.login', qs);
  }, // login

 /**
  * Logout
  *
  * handler gets:
  * { result: 'ok', user: { role: GUEST } }
  */
  logout: function(handler) {
    api.impl.query(handler, 'api.user.logout', '');
  }, // logout

 /**
  * Generate and email a new password for account with the given
  * email address.
  *
  * handler gets:
  * { result:, errors:, user: { id:, name:, role: } }
  */
  recoverActivation: function(handler, name) {
    var qs = [
      'user[name]=' + encodeURIComponent(name)
    ].join('&');
    api.impl.query(handler, 'api.user.recoverActivation', qs);
  }, // recoverActivation

 /**
  * Generate and email a new password for account with the given
  * email address.
  *
  * handler gets:
  * { result:, errors:, user: { id:, name:, role: } }
  */
  resetPassword: function(handler, email) {
    var qs = [
      'user[email]=' + encodeURIComponent(email)
    ].join('&');
    api.impl.query(handler, 'api.user.resetPassword', qs);
  }, // resetPassword

  changePassword: function(handler, user) {
    var qs = ['user[password_old]=' + encodeURIComponent(user.passOld),
      'user[password]=' + encodeURIComponent(user.pass),
      'user[password_confirmation]=' + encodeURIComponent(user.passCopy)
    ];
    qs = qs.join('&');
    api.impl.query(handler, 'api.user.changePassword', qs);
  }, // update

  changeEmail: function(handler, user) {
    var qs = [
      'user[email]=' + encodeURIComponent(user.email),
      'user[email_confirmation]=' + encodeURIComponent(user.emailCopy)
    ];
    qs = qs.join('&');
    api.impl.query(handler, 'api.user.changeEmail', qs);
  } // update
} // api.user.*
