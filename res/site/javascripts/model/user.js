/*
Copyright Glen Knowles 2006 - 2024.
Distributed under the Boost Software License, Version 1.0.

user.js - gw1builds model

User/group definitions
*/

/////////////////////////////////////////////////
// User represents a user with associated name, role, etc
/////////////////////////////////////////////////

/////////////////////////////////////////////////
// Static Data
/////////////////////////////////////////////////
// Roles
User.prototype.GUEST = User.GUEST = 0;
User.prototype.MEMBER = User.MEMBER = 1;
User.prototype.EDITOR = User.EDITOR = 2;
User.prototype.ADMIN = User.ADMIN = 3;


/////////////////////////////////////////////////
// User
// In addition to name and role, a user may contain
// a groups[] array, representing the groups they're a
// member of. If present, each of these groups will
// have a groupRole property in addition to the normal
// Group stuff.
/////////////////////////////////////////////////
/**
 * User constructor
 */
function User(name, role, id) {
  this.id = id;
  this.name = name || '';
  this.role = (role == null) ? User.GUEST : role;
  this.groups = [];
}

/**
 * Check if user has role.
 *
 * hasRole() - is user a member of the system?
 * hasRole(role) - is user a member or admin of the system?
 * hasRole(role, groupName) - is user a member/admin/etc of the group?
 * hasRole(groupName) - is user a member of the group?
 * hasRole(groupName, role) - is user a member/admin/etc of the group?
 */
User.prototype.hasRole = function(a, b) {
  var minRole = this.MEMBER;
  var groupName = null;
  if (a) {
    if (typeof a == 'number') minRole = a;
    else groupName = a;
  }
  if (b) {
    if (typeof b == 'number') minRole = b;
    else groupName = b;
  }
  var real = this.groupRole ? this.groupRole : this.role;
  if (groupName) {
    if (groupName == '~') {
      // public group, everyone's a member
      real = User.MEMBER;
    } else if (groupName == '~' + this.name) {
      // this user's personal group
      real = User.ADMIN;
    } else {
      real = User.GUEST;
      for (var i1 = 0; i1 < this.groups.length; ++i1) {
        var group = this.groups[i1];
        if (groupName == group.name) {
          real = group.groupRole;
          break;
        }
      }
    }
  } // if groupName
  return real >= minRole;
} // User.hasRole(...)


User.prototype.sorts = new Object; // by name

User.prototype.sorts["Role"] = {
  key:"role",
  desc:"Admin to Invited",
  compare:function(a,b) {
    var rc = b.role - a.role; // reverse so high values come first
    if (rc) return rc;
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  },
  group:function(val) {
    return ['Invitees', 'Members', 'Editors', 'Administrators'][val.role];
  }
};
User.prototype.sorts["Name"] = {
  key:"name",
  desc:"Strict name order.",
  compare:function(a,b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  },
  group:function(val) { return null; }
};


/////////////////////////////////////////////////
// Group
// In addition to name and role, a user may contain
// a members[] array, representing the groups they're a
// member of. If present, each of these groups will
// have a groupRole property in addition to the normal
// Group stuff.
/////////////////////////////////////////////////
function Group(id, name) {
  this.id = id;
  this.name = name;
  // this.members = [];
}

Group.prototype.hasRole = function(minRole) {
  if (!this.groupRole) return false;
  return this.groupRole >= (minRole ? minRole : User.MEMBER);
} // Group.hasRole(minRole)

Group.prototype.sorts = new Object; // by name

Group.prototype.sorts["Role"] = {
  key:"role",
  desc:"Admin to Invited",
  compare:function(a,b) {
    var rc = b.groupRole - a.groupRole; // reversed for high to low
    if (rc) return rc;
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  },
  group:function(val) {
    return ['Invitees', 'Members', 'Editors', 'Administrators'][val.groupRole];
  }
};
Group.prototype.sorts["Name"] = {
  key:"name",
  desc:"Strict name order.",
  compare:function(a,b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  },
  group:function(val) { return null; }
};
