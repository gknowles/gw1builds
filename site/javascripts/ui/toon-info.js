/*
Copyright Glen Knowles 2006 - 2024.
Distributed under the Boost Software License, Version 1.0.

toon-info.js - gw1builds ui
*/
// Character info functions

function initToonInfo(elems) {
  var form = elems.formEl;
  if (form.pPro1) {
    var pros = Character.prototype.primaryChoices();
    var opts = form.pPro1.options;
    for (var i1 = 0; i1 < pros.length; ++i1) {
      opts[i1] = new Option(pros[i1]);
    }
  }
  if (form.pLevel) {
    var opts = form.pLevel.options;
    for (var i1 = 0; i1 <= 20; ++i1) {
      opts[i1] = new Option(i1);
    }
  }
  if (form.pBonusPoints) {
    var opts = form.pBonusPoints.options;
    opts[0] = new Option('0');
    opts[1] = new Option('15');
    opts[2] = new Option('30');
  }
} // initToonInfo(elems)


function updToonInfo(upd, formEl) {
  // not a valid upd? exit
  if (upd == null || formEl == null) return;

  var toon = upd.what || g_state.getMember();
  if (toon == null || !toon instanceof Character) return;
  var pos = upd.pos;
  var keys = upd.keys;

  var el;
  function field(name) {
    var fld = String(name);
    if (pos != null) fld += '.' + pos;
    el = formEl[fld];
    return el;
  }

  if (keys.name && field('pName')) {
    el.value = toon.name;
  }

  var team = g_state.getTeam();
  if (team && (keys.name || keys.characters)) {
    var toons = team.slotRefs();
    var choices = [];
    var val = '';
    for (var i1 = 0; i1 < toons.length; ++i1) {
      var t = toons[i1];
      var k = team.makeBullet(t.pos, t.alt);
      var v = t.value;
      choices.push( [k, k + '. ' + (v ? v.name : '')] );
      if (v == toon) val = k;
    }
    if (field('pToons')) {
      setSelectValue(el, val, choices);
    }
    if (field('pPos')) {
      el.value = val + '. ';
    }
  } // if team

  if (keys.primary && field('pPro1')) {
    if (!setSelectValue(el, toon.primary.abbrev)) {
      setSelectValue(el, toon.primary.abbrev, toon.primaryChoices());
    }
  }

  if (field('pPro2')) {
    if (keys.secondary || keys.secondaryChoices) {
      var pros = toon.secondaryChoices();
      setSelectValue(el, toon.secondary.abbrev, pros);
    }
  }

  if (field('pHead')) {
    if (keys.headgearAttr || keys.headgearAttrChoices) {
      var attrs = toon.pattrArray();
      var vals = [];
      for (var i1 = 0; attrs[i1].isPrimary; ++i1) {
        vals.push(attrs[i1].name);
      }
      setSelectValue(el, toon.headgearAttr, vals);
    }
  }

  if (keys.headgearAttr && field('pManualHeadgear')) {
    el.checked = !Character.prototype.autoHeadgear;
  }

  if (keys.level && field('pLevel')) {
    el.selectedIndex = toon.level;
  }

  if (keys.attrBonusPts && field('pBonusPoints')) {
    setSelectValue(el, toon.attrBonusPts);
  }

  if (keys.health && field('pHealth')) {
    el.value = toon.health().join('/');
  }

  if (keys.attrPoints && field('pAttrPoints')) {
    el.value = toon.attrPoints().join('/');
  }
} // updToonInfo(upd, formEl, toon, teamPos)


function importToon(val, memberPos) {
  val = trim(val);
  if (val == '') {
    alert("No template code specified");
    return;
  }
  var toon = null;
  var team = g_state.getTeam();
  if (memberPos != null) {
    var slot = team.slotRefs()[memberPos];
    if (slot.value == null) {
      toon = Character.prototype.parse(val);
      team.setSlot(slot.pos, slot.alt, toon);
    } else {
      toon = slot.value;
      Character.prototype.parse(val, toon);
    }
    updRoot( {keys: {teamRoster: true}, what: team } );
  } else {
    toon = findAttrToon();
    Character.prototype.parse(val, toon, /*skipName=*/true);
    updRoot( {
      keys: toon.changeKeys,
      what: toon,
      pos: g_state.teamPos(toon)
    } );
  }
} // importToon

function chgToon(bullet) {
  // val is slot followed by optional letter indicating alternate
  // 2 -> slot 2 primary, 8a -> slot 8 first alternate
  var team = g_state.getTeam();
  var pos = team.bulletPos(bullet);
  var alt = team.bulletAlt(bullet);
  var toon = team.slotValue(pos, alt);
  if (toon == null) {
    toon = new Character('New Character');
    team.setSlot(pos, alt, toon);
  }
  if (toon != g_state.getMember()) {
    g_state.setMember(toon);
    updRoot( {keys: toon.changeKeys, what: toon} );
  }
}

function chgToonName(val, pos) {
  toon = findChgToon(pos);
  var upd = toon.setName(val);
  updRoot( {keys: upd, what: toon, pos: pos} );
}
function chgToonPrimary(pro, pos) {
  toon = findChgToon(pos);
  var upd = toon.setPrimary(pro);
  updRoot( {keys: upd, what: toon, pos: pos} );
}
function chgToonSecondary(pro, pos) {
  toon = findChgToon(pos);
  var upd = toon.setSecondary(pro);
  updRoot( {keys: upd, what: toon, pos: pos} );
}
function chgToonLevel(lvl, pos) {
  toon = findChgToon(pos);
  var upd = toon.setLevel(Number(lvl), toon.attrBonusPts);
  updRoot( {keys: upd, what: toon, pos: pos} );
}
function chgToonBonusPoints(pts, pos) {
  toon = findChgToon(pos);
  var upd = toon.setLevel(toon.level, Number(pts));
  updRoot( {keys: upd, what: toon, pos: pos} );
}
function chgToonAppendAlt(pos) {
  toon = findChgToon(pos);
  if (toon.countAlts() >= MAX_SKILL_ALTERNATES) {
    alert('There is a limit of ' + MAX_SKILL_ALTERNATES + ' alternates.');
    return;
  }
  var upd = toon.appendAlt(null);
  updRoot( {keys: upd, what: toon, pos: pos} );
}


/* changes using attrGrid */
function chgToonDesc(val) {
  toon = findAttrToon();
  toon.desc = val;
  updRoot( {keys: {desc: true}, what: toon} );
}
function chgToonHeadgear(attrName) {
  toon = findAttrToon();
  if (attrName == toon.headgearAttr()) attrName = 'None';
  var upd = toon.setHeadgearAttr(attrName);
  updRoot( {keys: upd, what: toon} );
}
function chgToonAttrRune(attrName, rune) {
  toon = findAttrToon();
  var upd = toon.setAttrRune(attrName, rune);
  updRoot( {keys: upd, what: toon} );
}
function chgToonAttrValue(attrName, val) {
  toon = findAttrToon();
  var upd = toon.setAttrValue(attrName, val);
  updRoot( {keys: upd, what: toon} );
}
function chgToonAutoRunes(val) {
  toon = findAttrToon();
  Character.prototype.autoRunes = val;
  var upd = toon.optimize();
  upd.runes = true;
  updRoot( {keys: upd, what: toon} );
}
function chgToonAutoHeadgear(val) {
  toon = findAttrToon();
  Character.prototype.autoHeadgear = val;
  var upd = toon.optimize();
  upd.headgearAttr = true;
  updRoot( {keys: upd, what: toon} );
}

function findChgToon(pos) {
  return pos != null ?
    g_state.getTeam().slotRefs()[pos].value :
    g_state.getMember();
} // findChgToon

function findAttrToon() {
  var toon = isTeamRoster() ? DDTeamSlotGrid.lastToon : null;
  return toon || g_state.getMember();
} // findAttrToon

function isTeamRoster() {
  var gridEl = document.getElementById('attrGrid');
  var tr = dojo.html.getParentByType(gridEl, 'tr');
  return (tr && dojo.html.hasClass(tr, 'toonslot'));
}