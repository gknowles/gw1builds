/*
Copyright Glen Knowles 2006.
Distributed under the Boost Software License, Version 1.0.

build-info.js - gw1builds ui

Build info functions
*/

function updBuildInfo(upd, formEl) {
  // not a valid upd? exit
  if (upd == null || formEl == null) return;

  var keys = upd.keys;

  var el;
  function field(name) {
    var fld = String(name);
    el = formEl[fld];
    return el;
  }

  var bld = g_state.getBuild();
  if (field('bPve')) {
    el.checked = bld.isPve;
  }
  if (field('bType')) {
    var choices = bld.isPve ?
      ['General', 'Farming', 'Running', 'Hero'] :
      ['General', 'AB', 'CM', 'GvG', 'HA', 'HB', 'RA', 'TA'];
    setSelectValue(el, bld.type, choices);
  }

} // updBuildInfo


function chgBuildPve(val) {
  val = (val == true);
  var bld = g_state.getBuild();
  if (bld.isPve != val) {
    bld.isPve = val;
    bld.type = 'General';
  }
  updRoot( {keys: {build: true, skillFilter: true, skillSearch: true} } );
}
function chgBuildType(val) {
  g_state.getBuild().type = String(val);
  updRoot( {keys: {build: true} } );
}
