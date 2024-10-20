/*
Copyright Glen Knowles 2024.
Distributed under the Boost Software License, Version 1.0.

mock-noauth.js - gw1builds server
*/

/**
 * FUNCTIONS
 *   api.user.current
 *   api.user.signup
 *   api.user.login
 *   api.user.logout
 *   api.user.changeEmail
 */

srv.mock.user = {
 /**
  * Query user info for current session
  *
  * handler gets:
  * { result: 'ok', user: { id:, name:, role: }
  */
  current: function(params) {
    let smd = srv.mock.data
    if (smd.currentUser.id == undefined) {
        smd.currentUser = new MockUser
    }
    let res = { result: 'ok' }
    srv.mock.exportUser(res)
    srv.mock.exportGroupList(res)
    return res
  },

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
  login: function(params) {
    let res = { result: 'ok' }
    if (!srv.mock.ensureGuest(res)
        || !srv.mock.ensureParams(res, params, 'user.name')
    ) {
        return res
    }

    let smd = srv.mock.data
    let id = smd.usersByName[params.user.name]
    if (id == undefined) {
        res.result = 'signup_needed'
        res.errors = ["user.name: Account not found"]
        res.user = { name: params.user.name, role: MockUser.GUEST }
        return res
    }
    smd.currentUser = smd.users[id]
    srv.mock.exportUser(res)
    srv.mock.exportGroupList(res)
    return res
  },

 /**
  * Logout
  *
  * handler gets:
  * { result: 'ok', user: { role: GUEST } }
  */
  logout: function(params) {
    let smd = srv.mock.data
    smd.currentUser = new MockUser
    let res = { result: 'ok' }
    srv.mock.exportUser(res)
    return res
  },

 /**
  * Create a new account, user param is an object with properties:
  *   name, pass, passCopy, email, emailCopy
  *
  * handler gets:
  * { result:, errors:, user: { id:, name: } }
  */
  signup: function(params) {
      let res = {}
      if (!srv.mock.ensureGuest(res) || !srv.mock.ensureParams(res, params,
          'user.name',
          'user.password',
          'user.password_confirmation',
          'user.email',
          'user.email_confirmation',
      )) {
          return res
      }
      if (params.user.password != params.user.password_confirmation)
          return srv.mock.errRes("Password must be entered the same way twice.")
      if (params.user.email != params.user.email_confirmation)
          return srv.mock.errRes("Email must be entered the same way twice.")

      let smd = srv.mock.data
      let id = smd.usersByName[params.user.name]
      if (id != undefined) {
          return srv.mock.errRes(
              "User name '" + params.user.name + "' already exists."
          )
      }
      let u = new MockUser
      u.name = params.user.name
      u.role = User.MEMBER
      u.email = params.user.email
      u.createdAt = Date.now()
      srv.mock.addNext(smd.users, u)
      smd.usersByName[u.name] = u.id
      res = { result: 'ok' }
      srv.mock.exportUser(res, u)
      srv.mock.exportGroupList(res)
      return res
  },

  changeEmail: function(params) {
      let res = { result: 'ok' }
      if (!srv.mock.ensureMember(res) || !srv.mock.ensureParams(res, params,
          'user.email',
          'user.email_confirmation',
      )) {
          return res
      }
      if (params.user.email != params.user.email_confirmation)
          return srv.mock.errRes("Email must be entered the same way twice.")
      // TODO: validate email address format

      let smd = srv.mock.data
      smd.currentUser.email = params.user.Email
      srv.mock.exportUser(res)
      return res
  }
}
