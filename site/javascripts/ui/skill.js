/*
Copyright Glen Knowles 2006.
Distributed under the Boost Software License, Version 1.0.

item-grid.js - gw1builds ui

Common functions and variables
*/

/////////////////////////////////////////////////
// Skill icon style functions
/////////////////////////////////////////////////
function updSkillIcon(el, skill, enabled) {
  if (skill == null) {
    el.style.backgroundPosition = drawSkillIconOffset(0);
    dojo.html.addClass(el, 'empty');
    enabled = true;
  } else {
    el.style.backgroundPosition = drawSkillIconOffset(skill.id);
    dojo.html.removeClass(el, 'empty');
  }
  if (enabled) {
    el.style.opacity = 1;
  } else {
    el.style.opacity = .6;
  }
} // updSkillIcon(el, skill, enabled)
function drawSkillIcon(skill, enabled, content) {
  var out = ["<div class='partIcon"];
  if (skill == null) {
    out.push(" empty' style='background-position: ",
      drawSkillIconOffset(0), "'");
  } else {
    out.push("' style='background-position: ",
      drawSkillIconOffset(skill.id), "'");
  }
  if (!enabled) out.push(" style='opacity: .6'");
  out.push(">", content || '', "</div>");
  return out.join('');
} // drawSkillIcon(skill, enabled)
function drawSkillIconOffset(id, width) {
  if (width == null) width = 28;
  var pos = skillTilePos(id);
  var cols = 40;
  var x = -(pos % cols) * width;
  var y = -parseInt(pos / cols) * width;
  return x + 'px ' + y + 'px';
} // drawSkillIconOffset

//===========================================================================
function drawProIcon(pro, enabled) {
  var out = ["<img class='partIcon'"];
  if (pro == null) {
    out.push(" src='/images/professions/None.png'");
  } else {
    out.push(" src='/images/professions/", pro.abbrev, ".png'");
  }
  if (!enabled) out.push(" style='opacity: .6'");
  out.push(">");
  return out.join('');
} // drawProIcon(pro, enabled)

//===========================================================================
//  param [skill-object]
//  param [attrSource object]
//  param [what to draw
//    icon
//    attr - abbreviation of attribute line to which skill belongs
//    costs (true) - cost, activation, etc
//          (cols) - cost, etc in fixed width columns
//    desc - text description of skill
function drawSkill(skill, toon, draw) {
  var out = [];

  //No skill
  if (!skill) {
    return "<span class='skill'>" + drawSkillIcon(null, true) + "</span>";
  }

  if (draw.costs == true || draw.desc) {
    skill = skill.customized(toon);
  }

  out.push("<span class='skill'>");
  if (draw.costs) {
    out.push("<span class='skillIcons'>");
    if (skill.upkeep) {
      out.push("<span class='upkeep'>", skill.upkeep, "</span>");
    }
    if (skill.enCost) {
      var isAdj = draw.costs != 'cols' &&
        skill.enCostAdjusted != skill.enCost;
      out.push("<span class='enCost");
      if (skill.exhaustion) out.push(" exhaustion");
      if (isAdj) out.push(" adjusted");
      out.push("'>");
      out.push(skill.enCost);
      if (isAdj) {
        out.push(" <b class='adjSkillProp'>", skill.enCostAdjusted,
          "</b>");
      }
      out.push("</span>");
    } else if (skill.adCost) {
      out.push("<span class='adCost'>", skill.adCost, "</span>");
    } else if (draw.costs == 'cols') {
      out.push("<span class='noCost'></span>");
    }
    if (skill.activation) {
      var isAdj = draw.costs != 'cols' &&
        skill.activationAdjusted != skill.activation;
      out.push("<span class='activation");
      if (isAdj) out.push(" adjusted");
      out.push("'>");
      out.push(changeDec(skill.activation));
      if (isAdj) {
        out.push(" <b class='adjSkillProp'>",
          Number(skill.activationAdjusted).toFixed(2),'</b>');
      }
      out.push("</span>");
    } else if (draw.costs == 'cols')  {
      out.push("<span class='noActivation'></span>");
    }
    if (skill.recharge) {
      out.push("<span class='recharge'>", changeDec(skill.recharge),
        "</span>");
    } else if (draw.costs == 'cols')  {
      out.push("<span class='noRecharge'></span>");
    }
    out.push("</span>");
  } // if costs
  if (draw.icon) {
    out.push(
      drawSkillIcon(skill, toon ? toon.skillFilter(skill) : true)
    );
  }
  if (draw.attr) {
    out.push("<span class='skillAttr'>");
    if (skill.pro == '') {
      out.push('-');
    } else {
      out.push(g_attrs[skill.attr].abbrev);
    }
    out.push("</span>")
  }
  if (!draw.noname) {
    if (draw.icon) out.push('&nbsp;');
    out.push("<span class='partName", (skill.elite ? " elite" : ""),
      "'>", skill.name, "</span>");
  }
  if (draw.desc) {
    out.push("<div class='partDesc' style='clear: both'>",
      skill.desc, "</div>");
  }
  out.push("</span>");
  return out.join('');
} // drawSkill(...)


/////////////////////////////////////////////////
// Drag & Drop
/////////////////////////////////////////////////

//===========================================================================
// DDSkill - DragDrop policy that provides tooltip with full skill description
var DDSkill = DDPolicy;
DDSkill.drawTooltip = function(obj) {
  // obj = { id:<skillId>, toon:<attrSource> }
  var body = null;
  var skill = g_skillsById[obj.id];
  if (skill) {
    body = drawSkill(skill, obj.toon, {costs:true,desc:true});
  }
  return body;
};
