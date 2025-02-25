/*
Copyright Glen Knowles 2006 - 2025.
Distributed under the Boost Software License, Version 1.0.

store.js - gw1builds model

Client side data storage
*/

/////////////////////////////////////////////////
// functions
/////////////////////////////////////////////////
function Store() {
}

Store.prototype.get = function(key) {
  return localStorage.getItem(key);
}

Store.prototype.set = function(key, val) {
  return localStorage.setItem(key, val, function(){});
}

Store.prototype.getKeys = function() {
    let keys = []
    for (let i = 0; i < localStorage.length; ++i) {
        let val = localStorage.key(i)
        if (val == null)
            break
        keys.push(val)
    }
    return keys
}

Store.prototype.remove = function(key) {
  localStorage.removeItem(key);
}

Store.prototype.clear = function(key) {
  localStorage.clear();
}


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
// Globals
/////////////////////////////////////////////////
var g_store = new Store();
