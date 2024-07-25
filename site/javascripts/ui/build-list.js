/*
Copyright Glen Knowles 2006.
Distributed under the Boost Software License, Version 1.0.

build-list.js - gw1builds ui
*/

/**
 * DDBuildList - DragDrop policy that provides
 * - tooltip with skillbar of the toon
 * - delegated click function
 */
var DDBuildList = DDPolicy;
Object.assign(DDBuildList, DDMixPartList)
Object.assign(DDBuildList, {
  ddPolicyName: 'DDBuildList',
  elemId: 'buildList',
  partType: 'build',
  storeKeys: {
    filter: g_store.keys.BUILD_SEARCH_FILTER,
    sort: g_store.keys.BUILD_LIST_SORT
  },
  squery: g_buildSearch,
  sorts: Build.prototype.sorts
} );
DDBuildList.drawTooltipBody = function(bld, obj) {
  // obj = { id:<toonId> }
  return bld.isTeam ?
    drawTeam(bld, {toons: true} ) :
    drawToon(bld.slotValue(0), {pro: true, skills: true});
} // drawTooltip
DDBuildList.drawDragBody = function(bld, obj) {
  // obj = { id:<toonId> }
  if (bld.isTeam) return null;
  var toon = bld.slotValue(0);
  obj.type = {toon: true}
  obj.value = toon.clone();
  return drawToon(obj.value, {pro: true} );
}; // drawDragBody
DDBuildList.drawPartDetail = function(bld) {
  out = [];
  if (!this.opts.noteam) {
    out.push(
      "<div class='buildPve'>", bld.isPve ? 'PvE' : '&nbsp;', "</div>",
      "<div class='buildCat'>", bld.type, "</div>",
      "<div class='buildTeam'>", bld.isTeam ? 'Team' : '&nbsp;', "</div>"
    );
  } else if (bld.isTeam) {
    return null;
  }
  out.push(bld.isTeam ?
    drawTeam(bld, {} ) :
    drawToon(bld.slotValue(0), {pro: true} )
  );
  return out.join('');
} // drawPartDetail


DDBuildList.init = function() {
  initBuildSearch();
  this.initPartList();

  // filter dropdown
  var dim = this.squery.filter.dimsByName['Viewer'];
  var key = 'all';
  if (dim) {
    var arr = dim.getValueArray();
    if (arr.length) key = arr[0].value;
  }
  var filterEl = this.elems.filterEl;
  setSelectValue(filterEl, key, [
    ['assoc', 'My Groups'], ['all', 'All'] ] );
  this.squery.filter.importSelected(getSelectValue(filterEl));
} // init


DDBuildList.chgFilterKey = function(key) {
  var val = "Viewer=" + key;
  this.squery.filter.importSelected(val);
  this.chgFilter();
} // chgFilterKey
