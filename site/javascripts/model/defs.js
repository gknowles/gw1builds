// Guild Wars skill data objects

if (typeof dojo != 'undefined') { dojo.provide("model.defs"); }

function Zone(name, kind, region, map) {
  this.name = name;
  if (type = null) this.type = 'city';
  else this.type = type;
  this.region = region;
  this.map = map;
}
Zone.prototype.compare = function(right) {
  if (this.region != right.region) {
    if (this.region < right.region) return -1;
    return 1;
  }
  if (this.name < right.name) return -1;
  if (this.name == right.name) return 0;
  return 1;
}
Zone.prototype.compareName = function(left, right) {
  var lz = g_zones[left];
  var rz = g_zones[right];
  if (lz == null) {
    alert("Zone '" + left + "' is undefined");
    return -1;
  }
  if (rz == null) {
    alert("Zone '" + right + "' is undefined");
    return 1;
  }
  return lz.compare(rz);
}


function Trainer(name, zone, skills) {
  this.name = name;
  this.zone = zone;
  this.skills = skills; // hash
}
Trainer.prototype.compare = function(right) {
  var rc = Zone.prototype.compareName(this.zone, right.zone);
  if (rc != 0) return rc;
  if (this.name < right.name) return -1;
  if (this.name == right.name) return 0;
  return 1;
}


function Quest(name, zone, npc, skills, pro, prereq) {
  this.name = name;
  this.zone = zone;
  this.npc = npc;
  this.skills = skills; // hash
  this.pro = pro; // abbrev, null for all
  this.prereq = prereq;
}
Quest.prototype.compare = function(right) {
  var rc = Zone.prototype.compareName(this.zone, right.zone);
  if (rc != 0) return rc;
  if (this.name < right.name) return -1;
  if (this.name == right.name) return 0;
  return 1;
}


function Boss(name, zone, pro, species, quest, skills) {
  this.name = name;
  this.zone = zone;
  this.pro = pro;
  this.species = species;
  this.quest = quest;
  this.skills = skills; // hash
}
Boss.prototype.compare = function(right) {
  var rc = Zone.prototype.compareName(this.zone, right.zone);
  if (rc != 0) return rc;
  if (this.name < right.name) return -1;
  if (this.name == right.name) return 0;
  return 1;
}


var g_zones = new Object; // by name
var g_trainers = new Array;
var g_quests = new Array;
var g_bosses = new Array;

