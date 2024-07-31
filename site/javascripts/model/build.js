/*
Copyright Glen Knowles 2006.
Distributed under the Boost Software License, Version 1.0.

build.js - gw1builds model

Build definition
*/

/////////////////////////////////////////////////
// Build
/////////////////////////////////////////////////
/**
 * Build constructor
 */
function Build(name, id, isTeam, isPve, type, desc, numSlots) {
  this.id = id;
  this.isTeam = isTeam == true;
  this.isPve = isPve == true;
  this.type = type || 'General';
  this.name = name || '';
  this.desc = desc || '';
  if (!this.isTeam) {
    SlotSet.call(this, 1, 'teamRoster');
    this.setSlot(0, new Character);
  } else {
    SlotSet.call(this, numSlots || 1, 'teamRoster');
  }
}
// These three statements mirror the way dojo.inherits works,
// but we're trying to keep model/*.js dependency free
Build.prototype = new SlotSet;
Build.prototype.constructor = Build;
Build.prototype.superclass = SlotSet.prototype;


/**
 * Set name. Automaticly converts it to a valid GW character
 * name if it isn't one.
 *
 * @param   name    new character name
 */
Build.prototype.setName = function(name) {
  this.name = name;
} // setName


/**
 * Get full name, including owner if present
 *
 * @return  full name
 */
Build.prototype.fullName = function() {
  var out = this.name;
  if (this.access && this.access.owner) {
    out = this.access.owner + '/' + out;
  }
  return out;
} // fullName()


/////////////////////////////////////////////////
// Build sorts
//
// A build sort is any object with:
//   - compare(Build,Build) method, returns -1,0, or 1
//   - title(s) method, returns category under which team falls
//   - desc property, description of what how it sorts
/////////////////////////////////////////////////
Build.prototype.sorts = new Object; // by name

Build.prototype.sorts["Name"] = {
  key:"name",
  desc:"Strict name order.",
  compare:function(a,b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  },
  group:function(s) { return null; }
};
Build.prototype.sorts["Owner"] = {
  key:"owner",
  desc:"Sort by owner.",
  compare:function(a,b) {
    var ao = a.access && a.access.owner ? a.access.owner : '';
    var bo = b.access && b.access.owner ? b.access.owner : '';
    if (ao < bo) return -1;
    if (ao > bo) return 1;
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  },
  group:function(s) { return null; }
};
Build.prototype.sorts["Category"] = {
  key:"cat",
  desc:"Sorted by category",
  compare:function(a,b) {
    // pve builds after pvp builds
    if (a.isPve != b.isPve) {
      return a.isPve ? 1 : -1;
    }
    if (a.type < b.type) return -1;
    if (a.type > b.type) return 1;
    if (a.isTeam != b.isTeam) {
      return a.isTeam ? -1 : 1;
    }
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  },
  group:function(s) { return null; }
};
