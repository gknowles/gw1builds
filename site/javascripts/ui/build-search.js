/*
Copyright Glen Knowles 2006 - 2024.
Distributed under the Boost Software License, Version 1.0.

build-search.js - gw1builds ui
*/

/////////////////////////////////////////////////
// BuildDimension
/////////////////////////////////////////////////
//===========================================================================
function BuildDimension(disabled, name, propName, minSize, maxSize) {
  this.init(disabled, name, propName, minSize, maxSize);
}
Object.assign(BuildDimension, SearchDimension);

//===========================================================================
BuildDimension.getValueArray = function() {
  var values = this.values;
  var vals = [];
  for (var v in values) {
    var value = values[v];
    var val = { text: value[0], value: v, key: value[0] }
    vals.push(val);
  }
  var cmp = this.compareValues;
  vals.sort(
    function(a,b) { return cmp(a.key, b.key); }
  );
  return vals;
}


/////////////////////////////////////////////////
// Build Dimension - Viewer
/////////////////////////////////////////////////
//===========================================================================
function BuildDimensionViewer(disabled) {
  this.init(disabled, 'Viewer', 'access.viewer');
}
Object.assign(BuildDimensionViewer, BuildDimension);


/////////////////////////////////////////////////
// Build Filter
/////////////////////////////////////////////////
//===========================================================================
function BuildSearchFilter(dims) {
  this.init(dims);
}
Object.assign(BuildSearchFilter.prototype, SearchFilter.prototype);

//===========================================================================
BuildSearchFilter.getKey = function(obj) {
  return (obj.id);
}


/////////////////////////////////////////////////
// Build Search
/////////////////////////////////////////////////
var g_buildSearch = new SearchQuery(new BuildSearchFilter);

//===========================================================================
function initBuildSearch() {
  var dims = [];
  dims.push(new BuildDimension(/*disabled=*/false, 'Team', 'isTeam', 2, 2));
  dims.push(new BuildDimension(/*disabled=*/false, 'PvE', 'isPve', 2, 2));
  dims.push(new BuildDimension(/*disabled=*/false, 'Type', 'type'));
  dims.push(new BuildDimension(/*disabled=*/false, 'Owner', 'access.owner'));
  var filter = new BuildSearchFilter(dims);
  var val = g_store.get(g_store.keys.BUILD_SEARCH_FILTER);
  if (val != null) {
    filter.importSelected(val);
  }
  filter.updValues({});
  g_buildSearch.filter = filter;
}

//===========================================================================
function editBuildSearch() {
  var filter = g_buildSearch.filter.clone();
  var dlgWgt = dijit.byId("dialog");

  g_currentSearch = new SearchWindow('Toon Search', dlgWgt, filter,
    {});
  g_currentSearch.filterChanged = function() {
    var data = g_buildSearch.filter.exportSelected();
    g_store.set(g_store.keys.BUILD_SEARCH_FILTER, data);
    g_buildSearch.filter = g_currentSearch.filter;
    g_buildSearch.resetPages();
    updRoot( {keys: g_buildSearch.changeKeys} );
  }
  g_currentSearch.show();
}
