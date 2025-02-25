/*
Copyright Glen Knowles 2006 - 2024.
Distributed under the Boost Software License, Version 1.0.

search-window.js - gw1builds ui
*/

/////////////////////////////////////////////////
// Generic multidimensional search
/////////////////////////////////////////////////
if (typeof dojo != 'undefined') { dojo.provide("ui.search-window"); }

var g_currentSearch;

function SearchWindow(name, dlgWgt, filter, values) {
  this.name = name;
  this.dlgWgt = dlgWgt;
  this.winEl = dlgWgt.containerNode;
  this.filter = filter;
  this.values = values;
}

SearchWindow.prototype.getDimListElName = function(dimPos) {
  return 'l' + dimPos;
}
SearchWindow.prototype.getDimSelectElName = function(dimPos) {
  return 's' + dimPos;
}
SearchWindow.prototype.getDimClearElName = function(dimPos) {
  return 'c' + dimPos;
}
SearchWindow.prototype.getDimEnableElName = function(dimPos) {
  return 'e' + dimPos;
}

SearchWindow.prototype.getDimFromEl = function(el) {
  var pos = new Number(el.name.substr(1)).valueOf()
  return this.filter.dims[pos];
}

SearchWindow.prototype.draw = function() {
  var dims = this.filter.dims;
  var out = ["<form name='fDrill'>",
    "<table class='fill'>",
    "<tr><td style='width: 1%; vertical-align: top'>",
      "<table style='border: 1px solid' class='fill'>",
        "<tr><td class='head'>Search&nbsp;Fields</td></tr>"];
  for (var i1 = 0; i1 < dims.length; ++i1) {
    var dim = dims[i1];
    out.push("<tr><td><input name='", this.getDimEnableElName(i1), "'",
      " type='checkbox'", (!dim.disabled ? " checked" : ""), ">&nbsp;",
      dim.name, "</td></tr>");
  }
  out.push("<tr><td>",
    "<button type='button'",
      " onclick='g_currentSearch.applyDimensions()'>Apply</button>",
    "<button type='button'",
      " onclick='g_currentSearch.resetDimensions()'>Reset</button>",
    "</td></tr>");
  out.push("</table></td>");

  out.push("<td id='drilldownTd'>", this.drawDrilldown(), "</td>");

  out.push("</tr></table></form>");
  return out.join('');
} // SearchWindow.draw()


SearchWindow.prototype.drawDrilldown = function() {
  var cols = 3;
  var dims = this.filter.dims;
  var out = ["<div style='overflow: auto; max-height: 400px'>",
    "<table class='fill'>"];

  var pos = 0;
  for (var i1 = 0; i1 < dims.length; ++i1) {
    var dim = dims[i1];
    if (dim.disabled) continue;
    var listElName = this.getDimListElName(i1);
    var selectElName = this.getDimSelectElName(i1);
    var clearElName = this.getDimClearElName(i1);
    if (pos % cols == 0) out.push("<tr align='center'>");
    out.push("<td class='inset'><table style='text-align: center' class='fill'>",
      "<tr><td class='head'>", dim.name, "</td></tr>",
      "<tr><td><select name='", listElName, "' size='6' multiple",
        " ondblclick='g_currentSearch.drilldownSelect(this,event)'></select></td></tr>",
      "<tr><td><button name='", selectElName, "' type='button'",
          " onclick='g_currentSearch.drilldownSelect(this.form[\"", listElName,
            "\"],event)'>Select</button>",
        "<button name='", clearElName, "' type='button'",
          " onclick='g_currentSearch.drilldownClear(this.form[\"", listElName,
            "\"],event)'>Clear</button>",
        "</td></tr>",
      "</table></td>");
    if (pos % cols == cols - 1) out.push("</tr>");
    pos += 1;
  }
  if (pos % cols != 0) out.push("</tr>");

  out.push("</table></div>");
  out.push("<div style='width: 100%; text-align: center'>",
    "<button type='button' onclick='g_currentSearch.drilldownClearAll()'>Clear All</button>",
    "<button type='submit' style='width: 4em' onclick='g_currentSearch.drilldownOk(); return false'>Ok</button>",
    "<button type='button' onclick='g_currentSearch.drilldownCancel()'>Cancel</button>",
    "</div>");

  return out.join('');
} // SearchWindow.drawDrilldown()

SearchWindow.prototype.applyDimensions = function() {
  var fDrill = document.forms['fDrill'];
  var dims = this.filter.dims;

  for (var i1 = 0; i1 < dims.length; ++i1) {
    var dim = dims[i1];
    var el = fDrill[this.getDimEnableElName(i1)];
    dim.disabled = !el.checked;
    // disabled dimension? clear any selects it may have had
    if (dim.disabled) {
      dim.removeSelectedValues();
    }
  } // for each dimension

  document.getElementById('drilldownTd').innerHTML = this.drawDrilldown();
  this.updResults();
  this.updDrilldown();
} // applyDimensions()

SearchWindow.prototype.resetDimensions = function() {
  var fDrill = document.forms['fDrill'];
  var dims = this.filter.dims;

  for (var i1 = 0; i1 < dims.length; ++i1) {
    var dim = dims[i1];
    var el = fDrill[this.getDimEnableElName(i1)];
    el.checked = !dim.disabled;
  }
} // resetDimensions()

/**
 * Called when a change to the filter is committed, should be overridden
 * whenever a search window is used
 */
SearchWindow.prototype.filterChanged = function() {
} // filterChanged()

SearchWindow.prototype.drilldownSelect = function(el, event) {
  var dim = this.getDimFromEl(el);
  var selects = [];
  for (var i1 = 0; i1 < el.options.length; ++i1) {
    var opt = el.options[i1];
    if (opt.selected) {
      selects.push(opt.value);
    }
  }
  if (selects.length == 0) {
    alert("Nothing selected");
    return;
  }

  dim.removeSelectedValues();
  for (var i1 = 0; i1 < selects.length; ++i1) {
    dim.addSelectedValue(selects[i1]);
  }
  this.updResults();
  this.updDrilldown();
} // drilldownSelect(el, event)

SearchWindow.prototype.drilldownClear = function(el, event) {
  var dim = this.getDimFromEl(el);
  dim.removeSelectedValues();
  this.updResults();
  this.updDrilldown();
} // drilldownClear(el, event)

SearchWindow.prototype.drilldownClearAll = function() {
  for (var i1 = 0; i1 < this.filter.dims.length; ++i1) {
    this.filter.dims[i1].removeSelectedValues();
  }
  this.updResults();
  this.updDrilldown();
} // drilldownClearAll()

SearchWindow.prototype.drilldownOk = function() {
  this.dlgWgt.hide();
  this.filterChanged();
} // drilldownOk()

SearchWindow.prototype.drilldownCancel = function() {
  this.dlgWgt.hide();
} // drilldownCancel()

SearchWindow.prototype.updResults = function() {
  this.filter.updValues(this.values);
} // updResults()

SearchWindow.prototype.updDrilldown = function() {
  var matchEl = document.getElementById("searchMatches");
  matchEl.innerHTML = this.filter.matched + " of " +
    this.filter.searched;

  var dims = this.filter.dims;
  var fDrill = document.forms['fDrill'];

  for (var i1 = 0; i1 < dims.length; ++i1) {
    var dim = dims[i1];
    if (dim.disabled) continue;

    fDrill[this.getDimClearElName(i1)].disabled =
      (dim.selectedValues == null);

    var listElName = this.getDimListElName(i1);
    var values = dim.getValueArray();
    var el = fDrill[listElName];
    el.size = Math.max(dim.minSize, Math.min(values.length, dim.maxSize));
    el.options.length = 0;
    for (var i2 = 0; i2 < values.length; ++i2) {
      var val = values[i2];
      el.options[i2] = new Option(val.text, val.value);
    }
  }
} // SearchWindow.updDrilldown()

SearchWindow.prototype.show = function() {
//  this.winEl.style.width = '640px';
  var name = "<h2>" + this.name + " - " +
    "<span id='searchMatches' class='searchMatches'></span>" +
    "</h2>";
  showDialog(name, this.draw(), 'searchDialog');
  this.updDrilldown();
} // SearchWindow.show()
