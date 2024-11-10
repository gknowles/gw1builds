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
        this.decodeParam(params, k, v)
    }

    let methods = method.split('.')
    if (methods.length != 3 || methods[0] != 'api')
        return this.errRes("Invalid method '" + method + "'")
    let obj = this[methods[1]]
    if (obj != undefined)
        op = obj[methods[2]]
    if (typeof op != 'function')
        return this.errRes("Unknown method '" + method + "'")
    return op.call(obj, params)
  },

  decodeParam: function(params, key, value) {
      let obj = params
      let pos = key.indexOf('[')
      while (pos != -1) {
          let epos = key.indexOf(']', pos)
          if (epos == -1)
              break
          if (obj[key.slice(0, pos)] == undefined)
              obj[key.slice(0, pos)] = {}
          obj = obj[key.slice(0, pos)]
          key = key.slice(pos + 1, epos) + key.slice(epos + 1)
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
          res = this.errRes("State: Authorization required")
          return false
      }
      if (user.role < minRole) {
          res = this.errRes("Access denied")
          return false
      }
      return true
  },

  ensureGuest: function(res) {
      let smd = srv.mock.data
      let user = smd.currentUser
      if (user.name != undefined
          || smd.currentUser.role != MockUser.GUEST
      ) {
          res = this.errRes("State: You're currently logged in!")
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
      res = this.errRes("group.id: No accessible matching group")
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

  decodeFilterString: function(res, out, str) {
      out = {}
      if (typeof str !== 'string') {
          res = this.errRes("build.filter: Malformed string")
          return false
      }
      let pairs = str.split('&')
      if (pairs.length < 1) {
          res = this.errRes("build.filter: Malformed string")
          return false
      }
      for (let pair in pairs) {
          pair = pair.split('=')
          if (pair.length != 2) {
              res = this.errRes(`build.filter: Malformed pair: ${pair}`)
              return false
          }
          out[pair[0]] = pair[1].split(',')
      }
      return true
  },
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
  list: function(params) {
    let res = { result: 'ok' }
    let defs = { build: {
        filter: "viewer=all",
        sort: "name",
        page: 1,
        pageSize: 10
    } }
    deepMerge(params, defs)
    let pbld = params.build
    let filter = null
    if (!srv.mock.decodeFilterString(res, filter, pbld.filter))
        return res
    let smd = srv.mock.data
    let blds = []

    // Select builds
    for (let bld in smd.builds) {
        if (!smd.currentUser.id) {
            if (bld.viewerId)
                continue
        } else if (filter.viewer[0] == 'assoc') {
            let grp = smd.groups[bld.ownerId]
            if (!grp || grp.groupUsers[smd.currentUser.id] < MockUser.MEMBER)
                continue
        } else {
            // viewer = all
            if (bld.viewerId) {
                let grp = smd.groups[bld.viewerId]
                if (!grp
                    || grp.groupUsers[smd.currentUser.id] < MockUser.MEMBER
                ) {
                    continue
                }
            }
        }
        blds.push(bld)
    }

    // Sort builds
    let fn = (a, b) => a.name.localCompare(b.name);
    switch (pbld.sort) {
    case 'owner':
        fn = (a, b) => {
            if (a.ownerId < b.ownerId) return -1
            if (a.ownerId > b.ownerId) return 1
            return a.name.localCompare(b.name)
        }
        break
    case 'cat':
        fn = (a, b) => {
            if (a.isPve != b.isPve) return a.isPve ? 1 : -1 // descending
            if (a.buildType < b.buildType) return -1
            if (a.buildType > b.buildType) return 1
            if (a.isTeam != b.isTeam) return a.isTeam ? -1 : 1
            return a.name.localCompare(b.name)
        }
    }
    blds.sort(fn)

    // Paginate
    let pgno = pbld.page > 0 ? pbld.page : 1
    let psize = pbld.pageSize > 0 ? pbld.pageSize : 10
    let pcnt = Math.max((blds.length + psize - 1) / psize, 1)
    res = {
        result: 'ok',
        list: blds.slice((pgno - 1) * psize, pgno * psize),
        searched: 0,
        matched: blds.length,
        pages: {
            current: pgno,
            count: pcnt,
            pageSize: psize,
        },
    }
    return res
  },


  /**
   * Create a new team, fails if owner already has
   * a team of the same name (unless replace is true).
   * <team> must contain .access.owner and .access.viewer
   *
   * handler gets:
   * { result:, errors:, team: }
   */
  create: function(params) {
    let res = { result: 'ok' }
    if (!ensureMember(res) || !ensureParams(res, params,
        'build.name',
        'build.size',
        'build.is_team',
        'build.is_pve',
        'build.build_type',
        'build.owner',
        'build.viewer'
    )) {
        return res
    }

    let oname = params.build.owner
    let vname = params.build.viewer
    if (oname.length > 1 && oname[0] == '~' // personal, any viewer
        || vname == '~' // any owner, public viewer
        || oname == vname // group owner and not public, viewer same as owner
    ) {
        res.errors = [
            "Invalid combination of ownership and visibility"
        ]
        return res
    }

    res.errors = [ "Not implemented" ]
    return res
  },


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


