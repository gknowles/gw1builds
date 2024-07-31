/*
Copyright Glen Knowles 2006.
Distributed under the Boost Software License, Version 1.0.

api-rails.js - gw1builds ui
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
 *   api.user.login
 *   api.user.signup
 *   api.user.logout
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
  }, // init

  query: function(handler, method, qs) {
    api.beforeQuery(handler, method);
    var url = this.urls[method] || method;
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
          var jsonStr = impl.responseText;
          data = dojo.json.evalJson(jsonStr.slice(3, jsonStr.length - 3));
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
    api.impl.query(api.group._listShim(handler),
      'api.user.current', '');
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

 /**
  * Logout
  *
  * handler gets:
  * { result: 'ok', user: { role: GUEST } }
  */
  logout: function(handler) {
    api.impl.query(handler, 'api.user.logout', '');
  } // logout

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
          var raw = dojo.date.fromIso8601(events[i1].created_at);
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
   * Gets a page of the list of visible teams.
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
   * Create a new team, fails if owner already has
   * a team of the same name (unless replace is true).
   * <team> must contain .access.owner and .access.viewer
   *
   * handler gets:
   * { result:, errors:, team: }
   */
  create: function(handler, team, replace/*=false*/) {
    var qs = this._encodeBuild(team);
    if (replace) qs += '&replace=1';
    api.impl.query(this._buildShim(handler), 'api.build.create', qs);
  }, // create


  /**
   * Updates an existing team, <team> must contain .access.owner
   * received from a previous query.
   *
   * handler gets:
   * { result:, errors:, team: }
   */
  update: function(handler, team) {
    var qs = this._encodeBuild(team);
    api.impl.query(this._buildShim(handler), 'api.build.update', qs);
  }, // update

  /**
   * Delete an existing team, <team> must contain .access.owner
   * received from a previous query
   *
   * handler gets:
   * { result, errors }
   * or if destroy succeeded and squery is not null
   * <result returned from api.build.list(squery)>
   */
  destroy: function(handler, team, squery) {
    var qs = [
      'build[owner]=' + encodeURIComponent(team.access.owner),
      'build[name]=' + encodeURIComponent(team.name)
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
      if (data.team) {
        data.team = api.build._unpackBuild(data.team);
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
