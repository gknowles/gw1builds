/*
Copyright Glen Knowles 2006 - 2024.
Distributed under the Boost Software License, Version 1.0.

team-roster.js - gw1builds ui
*/

var MAX_TEAM_SLOTS = 12;
var MAX_TEAM_ALTERNATES = 4;

/**
 * DDTeamSlot - DragDrop policy that implements:
 *  - drop target for toon and member slot objects
 */
var DDTeamSlot = Object.create(DDPolicy);
Object.assign(DDTeamSlot, DDMixSlotDrop);
DDTeamSlot.slotType = 'toon';
DDTeamSlot.orientation = 'vertical';
DDTeamSlot.maxSlots = MAX_TEAM_SLOTS;
DDTeamSlot.maxAlts = MAX_TEAM_ALTERNATES;

DDTeamSlot.updSlotSet = function(upd, obj, dragObj) {
  updRoot(upd);
}

/**
 * DDTeamSlotMember - DragDrop policy that provides
 * - drag source for toon and member slot
 */
var DDTeamSlotMember = Object.create(DDPolicy);
Object.assign(DDTeamSlotMember, DDMixSlotReverseDrop);
DDTeamSlotMember.slotType = 'toon';

DDTeamSlotMember.drawDrag = function(obj) {
  // obj = { id:<pos>, slotset:<Character> }
  var slot = obj.slotset.slotRefs()[obj.id];
  var body = drawToon(slot.value, {pro: true});
  obj.type = {slot: true};
  if (slot.value) {
    obj.type.toon = true;
    obj.value = slot.value;
  }
  obj.pos = slot.pos;
  obj.alt = slot.alt;
  return body;
} // DDTeamSlotMember.drawDrag

/**
 * DDTeamSlotGrid - DragDrop policy that provides:
 *  - tooltip with full character attribute description
 *  - show/hide of attrgrid
 */
var DDTeamSlotGrid = { lastToggleEl: null, lastToon: null };
Object.assign(DDTeamSlotGrid, DDToonAttrs);

DDTeamSlotGrid.drawTooltip = function(obj) {
  // obj = { id:<pos>, slotset:<Build> }
  obj.toon = obj.slotset.slotRefs()[obj.id].value;
  return DDToonAttrs.drawTooltip(obj);
} // drawTooltip
DDTeamSlotGrid.click = function(el, event, obj) {
  // obj = { id:<pos>, slotset:<Build> }
  var gridEl = document.getElementById('attrGrid');
  if (this.lastToggleEl) {
    var hide = (el == this.lastToggleEl);
    document.getElementById('hidden').appendChild(gridEl);
    this.lastToggleEl.src = '../../images/toggle-closed.png';
    this.lastToggleEl = null;
    this.lastToon = null;
    if (hide) return;
  }
  var parentEl = dojo.html.getParentByType(el, 'tr');
  parentEl = dojo.html.getParentByType(parentEl, 'td');
  el.src = '../../images/toggle-open.png';
  var toon = obj.slotset.slotRefs()[obj.id].value;
  this.lastToggleEl = el;
  this.lastToon = toon;
  updAttrGrid( {keys: toon.changeKeys, what: toon}, /*compress=*/true);
  DDItemGrid.update( {keys: toon.changeKeys, what: toon}, /*compress=*/true);
  parentEl.appendChild(gridEl);
} // DDTeamSlotGrid.click
DDTeamSlotGrid.reattachGrid = function() {
  var gridEl = document.getElementById('attrGrid');
  var el = this.lastToggleEl;
  if (!el) {
    document.getElementById('hidden').appendChild(gridEl);
    return;
  }
  var parentEl = dojo.html.getParentByType(el, 'tr');
  parentEl = dojo.html.getParentByType(parentEl, 'td');
  parentEl.appendChild(gridEl);
}


function teamMemberAdd() {
  var team = g_state.getTeam();
  var num = team.slots().length;
  if (num >= MAX_TEAM_SLOTS) {
    alert("Maximum team size is " + MAX_TEAM_SLOTS +
      " (not including alternates)");
    return;
  }
  var upd = team.insertSlot(team.slots().length, null);
  updRoot( {keys: upd, what: team} );
} // teamMemberAdd
function teamMemberAppendAlt() {
  var team = g_state.getTeam();
  if (team.countAlts() >= MAX_TEAM_ALTERNATES) {
    alert("Maximum number of alternates is " + MAX_TEAM_ALTERNATES);
    return;
  }
  var upd = team.appendAlt(null);
  updRoot( {keys: upd, what: team} );
} // teamMemberAdd
function teamMemberFill(el, event, obj) {
  // obj = { id:<pos>, slotset:<Build> }
  var team = obj.slotset;
  var slot = team.slotRefs()[obj.id];
  var upd = team.setSlot(slot.pos, slot.alt, new Character('New Character'));
  updRoot( {keys: upd, what: team} );
} // teamMemberFill
function teamMemberMaximize(el, event, obj) {
  // obj = { id:<pos>, slotset:<Build> }
  if (teamMemberShow == null) return;
  var slot = obj.slotset.slotRefs()[obj.id];
  teamMemberShow('edit', slot.value);
} // teamMemberMaximize
function teamMemberClose(el, event, obj) {
  // obj = { id:<pos>, slotset:<Build> }
  var upd = null;
  var slot = obj.slotset.slotRefs()[obj.id];
  if (slot.value) {
    if (slot.value == DDTeamSlotGrid.lastToon) {
      document.getElementById('attrGrid').style.display = 'none';
      if (DDTeamSlotGrid.lastToggleEl) {
        DDTeamSlotGrid.lastToggleEl.src = '../../images/toggle-closed.png';
        DDTeamSlotGrid.lastToggleEl = null;
      }
      DDTeamSlotGrid.lastToon = null;
    }
    if (slot.value == g_state.getMember()) {
      g_state.setMember(null);
    }
    upd = obj.slotset.setSlot(slot.pos, slot.alt, null);
  } else {
    upd = obj.slotset[slot.alt == 0 ? 'deleteSlot' : 'deleteAlt'](
      slot.pos, slot.alt);
  }
  if (upd) updRoot( {keys: upd, what: obj.slotset} );
} // teamMemberClose
var teamMemberShow = null; // function('view' or 'edit', toon)


/**
 * DDTeamSlotSkill - DragDrop policy that provides tooltip
 * with full skill description
 */
var DDTeamSlotSkill = Object.create(DDPolicy);
Object.assign(DDTeamSlotSkill, DDMixSlotDrop, DDMixSlotReverseDrop);
DDTeamSlotSkill.slotType = 'skill';
DDTeamSlotSkill.orientation = 'horizontal';
DDTeamSlotSkill.maxSlots = MAX_SKILL_SLOTS;
DDTeamSlotSkill.maxAlts = MAX_SKILL_ALTERNATES;
DDTeamSlotSkill.over = function(el, event, obj) {
  // this function (DDTeamSlotSkill.over) is only here so we can
  // set a break point for debugging, it is completely unnecessary.
  DDPolicy.over.call(this, el, event, obj);
}

DDTeamSlotSkill.updSlotSet = function(upd, obj, dragObj) {
  upd.pos = obj.teamPos;
  updRoot(upd);
}
DDTeamSlotSkill.drawTooltip = function(obj) {
  // obj = { id:<pos>, slotset:<Toon> }
  var skill = obj.slotset.slotRefs()[obj.id].value;
  if (!skill) return null;
  var res = { side: 'b', align: 'l' }
  res.body = drawSkill(skill, obj.slotset, {costs: true, desc: true});
  return res;
} // DDTeamSlotSkill.drawTooltip
DDTeamSlotSkill.drawDrag = function(obj) {
  // obj = { id:<pos>, slotset:<Toon> }
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
} // DDTeamSlotSkill.drawDrag
DDTeamSlotSkill.rejectedDrop = function(obj, dragObj) {
  // obj = { id:<pos>, slotset:<Character> }
  if (dragObj.type.skill) {
    var toon = obj.slotset;
    var skill = dragObj.value;
    setTimeout(alert, 1, toon.primary.name + '/' +
      toon.secondary.name + " can't use [" + skill.name + "]");
  }
};

DDTeamSlotSkill.close = function(el, event, obj) {
  var toon = obj.slotset;
  var ukeys;
  var slot = toon.slotRefs()[obj.id];
  if (slot.value) {
    ukeys = toon.setSlot(slot.pos, slot.alt, null);
  } else {
    ukeys = toon.deleteAlt(slot.pos, slot.alt);
  }
  updRoot( {keys: ukeys, what: toon, pos: obj.teamPos} );
} // DDTeamSlotSkill.close

/////////////////////////////////////////////////
// Team roster stuff
//
/////////////////////////////////////////////////
function initTeamRoster() {
  var el = document.getElementById('teamRoster');
  el.innerHTML = drawTeamRoster();
}

function drawTeamRoster() {
  var out = ["<h2>",
    "<span style='float: right'>&nbsp;",
      "<button type='button' title='Add Member'",
        " onclick='teamMemberAdd()'",
        ">+ Member</button>",
      "<button type='button' title='Add member alternate'",
        " onclick='teamMemberAppendAlt()'",
        ">+ Alt</button>",
    "</span>",
    "Team Roster (<span class='teamMembers'>1 Member</span>)",
    "</h2>",
    "<table style='border: 0; width: 100%' cellspacing='0'",
    " onselectstart='return false'>"];

  for (var i1 = 0; i1 < MAX_TEAM_SLOTS + MAX_TEAM_ALTERNATES; ++i1) {
    var args = "(this,event,{id:" + i1 + ",slotset: g_state.getTeam()})";
    out.push("<tr style='display: none' class='toonslot'",
      "><td class='toon empty'",
      " onMouseOver='DDTeamSlot.over" + args + "'" +
      " onMouseOut='DDTeamSlot.out" + args + "'" +
      " onMouseDown='DDTeamSlot.down" + args + "'" +
      " onMouseUp='DDTeamSlot.up" + args + "'" +
      ">");

    var toonKey = 'g_state.getBuild().slotRefs()[' + i1 + '].value';
    var openIcon = '<img class="openClose"' +
      ' src="../../images/toggle-closed.png"' +
      ' onclick="DDTeamSlotGrid.click' + args + '"' +
      ' onmouseover="DDTeamSlotGrid.over' + args + '"' +
      ' onmouseout="DDTeamSlotGrid.out' + args + '"' +
      '>';
    var toonPos = '<input class="pos" name="pPos.' + i1 + '" type="text"' +
      ' value="1. " readonly style="cursor: move"' +
      " onMouseOver='DDTeamSlotMember.over" + args + "'" +
      " onMouseOut='DDTeamSlotMember.out" + args + "'" +
      " onMouseDown='DDTeamSlotMember.down" + args + "'" +
      " onMouseUp='DDTeamSlotMember.up" + args + "'" +
      '>';
    var nameInput = '<input type="text" name="pName.' + i1 + '"' +
      ' maxlength="20"' +
      ' onBlur="chgToonName(this.value,' + i1 + ')"' +
      ' title="This character\'s name" style="width: 130px;">';
    var proSelect =
      '<select name="pPro1.' + i1 + '" onChange="chgToonPrimary(' +
        'getSelectValue(this),' + i1 + ')"></select>/' +
      '<select name="pPro2.' + i1 + '" onChange="chgToonSecondary(' +
        'getSelectValue(this),' + i1 + ')"></select>';
    var lvlSelect =
      '<select name="pLevel.' + i1 + '" onChange="chgToonLevel(' +
        'getSelectValue(this),' + i1 + ')"></select>';
    var bonusSelect = '<select name="pBonusPoints.' + i1 + '"' +
      ' onchange="chgToonBonusPoints(' +
        'getSelectValue(this),' + i1 + ')"></select>';
    var healthText = '<input type="text" name="pHealth.' + i1 + '"' +
      ' maxlength="7" value="480/480" readonly size="7">';

    // row 0, toon name
    out.push("<div style='width: 100%'>",
      "<a href='' class='smallButton sbClose' style='float: right'",
        " onclick='teamMemberClose", args, "; return false'",
        " title='Empty/remove slot'></a>",
      "<a href='' class='smallButton sbMaximize ifToon' style='float: right'",
        " onclick='teamMemberMaximize", args, "; return false'",
        " title='Edit this character'></a>",
      "<a href='' class='smallButton sbFill unlessToon' style='float: right'",
        " onclick='teamMemberFill", args, "; return false'",
        " title='New Character'></a>",
      "<a href='' class='smallButton sbNew ifToon' style='float: right'",
        " onclick='chgToonAppendAlt(", i1, "); return false'",
        " title='Add alternate skill slot'></a>",
      "<table><tr>",
      "<td><span class='ifToon'>", openIcon, "</span></td>",
      "<td style='white-space: nowrap'>",
        "<span class='ifToon'>", toonPos, "</span>",
      "</td>",
      "<td style='white-space: nowrap'><span class='ifToon'>", proSelect, "</span></td>",
      "<td style='white-space: nowrap'><span class='ifToon'>&nbsp;", nameInput, "</span></td>",
      "<td style='white-space: nowrap'><span class='unlessToon'>",
        "<input type='text' size='30' name='pImport.", i1, "'>",
        "<button type='button' title='Import Anet or BnS template code'",
          " onclick=\"",
          "var el = this.form['pImport.", i1, "'];",
          "importToon(el.value,", i1, ");",
          "el.value = ''\">Import</button>",
      "</span></td>",
      "<td style='width: 100%; cursor: move'",
        " onMouseOver='DDTeamSlotMember.over", args, "'",
        " onMouseOut='DDTeamSlotMember.out", args, "'",
        " onMouseDown='DDTeamSlotMember.down", args, "'",
        " onMouseUp='DDTeamSlotMember.up", args, "'",
        ">",
          "&nbsp;",
      "</td>",
      "</tr></table>",
      "</div>");

    // row 1, skillbar
    out.push("<div class='skillbar' style='text-align: left; clear: both'>",
      "<table style='width: 1%'><tr>");
    for (var i2 = 0; i2 < MAX_SKILL_SLOTS + MAX_SKILL_ALTERNATES; ++i2) {
      var args2 = "(this,event,{id:" + i2 +
        ",slotset: " + toonKey + ", teamPos: " + i1 + "})";
      out.push("<td class='empty'",
          " onmouseover='DDTeamSlotSkill.over", args2, "'",
          " onmouseout='DDTeamSlotSkill.out", args2, "'",
          " onmousedown='DDTeamSlotSkill.down", args2, "'",
          " onmouseup='DDTeamSlotSkill.up", args2, "'",
        ">",
        drawSkillIcon(null, true, [
          "<a href='' class='smallButton sbClose'",
            " onclick='DDTeamSlotSkill.close", args2, "; return false'",
          "></a>"].join('') ),
        "</td>"
      );
    }
    out.push("</tr></table></div>");
    out.push("</td></tr>");
  }
  out.push("</table>");
  return out.join('');
} // drawTeamRoster()


updTeamRoster.prototype.changeKeys = {
  teamRoster: true
};
function updTeamRoster(upd) {
  if (!hasUpdateKey(upd, updTeamRoster.prototype.changeKeys)) return;

  var team = upd.what || g_state.getTeam();
  var el = document.getElementById('teamRoster');
  var formEl = dojo.html.getParentByType(el, 'form');
  var rows = el.lastChild.rows; // div/table/rows
  var slots = team.slotRefs();

  var membersEl = dojo.html.getElementsByClass(
    'teamMembers', el.childNodes[0])[0];
  var primes = team.slots().length;
  var alts = slots.length - primes;
  var out = primes + (alts ? "+" + alts : "") + ' Member';
  if (primes + alts != 1) out += 's';
  membersEl.innerHTML = out;

  var numSlots = Math.min(slots.length, rows.length);
  for (var i1 = 0; i1 < numSlots; ++i1) {
    var slot = slots[i1];
    var toon = slot.value;
    var isAlt = slot.alt != 0;
    var td = rows[i1].firstChild;
    var sdivs = td.childNodes; // tr[i1]/td/divs
    updFullAltClass(td, toon != null, isAlt);
    dojo.html.show(rows[i1]);

    // Make sure there's no close button if there's just a single
    // empty slot left.
    var el = dojo.html.getElementsByClass('sbClose', sdivs[0])[0];
    el.style.display = (toon == null && numSlots == 1) ? 'none' : '';

    if (toon == null) {
      // div 0, name
      // div 1, skillbar
      var tds = sdivs[1].firstChild.rows[0].childNodes;
        // div/table/tr[0]/tds
      for (var i2 = 0; i2 < 8 + MAX_SKILL_ALTERNATES; ++i2) {
        var td = tds[i2];
        updFullAltClass(td, false, false);
        td.style.visibility = 'hidden';
        var img = td.firstChild;
        updSkillIcon(img, null);
      }
      continue;
    }

    toon.teamPos = i1;
    var upd = {keys: toon.changeKeys, what: toon, pos: i1};

    // div 0, professions, name
    updToonInfo(upd, formEl);

    // div 1, skillbar
    updTeamRosterSkillbar(upd);
  } // for each toon slot
  for (; i1 < rows.length; ++i1) {
    dojo.html.hide(rows[i1]);
  }
} // updTeamRoster


/**
 * Update skillbar of a specific team member
 *
 * @param pos   position of member within roster being updated
 * @param toon  toon with skillbar to display
 */
function updTeamRosterSkillbar(upd) {
  if (!hasUpdateKey(upd, updSkillbar.prototype.changeKeys)) return;
  var toon = upd.what;
  var pos = upd.pos;
  if (!toon || pos == null) return;

  var el = document.getElementById('teamRoster');
  var rows = el.lastChild.rows; // div/table/rows
  var td = rows[pos].firstChild;
  var sdivs = td.childNodes; // tr[i1]/td/divs[1]
  el = sdivs[1];

  var tds = el.firstChild.rows[0].childNodes; // div/table/row[0]/tds
  var slots = toon.slotRefs();
  var numSlots = Math.min(slots.length, tds.length);
  for (var i1 = 0; i1 < numSlots; ++i1) {
    var skill = slots[i1].value;
    var isAlt = slots[i1].alt != 0;
    var td = tds[i1];
    updFullAltClass(td, skill, isAlt);
    var img = td.firstChild;
    updSkillIcon(img, skill, true);
    td.style.visibility = 'visible';
  } // for each slot
  // hide unused tds
  for (; i1 < tds.length; ++i1) {
    var td = tds[i1];
    updFullAltClass(td, false, false);
    td.style.visibility = 'hidden';
  }
} // updTeamRosterSkillbar

