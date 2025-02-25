/*
Copyright Glen Knowles 2006 - 2024.
Distributed under the Boost Software License, Version 1.0.

state.js - gw1builds model

State data objects
*/

/////////////////////////////////////////////////
// State - holds information about a specific object being edited
//
// Structors
//   State()
//
// Commands
//   setMember(toon) - toon must be a member of the build
//   setBuild(bld)
//   updBaseline()
//
// Queries
//   getBuild() - returns the build
//   getMember()
//   getTeam() - returns the build or null if its a standalone
//   isChanged() - compare current value with baseline
//   teamPos(toon) - position in team slotRefs array
//
// Static Data
//   dataTypes
/////////////////////////////////////////////////

/////////////////////////////////////////////////
// Static Data
/////////////////////////////////////////////////
// types that can be stored/operated on
State.prototype.dataTypes = { EMPTY: 0, TOON: 1, TEAM: 2, TEAM_MEMBER: 3 }

/////////////////////////////////////////////////
// Structors
/////////////////////////////////////////////////
function State() {
  this.member = null;
  this.build = null;
  this.baseline = {};
}

/////////////////////////////////////////////////
// Commands
/////////////////////////////////////////////////
State.prototype.setMember = function(toon) {
  if (toon == null) {
    this.member = null;
    return;
  }
  if (!(toon instanceof Character)) {
    alert('setToon: not a Character');
    return;
  }
  if (this.build == null) {
    alert('setToon: no build to hold Character')
    return;
  } else {
    var slots = this.build.slotRefs();
    for (var i1 = 0; i1 < slots.length; ++i1) {
      if (toon == slots[i1].value) {
        toon.teamPos = i1;
        this.member = toon;
        return;
      }
    }
    alert('setToon: toon is not a member of current team');
  }
} // setMember


State.prototype.setBuild = function(bld) {
  if (bld && !(bld instanceof Build)) {
    alert('setBuild: not a Build');
    return;
  }
  this.build = bld;
  this.member = null;
  if (bld) {
    var slots = bld.slotRefs();
    for (var i1 = 0; i1 < slots.length; ++i1) {
      var toon = slots[i1].value;
      if (toon == null) continue;
      toon.teamPos = i1;
    }
    if (!bld.isTeam) {
      this.member = bld.slotValue(0);
    }
  }
} // setBuild


State.prototype.updBaseline = function() {
  this.baseline.build = {
    desc: String(this.build.desc),
    isTeam: this.build.isTeam,
    isPve: this.build.isPve,
    type: this.build.type,
    toons: []
  }
  var toons = this.build.slotRefs(false);
  for (var i1 = 0; i1 < toons.length; ++i1) {
    var toon = toons[i1].value;
    this.baseline.build.toons.push({
      pos: toons[i1].pos,
      alt: toons[i1].alt,
      packed: toon.toCode(),
      desc: String(toon.desc)
    });
  }
} // updBaseline


/////////////////////////////////////////////////
// Queries
/////////////////////////////////////////////////
State.prototype.getBuild = function() {
  return this.build;
}
State.prototype.getMember = function() {
  return this.member;
}
State.prototype.getTeam = function() {
  return this.build && this.build.isTeam ? this.build : null;
} // Data.getTeam
State.prototype.isChanged = function() {
  var toons = this.build.slotRefs(false);
  var b = this.baseline.build;
  if (String(this.build.desc) != b.desc ||
    this.build.isTeam != b.isTeam ||
    this.build.isPve != b.isPve ||
    this.build.type != b.type ||
    toons.length != b.toons.length)
  {
    return true;
  }
  for (var i1 = 0; i1 < toons.length; ++i1) {
    var toon = toons[i1].value;
    var btoon = b.toons[i1];
    if (toons[i1].pos != btoon.pos ||
      toons[i1].alt != btoon.alt ||
      toon.toCode() != btoon.packed ||
      String(toon.desc) != btoon.desc)
    {
      return true;
    }
  }
  return false;
} // isChanged

State.prototype.teamPos = function(toon) {
  var slots = this.build.slotRefs();
  for (var i1 = 0; i1 < slots.length; ++i1) {
    if (toon == slots[i1].value) return i1;
  }
  return null;
} // teamPos
