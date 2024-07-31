/*
Copyright Glen Knowles 2006.
Distributed under the Boost Software License, Version 1.0.

toon-view.js - gw1builds ui
*/

/**
 * @toon    toon to draw
 * @fmt     format
 *   normal
 *   code
 *   text
 */
function updToonView(el, toon, fmt) {
  switch (fmt) {
    default:
    case 'normal':
      el.innerHTML = drawToonViewNormal(toon);
      break;
    case 'code':
      el.innerHTML = drawToonViewCode(toon);
      break;
    case 'export':
      var formEl = dojo.html.getParentByType(
        document.getElementById('buildExport'), 'form');
      loadExportView(formEl);
      break;
  }
} // drawToonView


function drawToonViewNormal(toon) {
  if (!toon) return "<div class='normalView'>" +
    "<h2>Character</h2>" +
    "<div class='section'>" +
    "<div class='partName'>(Empty slot)</div>" +
    "</div></div>";

  var out = [
    "<div class='normalView'>",
    "<h2>Character</h2>",
    "<div class='section'>",
    drawToon(toon, { pro: true, attrs: true, skills: true } ),
    "</div>",
    "<h2>Notes</h2>",
    "<div class='section'>",
    "<div class='partDesc'>",
    (toon && toon.desc) ? toon.desc : "No notes",
    "</div></div>",
    "</div>"
    ];
  return out.join('');
} // drawToonViewNormal


function drawToonViewCode(toon) {
  var inclNames =
    g_store.get(g_store.keys.CODE_INCLUDE_NAMES) == true;
  var out = ["<div class='codeView'>",
    "<h2>Skill and Equipment Codes</h2>",
    "<div class='section control'>",
    "<input type='checkbox' name='inclName'", inclNames ? ' checked' : '',
      " onchange='chgCodeIncludeNames(this.checked)'",
      ">Include Names",
    "</div>",
    "<div class='section'>"];
  if (toon) {
    out.push(drawToon(toon,
      { noname: true, exports: true, skipName: !inclNames } ));
  } else {
    out.push("<div class='partName'>(Empty slot)</div>");
  }
  out.push("</div></div>");
  return out.join('');
} // drawToonViewCode


function drawToonViewText(toon, args, bbcode/*=false*/) {
  args = args || {}
  var proColors = {
    A: '#F8007A', D: '#465681', E: '#DF6D6D', Me: '#BB3AB2', Mo: '#75A1AE',
    N: '#4ECB75', P: '#DD8213', R: '#89B83F', Rt: '#03F2F2', W: '#E2BC6A',
    '': 'silver' }
  if (!toon) return "(Empty slot)\n";
  var out = [toon.typeName(/*inclLevel=*/toon.level != 20),
    ' ', toon.name, '\n'];
  if (args.code) {
    out.push('Skill: ', toon.toAnet(/*skipName=*/true), '\n');
    out.push('Equip: ', toon.toAnetEquip(/*skipName=*/true), '\n');
    out.push('\n');
  }
  var pattrs = toon.pattrArray();
  for (var i1 = 0; i1 < pattrs.length; ++i1) {
    var pattr = pattrs[i1];
    if (pattr.value == 0) continue;
    if (bbcode) out.push(pattr.name, ': ');
    out.push(pattr.rawValue());
    if (pattr.headgear) out.push('+1');
    if (pattr.rune != 'None') {
      out.push('+', Character.prototype.runeTypes[pattr.rune][0]);
    }
    if (!bbcode) out.push(' ', pattr.name);
    out.push('\n');
  }
  out.push('\n');
  var slots = toon.slots();
  for (var i1 = 0; i1 < slots.length; ++i1) {
    var skills = slots[i1];
    for (var i2 = 0; i2 < skills.length; ++i2) {
      var skill = skills[i2];
      if (i2 > 0) out.push(" / ");
      if (bbcode) {
        if (args.color) {
          var pro = g_attrs[skill.attr].pro;
          out.push('[color=', proColors[pro], ']');
        }
        out.push('[b]');
        if (args.links && skill) {
          out.push('[url=',
            encodeURI('http://wiki.guildwars.com/wiki/' + skill.name),
            ']');
        }
      }
      if (!skill) out.push("No Skill");
      else {
        out.push(skill.name);
        if (skill.elite) out.push(' [E]');
      }
      if (bbcode) {
        if (args.links && skill) out.push('[/url]');
        out.push('[/b]');
        if (skill && skill.linkage() != 'Unlinked') {
          out.push('(', skill.linkage(), ')');
        }
        if (args.color) out.push('[/color]');
      }
    }
    if (args.skdesc && skills[0]) {
      skill = skills[0];
      var desc = skill.customized(toon, /*noRanges=*/true).desc;
      desc = desc.replace(/<.*?>/g, '');
      out.push('\n', desc, '\n');
      if (skill.enCost) out.push("Energy:", skill.enCost, ' ');
      if (skill.adCost) out.push("Adrenaline:", skill.adCost, ' ');
      if (skill.activation) out.push("Activation:", skill.activation, ' ');
      if (skill.recharge) out.push("Recharge:", skill.recharge, ' ');
      if (skill.upkeep) out.push("Upkeep:", skill.upkeep, ' ');
      out.push('\n');
    }
    out.push('\n');
  } // for each slot
  if (args.desc && toon.desc) out.push('\n', trim(toon.desc), '\n');
  return out.join('');
} // drawToonViewText


function drawToonViewGwBBCode(toon, args) {
  if (!toon) return '';
  out = [toon.toGwBBCode(args), '<br/>\n'];
  if (args.pickup) {
    out.push('Tested By: [pickup=', htmlstring2(toon.name), ']<br/>\n');
  }
  return out.join('');
} // drawToonViewGwBBCode
