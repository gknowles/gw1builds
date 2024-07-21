
if (typeof dojo != 'undefined') { dojo.provide("ui.team"); }

/**
 * param [toon-object]
 * param [what to draw]
 *   noname
 *   toons
 *   desc - text description of skill
 */
function drawTeam(team, draw) {
  var out = [];

  if (!team) {
    return "<span class='partName'>(empty)</span>";
  }

  if (!draw.noname) {
    out.push("<span class='partName'>", team.name, "</span>");
  }
  if (draw.toons) {
    out.push("<div class='partList'><table cellspacing='0'>");
    var slots = team.slots();
    for (var i1 = 0; i1 < slots.length; ++i1) {
      for (var alt = 0; alt < slots[i1].length; ++alt) {
        var toon = slots[i1][alt];
        if (alt && toon == null) continue;
        out.push("<tr><td class='detail'><div style='clear: both");
        if (alt) out.push("; background-color: darkcyan; margin-left: 1em");
        out.push("'>", drawToon(toon, {pro: true}),
          "</div></td></tr>");
      }
    }
    out.push("</table></div>");
  }
  if (draw.desc && team.desc) {
    out.push("<div class='partDesc' style='clear: both'>",
      team.desc, "</div>");
  }

  return out.join('');
} // drawTeam(...)


function chgTeamDesc(val, team) {
  team = team || g_state.getTeam();
  team.desc = val;
  updRoot( {keys: {desc: true}, what: team} );
}
