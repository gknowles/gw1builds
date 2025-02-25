/*
Copyright Glen Knowles 2006 - 2025.
Distributed under the Boost Software License, Version 1.0.

skill-list.js - gw1builds ui
*/

/**
 * DDSkillList - DragDrop policy that implements:
 *  - tooltip with full skill description
 *  - drag source for skill objects
 */
var DDSkillList = Object.create(DDPolicy)
Object.assign(DDSkillList, DDMixPartList, {
  ddPolicyName: 'DDSkillList',
  elemId: 'skillList',
  partType: 'skill',
  storeKeys: {
    filter: g_store.keys.SKILL_SEARCH_FILTER,
    proFilter: g_store.keys.SKILL_SEARCH_PRO_FILTER,
    sort: g_store.keys.SKILL_LIST_SORT,
    view: g_store.keys.SKILL_LIST_VIEW
  },
  squery: g_skillSearch,
  sorts: Skill.prototype.sorts,

  viewModes: [
    { key: 'Icon', icon: 'view-icon.png', title: 'Icons only' },
    { key: 'List', icon: 'view-list.png', title: 'Simple List' },
    { key: 'Detail', icon: 'view-detail.png', title: 'Detailed List' }
  ],
  viewMode: 2,
    ICON: 0,
    LIST: 1,
    DETAIL: 2,
  proFilter: false,
  lastFilter: null,

  sdEls: [] // skill detail list row element cache
});

//===========================================================================
DDSkillList.drawTooltipBody = function(skill, obj) {
  // obj = { id:<skillId>, toon:<attrSource> }
  var res = {}
  res.side = this.viewMode == this.ICON ? 'b' : 'l';
  res.body = drawSkill(skill, obj.toon, {costs: true, desc: true} );
  return res;
}

//===========================================================================
DDSkillList.drawDragBody = function(skill, obj) {
  // obj = { id:<skillId>, toon:<attrSource> }
  var attrSource = g_state.getTeam() ? null : g_state.getMember();
  var body = drawSkill(skill, attrSource, {icon: true} );
  obj.value = skill;
  return body;
}

//===========================================================================
DDSkillList.drawPartDetail = function(skill) {
  var attrSource = g_state.getTeam() ? null : g_state.getMember();
  return drawSkill(g_skillsById[skill.id], attrSource,
    {icon: true, costs: 'cols'} );
}

//===========================================================================
DDSkillList.init = function() {
  initSkillSearch();
  this.initPartList();

  // pro filter mode
  var proFilter = g_store.get(this.storeKeys.proFilter);
  if (proFilter != 'false') this.toggleProFilter();

  // list view mode
  var key = parseInt(g_store.get(this.storeKeys.view));
  if (isNaN(key)) key = this.DETAIL;
  this.viewMode = key;
  var choices = [];
  for (var i1 = 0; i1 < this.viewModes.length; ++i1) {
    var m = this.viewModes[i1];
    choices.push([i1, m.key, m.title]);
  }
  setSelectValue(this.elems.viewEl, key, choices);

  // list sort
  this.squery.sort = [];
  for (var priority = 0; ; ++priority) {
    var el = this.elems['sort' + priority + 'El'];
    if (!el) break;
    var key = g_store.get(this.storeKeys.sort + priority);
    if (key == null) key = priority ? 'Name' : 'Attribute';
    var sort = this.sorts[key];
    if (sort) this.squery.sort.push(sort);
    el.style.backgroundImage = this.drawSortBG(key, priority);
    el.title = this.drawSortTitle(key, priority);
  }
  this.squery.sort.push(this.sorts['Name']);
}

//===========================================================================
DDSkillList.updRoot = function(upd) {
  this.elems.matchesEl.innerHTML = 'Loading...';
  setTimeout(updRoot, 1, upd || {keys: this.changeKeys} );
}

//===========================================================================
DDSkillList.filteredSkills = function() {
  var skills = g_skillsById;
  var toon = this.proFilter ? g_state.getMember() : null;
  var isPve = g_state.getBuild().isPve;
  if (!isPve || toon) {
    skills = [];
    for (id in g_skillsById) {
      var skill = g_skillsById[id];
      if (!isPve && skill.pveOnly) continue;
      if (toon && !toon.skillFilter(skill)) continue;
      skills.push(skill);
    }
  }
  return skills;
}

//===========================================================================
DDSkillList.chgView = function(id) {
  g_store.set(this.storeKeys.view, id);
  this.viewMode = id;
  var mode = this.viewModes[id];
  this.elems.viewEl.src = '../images/' + mode.icon;
  this.elems.viewEl.title = mode.title;
  this.updRoot();
}

//===========================================================================
DDSkillList.popupView = function(baseEl) {
  var out = ["<div class='iconMenu'><table class='detail'>"];
  for (var i1 = 0; i1 < this.viewModes.length; ++i1) {
    var mode = this.viewModes[i1];
    out.push("<tr><td",
      " style='cursor: default' title=", jstring1(mode.title),
      " onclick='DDSkillList.chgView(", i1, ")'>",
      "<span class='menuIcon'",
      " style='background-image: url(../images/", mode.icon, ")'>",
      "</span>&nbsp;",
      "<span class='menuText'>", mode.key, "</span>",
      "</td></tr>");
  }
  out.push("</table></div>");
  out = out.join('');
  DDPopup.show(baseEl, out);
}

//===========================================================================
DDSkillList.toggleProFilter = function() {
  var mode = !this.proFilter;
  g_store.set(this.storeKeys.proFilter, mode ? 'true' : 'false');
  this.proFilter = mode;
  this.elems.togProFilterEl.checked = mode;
  var dis = !mode || this.elems.proToonsEl.length == 0;
  this.elems.proFilterEl.disabled = dis;
  this.elems.proToonsEl.disabled = dis;
  if (g_state.getMember() != null) {
    this.updRoot( {keys: {skillFilter: true, skillSearch: true} } );
  }
}

//===========================================================================
DDSkillList.chgProFilter = function(val) {
  var team = g_state.getTeam();
  if (!team) return;
  var pos = team.bulletPos(val);
  var alt = team.bulletAlt(val);
  if (isNaN(pos) || isNaN(alt)) return;
  var toon = team.slotValue(pos, alt);
  if (toon != g_state.getMember()) {
    g_state.setMember(toon);
    this.updRoot( {keys: {skillFilter: true, skillSearch: true} } );
  }
}

//===========================================================================
DDSkillList.drawSortTitle = function(key, priority) {
  return "Sort by " + key + ' ' + ['first', 'second'][priority];
}

//===========================================================================
DDSkillList.drawSortBG = function(key, priority) {
  var sort = this.sorts[key];
  return 'url(../images/' + sort.icon + ')';
}

//===========================================================================
DDSkillList.chgSort = function(key, priority) {
  var elems = this.elems;
  var el = elems['sort' + priority + 'El'];
  el.style.backgroundImage = this.drawSortBG(key, priority);
  el.title = this.drawSortTitle(key, priority);

  g_store.set(this.storeKeys.sort + priority, key);
  this.squery.sort[priority] = this.sorts[key];
  this.squery.pages.current = 0;
  this.updRoot();
}

//===========================================================================
DDSkillList.popupSort = function(baseEl, priority) {
  var out = ["<div class='iconMenu'><table class='detail'>"];
  for (var key in this.sorts) {
    var sort = this.sorts[key];
    out.push("<tr><td",
      " style='cursor: default' title=",
        jstring1(this.drawSortTitle(key, priority)),
      " onclick='DDSkillList.chgSort(", jstring2(key), ",", priority, ")'>",
      "<span class='menuIcon'",
      " style='background-image: ", this.drawSortBG(key, priority), "'>",
      "</span>&nbsp;",
      "<span class='menuText'>", key, "</span>",
      "</td></tr>");
  }
  out.push("</table></div>");
  out = out.join('');
  DDPopup.show(baseEl, out);
}

//===========================================================================
DDSkillList.updWidget = function(upd, initOnly/*=false*/) {
  var elems = this.elems;
  var team = g_state.getTeam();
  if (upd.keys.skillFilter || upd.keys.teamRoster) {
    var val, choices = [];
    if (team) {
      var slots = team.slotRefs(/*inclNulls=*/false);
      for (var i1 = 0; i1 < slots.length; ++i1) {
        var slot = slots[i1];
        var toon = slot.value;
        var k = team.makeBullet(slot.pos, slot.alt);
        var text = k + '. ' + toon.typeName(/*inclLevel=*/false);
        choices.push( [k, text] );
        if (toon == g_state.getMember()) val = k;
      }
    }
    setSelectValue(this.elems.proToonsEl, val, choices);
    var dis = !elems.togProFilterEl.checked ||
      elems.proToonsEl.length == 0;
    elems.proFilterEl.disabled = dis;
    elems.proToonsEl.disabled = dis;

    var toon = g_state.getMember();
    if (toon) {
      elems.proFilterEl.value = toon.typeName(/*inclLevel=*/false);
    } else {
      elems.proFilterEl.value = '';
    }

    this.squery.filter.updValues(this.filteredSkills());
  } // if member filter or roster changed

  var curProFilter = this.proFilter ? this.elems.proFilterEl.value : '';
  if (upd.keys.skillSearch || this.lastFilter != curProFilter) {
    var skills = initOnly ? [] : this.filteredSkills();
    this.lastFilter = initOnly ? null : curProFilter;
    this.squery.values = this.squery.sortedArray(skills);
    this.elems.matchesEl.innerHTML = "Loading...";

    DDSkillList.isLoaded = true;
    if (this.viewMode == this.ICON) {
      updSkillIconList(this.squery.values, null);
    } else if (this.viewMode == this.LIST) {
      updSkillSimpleList(this.squery.values, null);
    } else { // must be this.DETAIL
      var method = /*dojo.render.html.ie=*/false
        ? updSkillDetailList_Draw
        : updSkillDetailList_Swap;
      setTimeout(method, 1, this.squery.values, null);
    }
  } // if filter changed
}

//===========================================================================
function updSkillIconList(skills, attrSource, opts) {
  var out = ["<table class='icon'>"];
  var skillOpts = {icon: true, noname: true};
  var cols = 9;
  for (var pos = 0, i1 = 0; i1 < skills.length; ++pos, ++i1) {
    var skill = skills[i1];
    // is a skill? draw it
    if (skill.name) {
      if (pos == 0) out.push("<tr>");
      out.push("<td class='part icon'",
        drawSkillListHandlers(skill),
        ">");
      out.push(
        drawSkillIcon(g_skillsById[skill.id],
          attrSource ? attrSource.skillFilter(skill) : true)
      );
      out.push("</td>");
      if ((pos + 1) % cols == 0) {
        out.push("</tr>");
        pos = -1;
      }
    } else { // is a title. draw it
      if (pos) {
        out.push("</tr>");
      }
      out.push("<tr><td class='sortGroup' colspan='", cols, "'>",
        skill, "</td></tr>");
      pos = -1;
    }
  } // for each skill
  if (pos) {
    for (; pos < cols; ++pos) {
      out.push("<td class='icon'>",
        "<div class='partIcon' style='",
          "background-image: url();",
        "'></div>",
        "</td>");
    }
    out.push("</tr>");
  }
  out.push("</table>");
  out = out.join('');
  var elems = DDSkillList.elems;
  if (elems.matchesEl) {
    elems.matchesEl.innerHTML = "Loading...";
    setTimeout(function(){
      setInnerHtml(elems.listEl, out);
      elems.matchesEl.innerHTML =
        skills.matches + " of " + skills.count;
      },
      1);
  } else {
    setInnerHtml(elems.listEl, out);
  }
}

//===========================================================================
function updSkillSimpleList(skills, attrSource) {
  var elems = DDSkillList.elems;

  var out = ["<table class='detail'>"];
  for (var i1 = 0; i1 < skills.length; ++i1) {
    var skill = skills[i1];
    if (skill.name) {
      out.push("<tr><td",
        drawSkillListHandlers(skill),
        "><span class='partName",
        (skill.elite ? ' elite' : ''), "'>", skill.name,
        "</span></td></tr>");
    } else {
      out.push("<tr><td class='sortGroup'>", skill, "</td></tr>");
    }
  } // for each skill
  out.push("</table>");
  out = out.join('');

  setInnerHtml(elems.listEl, out);
  elems.matchesEl.innerHTML =
    skills.matches + " of " + skills.count;
}

//===========================================================================
function updSkillDetailList_Draw(skills, attrSource) {
  var elems = DDSkillList.elems;
  var listEl = elems.listEl;

  listEl.removeChild(listEl.firstChild);

  // populate new table
  var out = ["<table class='detail'>"];
  for (var i1 = 0; i1 < skills.length; ++i1) {
    var skill = skills[i1];
    // is a skill? draw it
    if (skill.name) {
      out.push("<tr>", drawSkillDetailRow(skill, attrSource), "</tr>");
    } else { // is a title. draw it
      out.push("<tr><td class='sortGroup'>", skill, "</td></tr>");
    }
  } // for each skill
  out.push("</table>");

  // swap in new list
  setInnerHtml(listEl, out.join(''));
  elems.matchesEl.innerHTML =
    skills.matches + " of " + skills.count;
}

//===========================================================================
function updSkillDetailList_Swap(skills, attrSource) {
  var elems = DDSkillList.elems;
  var listEl = elems.listEl;
  var sds = DDSkillList.sdEls;

  var newTbl = document.createElement('table');
  newTbl.className = 'detail';
  var newEl = document.createElement('tbody');
  newTbl.appendChild(newEl);

  var oldTbl = document.createElement('table');
  listEl.replaceChild(oldTbl, listEl.firstChild);
  var tmpEl = document.createElement('div');
  var el;

  // populate new table
  for (var i1 = 0; i1 < skills.length; ++i1) {
    var skill = skills[i1];
    // is a skill? draw it
    if (skill.name) {
      el = sds[skill.id];
      if (!el) {
        tmpEl.innerHTML = "<table><tr>" +
          drawSkillDetailRow(skill, attrSource) +
          "</tr></table>";
        el = tmpEl.firstChild.rows[0];
        sds[skill.id] = el;
      }
    } else { // is a title. draw it
      tmpEl.innerHTML = "<table><tr>" +
        "<td class='sortGroup'>" + skill + "</td>" +
        "</tr></table>";
      el = tmpEl.firstChild.rows[0];
    }
    newEl.appendChild(el);
  } // for each skill

  // swap in new list
  replaceOldChild(listEl, newTbl, oldTbl);
//  listEl.replaceChild(newEl, oldEl);
  elems.matchesEl.innerHTML =
    skills.matches + " of " + skills.count;
}

//===========================================================================
function replaceOldChild(parent, newChild, oldChild) {
  parent.replaceChild(newChild, oldChild);
}

//===========================================================================
function drawSkillDetailRow(skill, attrSource) {
  var out = ["<td class='part detail'",
    drawSkillListHandlers(skill), ">",
    drawSkill(g_skillsById[skill.id], /*attrSource=*/attrSource,
      {icon: true, costs: 'cols'} ),
    "</td>"
  ];
  return out.join('');
}

//===========================================================================
function drawSkillListHandlers(skill) {
  var args = "(this,event,{id:" + skill.id +
    ",toon: g_state.getMember()})'";
  var out = [
    " onMouseOver='DDSkillList.over", args,
    " onMouseOut='DDSkillList.out", args,
    " onMouseDown='DDSkillList.down", args
  ];
  return out.join('');
}

//===========================================================================
function setInnerHtml(el, html) {
  el.innerHTML = html;
}
