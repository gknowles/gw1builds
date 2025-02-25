/*
Copyright Glen Knowles 2006 - 2025.
Distributed under the Boost Software License, Version 1.0.

api.js - gw1builds ui
*/

/**
 * Defines the interface to the backend authentication and data
 * storage, primary goals are:
 * - single point of definition for enums, constants etc
 * - minimize number of round trips required
 * - allow for the possibility of some enterprising soul implementing
 *   a backend for a different application stack
 *
 * EVENTS
 *   api.beforeQuery
 *   api.afterQuery
 *   api.beforeHandler
 *   api.afterHandler
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

var api = {
  beforeQuery: function(handler, method) {},
  afterQuery: function(handler, method) {},
  beforeHandler: function(handler, method, data) {},
  afterHandler: function(handler, method, data) {}
}


api.impl = {
  init: function() {
      srv.mock.init()
  },

  query: function(handler, method, qs) {
    api.beforeQuery(handler, method);
    let res = srv.mock.query(method, qs)
    if (res == null) {
        res = errRes("Error processing method: " + method)
    }
    api.afterQuery(handler, method);

    setTimeout(callback, 1)

    function callback() {
        api.beforeHandler(handler, method, res);
        handler(res);
        api.afterHandler(handler, method, res);
    }
  },

  squeryArgs: function(scope, squery) {
    var qs = [];
    if (squery) {
      if (squery.filter) {
        qs.push(scope + "[filter]=" + squery.filter.exportSelected());
      }
      if (squery.sort && squery.sort.key) {
        qs.push(scope + "[sort]=" + encodeURIComponent(squery.sort.key));
      }
      if (squery.pages) {
        qs.push(scope + "[page]=" + squery.pages.current,
          scope + "[pageSize]=" + squery.pages.pageSize);
      }
    }
    return qs.join('&');
  },

  squeryUpdate: function(squery, data) {
    if (squery != null) {
      var matches = {}
      var list = data.list || [];
      for (var i1 = 0; i1 < list.length; ++i1) {
        var val = list[i1];
        matches[squery.filter.getKey(val)] = val;
      }
      squery.changed = true;
      squery.values = list;
      squery.filter.searched = data.searched;
      squery.filter.matched = data.matched;
      squery.filter.matches = matches;
      if (data.pages) {
        squery.pages.current = data.pages.current;
        squery.pages.count = data.pages.count;
        squery.pages.pageSize = data.pages.pageSize;
      }
    }
  },
}


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


api.group = {
  /**
   * handler gets:
   * { result:, errors:,
   *   group: { acctRev:, list: [groups] }
   *   member: { groupName:, groupRev:, list: [users] }
   * }
   */

  /**
   * Get a page of associated groups and/or a page of members
   * of a specific group.
   */
  list: function(handler, acctRev, groupName, groupRev) {
    this._execute("api.group.list", handler, acctRev, groupName, groupRev);
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
        var events = data.member.events;
        for (var i1 = 0; i1 < events.length; ++i1) {
            var raw = Date.parse(events[i1].created_at);
            events[i1].created_at = raw;
        }
      }

      return handler(data);
    }
  } // _listShim

} // api.group.*


api.build = {
  /*
   * A build is returned to a handler with:
   * build.id // unique identifier
   * build.access.owner // name of owning group, '~your_name' for personal
   * build.access.viewer // view group, '~your_name' for personal, or
   *                     //   single '~' for public
   */

  /**
   * Gets a page of the list of visible builds.
   *
   * Set to returned results:
   *   squery.filter.searched
   *   squery.filter.matched
   *   squery.filter.matches
   *   squery.pages.current
   *   squery.pages.count
   *
   * handler gets:
   * { result:, errors:,
   *   searched:, matched:, list: [builds],
   *   pages: { current:, count:, pageSize: } // current is 1 based
   * }
   */
  list: function(handler, squery) {
    var qs = api.impl.squeryArgs('build', squery);
    api.impl.query(this._buildListShim(handler, squery),
      "api.build.list", qs);
  }, // list(handler)


  /**
   * Create a new build, fails if owner already has
   * a build of the same name (unless replace is true).
   * <build> must contain .access.owner and .access.viewer
   *
   * handler gets:
   * { result:, errors:, build: }
   */
  create: function(handler, build, replace/*=false*/) {
    var qs = this._encodeBuild(build);
    if (replace) qs += '&replace=1';
    api.impl.query(this._buildShim(handler), 'api.build.create', qs);
  }, // create


  /**
   * Updates an existing build, <build> must contain .access.owner
   * received from a previous query.
   *
   * handler gets:
   * { result:, errors:, build: }
   */
  update: function(handler, build) {
    var qs = this._encodeBuild(build);
    api.impl.query(this._buildShim(handler), 'api.build.update', qs);
  }, // update

  /**
   * Delete an existing build, <build> must contain .access.owner
   * received from a previous query
   *
   * handler gets:
   * { result, errors }
   * or if destroy succeeded and squery is not null
   * <result returned from api.build.list(squery)>
   */
  destroy: function(handler, build, squery) {
    var qs = [
      'build[owner]=' + encodeURIComponent(build.access.owner),
      'build[name]=' + encodeURIComponent(build.name)
    ];
    qs.push(api.impl.squeryArgs('build', squery));
    api.impl.query(this._buildListShim(handler, squery),
      'api.build.destroy', qs.join('&'));
  }, // destroy


  _encodeBuild: function(bld) {
    var qs = [
      'build[name]=' + encodeURIComponent(bld.name),
      'build[description]=' + encodeURIComponent(bld.desc),
      'build[is_team]=' + encodeURIComponent(bld.isTeam),
      'build[is_pve]=' + encodeURIComponent(bld.isPve),
      'build[build_type]=' + encodeURIComponent(bld.type),
      'build[owner]=' + encodeURIComponent(bld.access.owner),
      'build[viewer]=' + encodeURIComponent(bld.access.viewer),
      'build[size]=' + encodeURIComponent(bld.slots().length)
    ];
    var slots = bld.slotRefs(/*inclNulls=*/false);
    for (var i1 = 0; i1 < slots.length; ++i1) {
      var slot = slots[i1];
      var toon = slot.value;
      var key = 'build[' + i1 + ']';
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
  }, // _encodeBuild

  _unpackBuild: function(rb) {
    var b = new Build(rb.name, rb.id,
      rb.isTeam, rb.isPve, rb.type, rb.desc, rb.size);
    var rtoons = rb.list;
    for (var i1 = 0; i1 < rtoons.length; ++i1) {
      var rtoon = rtoons[i1];
      var toon = this._unpackToon(rtoon.value);
      b.setSlot(rtoon.pos, rtoon.alt, toon);
    }
    b.id = rb.id;
    b.access = rb.access;
    return b;
  }, // _unpackBuild

  _unpackToon: function(rtoon) {
    var toon = Character.prototype.parse(rtoon.packed);
    toon.id = rtoon.id;
    toon.setName(rtoon.name);
    toon.desc = rtoon.desc;
    return toon;
  }, // _unpackToon

  _buildShim: function(handler) {
    return function(data) {
      if (data.build) {
        data.build = api.build._unpackBuild(data.build);
      }
      return handler(data);
    }
  }, // _buildShim(handler)

  _buildListShim: function(handler, squery) {
    return function(data) {
      var list = data.list;
      if (list) {
        for (var i1 = 0; i1 < list.length; ++i1) {
          var val = api.build._unpackBuild(list[i1]);
          list[i1] = val;
        }
      }
      api.impl.squeryUpdate(squery, data);
      return handler(data);
    }
  } // _buildListShim

} // api.build.*
