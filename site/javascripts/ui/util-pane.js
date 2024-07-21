
if (typeof dojo != 'undefined') { dojo.provide("ui.util-pane"); }

/////////////////////////////////////////////////
// tabs and tab panes
/////////////////////////////////////////////////
// PaneSet {
//   menuId: id of pane list, string must be unique, but visual element 
//     doesn't have to exist
//   menuEl: element containing selection tabs, may be null
//   defaultPaneTitle: title of initially selected pane
//   panes: array of panes
//   pane: selected pane
// }
//
// Pane {
//  title: tab title
//  caption: tab caption
//  id: id of div element to show/hide
//  divEl: (generated) - div element to show/hide
//  tabEl: (generated) - li element in list of controlling pane set
//  onload: called on page load
//  onprepare: called when tab selected, but before shown
//  onactive: called when tab selected, after made visible
//  onblur: called when tab deselected
//  onupdate(options): called when data has changed, options is hash of 
//    what changed
//  pos: pos in containing PaneSet
//
//  title: tab title
//  link_to: href for anchor
//
//  _loaded
//  _active
// }

var g_paneSets = {};

function PaneSet(menuId, defaultPaneTitle) {
  this.menuId = menuId;
  this.menuEl = document.getElementById(menuId);
  this.defaultPaneTitle = defaultPaneTitle;
  this.panes = [];
}

PaneSet.prototype.getPaneSet = function(menuId, autoCreate/*=false*/) {
  var paneSet = g_paneSets[menuId];
  if (paneSet == null) {
    if (autoCreate) {
      paneSet = g_paneSets[menuId] = new PaneSet(menuId);
    } else {
      throw new Error("PaneSet(" + menuId + ") not defined");
    }
  }
  return paneSet;  
} // PaneSet.prototype.getPaneSet(menuId)

PaneSet.prototype.addPane = function(menuId, pane) {
  var paneSet = this.getPaneSet(menuId, /*autoCreate=*/true);
  pane.pos = paneSet.panes.length;
  paneSet.panes.push(pane);
} // PaneSet.prototype.addPane(menuId, pane)


PaneSet.prototype.load = function(menuId) {
  var paneSet = this.getPaneSet(menuId);
  
  // set each pane el from id
  for (var i1 = 0; i1 < paneSet.panes.length; ++i1) {
    var pane = paneSet.panes[i1];
    pane.divEl = document.getElementById(pane.id);
    pane.tabId = paneSet.menuId + '.' + i1;
  }

  // build tabs  
  paneSet.drawTabs();
} // PaneSet.prototype.load(menuId, defaultPaneTitle)


/**
 * Selects pane by calling its onprepare function, setting it to visible, and
 * finally calling its onactive function. The tabs are also updated. The full 
 * cycle is: <current pane>.onblur, hide <current pane>, update tabs menu, 
 * <new pane>.onprepare, show <new pane>, <new pane>.onactive
 * 
 * @param menuId    id of PaneSet you're selecting a pane for
 * @param sel       (optional) 
 *   null       reactivate most recently activated
 *   number     ordinal of pane in the pane set
 *   string     title of pane in the pane set
 * @param appdata   (optional) passed through to child pane events
 */
PaneSet.prototype.activate = function(menuId, sel, appdata) {
  DDManager.hideTooltip();
  var paneSet = this.getPaneSet(menuId);
  var pos = null;
  if (sel == null) sel = paneSet.defaultPaneTitle;
  if (sel == null) {
    if (paneSet.pane) pos = paneSet.pane.pos;
  } else if (typeof sel == 'number') {
    pos = sel;
  } else if (typeof sel == 'string') {
    for (var i1 = 0; i1 < paneSet.panes.length; ++i1) {
      if (paneSet.panes[i1].title == sel) {
        pos = i1;
        break;
      }
    }
    if (pos == null) {
      alert("PaneSet.activate(" + menuId + "," + sel + "): title not found");
      return;
    }
  } else {
    alert("PaneSet.activate(" + sel + "): Unknown typeof");
    return;
  }
  // no pane found? get first local pane (not a link_to)
  if (pos == null) {
    for (var i1 = 0; i1 < paneSet.panes.length; ++i1) {
      var pane = paneSet.panes[i1];
      if (!pane.link_to) {
        pos = i1;
        break;
      }
    }
  }
  if (pos < 0 || pos >= paneSet.panes.length) {
    alert("PaneSet.activate(" + pos + "): Out of range");
    return;
  }
  if (paneSet.panes[pos].hidden) {
    alert("PaneSet.activate(" + pos + "): Selecting hidden pane");
    return;
  }
  for (var i1 = 0; i1 < paneSet.panes.length; ++i1) {
    var pane = paneSet.panes[i1];
    if (pane.tabEl && dojo.html.hasClass(pane.tabEl, "active")) {
      paneSet.prevPane = pane;
      if (pane.onblur() == false) return false;
      dojo.html.hide(pane.divEl);
      dojo.html.removeClass(pane.tabEl, "active");
      pane._active = false;
      // violently yank div from document so there's some 
      // determinism in firefox's reflow sequence
      //var parEl = pane.divEl.parentNode;
      //var tmpEl = document.createElement('div');
      //parEl.replaceChild(tmpEl, pane.divEl);
      //parEl.replaceChild(pane.divEl, tmpEl);
    }
  }
  paneSet.pane = paneSet.panes[pos];
  if (paneSet.pane.tabEl) {
    dojo.html.addClass(paneSet.pane.tabEl, "active");
    paneSet.pane.tabEl.blur();
  }
  if (!paneSet.pane._loaded) {
    paneSet.pane.onload();
    paneSet.pane._loaded = true;
  }
  DDManager.hideTooltip();
  paneSet.pane.onprepare(appdata);
  dojo.html.show(paneSet.pane.divEl);
  paneSet.pane._active = true;
  paneSet.pane.onactive();
  return true;
} // PaneSet.prototype.activate(menuId, pos, appdata)


PaneSet.prototype.findPaneById = function(menuId, id) {
  var paneSet = this.getPaneSet(menuId);
  for (var i1 = 0; i1 < paneSet.panes.length; ++i1) {
    if (paneSet.panes[i1].id == id) {
      return paneSet.panes[i1];
    }
  }
  return null;
} // PaneSet.prototype.findPaneById(menuId, id)


PaneSet.prototype.blur = function(menuId) {
  var paneSet = this.getPaneSet(menuId);
  var pane = paneSet.pane;
  if (pane.onblur() == false) return false;
  dojo.html.hide(pane.divEl);
  dojo.html.removeClass(pane.tabEl, "active");
  pane._active = false;
} // blur(menuId)

PaneSet.prototype.update = function(menuId, upd) {
  var paneSet = this.getPaneSet(menuId);
  var pane = paneSet.pane;
  if (pane) pane.onupdate(upd);
} // update(menuId, upd)

PaneSet.prototype.updateAll = function(menuId, upd) {
  var paneSet = this.getPaneSet(menuId);
  for (var i1 = 0; i1 < paneSet.panes.length; ++i1) {
    var pane = paneSet.panes[i1];
    //alert('updateAll: ' + pane.title);
    pane.onupdate(upd);
  }
  paneSet.drawTabs();
} // updateAll(menuId, upd)


/////////////////////////////////////////////////
// Pane
/////////////////////////////////////////////////
function Pane(hash) {
  for (var k in hash) {
    if (k.substr(0,2) != 'on' && this[k] != null) {
      alert("Overriding Pane." + k);
    }
    this[k] = hash[k];
  }
}
Pane.prototype.onload = function() {};
Pane.prototype.onprepare = function() {};
Pane.prototype.onactive = function() {};
Pane.prototype.onblur = function() {};
Pane.prototype.onupdate = function() {};

Pane.prototype.loadElems = function() {
  this.elems = new Object;
  var nodes = this.divEl.getElementsByTagName('DIV');
  for (var i1 = 0; i1 < nodes.length; ++i1) {
    var node = nodes[i1];
    if (node.nodeName != 'DIV') continue;
    var sects = node.className.split(' ');
    var section = null;
    for (var i2 = 0; i2 < sects.length; ++i2) {
      if (sects[i2].substr(0, 5) == 'pdiv-') {
        section = sects[i2].substr(5);
        break;
      }
    }
    if (section == null) continue;
    
    this.elems[section] = new Object;
    section = this.elems[section];
    section.el = node;
    var elems = node.getElementsByTagName('*');
    for (var i2 = 0; i2 < elems.length; ++i2) {
      var el = elems[i2];
      if (el.tagName == 'FORM') {
        section.formEl = el;
        continue;
      }
      if (el.tagName == 'DIV' && 
        /\berrorExplaination\b/.test(el.className)) 
      {
        section.errorsEl = el;
        continue;
      }
      var vars = el.className.match(/\bpvar-(\w+)/);
      if (vars == null) continue;
      section[vars[1] + 'El'] = el;
    }
  }
} // Pane.loadElems()

Pane.prototype.openDiv = function(name) {
  for (var n in this.elems) {
    if (n != name) dojo.html.hide(this.elems[n].el);
  }
  var elems = this.elems[name];
  dojo.html.show(elems.el);
  var el = elems.errorsEl;
  if (el) el.innerHTML = "";
  if (this._active) this.focusDiv(name);
} // Pane.openDiv(name)

Pane.prototype.focusDiv = function(name) {
  var el = this.elems[name].formEl;
  if (el) setFirstFocus(el);
} // Pane.focusDiv(name)

Pane.prototype.formatErrors = function(errors, desc) {
  var out = [];
  if (desc) {
    out.push("<h3>Errors prevented the ", desc, "</h3>");
  }
  out.push("<p>There were problems with the following fields:",
    "<ul>");
  for (var i1 = 0; i1 < errors.length; ++i1) {
    out.push("<li class='errorExplaination'>", errors[i1], "</li>");
  }
  out.push("</ul>");
  return out.join('');
} // Pane.formatErrors(errors, desc)


/////////////////////////////////////////////////
// internal
/////////////////////////////////////////////////
PaneSet.prototype.drawTabs = function() {
  // build tab list
  var html = "";
  for (var i1 = 0; i1 < this.panes.length; ++i1) {
    var pane = this.panes[i1];
    if (pane.hidden) {
      html += "<li style='display: none'>";
    } else {
      html += "<li>";
    }
    html += "<a id='" + pane.tabId + "' ";
    if (pane.caption) html += "title='" + pane.caption + "' ";
    if (pane.link_to) {
      html += "href='" + pane.link_to + "' ";
    } else {
      html += "href='javascript:void PaneSet.prototype.activate(\"" + 
        this.menuId + "\"," + i1 + ")' ";
    }
    html += ">" + pane.title + "</a></li>\n";
  }
  //alert(html);
  if (this.menuEl) {
    var el = this.menuEl;
    // This little hide/show dance is to force firefox to reflow
    // the menu, otherwise a 'float: right' menu may show dead space
    // if the menu has become narrower. It would self corrects on the 
    // next reflow, but that could be a while.
    el.style.display = 'none';
    el.innerHTML = html;
    dojo.lang.setTimeout(
      function() { el.style.display = ''; },
      1
    );
    // set each pane tabEl from id
    for (var i1 = 0; i1 < this.panes.length; ++i1) {
      var pane = this.panes[i1];
      pane.tabEl = dojo.byId(pane.tabId);
    }
    if (this.pane && this.pane.tabEl) {
      dojo.html.addClass(this.pane.tabEl, 'active');
    }
  }
} // drawTabs()
