/*
Copyright Glen Knowles 2006 - 2025.
Distributed under the Boost Software License, Version 1.0.

attr-grid.js - gw1builds ui
*/

/**
 * DDAttr - DragDrop policy that provides tooltip with full
 * character attribute description
 */
var DDAttr = DDPolicy;
DDAttr.drawTooltip = function(obj) {
  var attrName = obj.name;
  for (var a in g_attrs) {
    var attr = g_attrs[a];
    if (a == attrName || attr.abbrev == attrName) {
      return this.queryTooltip(attr, null);
    }
  } // for each attr in pro
  return null;
};
DDAttr.queryTooltip = function(attr, toon) {
  var pro = attr.pro ? g_pros[attr.pro].name : 'No Profession';
  var title = "<span class='partType' style='float: right'>" +
      "(" + pro +
      (attr.isPrimary ? ' Primary' : '') + ")</span>" +
    "<b>" + attr.name + "</b>";
  return "<span class='partName'>" + title + "</span><br>" +
    "<div class='partDesc'>" + attr.desc + "</div>";
}

//===========================================================================
function initAttrGrid() {
  var val = g_store.get(g_store.keys.TOON_AUTOADJUST);
  if (val != null) {
    var vals = val.split(',');
    Character.prototype.autoHeadgear = (vals[0] == 'true');
    Character.prototype.autoRunes = (vals[1] == 'true');
  }
  var el = document.getElementById('attrGrid');
  DDAttr.elems = loadVarElems(el);
  DDAttr.elems.gridEl.innerHTML = drawAttrGrid();
}

//===========================================================================
function drawAttrGrid() {
  var out = ["<table border=0 cellspacing=1 cellpadding=0>",
    "\n<tr>"];

  out.push("<td class='head' colspan='1'><input style='float: left'",
    " type='checkbox' name='pManualHeadgear'",
    " onclick='chgToonAutoHeadgear(!this.checked)'",
    " title='Lock headgear so it is not automatically adjusted'");
  if (!Character.prototype.autoHeadgear) out.push(' checked');
  out.push(">&nbsp;<span>Headgear</span></td>");

  out.push("<td class='head'><input style='float: right'",
    " type='checkbox' name='pManualRunes'",
    " onclick='chgToonAutoRunes(!this.checked)'",
    " title='Lock runes so they are not automatically adjusted'");
  if (!Character.prototype.autoRunes) out.push(' checked');
  out.push("><span>Rune</span></td>");

  out.push("<td class='head' colspan='17'><span class='attrTotal'>",
    "Points: <b>",
    "<input name='pAttrPoints' size='7' readonly value='0/0'>",
    "</b></span>",
    "Attribute Level</td></tr>\n");

  for (var i1 = 0; i1 < 9; ++i1) {
    out.push("\n<tr>",
      "<td onMouseOver=\"DDAttr.over(this, event, {name: 'WS'})\"",
        " onMouseOut='DDAttr.out(this, event)'");

    var chkattr = "<img class='checkmark' src='../../images/checkmark.png'>" +
      "<span class='attr'>Wilderness Survival</span>"; // widest attr

    // secondary prof attr - span 2 cols, no rune dropdown ftw.
    if (i1 > 4) {
      out.push(" class='attr' colspan='2'>", chkattr, "</td>");
    }
    // primary prof attr? two cells - name, rune
    else {
      // name
      out.push(" class='attr primary'",
        " onClick=''", // place holder
        ">", chkattr, "</td>");

      // rune
      out.push("<td class='rune'>", "<select name='pRune.", i1, "'",
        " onChange=''", // place holder
        ">");
      for (var r in Character.prototype.runeTypes) {
        var name = (r != 'None') ? r : '-';
        out.push("<option value='", r, "'>", name, "</option>");
      }
      out.push("</select></td>");
    }
    out.push("<td>", drawAttrValueSelect(), "</td>");
    out.push("</tr>\n");
  }
  out.push("</table>");
  out = out.join('');
  return out;
}

//===========================================================================
function drawAttrValueSelect() {
  var out = ["<table cellspacing='0' class='fill'><tr>"];
  //zomg loop for the level grid
  for (var lvl = 0; lvl < 17; ++lvl) {
    out.push("<td class='lvl bad'>", lvl, "</td>");
  }
  out.push("</tr></table>");
  return out.join('');
}

//===========================================================================
updAttrGrid.prototype.changeKeys = {
  headgearAttr: true,
  runes: true,
  effectiveAttr: true,
  attrValueChoices: true
};
function updAttrGrid(upd, compress) {
  var toon = upd.what || g_state.getMember();
  if (!toon) return;

  if (upd.keys.desc) {
    DDAttr.elems.descEl.value = toon.desc;
  }

  if (!hasUpdateKey(upd, updAttrGrid.prototype.changeKeys)) return;
  var el = DDAttr.elems.gridEl;
  var pattrs = toon.pattrArray();
  var tbl = el.firstChild;
  if (tbl == null || tbl.rows == null) return;
  var rows = tbl.rows;
  var pts = toon.attrPoints();

  // heading
  var row = rows[0];
  row.childNodes[0].firstChild.checked = !Character.prototype.autoHeadgear;
  row.childNodes[0].lastChild.innerHTML = compress ? '' : 'Headgear';
  row.childNodes[1].firstChild.checked = !Character.prototype.autoRunes;
  row.childNodes[1].lastChild.innerHTML = compress ? '' : 'Rune';
  g_store.set(g_store.keys.TOON_AUTOADJUST, [
    Character.prototype.autoHeadgear,
    Character.prototype.autoRunes].join());

  // attr rows
  var a1 = 0; // attribute index
  var r1 = 1; // row index
  for (; r1 < 10; ++r1) {
    var row = rows[r1];
    if (a1 == pattrs.length || r1 < 6 && !pattrs[a1].isPrimary) {
      row.style.display = 'none';
      continue;
    }
    row.style.display = '';

    var pattr = pattrs[a1];
    a1 += 1;
    //alert(r1 + ': ' + a1 + ' - ' + pattr.name);

    var td = row.childNodes[0];
    td.lastChild.innerHTML = compress ? pattr.abbrev : pattr.name;
    td.onmouseover = new Function('event',
      "DDAttr.over(this, event, {name: '" + pattr.name + "'})");
    // primary prof attr? two cells - name, runes
    if (pattr.isPrimary) {
      td.firstChild.style.visibility =
        pattr.headgear ? 'visible' : 'hidden';
      td.onclick = new Function('event',
        "chgToonHeadgear('" + pattr.name + "')");
      var sel = row.childNodes[1].firstChild;
      sel.onchange = new Function('event',
        "chgToonAttrRune('" + pattr.name + "'" +
          ", this.options[this.selectedIndex].value)");
      for (var i1 = 0; i1 < sel.options.length; ++i1) {
        var val = sel.options[i1].value;
        if (val == 'None') {
          sel.options[i1].title = 'No Rune';
        } else {
          sel.options[i1].title = toon.primary.name + ' Rune of ' +
            val + ' ' + pattr.name;
        }
        if (compress) {
          val = Character.prototype.runeTypes[val][0];
          val = ['-','mi','Ma','Su'][val];
        } else {
          val = (val == 'None') ? '-' : val;
        }
        sel.options[i1].innerHTML = val;
      }
      sel.value = pattr.rune;

      updAttrValueSelect(row.childNodes[2], toon, pattr.name);
    }
    // secondary prof attr. one (2 cols wide) cell - name
    else {
      row.childNodes[0].firstChild.style.visibility = 'hidden';
      updAttrValueSelect(row.childNodes[1], toon, pattr.name);
    }
  } // for each attribute row
}

//===========================================================================
function updAttrValueSelect(el, toon, attrName) {
  var row = el.firstChild.rows[0]; // zeroth node is <script>
  var pts = toon.attrPoints();

  var choices = toon.attrValueChoices(attrName);
  var pattr = toon.validAttr(attrName) ? toon.pattr(attrName) : null;
  var cattr = pattr ? choices[pattr.value] : null;
  for (var val = 0; val < choices.length; ++val) {
    var node = row.childNodes[val];
    // invalid pattr value? use 'is bad' style
    if (choices[val] == null) {
      node.title = '';
      node.className = 'lvl bad';
      node.style.backgroundImage = '';
      node.style.backgroundColor = '';
      node.onclick = '';
    }
    // current pattr value? simple tip and 'active' style
    else if (pattr.value == val) {
      if (pattr.rawValue() == pattr.value) {
        node.title = 'Your rank in this attribute is ' + val + '.';
      } else {
        node.title = 'Your rank in this attribute is normally ' +
          pattr.rawValue() + ', but is currently modified to ' + val + '.';
      }
      node.className = 'lvl current';
      node.style.backgroundImage = '';
      node.style.backgroundColor = '';
      node.onclick = '';
    }
    // valid alternate pattr value.
    //   what would be changed tip
    //   health change background image
    else {
      var title;
      if (pattr.value > val) {
        title = 'Decreasing ';
      } else {
        title = 'Increasing ';
      }
      title += 'from ' +
        pattr.value + ' to ' + val + ' would cause ';
      var results = [];
      var dif = // reversed because they are points used and we show avail
        cattr.attrPts - choices[val].attrPts;
      if (dif > 0) results.push('+' + dif + ' attribute points');
      if (dif < 0) results.push(dif + ' attribute points');
      dif = choices[val].runes - cattr.runes;
      if (dif > 0) results.push('+' + dif + ' runes');
      if (dif < 0) results.push(dif + ' runes');
      dif = choices[val].health - cattr.health;
      if (dif > 0) results.push('+' + dif + ' health');
      if (dif < 0) results.push(dif + ' health');
      title += results.join(', ') + '.';
      node.title = title;
      node.className = 'lvl good';
      node.onclick = new Function("event",
        "chgToonAttrValue('" + pattr.name + "'," + val + ")");

      // dif is change in health, set scaled background image
      var odif = dif;
      if (dif == 0) {
        node.style.backgroundImage = '';
      } else if (dif < 0) {
        node.style.backgroundImage = "url(images/attr-grid-health-loss.png)";
        if (dif <= -75) {
          if (dif < -150) dif = -150;
          dif = Math.round(48 * dif / 150);
        } else {
          dif = -Math.round(1.96 * Math.sqrt(2 * -dif));
          if (dif > -8) dif = -8;
        }
      } else { // dif > 0
        node.style.backgroundImage = "url('images/attr-grid-health-gain.png')";
        if (dif >= 75) {
          if (dif > 150) dif = 150;
          dif = Math.round(48 * dif / 150);
        } else {
          dif = Math.round(1.96 * Math.sqrt(2 * dif));
          if (dif < 8) dif = 8;
        }
        dif = dif + 24;
      }
      dif -= 2; // adjust for padding and border
      node.style.backgroundPosition = '0px ' + dif + 'px';

      //continue;
      node.style.backgroundImage = '';
      dif = odif;
      if (dif == 0) {
        node.style.backgroundColor = '';
        continue;
      }
      var rgb = [255, 255, 255];
      var rgb2 = rgb;
      var delta = 0;
      if (dif < 0) {
        delta = (dif < -150) ? 1 : (-dif / 150);
        var rgb2 = [255, 80, 80];
      } else {
        delta = (dif > 150) ? 1 : (dif / 150);
        var rgb2 = [32, 160, 240];
      }
      if (delta < 0.1) delta = 0.1;
      var r = Math.round(rgb[0] + delta * (rgb2[0] - rgb[0]));
      var g = Math.round(rgb[1] + delta * (rgb2[1] - rgb[1]));
      var b = Math.round(rgb[2] + delta * (rgb2[2] - rgb[2]));
      node.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    }
  } // for each pattr value
} // updAttrValueSelect(el, toon, attrName)

