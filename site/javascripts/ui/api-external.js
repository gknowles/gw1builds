/*
Copyright Glen Knowles 2006 - 2024.
Distributed under the Boost Software License, Version 1.0.

api-browser.js - gw1builds ui
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
 *   api.user.current
 *   api.user.signup
 *   api.user.activate
 *   api.user.login
 *   api.user.logout
 *   api.user.recoverActivation
 *   api.user.resetPassword
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

var api = {
  beforeQuery: function(handler, method) {},
  afterQuery: function(handler, method) {},
  beforeHandler: function(handler, method, data) {},
  afterHandler: function(handler, method, data) {}
}


api.impl = {
  init: function() {
      api.impl.urls = apiUrls();
  },

  query: function(handler, method, qs) {
    api.beforeQuery(handler, method);
    var url = this.urls[method];
    //alert([url, qs]);
    dojo.io.bind({
      headers: {'X-Requested-With': 'XMLHttpRequest'},
      method: 'post',
      url: url,
      handle: metaHandler,
      mimetype: 'text/plain',
      postContent: qs
    });
    api.afterQuery(handler, method);

    function metaHandler(type, data, impl) {
      if (type == 'load' &&
        impl.responseText.substr(0, 11) != "Status: 500")
      {
        try {
          var jsonStr = impl.getResponseHeader('X-JSON');
          data = dojo.json.evalJson(jsonStr);
        } catch(e) {
          data = null;
        }
        if (data) {
          api.beforeHandler(handler, method, data);
          handler(data);
          api.afterHandler(handler, method, data);
          return;
        }
        data = { message: "Error parsing JSON response" }
      }
      var win = window.open("","errorWindow","");
      var doc = win.document;
      if (data && data.message) {
        doc.write("<pre>" + data.message + "</pre><hr>");
      }
      doc.write(impl.responseText + "<hr>");
      var jsonStr = impl.getResponseHeader('X-JSON');
      if (jsonStr) doc.write(jsonStr + "<hr>");
      doc.close();
    } // metaHandler(type, obj, impl)

  }, // query(handler, method, qs)

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
  }, // squeryArgs

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
  } // squeryUpdate
}


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
    var qs = api.impl.squeryArgs('team', squery);
    api.impl.query(this._teamListShim(handler, squery),
      "api.team.list", qs);
  }, // list(handler)


  /**
   * Create a new build, fails if owner already has
   * a build of the same name (unless replace is true).
   * <build> must contain .access.owner and .access.viewer
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

} // api.team.*


api.toon = {
  /*
   * A toon is returned to a handler with:
   * toon.id // unique identifier
   * toon.access.owner // name of owning group, '~your_name' for personal
   * toon.access.viewer // view group, '~your_name' for personal, or
   *                    //   single '~' for public
   */

  /**
   * Gets a page of the list of visible characters.
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
   *   searched:, matched:, list: [toons],
   *   pages: { current:, count:, pageSize: } // current is 1 based
   * }
   */
  list: function(handler, squery) {
    var qs = api.impl.squeryArgs('toon', squery);
    api.impl.query(this._toonListShim(handler, squery),
      "api.toon.list", qs);
  }, // list(handler)


  /**
   * Create a new character, fails if owner already has
   * a character of the same name (unless replace is true).
   * <toon> must contain .access.owner and .access.viewer
   *
   * handler gets:
   * { result:, errors:, toon: }
   */
  create: function(handler, toon, replace/*=false*/) {
    var qs = [
      'toon[owner]=' + encodeURIComponent(toon.access.owner),
      'toon[viewer]=' + encodeURIComponent(toon.access.viewer),
      'toon[name]=' + encodeURIComponent(toon.name),
      'toon[packed]=' + encodeURIComponent(toon.toCode(/*skipName=*/true)),
      'toon[description]=' + encodeURIComponent(toon.desc)
    ];
    if (replace) qs.push('replace=1');
    qs = qs.join('&');
    api.impl.query(this._toonShim(handler), 'api.toon.create', qs);
  }, // create


  /**
   * Updates an existing toon, <toon> must contain .access.owner
   * received from a previous query.
   *
   * handler gets:
   * { result:, errors:, toon: }
   */
  update: function(handler, toon) {
    var qs = [
      'toon[owner]=' + encodeURIComponent(toon.access.owner),
      'toon[viewer]=' + encodeURIComponent(toon.access.viewer),
      'toon[name]=' + encodeURIComponent(toon.name),
      'toon[packed]=' + encodeURIComponent(toon.toCode(/*skipName=*/true)),
      'toon[description]=' + encodeURIComponent(toon.desc)
    ].join('&');
    api.impl.query(this._toonShim(handler), 'api.toon.update', qs);
  }, // update

  /**
   * Delete an existing toon, <toon> must contain .access.owner
   * received from a previous query
   *
   * handler gets:
   * { result, errors }
   * or if destroy succeeded and squery is not null
   * <result returned from api.toon.list(squery)>
   */
  destroy: function(handler, toon, squery) {
    var qs = [
      'toon[owner]=' + encodeURIComponent(toon.access.owner),
      'toon[name]=' + encodeURIComponent(toon.name)
    ];
    qs.push(api.impl.squeryArgs('toon', squery));
    api.impl.query(this._toonListShim(handler, squery),
      'api.toon.destroy', qs.join('&'));
  }, // destroy


  _unpackToon: function(rtoon) {
    var toon = Character.prototype.parse(rtoon.packed);
    toon.id = rtoon.id;
    toon.setName(rtoon.name);
    toon.desc = rtoon.desc;
    toon.access = rtoon.access;
    return toon;
  }, // _unpackToon

  _toonShim: function(handler) {
    return function(data) {
      if (data.toon) {
        data.toon = api.toon._unpackToon(data.toon);
      }
      return handler(data);
    }
  }, // _toonShim(handler)

  _toonListShim: function(handler, squery) {
    return function(data) {
      var list = data.list;
      if (list) {
        for (var i1 = 0; i1 < list.length; ++i1) {
          var toon = api.toon._unpackToon(list[i1]);
          list[i1] = toon;
        }
      }
      api.impl.squeryUpdate(squery, data);
      return handler(data);
    }
  } // _toonListShim

} // api.toon.*


api.misc = {
  download: function(filename, content, type/*='text/plain'*/) {
    var qs = [
      'filename=' + encodeURIComponent(filename),
      'content=' + encodeURIComponent(content),
      'type=' + encodeURIComponent(type || 'text/plain')
    ];
    var method = 'api.misc.download';
    var url = api.impl.urls[method] || method;
    var el = document.getElementById('hiddenIframe');
    el.src = url + '?' + qs.join('&');
  }
} // api.misc.*
