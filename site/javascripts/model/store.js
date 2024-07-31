/*
Copyright Glen Knowles 2006.
Distributed under the Boost Software License, Version 1.0.

store.js - gw1builds model

Client side data storage
*/

/////////////////////////////////////////////////
// Static Data
/////////////////////////////////////////////////
// storage keys
Store.prototype.keys = {
  BUILD_LIST_SORT: "buildListSort",
  BUILD_SEARCH_FILTER: "buildSearchFilter",
  CODE_INCLUDE_NAMES: 'codeIncludeNames',
  EXPORT_OPTIONS: 'exportOptions',
  SKILL_FAVORITES: 'skillFavorites',
  SKILL_LIST_SORT: 'skillListSort',
  SKILL_LIST_VIEW: 'skillListView',
  SKILL_SEARCH_PRO_FILTER: 'skillSearchProFilter',
  SKILL_SEARCH_FILTER: "skillSearchFilter",
  SKILLBAR_MODE: 'skillbarMode',
  TOON_AUTOADJUST: "toonAutoadjust",
  TOON_DETAIL_OPEN: 'toonDetailOpen'
}

/////////////////////////////////////////////////
// functions
/////////////////////////////////////////////////
function Store() {
}

Store.prototype.get = function(key) {
  return dojox.storage.get(key);
}

Store.prototype.set = function(key, val) {
  return dojox.storage.put(key, val, function(){});
}

Store.prototype.getKeys = function() {
  return dojox.storage.getKeys();
}

Store.prototype.remove = function(key) {
  dojox.storage.remove(key);
}

Store.prototype.clear = function(key) {
  dojox.storage.clear();
}


/////////////////////////////////////////////////
// Globals
/////////////////////////////////////////////////
var g_store = new Store();
