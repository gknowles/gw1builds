/*
Copyright Glen Knowles 2024.
Distributed under the Boost Software License, Version 1.0.

mock.js - gw1builds server
*/

/**
 * Mock of backend server that exists on the browser and stores data in
 * local storage.
 *
 * FUNCTIONS
 *   api.user.current
 *   api.user.signup
 *   api.user.login
 *   api.user.logout
 *   api.user.changePassword
 *   api.user.changeEmail
 *   api.group.list
 *   api.group.create
 *   api.group.invite_user
 *   api.group.promote_member
 *   api.group.demote_member
 *   api.group.kick_memeber
 *   api.group.join
 *   api.group.leave
 *   api.build.list
 *   api.build.create
 *   api.build.update
 *   api.build.destroy
 *   api.misc.download - return sent data as file download
 */

var srv = {}

srv.mock = {
  data: {
    currentUser: {},
    users: [],
    usersByName: {},
    groups: [],
    toons: [],
    builds: [],
  },

  init: function() {
    let smd = srv.mock.data
    var keys = g_store.getKeys();
    for (var k in keys) {
      var pre = k.split('.');
      if (pre.length != 2) continue;
      let id = Number.parseInt(pre[1])
      if (Number.isNaN(id)) continue;
      let obj = JSON.parse(g_store.get(k))
      switch (pre[0]) {
        case 'user':
            if (obj.name == undefined)
                continue
            smd.users[id] = obj
            smd.usersByName[obj.name] = id
            break;
        case 'group':
            smd.groups[id] = obj
            break;
        case 'toon':
            smd.toons[id] = obj
            break;
        case 'build':
            smd.build[id] = obj;
            break;
      }
    }
    if (smd.users.length == 0) {
        let u = new MockUser
        u.id = 1
        u.name = "Admin"
        u.role = MockUser.ADMIN
        u.email = 'admin@example.com'
        u.createdAt = Date.now()
        smd.users[u.id] = u
        smd.usersByName[u.name] = u.id
        let key = 'user.' + u.id.toString()
        g_store.set(key, u)
    }
    smd.currentUser = new MockUser
  },

  addNext: function(arr, obj) {
      let id = arr.nextId || 0
      while (arr[id]) {
          id += 1
      }
      arr.nextId = id
      obj.id = id
      arr[id] = obj
      return id
  },

  query: function(method, qs) {
    let qry = new URLSearchParams(qs)

    // Transform qry into params so that a[b][c]=d in qry makes params.a.b.c
    // equal to d.
    let params = {}
    for (let [k, v] of qry.entries()) {
        this.addParam(params, k, v)
    }

    let methods = method.split('.')
    if (methods.length != 3 || methods[0] != 'api')
        return errRes("Invalid method '" + method + "'")
    let op = this[methods[1]]
    if (op != undefined)
        op = op[methods[2]]
    if (typeof op != 'function')
        return errRes("Unknown method '" + method + "'")
    return op(params)
  },

  addParam: function(params, key, value) {
      let obj = params
      let pos = key.indexOf('[')
      while (pos != -1) {
          let epos = key.indexOf(']', pos)
          if (epos == -1)
              break
          if (obj[key.slice(0, pos)] == undefined)
              obj[key.slice(0, pos)] = {}
          obj = obj[key.slice(0, pos)]
          key = key.slice(pos, epos) + key.slice(epos + 1)
          pos = key.indexOf('[')
      }
      obj[key] = decodeURIComponent(value)
  },

  errRes: function(msg) {
      return { result: 'bad', errors: [msg] }
  },

  ensureMember: function(res, minRole = MockUser.MEMBER) {
      let user = srv.mock.data.currentUser
      if (user.name == undefined) {
          res = errRes("State: Authorization required")
          return false
      }
      if (user.role < minRole) {
          res = errRes("Access denied")
          return false
      }
      return true
  },

  ensureGuest: function(res) {
      let user = srv.mock.data.currentUser
      if (user.name != undefined
          || data.currentUser.role != MockUser.GUEST
      ) {
          res = errRes("State: You're currently logged in!")
          return false
      }
      return true
  },

  ensureParams: function(res, obj, nodes) {
      let errs = []
      return true
  },

  ensureGroupMember: function(res, params, minRole) {
      let smd = srv.mock.data
      if (!ensureParams(res, params, 'group.name'))
          return false
      for (let g of smd.groups) {
          if (g.name == params.group.name
              && g.members[smd.currentUser.id] != undefined
              && g.members[smd.currentUser.id] >= minRole
          ) {
              params.group.id = g.id
              return true
          }
      }
      res = errRes("group.id: No acciessible matching group")
      return false
  },

  exportUser: function(res, u) {
      if (u == undefined)
          u = srv.mock.data.currentUser
      res.user = { role: u.role }
      if (u.id != undefined)
          res.user.id = u.id
      if (u.name != undefined)
          res.user.name = u.name
  },

  exportGroupList: function(res) {
      let smd = srv.mock.data
      let grps = []
      for (let grp in smd.groups) {
          let role = grp.users[res.user.id] || 0
          if (role >= MockUser.MEMBER) {
              let nmbrs = 0
              for (let role of grp.users.values()) {
                  if (role >= MockUser.MEMBER)
                      nmbrs += 1
              }
              grps.push({
                  name: grp.name,
                  id: grp.id,
                  groupRole: role,
                  numMembers: nmbrs,
              })
          }
      }
      res.group = { list: grps }
  },
}


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
    if (!ensureGuest(res) || !ensureParams(res, params, 'user.name'))
        return res

    let smd = srv.mock.data
    let id = smd.usersByName[params.user.name]
    if (id == undefined)
        return errRes("Login failed.")
    smd.currentUser = smd.users[id]
    exportUser(res)
    exportGroupList(res)
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
    exportUser(res)
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
      if (!ensureGuest(res) || !ensureParams(res, params,
          'user.name',
          'user.password',
          'user.password_confirmation',
          'user.email',
          'user.email_confirmation',
      )) {
          return res
      }
      if (params.user.password != params.user.password_confirmation)
          return errRes("Password must be entered the same way twice.")
      if (params.user.email != params.user.email_confirmation)
          return errRes("Email must be entered the same way twice.")

      let smd = srv.mock.data
      let id = smd.usersByName[params.user.name]
      if (id != undefined)
          return errRes("User name '" + params.user.name + "' already exists.")
      let u = new MockUser
      u.name = params.user.name
      u.role = User.MEMBER
      u.email = params.user.email
      u.createdAt = Date.now()
      this.addNext(smd.users, u)
      smd.usersByName[u.name] = u.id
      res = { result: 'ok' }
      exportUser(res, u)
      exportGroupList(res)
      return res
  },

  changeEmail: function(params) {
      let res = { result: 'ok' }
      if (!ensureMember(res) || !ensureParams(res, params,
          'user.email',
          'user.email_confirmation',
      )) {
          return res
      }
      if (params.user.email != params.user.email_confirmation)
          return errRes("Email must be entered the same way twice.")
      // TODO: validate email address format

      let smd = srv.mock.data
      smd.currentUser.email = params.user.Email
      exportUser(res)
      return res
  }
}


srv.mock.group = {
  /**
   * handler gets:
   * { result:, errors:,
   *   group: { acctRev:, list: [groups] }
   *   member: { groupName:, groupRev:, list: [users] }
   * }
   */

  MAX_GROUPS_PER_USER: 10,
  MAX_INVITES_PER_USER: 50,

  /**
   * Get a page of associated groups and/or a page of members
   * of a specific group.
   */
  list: function(params) {
    let res = { result: 'ok' }
    if (!ensureMember(res) || !ensureParams(res, params,
        'account.rev',
        'group.name',
        'group.rev'
    )) {
        return res
    }
    exportGroupList(res)
    exportGroupDetail(res)
    return res
  },

  create: function(handler, acctRev, groupName, groupRev) {
    this._execute("api.group.create", handler, acctRev, groupName, groupRev);
  }, // create

  invite_user: function(handler, acctRev, groupName, groupRev, userName) {
    this._execute("api.group.invite_user", handler,
      acctRev, groupName, groupRev, userName);
  }, // invite_user

  promote_member: function(handler, acctRev, groupName, groupRev, userName) {
    this._execute("api.group.promote_member", handler,
      acctRev, groupName, groupRev, userName);
  }, // promote_member

  demote_member: function(handler, acctRev, groupName, groupRev, userName) {
    this._execute("api.group.demote_member", handler,
      acctRev, groupName, groupRev, userName);
  }, // demote_member

  kick_member: function(handler, acctRev, groupName, groupRev, userName) {
    this._execute("api.group.kick_member", handler,
      acctRev, groupName, groupRev, userName);
  }, // kick_member

  join: function(handler, acctRev, groupName, groupRev) {
    this._execute("api.group.join", handler, acctRev, groupName, groupRev);
  }, // join

  leave: function(handler, acctRev, groupName, groupRev) {
    this._execute("api.group.leave", handler, acctRev, groupName, null);
  }, // leave

  _execute: function(func, handler, acctRev, groupName, groupRev, userName) {
    var qs = [];
    if (acctRev != null) qs.push('account[rev]=' + encodeURIComponent(acctRev));
    if (groupName != null) qs.push('group[name]=' + encodeURIComponent(groupName));
    if (groupRev != null) qs.push('group[rev]=' + encodeURIComponent(groupRev));
    if (userName != null) qs.push('user[name]=' + encodeURIComponent(userName));
    qs = qs.join('&');
    api.impl.query(this._listShim(handler), func, qs);
  },

  _unpackGroup: function(rgroup) {
    var group = new Group(rgroup.id, rgroup.name);
    group.groupRole = rgroup.groupRole;
    group.numMembers = rgroup.numMembers;
    return group;
  }, // _unpackGroup

  _unpackUser: function(ruser) {
    var user = new User(ruser.name, ruser.groupRole, ruser.id);
    return user;
  }, // _unpackUser

  _listShim: function(handler) {
    return function(data) {
      if (data.group) {
        var list = data.group.list;
        for (var i1 = 0; i1 < list.length; ++i1) {
          var raw = api.group._unpackGroup(list[i1]);
          list[i1] = raw;
        }
      }
      if (data.member) {
        var list = data.member.list;
        for (var i1 = 0; i1 < list.length; ++i1) {
          var raw = api.group._unpackUser(list[i1]);
          list[i1] = raw;
        }
      }

      return handler(data);
    }
  } // _listShim

}


srv.mock.build = {
  /*
   * A build is returned to a handler with:
   * build.id // unique identifier
   * build.access.owner // name of owning group, '~your_name' for personal
   * build.access.viewer // view group, '~your_name' for personal, or
   *                    //   single '~' for public
   */

  /**
   * Gets a page of the list of visible build.
   *
   * handler gets:
   * { result:, errors:,
   *   searched:, matched:, list: [builds],
   *   pages: { current:, count:, pageSize: } // current is 1 based
   * }
   */
  list: function(handler, squery) {
    var qs = api.impl.squeryArgs('team', squery);
    api.impl.query(this._teamListShim(handler, squery),
      "api.team.list", qs);
  }, // list(handler)


  /**
   * Create a new team, fails if owner already has
   * a team of the same name (unless replace is true).
   * <team> must contain .access.owner and .access.viewer
   *
   * handler gets:
   * { result:, errors:, team: }
   */
  create: function(handler, team, replace/*=false*/) {
    var qs = this._encodeTeam(team);
    if (replace) qs += '&replace=1';
    api.impl.query(this._teamShim(handler), 'api.team.create', qs);
  }, // create


  /**
   * Updates an existing team, <team> must contain .access.owner
   * received from a previous query.
   *
   * handler gets:
   * { result:, errors:, team: }
   */
  update: function(handler, team) {
    var qs = this._encodeTeam(team);
    api.impl.query(this._teamShim(handler), 'api.team.update', qs);
  }, // update

  /**
   * Delete an existing team, <team> must contain .access.owner
   * received from a previous query
   *
   * handler gets:
   * { result, errors }
   * or if destroy succeeded and squery is not null
   * <result returned from api.team.list(squery)>
   */
  destroy: function(handler, team, squery) {
    var qs = [
      'team[owner]=' + encodeURIComponent(team.access.owner),
      'team[name]=' + encodeURIComponent(team.name)
    ];
    qs.push(api.impl.squeryArgs('team', squery));
    api.impl.query(this._teamListShim(handler, squery),
      'api.team.destroy', qs.join('&'));
  }, // destroy


  _encodeTeam: function(team) {
    var qs = [
      'team[name]=' + encodeURIComponent(team.name),
      'team[description]=' + encodeURIComponent(team.desc),
      'team[owner]=' + encodeURIComponent(team.access.owner),
      'team[viewer]=' + encodeURIComponent(team.access.viewer),
      'team[size]=' + encodeURIComponent(team.slots().length)
    ];
    var slots = team.slotRefs(/*inclNulls=*/false);
    for (var i1 = 0; i1 < slots.length; ++i1) {
      var slot = slots[i1];
      var toon = slot.value;
      var key = 'team[' + i1 + ']';
      qs.push(
        key + '[pos]=' + slot.pos,
        key + '[alt]=' + slot.alt
      );
      qs.push(
        key + '[name]=' + encodeURIComponent(toon.name),
        key + '[packed]=' + encodeURIComponent(toon.toCode(/*skipName=*/true)),
        key + '[description]=' + encodeURIComponent(toon.desc)
      );
    } // for each slot
    return qs.join('&');
  }, // _encodeTeam

  _unpackTeam: function(rteam) {
    var team = new Team(rteam.name, rteam.id, rteam.desc, rteam.size);
    var rtoons = rteam.list;
    for (var i1 = 0; i1 < rtoons.length; ++i1) {
      var rtoon = rtoons[i1];
      var toon = api.toon._unpackToon(rtoon.value);
      team.setSlot(rtoon.pos, rtoon.alt, toon);
    }
    team.id = rteam.id;
    team.access = rteam.access;
    return team;
  }, // _unpackTeam

  _teamShim: function(handler) {
    return function(data) {
      if (data.team) {
        data.team = api.team._unpackTeam(data.team);
      }
      return handler(data);
    }
  }, // _teamShim(handler)

  _teamListShim: function(handler, squery) {
    return function(data) {
      var list = data.list;
      if (list) {
        for (var i1 = 0; i1 < list.length; ++i1) {
          var val = api.team._unpackTeam(list[i1]);
          list[i1] = val;
        }
      }
      api.impl.squeryUpdate(squery, data);
      return handler(data);
    }
  } // _teamListShim

}


