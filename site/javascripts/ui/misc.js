/*
Copyright Glen Knowles 2006.
Distributed under the Boost Software License, Version 1.0.

misc.js - gw1builds ui

Common functions and variables
*/

var g_queryVals = parseQueryString(document.location.search);
var g_skillFavorites = new Array(24);
var g_user = null;
var g_initLevel = 0;

//============================================================================
function init() {
  g_initLevel += 1;
  if (g_initLevel < 2) return;
  if (false /* dojo.render.html.ie */) {
    dojo.html.insertCssFile("stylesheets/adjust-ie.css");
  }

  initAjax();
  initGroupList();

  api.user.current(handler);

  loadItems();
  loadSkills();
  indexSkills();
  initAttrGrid();
  DDItemGrid.init();
  initSkillbar();
  initSkillFavorites();
  DDSkillList.init();
  DDBuildList.init();
  initTeamRoster();

  function handler(data) {
    g_user = new User;
    g_user.id = data.user.id;
    g_user.name = data.user.name;
    g_user.role = data.user.role;
    groupListHandler(data);
    PaneSet.prototype.load('topmenu');
    updRootAll( {keys: {user: true} } );
    PaneSet.prototype.activate('topmenu', g_queryVals.tab);
  } // handler(data)
}

g_initLevel = 1;
window.addEventListener('load', init);


//============================================================================
function hasUpdateKey(upd, keys) {
  for (var k in keys) {
    if (upd.keys[k]) return true;
  }
  return false;
}

//============================================================================
function updRoot(upd) {
  PaneSet.prototype.update('topmenu', upd);
  window.focus();
}

//============================================================================
function updRootAll(upd) {
  PaneSet.prototype.updateAll('topmenu', upd);
  window.focus();
}

//============================================================================
function setFirstFocus(parentEl, select) {
  var focusEl = dojo.html.getElementsByClass('firstFocus', parentEl)[0];
  if (focusEl) {
    if (dojo.html.hasClass(focusEl, 'firstSelect')) select = true;
    dojo.lang.setTimeout(
      function() {
        focusEl.focus();
        if (select && focusEl.select) focusEl.select();
      },
      100);
  }
}

//============================================================================
function enterSubmits(el, event) {
  event = dojo.event.browser.fixEvent(event, el);
  var key = event.key || event.keyCode;
  if (key == event.KEY_ENTER) {
    var subEl = el.form['submit'];
    if (subEl) {
      dojo.lang.setTimeout(function() { subEl.click(); }, 1);
    }
    return false;
  }
  return true;
}


//============================================================================
//  Update the classes of an element with a set of adds and deletes
//
//  @param el    element with classes to be updated
//  @param adds  classes to add, can be a string or array of strings
//  @param dels  classes to delete, string or array of strings
function updateClasses(el, adds, dels) {
  var classArr = dojo.html.getClasses(el);
  var keys = {};
  var changed = false;
  for (var i1 = 0; i1 < classArr.length; ++i1) keys[classArr[i1]] = true;
  if (isArray(dels)) {
    for (var i1 = 0; i1 < dels.length; ++i1) {
      var del = dels[i1];
      if (keys[del]) {
        changed = true;
        delete keys[del];
      }
    }
  } else if (dels != null) {
    if (keys[dels]) {
      changed = true;
      delete keys[dels];
    }
  }
  if (changed) {
    var out = [];
    for (var i1 = 0; i1 < classArr.length; ++i1) {
      var val = classArr[i1];
      if (keys[val]) out.push(val);
    }
    classArr = out;
  }

  var olen = classArr.length;
  if (isArray(adds)) {
    for (var i1 = 0; i1 < adds.length; ++i1) {
      var val = adds[i1];
      if (!keys[val]) classArr.push(val);
    }
  } else if (adds != null) {
    if (!keys[adds]) classArr.push(adds);
  }
  changed |= (olen != classArr.length);

  if (changed) {
    dojo.html.setClass(el, classArr.join(' '));
  }
}

//============================================================================
//  <div insetTab>
//    <ul insetTab>
//      <li><a (this el)></a></li>
//    </ul>
//    <br style='clear: both'/>
//    <div insetTabPane>
//      blah
//    </div>
//  </div>
function insetTabSelect(el, pos) {
  el.blur();
  var ulEl = el.parentNode.parentNode;
  var topEl = ulEl.parentNode;
  var tabEls = ulEl.getElementsByTagName('a');
  var paneEls = dojo.html.getElementsByClass('insetTabPane', topEl, 'div');
  var paneEl;
  for (var i1 = 0; i1 < paneEls.length; ++i1) {
    if (pos == i1) {
      paneEl = paneEls[i1];
      dojo.html.show(paneEl);
      tabEls[i1].className = 'active';
    } else {
      dojo.html.hide(paneEls[i1]);
      tabEls[i1].className = '';
    }
  }
  setFirstFocus(paneEl);
}


/////////////////////////////////////////////////
// Ajax
/////////////////////////////////////////////////
//============================================================================
function initAjax() {
  api.beforeQuery = function(handler, method) {
    document.getElementById('header').classList.add('waiting');
  }
  api.beforeHandler = function(handler, method, obj) {
    document.getElementById('header').classList.remove('waiting');
    //alertObject(obj);
  }
  api.impl.init();
}

//============================================================================
function badResultAlert(data) {
  if (data.result != 'ok') {
    alert("REQUEST FAILED\n" + data.errors.join('\n'));
    return true;
  } else {
    return false;
  }
}


/////////////////////////////////////////////////
// Load elems
/////////////////////////////////////////////////
//============================================================================
function loadVarElems(baseEl) {
  var elems = {el: baseEl}
  var els = baseEl.getElementsByTagName('*');
  for (var i1 = 0; i1 < els.length; ++i1) {
    var vars = els[i1].className.match(/\bpvar-(\w+)/);
    if (vars == null) continue;
    elems[vars[1] + 'El'] = els[i1];
  }
  return elems;
} // loadVarElems


/////////////////////////////////////////////////
// Other weirdness
/////////////////////////////////////////////////
//============================================================================
function drawDownloadButton(fname, content) {
  var out = ["<a href='' class='smallButton sbDownload' onclick='",
      "api.misc.download(", jstring2(fname), ',', jstring2(content), ");",
      "return false;",
      "'>",
    "</a>"];
  return out.join('');
} // drawDownloadButton
