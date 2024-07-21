
if (typeof dojo != 'undefined') { dojo.provide("ui.team-view"); }

/**
 * @team    team to draw
 * @fmt     format
 *   normal
 *   anet
 *   gwbbcode
 *   gbd
 */
function updTeamView(el, team, fmt) {
  switch (fmt) {
    default:
    case 'normal': 
      el.innerHTML = drawTeamViewNormal(team);
      break;
    case 'code': 
      el.innerHTML = drawTeamViewCode(team);
      break;
    case 'export': 
      var formEl = dojo.html.getParentByType(
        dojo.byId('buildExport'), 'form');
      loadExportView(formEl);
      break;
  }
} // drawTeamView


function drawTeamViewNormal(team) {
  var slots = team ? team.slotRefs() : [];
  var vport = dojo.html.getViewport().width;
  var cols = 2, coff = 0;
  if (vport > 980) cols = 4;
  else if (vport > 750) cols = 3, coff = 1;

  var desc = ["<h2>Notes</h2>",
    "<div class='section'><div class='partDesc'>", 
    (team && team.desc) ? team.desc : "No notes", 
    "</div></div>"].join('');
  
  var out = ["<div class='normalView'>"]
  if (coff == 0) out.push(desc);
  out.push("<table border='1' style='width: 100%'>",
    "<col span='", cols, "' width='", 100 / cols, "%'>",
    "<tr style='vertical-align: top'>");
  if (coff == 1) out.push("<td>", desc, "</td>");

  for (var i1 = 0; i1 < slots.length; ++i1) {
    var toon = slots[i1].value;
    if ((i1 + coff) % cols == 0) out.push("<tr style='vertical-align: top'>");
    out.push("<td><h2>Member ", i1 + coff, "</h2>");
    out.push("<div class='section'>");
    if (toon) {
      out.push(drawToon(toon, { pro: true, attrs: true, skills: true, 
        desc: true } ));
    } else {
      out.push("<div class='partDesc'>Empty slot</div>");
    }
    out.push("</div>");
    out.push("</td>");
    if ((i1 + coff) % cols == cols - 1) {
      out.push("</tr>");
    }
  }
  if ((i1 + coff) % cols != 0) out.push("</tr>");
  out.push("</table></div>");
  return out.join('');
} // drawTeamViewNormal


function drawTeamViewCode(team) {
  var inclNames = 
    g_store.get(g_store.keys.CODE_INCLUDE_NAMES) == true;
  var slots = team ? team.slotRefs() : [];
  var out = ["<div class='codeView'>",
    "<h2>Skill and Equipment Codes</h2>",
    "<div class='section control'>",
    "<input type='checkbox' name='inclName'", inclNames ? ' checked' : '',
      " onchange='chgCodeIncludeNames(this.checked)'",
      ">Include Names",
    "</div>",
    "<div class='section'>",
    "<table class='listBar' cellspacing='0'>"];
  out.push("<tr style='text-align: center'>",
    "<th>Member</th>",
    "<th colspan='2'>ArenaNet<br>Skills</th>",
    "<th colspan='2'>ArenaNet<br>Equipment</th>",
    "<th>GuildBuilds</th>",
    "<th>gwBBCode</th>",
    "</tr>");

  var slots = team ? team.slotRefs() : [];
  for (var i2 = 0; i2 < slots.length; ++i2) {
    var slot = slots[i2];
    var toon = slot.value;
    out.push("<tr", (i2 % 4 < 2) ? " class='listBar'>" : '>',
      "<td><span class='partName'>", 
      team.makeBullet(slot.pos, slot.alt), ". ");
    if (!toon) {
      out.push("(Empty slot)</span></td><td colspan='6'></td>");
    } else {
      out.push(toon.name, "</span></td>");
      // anet
      out.push("<td style='padding-right: 0px'>",
        "<input size='20' readonly",
          " value=", htmlstring2(toon.toAnet(!inclNames)),
          " onclick='dojo.html.selectInputText(this)'>",
        "</td><td title=", jstring1('Download skills of ' + toon.name),
          ">", drawDownloadButton(toon.name, toon.toAnet(true)), 
        "</td><td style='padding-right: 0px'>",
        "<input size='20' readonly",
          " value=", htmlstring2(toon.toAnetEquip(!inclNames)),
          " onclick='dojo.html.selectInputText(this)'>",
        "</td><td title=", jstring1('Download equipment of ' + toon.name), 
          ">", drawDownloadButton(toon.name, toon.toAnetEquip(true)), 
        "</td>"
      );
      // guildbuilds
      out.push("<td>",
        "<input size='25' readonly",
        " value=", htmlstring2(toon.toCode()),
        " onclick='dojo.html.selectInputText(this)'></td>"
      );
      // gwbbcode
      out.push("<td>",
        "<input size='25' readonly",
        " value=", htmlstring2(toon.toGwBBCode()),
        " onclick='dojo.html.selectInputText(this)'></td>"
      );
    }
    out.push("</tr>");
  }
  out.push("</table></div>");
  out.push("</div>");
  return out.join('');
} // drawTeamViewCode


DDExportView = {
  optMap: {
    color: 'xColor', desc: 'xDesc', code: 'xCode', skdesc: 'xSkDesc',
    links: 'xLinks', pickup: 'xPickup'
  }
};

function loadExportView(form) {
  var opts = g_store.get(g_store.keys.EXPORT_OPTIONS);
  if (opts) {
    opts = parseQueryString(opts);
    for (k in opts) {
      if (k == 'what') {
        form.xWhat[opts[k] == 'team' ? 0 : 1].checked = true;
      } else if (k == 'format') {
        for (var i1 = 0; i1 < form.xFormat.length; ++i1) {
          if (opts[k] == form.xFormat[i1].value) {
            form.xFormat[i1].checked = true;
            break;
          }
        }
      } else { // must be option
        form.elements[DDExportView.optMap[k]].checked = (opts[k] == 'true');
      }
    }
  }
  var team = g_state.getTeam();
  var toon = g_state.getMember();
  if (team) {
    var slots = team.slotRefs();
    var val = '', choices = [];
    for (var i1 = 0; i1 < slots.length; ++i1) {
      var slot = slots[i1];
      var k = team.makeBullet(slot.pos, slot.alt);
      choices.push( [k, k + '. ' + (slot.value ? slot.value.name : '')] );
      if (slot.value == toon) val = k;
    }
    setSelectValue(form.xMember, val, choices);
  }
  updExportView(form);
} // loadExportView


function updExportView(form) {
  var what = form.xWhat[0].checked ? 'team' : 'toon';
  form.xMember.disabled = form.xWhat[0].checked;
  var format;
  for (var i1 = 0; i1 < form.xFormat.length; ++i1) {
    if (form.xFormat[i1].checked) {
      format = form.xFormat[i1].value;
      break;
    }
  }
  var args = {what: what, format: format};
  var opts = ['color', 'desc', 'code', 'skdesc', 'links', 'pickup'];
  var fmtOpts = {
    text: {desc: true, code: true, skdesc: true},
    bbcode: {color: true, desc: true, code: true, skdesc: true, links: true},
    gwbbcode: {desc: true, pickup: true}
  }
  fmtOpts = fmtOpts[format];
  for (var i1 = 0; i1 < opts.length; ++i1) {
    var opt = opts[i1];
    var allow = fmtOpts[opt] || false;
    var el = form.elements[DDExportView.optMap[opt]];
    el.disabled = allow ? false : true;
    el.parentNode.className = allow ?
      '' : 'disabled';
    args[opt] = el.checked;
  }
  g_store.set(g_store.keys.EXPORT_OPTIONS, toQueryString(args));

  var out = [];    
  var team = g_state.getTeam();
  var slots;
  if (team) {
    if (what == 'team') {
      slots = team.slotRefs();
      if (args.desc) {
        switch (args.format) {
          case 'text':
          case 'bbcode':
          case 'gwbbcode':
            out.push(trim(team.desc).replace(/\n/g, '<br/>'), '<br/><br/>');
            break;
        }
      }
    } else {
      var bullet = getSelectValue(form.xMember);
      var pos = team.bulletPos(bullet);
      var alt = team.bulletAlt(bullet);
      slots = [ {pos: pos, alt: alt, value: team.slotValue(pos, alt)} ];
    }
  } else {
    slots = [ {pos: null, value: g_state.getMember()} ];
  }
  for (var i1 = 0; i1 < slots.length; ++i1) {
    var slot = slots[i1];
    var toon = slot.value;
    var bullet = slot.pos == null ? null : 
      SlotSet.prototype.makeBullet(slot.pos, slot.alt);
    if (args.format == 'text') {
      if (i1) out.push('<br/>-----<br/>');
      if (bullet) out.push(bullet, '. ');
      var tmp = drawToonViewText(toon, args);
      tmp = tmp.replace(/\n/g, '<br/>');
      out.push(tmp);
    } else if (args.format == 'bbcode') {
      if (i1) out.push('<br/>');
      if (bullet) out.push(bullet, '. ');
      var tmp = drawToonViewText(toon, args, /*bbcode=*/true);
      tmp = tmp.replace(/\n/g, '<br/>');
      out.push(tmp);
      out.push('<br/>\n');              
    } else { // gwbbcode
      out.push(drawToonViewGwBBCode(toon, args));
      out.push('<br/>\n');
    }
  }    
  var outEl = dojo.byId('buildExportContent');
  out = out.join('');
  outEl.innerHTML = out;
} // updExportContent

function chgCodeIncludeNames(inclNames) {
  g_store.set(g_store.keys.CODE_INCLUDE_NAMES, inclNames);
  updRoot({keys: {}});
} // chgCodeIncludeNames



function drawTeamViewText(team) {
  var slots = team ? team.slotRefs() : [];
  var out = [];
  if (team && team.desc) out.push(team.desc);
  for (var i1 = 0; i1 < slots.length; ++i1) {
    var slot = slots[i1];
    var tmp = drawToonViewText(slot.value);
    tmp.replace(/\n/g, '<br/>')
    out.push(team.makeBullet(slot.pos, slot.alt) + '. ' + tmp);
  }
  var sep = '\n-----\n';
  var text = out.join(sep);
  return drawViewTextWrap(text);
} // drawTeamViewText


function drawViewTextWrap(pre) {
  out = ["<div class='textView'>",
    "<div class='section'><span class='partType'>",
    "(Double-click on text to select all)",
    "</span>",
    "<div class='scroll partDesc'",
    " ondblclick='dijit._editor.selection.selectElementChildren(this)'>"];
  out.push(pre.replace(/\n/g, '<br/>'));
  out.push("</div></div></div>");
  out = out.join('');
  return out;    
} // drawViewTextWrap
