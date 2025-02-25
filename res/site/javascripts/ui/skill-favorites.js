/*
Copyright Glen Knowles 2006 - 2025.
Distributed under the Boost Software License, Version 1.0.

skill-favorites.js - gw1builds ui
*/

/**
 * DDSkillFav - DragDrop policy that implements:
 *  - tooltip with full skill description
 *  - drag source for skillFav and skill objects
 *  - drop target for skillFav and skill objects
 */
var DDSkillFav = Object.create(DDSkill);

//===========================================================================
DDSkillFav.drawTooltip = function(obj) {
  // obj = { id:<slot>, toon:<Character> }
  var skill = g_skillFavorites[obj.id];
  if (!skill) return null;
  var body = drawSkill(skill, obj.toon, {costs: true, desc: true});
  return body;
};

//===========================================================================
DDSkillFav.drawDrag = function(obj) {
  // obj = { id:<slot>, toon:<Character> }
  var body = null;
  var skill = g_skillFavorites[obj.id];
  if (skill) {
    body = drawSkill(skill, obj.toon, {icon: true});
    obj.type = {skillFav: true, skill: true};
    obj.value = skill;
  }
  return body;
};

//===========================================================================
DDSkillFav.acceptDrop = function(obj, dragObj) {
  // obj = { id:<slot>, toon:<Character> }
  if (dragObj.type.empty) {
    return g_skillFavorites[obj.id] != null ? true : null;
  } else if (dragObj.type.skillFav) {
    return obj.id != dragObj.id;
  } else if (dragObj.type.skill) {
    return true;
  }
  return null;
};

//===========================================================================
DDSkillFav.drop = function(obj, dragObj) {
  // obj = { id:<slot>, toon:<Character> }
  if (dragObj.type.empty) {
    g_skillFavorites[obj.id] = null;
  } else if (dragObj.type.skillFav) {
    var skill = g_skillFavorites[obj.id];
    g_skillFavorites[obj.id] = g_skillFavorites[dragObj.id];
    g_skillFavorites[dragObj.id] = skill;
  } else if (dragObj.type.skill) {
    g_skillFavorites[obj.id] = dragObj.value;
  } else {
    return;
  }
  updRoot( {keys: {skillFavorites: true} } );
};

//===========================================================================
DDSkillFav.reverseDrop = function(obj, dragObj) {
  // dragObj = { id:<slot>, toon:<Character> }
  if (obj.type.empty) {
    g_skillFavorites[dragObj.id] = null;
  updRoot( {keys: {skillFavorites: true} } );
  }
};

//===========================================================================
DDSkillFav.acceptReverseDrop = function(obj, dragObj) {
  // dragObj = { id:<slot>, toon:<Character> }
  if (obj.type.empty) {
    return true;
  }
  return null;
};


/////////////////////////////////////////////////
// Skill favorites stuff
//
/////////////////////////////////////////////////
//===========================================================================
function drawSkillFavorites() {
  var out = "<table align='center' onselectstart='return false'>";
  var height = g_skillFavorites.length / 2;
  for (var i1 = 0; i1 < height; ++i1) {
    out += "<tr>";
    for (var i2 = 2 * i1; i2 < 2 * i1 + 2; ++i2) {
      var args = "(this,event,{id:" + i2 + ",toon: g_state.getMember()})";
      out += "<td class='empty'" +
        " onMouseOver='DDSkillFav.over" + args + "'" +
        " onMouseOut='DDSkillFav.out" + args + "'" +
        " onMouseDown='DDSkillFav.down" + args + "'" +
        " onMouseUp='DDSkillFav.up" + args + "'>" +
        drawSkillIcon(null, true) + "</td>";
    }
    out += "</tr>";
  }
  out += "</table>";
  return out;
}

//===========================================================================
function initSkillFavorites(el) {
  g_skillFavorites = new Array(30);
  var favs = [];
  var val = g_store.get(g_store.keys.SKILL_FAVORITES);
  if (val) {
    favs = val.split('|');
  }
  for (var i1 = 0; i1 < favs.length && i1 < g_skillFavorites.length; ++i1) {
    var skill = g_skillsById[favs[i1]];
    g_skillFavorites[i1] = skill;
  }
  var elems = loadVarElems(document.getElementById('skillFavorites'));
  elems.efactEl.innerHTML = drawEmptyFactory();
  if (elems.afactEl) elems.afact.innerHTML = drawAlternateFactory();
  elems.favsEl.innerHTML = drawSkillFavorites();
}

//===========================================================================
updSkillFavorites.prototype.changeKeys = {
  skillFilter: true,
  skillFavorites: true
};

//===========================================================================
function updSkillFavorites(upd, attrSource) {
  if (!hasUpdateKey(upd, updSkillFavorites.prototype.changeKeys)) return;

  var el = document.getElementById('skillFavorites');
  var kids = el.childNodes;
  for (var i1 = kids.length - 1; i1 >= 0; --i1) {
    el = kids[i1];
    if (el.classList.contains('skillFavorites')) break;
  }

  // update browser storage
  var val = '';
  for (var i1 = 0; i1 < g_skillFavorites.length; ++i1) {
    if (i1) val += '|';
    if (g_skillFavorites[i1]) {
      val += g_skillFavorites[i1].id;
    } else {
      val += '0';
    }
  }
  g_store.set(g_store.keys.SKILL_FAVORITES, val, function(){});

  // update UI
  var tbl = el.firstChild;
  if (tbl == null || tbl.rows == null) return;
  var rows = tbl.rows;
  for (var i1 = 0; i1 < rows.length; ++i1) {
    var row = rows[i1]; // tr[i1]
    for (var i2 = 0; i2 < 2; ++i2) {
      var pos = 2 * i1 + i2;
      var td = row.childNodes[i2]; // tr[i1]/td[i2]
      var skill = g_skillFavorites[pos];
      if (skill) {
        td.className = 'skill';
      } else {
        td.className = 'empty';
      }
      var img = td.firstChild;
      var enabled = attrSource ? attrSource.skillFilter(skill) : true;
      updSkillIcon(img, skill, enabled);
    }
  }
}
