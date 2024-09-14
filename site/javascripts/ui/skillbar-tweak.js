/*
Copyright Glen Knowles 2006 - 2024.
Distributed under the Boost Software License, Version 1.0.

skillbar-tweak.js - gw1builds ui
*/

var MAX_SKILL_SLOTS = 8;
var MAX_SKILL_ALTERNATES = 4;

/**
 * DDSkillSlot2 - DragDrop policy that implements:
 *  - tooltip with full skill description
 *  - drag source for skillbar objects
 *  - drop target for skill and skillbar objects
 */
var DDSkillSlot2 = Object.create(DDPolicy);
Object.assign(DDSkillSlot2, DDMixSlotDrop)
DDSkillSlot2.slotType = 'skill';
DDSkillSlot2.orientation = 'vertical';
DDSkillSlot2.maxSlots = MAX_SKILL_SLOTS;
DDSkillSlot2.maxAlts = MAX_SKILL_ALTERNATES;

DDSkillSlot2.viewMode = { basic: true };

DDSkillSlot2.updSlotSet = function(upd, obj, dragObj) {
  updRoot(upd);
  this._setHoverClass(obj);
}
DDSkillSlot2.mouseOver = function(obj, dragObj) {
  // obj = { id:<pos>, slotset:<Character> }
  if (dragObj) return;
  this._setHoverClass(obj);
};
DDSkillSlot2.mouseOut = function(obj, dragObj) {
  // obj = { id:<pos>, slotset:<Character> }
  if (dragObj) return;
  this._setHoverClass(obj, false);
};
DDSkillSlot2.rejectedDrop = function(obj, dragObj) {
  // obj = { id:<pos>, slotset:<Character> }
  if (dragObj.type.skill) {
    var toon = obj.slotset;
    var skill = dragObj.value;
    setTimeout(function() {
        alert(toon.primary.name + '/' + toon.secondary.name +
          " can't use [" + skill.name + "]");
      },
      1);
  }
};
DDSkillSlot2._setHoverClass = function(obj, highlight/*=true*/) {
  // obj = { id:<pos>, slotset:<Character> }
  var el = obj.srcEl;
  if (highlight == null) highlight = true;
  var slots = obj.slotset.slotRefs();
  var rows = el.parentNode.parentNode.rows; // tr^tbody^table/rows
  var numSlots = Math.min(slots.length, rows.length);
  var curSkill = slots[obj.id] ? slots[obj.id].value : null;
  var linkedAttr = curSkill ? curSkill.attr : null;
  if (linkedAttr == ATTR_NO_ATTRIBUTE) {
    // skills that aren't linked to an attr shouldn't be linked to
    // each other either
    linkedAttr = null;
  }
  for (var i1 = 0; i1 < numSlots; ++i1) {
    var tr = rows[i1];
    var td = tr.childNodes[0];
    var tdClass = dojo.html.getClass(td);
    hoverOutStyle(td, cssHover.skillbarLinkedFull);
    var css = null;
    if (tdClass == 'full') css = cssHover.skillbarLinkedFull;
    else if (tdClass == 'fullAlt') css = cssHover.skillbarLinkedFullAlt;

    if (i1 == obj.id) {
      if (highlight) {
        hoverOverStyle(td, css);
        if (this.viewMode.tweak) dojo.html.show(td.lastChild);
      } else {
        if (this.viewMode.tweak) dojo.html.hide(td.lastChild);
      }
    } else {
      var skill = slots[i1].value;
      var markLinked = highlight && skill && skill.attr == linkedAttr;
      if (markLinked) hoverOverStyle(td, css);
      if (this.viewMode.tweak) dojo.html.hide(td.lastChild);
    }
  }
}; // _setHoverClass(obj, highlight)

DDSkillSlot2.close = function(el, event, obj) {
  // obj = { id:<pos>, slotset:<Build> }
  var slot = obj.slotset.slotRefs()[obj.id];
  var upd;
  if (slot.value) {
    upd = obj.slotset.setSlot(slot.pos, slot.alt, null);
  } else {
    upd = obj.slotset[slot.alt == 0 ? 'deleteSlot' : 'deleteAlt'](
      slot.pos, slot.alt);
  }
  updRoot( {keys: upd, what: obj.slotset} );
} // close


/**
 * DDSlotSkill - DragDrop policy that provides tooltip
 * with full skill description
 */
var DDSlotSkill = Object.create(DDPolicy);
Object.assign(DDSlotSkill, DDMixSlotReverseDrop);

DDSlotSkill.updSlotSet = function(upd, obj, dragObj) {
  updRoot(upd);
}
DDSlotSkill.drawTooltip = function(obj) {
  // obj = { id:<pos>, slotset:<Character> }
  var skill = obj.slotset.slotRefs()[obj.id].value;
  if (!skill) return null;
  return drawSkill(skill, obj.slotset, {costs: true, desc: true});
};
DDSlotSkill.drawDrag = function(obj) {
  // obj = { id:<pos>, slotset:<Character> }
  var slot = obj.slotset.slotRefs()[obj.id];
  var body = drawSkill(slot.value, obj.slotset, {icon: true});
  obj.type = {slot: true};
  if (slot.value) {
    obj.type.skill = true;
    obj.value = slot.value;
  }
  obj.pos = slot.pos;
  obj.alt = slot.alt;
  return body;
};


/**
 * DDSlotAttr - DragDrop policy that provides tooltip
 * with full character attribute description
 */
var DDSlotAttr = Object.create(DDPolicy);
DDSlotAttr.drawTooltip = function(obj) {
  // obj = { id:<pos>, slotset:<Character> }
  var skill = obj.slotset.slotRefs()[obj.id].value;
  if (!skill) return null;
  var attr = g_attrs[skill.attr];
  return DDAttr.queryTooltip(attr, obj.slotset);
};


/////////////////////////////////////////////////
// Skillbar stuff, tweak style
/////////////////////////////////////////////////
function initSkillbar() {
  var el = document.getElementById('skillbar');
  el.innerHTML = drawSkillbar();
} // initSkillbar()


function drawSkillbar() {
  var out = "<table style='border: 0; width: 100%' cellspacing='0'" +
    " onselectstart='return false'>";

  for (var i1 = 0; i1 < MAX_SKILL_SLOTS + MAX_SKILL_ALTERNATES; ++i1) {
    var args = "(this,event,{id:" + i1 + ",slotset: g_state.getMember()})";
    out += "<tr class='skillslot'";
    if (i1 >= MAX_SKILL_SLOTS) out += " style='display: none'";
    out += "><td class='empty'" +
      " onMouseOver='DDSkillSlot2.over" + args + "'" +
      " onMouseOut='DDSkillSlot2.out" + args + "'" +
      " onMouseDown='DDSkillSlot2.down" + args + "'" +
      " onMouseUp='DDSkillSlot2.up" + args + "'" +
      ">";

    // row 0, [close button, skill name]
    out += "<div>" +
      "<a href='' style='float: right; display: none'" +
        " class='smallButton sbClose'" +
        " onclick='DDSkillSlot2.close" + args + "; return false'" +
      "></a>" +
      "<div class='drag'" +
      " onMouseOver='DDSlotSkill.over" + args + "'" +
      " onMouseOut='DDSlotSkill.out" + args + "'" +
      " onMouseDown='DDSlotSkill.down" + args + "'" +
      " onMouseUp='DDSlotSkill.up" + args + "'" +
      ">" + drawSkill(null,null,{}) +
      "</div>" +
      "</div>";

    // row 1, attr abbrev, effect names / values
    out += "<div style='display: none; text-align:left; clear:both'>" +
      "<span class='attr'" +
      " onMouseOver='DDSlotAttr.over" + args + "'" +
      " onMouseOut='DDSlotAttr.out" + args + "'" +
      ">n/a</span>" +
      "<span></span><br>" +
      "</div>";

    // row 2, attribute grid line
    out += "<div style='display: none; clear: both' class='attrGrid'>" +
      drawAttrValueSelect() + "</div>";

    out += "</td></tr>";
  }
  out += "</table>";
  return out;
} // drawSkillbar()


/**
 * Set to one of two modes
 *   basic
 *     row 1 - skill name / icons
 *   tweak
 *     row 1 - skill name / icons
 *     row 2 - linked attr / effect ranges
 *     row 3 - attr grid
 */
function setSkillbarMode(mode) {
  DDSkillSlot2.viewMode = mode;
  var el = document.getElementById('skillbar');
  var rows = el.firstChild.rows; // div/table/rows
  for (var i1 = 0; i1 < rows.length; ++i1) {
    var td = rows[i1].firstChild;
    var sdivs = td.childNodes; // tr[i1]/td/divs
    if (mode.basic) {
      sdivs[0].style.display = '';
      sdivs[1].style.display = 'none';
      sdivs[2].style.display = 'none';
      g_store.set(g_store.keys.SKILLBAR_MODE, 'basic');
    } else if (mode.tweak) {
      sdivs[0].style.display = '';
      sdivs[1].style.display = '';
      g_store.set(g_store.keys.SKILLBAR_MODE, 'tweak');
    }
  } // for each skill
} // setSkillbarMode(el, mode)


function updFullAltClass(el, isFull, isAlt) {
  var carr = ['empty', 'emptyAlt', 'full', 'fullAlt'];
  var idx = (isFull ? 2 : 0) + (isAlt ? 1 : 0);
  var add = carr[idx];
  carr.splice(idx, 1);
  updateClasses(el, add, carr);
} // updFullAltClass


updSkillbar.prototype.changeKeys = {
  skillArray: true,
  effectiveAttr: true,
  attrValueChoices: true
};
function updSkillbar(upd) {
  if (!hasUpdateKey(upd, updSkillbar.prototype.changeKeys)) return;
  var toon = upd.what || g_state.getMember();

  var el = document.getElementById('skillbar');
  var rows = el.firstChild.rows; // div/table/rows
  var slots = toon.slotRefs();
  var numSlots = Math.min(slots.length, rows.length);
  for (var i1 = 0; i1 < numSlots; ++i1) {
    var skill = slots[i1].value;
    var td = rows[i1].firstChild;
    var sdivs = td.childNodes; // tr[i1]/td/divs
    var isAlternate = slots[i1].alt != 0;
    updFullAltClass(td, skill != null, isAlternate);
    dojo.html.show(rows[i1]);

    if (skill == null) {
      // div 0, [close button, skill name]
      var btn = sdivs[0].childNodes[0];
      var div = sdivs[0].childNodes[1];
      div.innerHTML = drawSkill(skill, toon, {icon:true,costs:true}) +
        '&nbsp;Empty';
      dojo.html[isAlternate ? 'show' : 'hide'](btn);
      // row 1, attr abbrev, effect names / values
      div = sdivs[1];
      div.childNodes[0].innerHTML = '';
      div.childNodes[1].innerHTML = '';
      // row 2, attribute grid line
      div = sdivs[2];
      div.innerHTML = drawAttrValueSelect();
      continue;
    }

    // row 0, [close button, skill name]
    var btn = sdivs[0].childNodes[0];
    var div = sdivs[0].childNodes[1];
    div.innerHTML = drawSkill(skill, toon, {icon:true,costs:true});
    dojo.html.hide(btn);
    // row 1, attr abbrev, effect names / values
    div = sdivs[1];
    //div.childNodes[0].style.visibility = 'visible';
    if (skill.attr == ATTR_NO_ATTRIBUTE) {
      div.childNodes[0].innerHTML = '';
      div.childNodes[1].innerHTML = '';
    } else {
      div.childNodes[0].innerHTML = g_attrs[skill.attr].abbrev;
      var out = [];
      var attrVal = toon.effectiveAttr(skill.attr);
      var effects = skill.progressionArray(attrVal - 2, attrVal + 2);
      var fullEffects = skill.progressionArray(0, 19);
      // draw (-2 -1 0 1 2) range for each variable effect
      for (var i2 = 0; i2 < effects.length; ++i2) {
        out.push(drawSkillbarEffectRange(
          attrVal, effects[i2], fullEffects[i2])
        );
      } // for each effect
      // has failure chance? add range for it
      if (skill.failure) {
        out.push(drawSkillbarFailureRange(attrVal, skill.failure));
      } // if has failure
      div.childNodes[1].innerHTML = out.join('');
    } // if not No Attribute
    // row 2, attribute grid line
    div = sdivs[2];
    updAttrValueSelect(div, toon, skill.attr);
  } // for each skill

  // hide unused slots
  for (; i1 < rows.length; ++i1) {
    dojo.html.hide(rows[i1]);
  }
} // updSkillbar


function drawSkillbarEffectRange(attrVal, effect, fullEffect) {
  var out = [];
  var title = effect.title;

  var desc = ["<table class='effectRange'><tr class='linkedAttr'>"];
  for (var i1 = 0; i1 < fullEffect.length; ++i1) {
    desc.push("<td",
      (i1 == attrVal) ? " class='effectValue'>" : '>',
      i1,
      "</td>");
  }
  desc.push("</tr><tr class='effectValue'>");
  for (var i1 = 0; i1 < fullEffect.length; ++i1) {
    desc.push("<td",
      (i1 == attrVal) ? " class='effectValue'>" : '>',
      fullEffect[i1],
      "</td>");
  }
  desc.push("</tr></table>");
  desc = desc.join('');
  out.push("<span class='effectRange'",
    " onmouseover=\"DDPart.over(this,event,{",
      "name: ", jstring1(title), ", ",
      "desc: ", jstring1(desc),
      "})\"",
    " onmouseout='DDPart.out(this,event)'",
    ">");

  desc = [(effect[0] ? effect[0] : '*'),
    (effect[1] ? effect[1] : '*'),
    "<span class='effectValue'>" + effect[2] + "</span>",
    effect[3],
    effect[4]
    ].join(' ');
  out.push(desc, "</span>");
  return out.join('');
} // drawSkillbarEffectRange


function drawSkillbarFailureRange(attrVal, failure) {
  var out = '';
  var title = 'Failure';
  var desc = '50% at ' + failure + ' or less';
  if (attrVal <= failure) {
    title = "<span class='skillFailure'>" + title + "</span>";
  }
  out += "<span class='effectRange'" +
    " onmouseover=\"DDPart.over(this,event,{" +
      "name: " + jstring1(title) + "," +
      "desc: " + jstring1(desc) +
      "})\"" +
    " onmouseout='DDPart.out(this,event)'" +
    ">";

  if (attrVal <= failure) out += "<span class='skillFailure'>";
  out += "fail: ";
  var i3 = attrVal - 2;
  var lastVal = attrVal + 2;
  var lastFail = Math.min(lastVal, failure);
  // leading impossible values
  var desc = [];
  for (; i3 < 0; ++i3) desc.push('*')
  for (; i3 <= lastVal; ++i3) {
    var val = (i3 <= lastFail) ? 50 : 0;
    if (i3 == attrVal) {
      desc.push("<span class='effectValue'>" + val + "</span>");
    } else {
      desc.push(val);
    }
  }
  out += desc.join(' ');
  if (attrVal <= failure) out += "</span>";

  out += "</span>";
  return out;
} // drawSkillbarFailureRange
