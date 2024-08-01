/*
Copyright Glen Knowles 2006 - 2024.
Distributed under the Boost Software License, Version 1.0.

item-grid.js - gw1builds ui
*/

/**
 * DDItem - DragDrop policy that provides tooltip with... what exactly?
 * FIXME: Say what is DDItem for.
 */
var DDItem = DDPolicy;
DDItem.drawTooltip = function(obj) {
  // obj = { id:, slot:, uslot: side: }
  var part;
  if (obj.id == 0) {
    var toon = findAttrToon();
    part = toon.items[obj.slot];
  } else if (obj.uslot == 'base') {
    part = g_itemBases[obj.id];
  } else if (obj.uslot == 'color') {
    return null;
  } else {
    part = g_itemUpgrades[obj.id];
  }
  if (!part) return null;
  var desc = part.desc(obj.slot);
  if (!desc) return null;
  var title = desc.shift();
  desc = desc.join('<br>');
  desc = desc.replace(/\(/g,"<span class='linkedAttr'>(");
  desc = desc.replace(/\)/g,")</span>");
  var out = ["<span class='title'>", title, "</span>",
    "<div class='partDesc'>", desc, "</div>"];
  out = out.join('');
  return {side: (obj.side || 'l'), width: 'auto', body: out}
};

var DDItemGrid = {
  elems: {},
  islotActive: null,
  uslotActive: null,
  changeKeys: { headgearAttr: true, runes: true, items: true,
    primary: true, secondary: true }
}

//===========================================================================
DDItemGrid.init = function() {
  var el = document.getElementById('attrGrid');
  DDItem.elems = loadVarElems(el);
}

//===========================================================================
DDItemGrid.update = function(upd, compress) {
  var toon = upd.what || g_state.getMember();
  if (!toon) return;

  if (!hasUpdateKey(upd, DDItemGrid.changeKeys)) return;

  this.updToonBom(toon, compress);
  this.updItemBom(toon, compress);
  this.updPartList(toon, compress);
}

//===========================================================================
DDItemGrid.updToonBom = function(toon, compress) {
  // toon bom
  var out = ["<table cellspacing='0' border='2'>"];
  var num = Item.prototype.slots.length;
  var islotActive = DDItemGrid.islotActive || Item.prototype.slots[0];
  for (var i1 = 0; i1 < num; ++i1) {
    var islot = Item.prototype.slots[i1];
    var item = toon.items[islot];
    var title, className;
    if (item && item.base) {
      className = (islotActive == islot) ? 'active' : 'option';
      if (item.color == null) item.setColor(0);
      title = "<div class='color' style='background-color: " +
        item.color.name + "'></div>" +
        item.base.name;
    } else {
      className = (islotActive == islot) ? 'active' : 'none';
      title = '(' + Item.prototype.slotNames[islot] + ')';
    }
    var args = "(this, event, {id: 0, slot: " + jstring2(islot) + "})";
    out.push("<tr><td class='", className, "'",
      " onmouseover='DDItem.over", args, "'",
      " onmouseout='DDItem.out", args, "'",
      " onclick='DDItemGrid.chgActiveItem(", jstring2(islot), ")'",
      ">", title, "</td></tr>");
  }
  out.push("</table>");
  DDItem.elems.toonBomEl.innerHTML = out.join('');
}

//===========================================================================
DDItemGrid.chgActiveItem = function(islot) {
  DDItemGrid.islotActive = islot;
  var toon = findAttrToon();
  var upd = {items: true}
  updRoot( {keys: upd, what: toon} );
}

//===========================================================================
DDItemGrid.updItemBom = function(toon, compress) {
  var islotActive = DDItemGrid.islotActive || Item.prototype.slots[0];
  var uslotActive = DDItemGrid.uslotActive || 'item';
  var item = toon.items[islotActive];

  var uslots = ['base'];
  if (item && item.base) {
    uslots = item.base.getSlotArray();
  }
  for (var i1 = 0; i1 < uslots.length; ++i1) {
    if (uslots[i1] == uslotActive) break;
  }
  if (i1 == uslots.length) {
    DDItemGrid.uslotActive = uslotActive = uslots[0];
  }

  var out = ["<table cellspacing='0' border='2'>"];
  for (var i1 = 0; i1 < uslots.length; ++i1) {
    var uslot = uslots[i1];
    part = item ? item[uslot] : null;
    var className, title, tkey;
    if (part) {
      className = (uslotActive == uslot) ? 'active' : 'option';
      title = part.name;
//      if (uslot == 'color') {
//        title = "<div class='color' style='background-color: " +
//          part.name + "'></div>" + title;
//      }
    } else {
      className = (uslotActive == uslot) ? 'active' : 'none';
      if (uslot == 'base') {
        title = Item.prototype.slotNames[islotActive];
      } else if (uslot == 'color') {
        title = 'Color';
      } else {
        tkey = item.typeKeys[item.base.type];
        title = ItemUpgrade.prototype.slotNames[uslot][tkey];
      }
      title = '(' + title + ')';
    }
    out.push("<tr><td class='", className, "'");
    if (part) {
      var args = "(this, event, {id: " + part.id + "," +
        " slot: " + jstring2(islotActive) + "," +
        " uslot: " + jstring2(uslot) +
        "})";
      out.push(" onmouseover='DDItem.over", args, "'",
        " onmouseout='DDItem.out", args, "'");
    }
    out.push(" onclick='DDItemGrid.chgActiveUpgrade(", jstring2(uslot), ")'",
      "'>", title, "</td></tr>");
  }
  out.push("</table>");
  DDItem.elems.itemBomEl.innerHTML = out.join('');
}

//===========================================================================
DDItemGrid.chgActiveUpgrade = function(uslot) {
  DDItemGrid.uslotActive = uslot;
  var toon = findAttrToon();
  var upd = {items: true}
  updRoot( {keys: upd, what: toon} );
}

//===========================================================================
DDItemGrid.updPartList = function(toon, compress) {
  var islot = DDItemGrid.islotActive || Item.prototype.slots[0];
  var item = toon.items[islot];
  var uslot = item && DDItemGrid.uslotActive || 'base';
  var partActive, parts;
  switch (uslot) {
  case 'base':
    partActive = item ? item.base : null;
    parts = ItemBase.prototype.getArray(islot, toon.primary.abbrev,
      toon.secondary.abbrev);
    parts.unshift(null);
    break;
  case 'color':
    partActive = item.color;
    parts = Item.prototype.colorArray();
    break;
  default:
    partActive = item[uslot];
    parts = ItemUpgrade.prototype.getArray(uslot, toon.primary.abbrev,
      item.base.type);
    parts.unshift(null);
    break;
  }

  var out = ["<table cellspacing='0' border='2'>"];
  for (var i1 = 0; i1 < parts.length; ++i1) {
    var part = parts[i1];
    var className = (part == partActive) ? 'current' : 'option';
    var title = part ? part.name : ('None');
    var code = part ? part.id : 0;
    out.push("<tr><td class='", className, "'");
    if (part) {
      var args = "(this, event, {id: " + part.id + "," +
        " uslot: " + jstring2(uslot) + "," +
        " side: " + jstring2('r') +
        "})";
      out.push(" onmouseover='DDItem.over", args, "'",
        " onmouseout='DDItem.out", args, "'");
      if (uslot == 'color') {
        title = "<div class='color' style='background-color: " +
          part.name + "'></div>" + title;
      }
    }
    out.push(" onclick='DDItemGrid.chgPart(", code, ")'",
      "'>", title, "</td></tr>");
  }
  out.push("</table>");

  DDItem.elems.partListEl.innerHTML = out.join('');
}

//===========================================================================
DDItemGrid.chgPart = function(id) {
  var toon = findAttrToon();
  var islot = DDItemGrid.islotActive || Item.prototype.slots[0];
  var uslot = DDItemGrid.uslotActive || 'base';
  var part;
  switch (uslot) {
    case 'base': part = g_itemBases[id]; break;
    case 'color': part = Item.prototype.colors[id]; break;
    default: part = g_itemUpgrades[id]; break;
  }

  var upd = toon.setItem(part, islot, uslot);
  updRoot( {keys: upd, what: toon} );
}
