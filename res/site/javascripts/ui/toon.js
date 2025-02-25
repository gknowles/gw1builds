/*
Copyright Glen Knowles 2006 - 2024.
Distributed under the Boost Software License, Version 1.0.

toon.js - gw1builds ui
*/

/**
 * param [toon-object]
 * param [what to draw]
 *   icon
 *   pro - abbreviation of professions like 'A/Me20'
 *   noname
 *   attrs
 *   skills - skill icons
 *   desc - text description of toon
 *   exports - include copy/paste's of anet, bns, gwbbcode formats
 *   skipName
 */
function drawToon(toon, draw) {
  var out = [];

  //No profession
  if (!toon) {
    return "<span class='partName'>(empty)</span>";
  }

  //profession found, do description and setup tooltip info
  if (draw.icon) {
    out.push(drawProIcon(toon.primary, true));
  }
  if (draw.pro) {
    out.push("<span class='partType'>", toon.typeName(), "</span>");
  }
  if (!draw.noname) {
    out.push("<span class='partName'>", toon.name, "</span>");
  }
  if (draw.attrs) {
    var pattrs = toon.pattrArray();
    out.push("<div class='attr' style='clear: both'>",
      "<table cellspacing='0'>\n");
    var found = false;
    for (var i1 = 0; i1 < pattrs.length; ++i1) {
      var pattr = pattrs[i1];
      if (pattr.value == 0) continue;
      found = true;
      var className = pattr.isPrimary ?
        pattr.isPrimaryAttr ? 'primaryAttr' : 'primary'
        : 'secondary';
      out.push("<tr class='", className, "'>",
        "<td>", pattr.name, "</td>",
        "<td style='text-align: right'>", pattr.value, "</td>");
      if (pattr.value != pattr.rawValue()) {
        out.push('<td>(', pattr.rawValue());
        if (pattr.rune != 'None') {
          out.push(' + ', Character.prototype.runeTypes[pattr.rune][0]);
        }
        if (pattr.headgear) out.push(' + Head');
        out.push(')</td>');
      }
      out.push("</tr>\n");
    }
    if (!found) {
//      out.push("<tr><td>No Attributes</td></tr>");
    }
    out.push("</table></div>\n");
  }
  if (draw.skills) {
    out.push("<div class='partList'>",
      "<table cellspacing='0'>");
    var slots = toon.slots();
    for (var i1 = 0; i1 < slots.length; ++i1) {
      for (var alt = 0; alt < slots[i1].length; ++alt) {
        var skill = slots[i1][alt];
        if (alt && skill == null) continue;
        out.push("<tr><td class='detail ",
          "'><div class='", alt ? "fullAlt" : "full", "'",
          " style='clear: both'>",
          drawSkill(skill, null, {icon:true}),
          "</div></td></tr>");
      }
    }
    out.push("</table></div>");
  }
  if (draw.exports) {
    var exps = [
      ['Anet Skill', toon.toAnet(draw.skipName),
        toon.name + '.txt', toon.toAnet(/*skipName=*/true)],
      ['Anet Equip', toon.toAnetEquip(draw.skipName),
        toon.name + '.txt', toon.toAnetEquip(/*skipName=*/true)],
      ['GuildBuilds', toon.toCode()],
      ['gwBBCode', toon.toGwBBCode()]
    ];
    out.push("<div style='font-size: 9pt' class='partDesc'>",
      "<table>");
    for (var i1 = 0; i1 < exps.length; ++i1) {
      out.push("<tr><td class='detail'>",
        "<span class='partName'>", exps[i1][0], "</span></td>",
        "<td class='detail'><input type='text' size='25' readonly",
          " style='font-size: 7pt'",
          " value=", htmlstring2(exps[i1][1]),
          " onclick='selectInputText(this)'>");
      if (exps[i1][2]) {
        out.push("</td><td>", drawDownloadButton(exps[i1][2], exps[i1][3]));
      }
      out.push("</td></tr>");
    }
    out.push("</table></div>");
  }
  if (draw.desc && toon.desc) {
    out.push("<div class='partDesc' style='clear: both'>",
      toon.desc, "</div>");
  }

  return out.join('');
} // drawToon(...)


/////////////////////////////////////////////////
// Drag & Drop
/////////////////////////////////////////////////
/**
 * DDToonAttrs - DragDrop policy that provides tooltip with
 * the attributes of the toon
 */
var DDToonAttrs = Object.create(DDPolicy);
DDToonAttrs.drawTooltip = function(obj) {
  // obj = { toon:<toon> }
  var toon = obj.toon;
  var out = drawToon(toon, {noname:true,attrs:true});
  var title = out.indexOf('<td>') == -1 ? "No Attributes" : "Attributes";
  var res = { width: 'auto' };
  res.body = "<span class='partName'>" + title + "</span>" +
    "<div class='partDesc'>" + out + "</div>";
  return res;
}; // DDToonAttrs.drawTooltip
