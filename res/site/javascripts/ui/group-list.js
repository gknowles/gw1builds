/*
Copyright Glen Knowles 2006 - 2025.
Distributed under the Boost Software License, Version 1.0.

group-list.js - gw1builds ui
*/

var SGroupList = {}
SGroupList.search = new SearchQuery(null, Group.prototype.sorts['Role']);
SGroupList.search.values = [];
SGroupList.search.values.acctRev = 0;
SGroupList.memberSearch = new SearchQuery(null, User.prototype.sorts['Role']);
SGroupList.memberSearch.values = [];
SGroupList.memberSearch.values.groupRev = 0;
SGroupList.elems = { group:{}, member:{} }

function initGroupList() {
  SGroupList.elems.group = loadVarElems(document.getElementById('groupList'));
  SGroupList.elems.member = loadVarElems(document.getElementById('memberList'));
} // initGroupList


function groupAccess(owner) {
  if (owner && owner.charAt(0) == '~') {
    return (owner == '~' + g_user.name) ? User.ADMIN : User.GUEST;
  }
  var group = SGroupList.search.filter.matches[owner];
  return group == null ? User.GUEST : group.groupRole;
} // groupAccess


function updGroupList() {
  if (!SGroupList.search.changed) return;
  SGroupList.search.changed = false;
  var elems = SGroupList.elems.group;
  var groups = SGroupList.search.sortedArray(SGroupList.search.values);
  var out = ["<table class='fill'>"];
  for (var i1 = 0; i1 < groups.length; ++i1) {
    var group = groups[i1];
    if (group.name) {
      out.push(drawGroupRow(group));
    } else {
      out.push("<tr class='sortGroup'><td colspan='3'>", group,
        "</td></tr>\n");
    }
  }
  out.push("</table>");
  elems.listEl.innerHTML = out.join('');
} // updGroupList

function updMemberList() {
  if (!SGroupList.memberSearch.changed) return;
  SGroupList.memberSearch.changed = false;
  var elems = SGroupList.elems.member;
  var groupName = SGroupList.memberSearch.values.groupName;

  var groups = SGroupList.search.values;
  for (var i1 = 0; i1 < groups.length; ++i1) {
    var group = groups[i1];
    if (group.name == groupName) break;
  }
  if (group.name != groupName) {
    alert("groupListAction: unknown group '" + groupName + "'");
    return;
  }

  elems.titleEl.innerHTML = groupName;
  if (group.groupRole == User.ADMIN) {
    elems.formEl.elements['user[name]'].value = "";
    showElem(elems.inputEl);
  } else {
    hideElem(elems.inputEl);
  }

  var members = SGroupList.memberSearch.sortedArray(
    SGroupList.memberSearch.values);
  var out = ["<table class='fill'>\n"];
  for (var i1 = 0; i1 < members.length; ++i1) {
    var member = members[i1];
    if (member.name) {
      out.push(drawMemberRow(group, member));
    } else {
      out.push("<tr class='sortGroup'><td colspan='3'>", member,
        "</td></tr>\n");
    }
  }
  out.push("</table>");
  elems.listEl.innerHTML = out.join('');

  var events = SGroupList.memberSearch.events;
  out = ["<table>"];
  for (var i1 = 0; i1 < events.length; ++i1) {
    var event = events[i1];
    out.push("<tr><td>", event.created_at.toISOString(),
      "</td><td>", event.event, "</td></tr>");
  }
  out.push("</table>");
  elems.historyEl.innerHTML = out.join('');
} // updMemberList

function drawGroupRow(group) {
  var out = ["<tr class='group'>",
    "<td><a href=\"javascript:executeGroupListAction('List', true, '",
      group.name, "')\">", group.name, "</a></td>",
    "<td style='text-align: center'>", group.numMembers, "</td>",
    drawGroupListRoleTd(group.groupRole),
    "</tr>\n"];
  return out.join('');
} // drawGroupRow

function drawMemberRow(group, member) {
  var out = "<tr class='member'>"
  out += "<td>" + member.name + "</td>";
  out += drawGroupListRoleTd(member.role);

  var actions = [];
  var isMe = (member.name == g_user.name);
  if (group.groupRole == User.ADMIN) {
    if (member.role > User.GUEST && User.ADMIN > member.role) {
      actions.push('Promote');
    }
    if (member.role > User.MEMBER) {
      actions.push('Demote');
    }
    if (!isMe) actions.push('Kick');
  }
  if (isMe) {
    if (member.role > User.GUEST) {
      actions.push('Leave');
    } else {
      actions.push('Accept');
      actions.push('Reject');
    }
  }

  out += "<td>";
  for (var i1 = 0; i1 < actions.length; ++i1) {
    out += "&nbsp;<a href=\"javascript:executeGroupListAction('" +
      actions[i1] + "',true," + jstring1(group.name) + "," +
      jstring1(member.name) + ")\">" + actions[i1] + "</a>";
  }

  out += "</td></tr>\n"
  return out;
} // drawMemberRow

function drawGroupListRoleTd(role) {
  var rt;
  if (role == User.GUEST) rt = ['invite','Invited'];
  else if (role == User.MEMBER) rt = ['member','Member'];
  else if (role == User.EDITOR) rt = ['editor','Editor'];
  else if (role == User.ADMIN) rt = ['admin','Admin'];
  else rt = ['','unknown('+role+')'];
  var out = "<td class='" + rt[0] + "'>" + rt[1] + "</td>";
  return out;
} // drawGroupListRoleTd


function clearGroupList() {
  SGroupList.search.changed = false;
  SGroupList.search.values = [];
  SGroupList.search.values.groupRev = 0;
  clearMemberList();
} // clearGroupList

function clearMemberList() {
  SGroupList.memberSearch.changed = false;
  SGroupList.memberSearch.values = [];
  SGroupList.memberSearch.values.groupRev = 0;
  var elems = SGroupList.elems.member;
  elems.titleEl.innerHTML = "(None)";
  hideElem(elems.inputEl);
  elems.listEl.innerHTML = "No group selected";
  elems.historyEl.innerHTML = 'No group selected';
} // clearMemberList


SGroupList.actions = {
  // title   action[0]        groups[1] members[2] errmsg[3]
  List:    ['list',           'load',   'load',    'list' ],

  Promote: ['promote_member', null,     'load',    'promotion' ],
  Demote:  ['demote_member',  'update', 'load',    'demotion' ],
  Leave:   ['leave',          'load',   'clear',   'departure' ],
  Kick:    ['kick_member',    'update', 'load',    'member kick' ],
  Accept:  ['join',           'update', 'load',    'acceptance' ],
  Reject:  ['leave',          'load',   'clear',   'rejection' ],

  Create:  ['create',         'load',   null,      'group creation' ],
  Invite:  ['invite_user',    null,     'load',    'invitation' ]
}


function executeGroupListAction(name, inclGroups, groupName, userName) {
  var action = SGroupList.actions[name];
  if (action == null) {
    alert("Unknown group list action '" + name + "'");
    return;
  }

  var args = [handler];
  args.push(inclGroups ? SGroupList.search.values.acctRev : null);
  if (groupName) {
    args.push(groupName);
    args.push(groupName == SGroupList.memberSearch.values.groupName ?
      SGroupList.memberSearch.values.groupRev : 0);
  }
  args.push(userName);

  api.group[action[0]].apply(api.group, args);

  function handler(data) {
    badResultAlert(data, action[3]);
    if (data.group) {
      groupListHandler(data);
      updGroupList();
    }
    if (data.result == 'ok' && action[2] == 'clear') {
      clearMemberList();
    } else if (data.member) {
      var list = data.member.list;
      SGroupList.memberSearch.events = data.member.events;
      SGroupList.memberSearch.values = list;
      SGroupList.memberSearch.values.groupName = data.member.groupName;
      SGroupList.memberSearch.values.groupRev = data.member.groupRev;
      SGroupList.memberSearch.filter.updValues(list);
      SGroupList.memberSearch.changed = true;
      updMemberList();
    }
  }
} // executeGroupListAction


function groupListHandler(data) {
  if (!data.group) return;
  var list = data.group.list;
  for (var i1 = list.length - 1; i1 >= 0; --i1) {
    if (list[i1].name.charAt(0) == '~') list.splice(i1, 1);
  }
  SGroupList.search.values = list;
  SGroupList.search.values.acctRev = data.group.acctRev;
  SGroupList.search.filter.updValues(list);
  SGroupList.search.changed = true;
} // groupListHandler
