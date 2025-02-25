/*
Copyright Glen Knowles 2006 - 2025.
Distributed under the Boost Software License, Version 1.0.

skill.js - gw1builds model

Skill data objects
*/

/////////////////////////////////////////////////
// Skill represents an in game skill with cost, recharge,
// description, progressions, etc
//
// css styles used:
//   effectValue - param value based on effective attribute value
//   skillFailure - failure chance warning when effective attribute is
//                  below the threshold
//   adjSkillProp - skill property, such as enCost or activation, that has
//                  been adjusted from its base value
/////////////////////////////////////////////////


// Whether customized skill properties should include adjustments for
// expertise, fastcasting, etc
//   0  base value only
//   1  adjusted value only
//   2  both base and adjusted - NOT IMPLEMENTED
Skill.prototype.showAdjustedProperties = 1;

// Set during initialization to the maximum number of attributes
// belonging to any one profession
Profession.prototype.maxAttrs = 0;

var FILTER_ALL_SKILLS = "All Skills";
var ATTR_NO_ATTRIBUTE = "No Attribute";

/**
 * Profession constructor
 */
function Profession(name, id, abbrev, campaign, desc, attrs) {
  this.name = name;
  this.id = id;
  this.abbrev = abbrev;
  this.campaign = campaign;
  this.desc = desc;
  this.attrs = attrs; // hash of Attributes
  this.skillAdjust = false; // has attr that changes unlinked skills?
                            //   (expertise, fast casting)
  var numAttrs = 0;
  for (var a in attrs) {
    attrs[a].pro = abbrev;
    g_attrs[a] = attrs[a];
    numAttrs += 1;
    if (attrs[a].skillAdjust) {
      this.skillAdjust = true;
    }
  }
  this.numAttrs = numAttrs;
  if (numAttrs > Profession.prototype.maxAttrs) {
    Profession.prototype.maxAttrs = numAttrs;
  }
}

Profession.prototype.sortKeys = function() {
  if (Profession.prototype._sortKeys) return Profession.prototype._sortKeys;

  var pros = [];
  for (var pro in g_pros) {
    pros.push(g_pros[pro]);
  }
  pros.sort(function(a,b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
  var keys = {}
  for (var i1 = 0; i1 < pros.length; ++i1) {
    keys[pros[i1].name] = i1;
    keys[pros[i1].abbrev] = i1;
  }
  keys[null] = i1;
  keys[''] = i1;
  Profession.prototype._sortKeys = keys;

  return keys;
} // Attribute.sortKeys

/**
 * Attribute constructor
 */
function Attribute(name, id, abbrev, isPrimary, skillAdjust, desc, pro) {
  this.name = name;
  this.id = id;
  this.abbrev = abbrev;
  this.isPrimary = isPrimary;
  this.skillAdjust = skillAdjust;
  this.desc = desc;
  if (pro != null) this.pro = pro;
}

Attribute.prototype.sortKeys = function() {
  if (Attribute.prototype._sortKeys) return Attribute.prototype._sortKeys;

  var attrs = [];
  for (var attr in g_attrs) {
    attrs.push(g_attrs[attr]);
  }
  var pkeys = Profession.prototype.sortKeys();
  attrs.sort(function(a,b) {
    var rc = pkeys[a.pro] - pkeys[b.pro];
    if (rc) return rc;
    if (a.isPrimary != b.isPrimary) {
      return (a.isPrimary) ? -1 : 1;
    }
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
  var keys = {}
  for (var i1 = 0; i1 < attrs.length; ++i1) {
    keys[attrs[i1].name] = i1;
    keys[attrs[i1].abbrev] = i1;
  }
  keys[null] = i1;
  keys[''] = i1;
  Attribute.prototype._sortKeys = keys;

  return keys;
} // Attribute.sortKeys

/**
 * Skill constructor
 */
function Skill(name, id, campaign, pro, attrName,
  elite, multiple, monster, pve, type,
  enCost, adCost, activation, recharge, upkeep,
  exhaustion, failure,
  desc, tags, progressions)
{
  this.name = name;
  this.id = id;
  this.campaign = campaign;
  this.pro = pro || '';
  this.attr = attrName;
  this.elite = elite;
  this.allowMultiple = multiple; // appear multiple times on skill bar
  this.monsterOnly = monster;
  this.pveOnly = pve; // pve only skill?
  this.type = type;
  this.enCost = enCost;
  this.adCost = adCost;
  this.activation = activation;
  this.recharge = recharge;
  this.upkeep = upkeep;
  this.exhaustion = exhaustion;
  this.failure = failure;
  this.rawDesc = desc;
  this.tags = tags;
  this.progs = progressions;
  this.desc = null;
}

/**
 * Default compare function for sorting skills
 *
 * @param right   other Skill object to compare with
 * @return        -1, 0, or 1
 */
Skill.prototype.compare = function(right) {
  if (this.pro != right.pro) {
    if (this.pro < right.pro) return -1;
    return 1;
  }
  if (this.name < right.name) return -1;
  if (this.name == right.name) return 0;
  return 1;
}


/**
 * Creates customized skill data based on an attribute
 * source such as a character. Specifying a null attrSource
 * results in generic ranges being shown in the description
 *
 * @param   attrSource    attribute values use to customize
 * @return                Skill object with customized values
 */
Skill.prototype.customized = function(attrSource, noRanges/*=false*/) {
  var out = new Skill;
  out.name = this.name;
  out.id = this.id;
  out.campaign = this.campaign;
  out.pro = this.pro;
  out.attr = this.attr;
  out.elite = this.elite;
  out.allowMultiple = this.allowMultiple;
  out.monsterOnly = this.monsterOnly;
  out.pveOnly = this.pveOnly;
  out.type = this.type;
  out.enCost = this.enCost;
  out.enCostAdjusted = this.enCost;
  out.adCost = this.adCost;
  out.activation = this.activation;
  out.activationAdjusted = this.activation;
  out.recharge = this.recharge;
  out.upkeep = this.upkeep;
  out.durationAdjust = 1.0;
  out.exhaustion = this.exhaustion;
  out.failure = this.failure;
  out.tags = this.tags;
  out.progs = this.progs;

  if (attrSource) {
    if (this.type.substr(-5) == "Spell" ||
      this.type.substr(-6) == 'Signet')
    {
      var a = attrSource.effectiveAttr("Fast Casting");
      out.activationAdjusted = out.activation * Math.pow(2, -a/15);
    }
    if (this.pro == 'R' || this.type.substr(-6) == "Attack" ||
      this.type.substr(-6) == "Ritual")
    {
      var a = attrSource.effectiveAttr("Expertise");
      out.enCostAdjusted = Math.round(out.enCost * (1.0 - .04 * a));
    }
    if (this.type.substr(-12) == 'Weapon Spell') {
      var a = attrSource.effectiveAttr('Spawning Power');
      out.durationAdjust = 1.0 + 0.02 * a;
    }
  }

  out.desc = this.desc_i(attrSource, noRanges);

  return out;
} // customized(attrSource)


/**
 * Returns an array of effect values for each variable effect
 * that the skill has. This is intended to be use for making
 * graphs of attribute value vs. effect value.
 *
 * g_skillsByName["Edge of Extinction"].progressionArray(12,14) returns
 * an array equivalent to:
 *   out[0] = [43,45,48];
 *   out[0].title = "Damage";
 *   out[1] = [126,134,142];
 *   out[1].title = "Duration";
 *   out[2] = [8,9,9];
 *   out[2].title = "Level";
 *
 * NOTE: For values < 0 or null is returned
 *
 * @param   low   min attribute to graph
 * @param   high  max attr value to graph
 * @return        progressions
 */
Skill.prototype.progressionArray = function(low, high) {
  var out = [];
  var progs = this.progs;
  for (var i1 = 0; i1 < progs.length; ++i1) {
    var prog = progs[i1];
    var a = [];
    a.title = prog[0];
    var i2 = low;
    for (; i2 < 0 && i2 <= high; ++i2) a.push(null);
    for (; i2 <= high; ++i2) {
      var val = this.effectValue(i2, prog[1], prog[2]);
      if (prog[3]) val *= prog[3];
      a.push(val);
    }
    out.push(a);
  }

  return out;
} // progressionArray(low, high)


/**
 * Description of linked attribute such as 'Air Magic', 'Unlinked Warrior',
 * or simply 'Unlinked'
 */
Skill.prototype.linkage = function() {
  out = [];
  if (this.attr != ATTR_NO_ATTRIBUTE) {
    out.push(this.attr);
  } else {
    if (this.pro != '') out.push(g_pros[this.pro].name, ' ');
    out.push("Unlinked");
  }
  return out.join('');
} // linkage


/**
 * Calculates the value of an effect that varies with an
 * attribute.
 *
 * @param   attr    value of attribute
 * @param   at0     value of effect when attr is 0
 * @param   at15    value of effect when attr is 15
 */
Skill.prototype.effectValue = function(attr, at0, at15) {
  return Math.round(((at15 - at0) / 15 * attr) + at0);
}


/**
 * Filters, customizes, and sorts skills into an array. The array
 * includes both section titles (strings) and skill objects. In addition
 * there is a 'matches' and 'count' property that return the number of
 * skills in the filtered and source lists respectively.
 *
 * filter is an object with method:
 *   include(Skill)
 * sort is an object with methods:
 *   compare(Skill1, Skill2)
 *   group(Skill)
 *
 * @param   skills      hash of skills to process (null -> g_skillsById)
 * @param   filter      filter to use (null -> include all skills)
 * @param   sort        sortation to use
 * @param   attrSource  source of customization attrs (null -> generic info)
 * @return              array of Skill objects and titles
 */
Skill.prototype.customizedArray =
  function(skills, filter, sort, attrSource)
{
  var out = new Array;
  out.count = 0;
  out.matches = 0;

  if (skills == null) skills = g_skillsByName;
  if (filter == null) filter = g_skillFilters[FILTER_ALL_SKILLS];
  if (sort == null) {
    alert("Attempt to get skill list with no sortation defined");
    return out;
  }

  for (var name in skills) {
    out.count += 1;
    var skill = skills[name];
    //if (attrSource && !attrSource.skillFilter(skill)) continue;
    if (!filter.include(skill)) continue;
    out.push(skill.customized(attrSource));
  }
  out.matches = out.length;
  out.sort(sort.compare);

  // insert titles
  if (out.length == 0) {
    out.push("No Matching Skills");
  } else {
    var title = sort.group(out[out.length - 1]);
    for (var i1 = out.length - 2; i1 >= 0; --i1) {
      var t2 = sort.group(out[i1]);
      if (t2 != title) {
        out.splice(i1 + 1, 0, title);
        title = t2;
      }
    }
    // no title if all titles are null
    if (title) out.splice(0,0,title);
  }

  return out;
} // customizedArray(skills, filter, sort, attrSource)


/////////////////////////////////////////////////
// Internal methods
/////////////////////////////////////////////////
/**
 * Internal method
 *
 * if attrSource is non-null the description will be customized to
 * the results of calling attrSource.effectiveAttr(attr)
 */
Skill.prototype.desc_i = function(attrSource, forExport/*=false*/) {
  var eopen = "<span class='effectValue'>";
  var eclose = "</span>";
  var ropen = '';
  var rclose = '';

  var out = [];
  if (this.elite) out.push("Elite ");
  out.push(this.type, ". ");
  if (this.rawDesc == null) out.push("No description.");
  else {
    if (this.pveOnly || this.attr == ATTR_NO_ATTRIBUTE) {
      attrSource = null;
    }
    var parts = this.rawDesc;
    for (var i1 = 0; i1 < parts.length; ++i1) {
      if (i1 % 2 == 0) { out.push(parts[i1]); continue; }
      var vals = parts[i1];
      // vals.length == 2
      // its an attribute based range
      var low = vals[0];
      var high = this.effectValue(16, vals[0], vals[1]);
      if (attrSource == null) {
        // (LOW..HIGH)
        out.push(eopen, ropen, low, "..", high, rclose, eclose);
        continue;
      }
      var attr = null;
      if (attrSource.effectiveAttr != null) {
        attr = attrSource.effectiveAttr(this.attr);
      }
      if (attr == null) {
        // (low..UNKNOWN..high)
        out.push(ropen, low, "..", eopen, "UNKNOWN", eclose, "..", high,
          rclose);
        continue;
      }
      // we have a specific attribute value
      var effect = this.effectValue(attr, vals[0], vals[1]);
      if (forExport) {
        out.push(eopen, effect, eclose);
        continue;
      }
      if (effect == low) {
        // (VAL..high)
        out.push(ropen, eopen, effect, eclose, "..", high, rclose);
        continue;
      }
      // (low..
      out.push(ropen, low, "..");
      if (effect == high) {
        // VAL)
        out.push(eopen, effect, eclose, rclose);
        continue;
      }
      if (low < high && effect < high || low > high && effect > high) {
        // VAL..high)
        out.push(eopen, effect, eclose, "..", high, rclose);
      } else {
        // high..VAL)
        out.push(high, "..", eopen, effect, eclose, rclose);
      }
    } // next part
  }
  if (this.failure) {
    var tail = out[out.length - 1];
    var opos = tail.lastIndexOf('(');
    out[out.length - 1] = tail.slice(0, opos);
    tail = tail.slice(opos);
    var loudFail = false;
    // attrs specfied and below failure threshold? wrap in failure
    if (attrSource != null) {
      var attr = attrSource.effectiveAttr(this.attr);
      if (attr == null) attr = 0;
      if (attr <= this.failure) {
        loudFail = true;
      }
    }
    if (loudFail) {
      out.push("<span class='skillFailure'>");
    } else {
      out.push("<span class='linkedAttr'>");
    }
    out.push(tail);
    out.push("</span>");
  } else {
    if (!forExport) {
      out.push(" <span class='linkedAttr'>(Attrib: ",
        this.linkage(), ")</span>");
    }
  }
  return out.join('');
}


/////////////////////////////////////////////////
// Global profession and skill sets
/////////////////////////////////////////////////
function searchHashById(h, id) {
  for (var key in h) {
    var val = h[key];
    if (val.id == id) return val;
  }
  return null;
}

var g_pros = new Object; // by abbrev
var g_attrs = new Object; // by name
g_attrs[ATTR_NO_ATTRIBUTE] = new Attribute(
  ATTR_NO_ATTRIBUTE, null, 'n/a', false, false, '', '');
var g_skillsByName = new Object; // by name
var g_skillsById = {}; // by id
var g_skillTags = new Object; // by name

/**
 * Called after skills are loaded, creates required
 * cross references
 */
function indexSkills() {
  var filters = {}
  for (var name in g_skillFilters) {
    if (name == FILTER_ALL_SKILLS) continue;
    var filt = g_skillFilters[name];
    for (var e in filt.tags) {
      if (filters[e] == null) filters[e] = {}
      filters[e][name] = true;
    }
  }

  for (var id in g_skillsById) {
    var skill = g_skillsById[id];
    skill.categories = {}
    for (var e in skill.tags) {
      var cats = filters[e];
      if (!cats) continue;
      for (var cat in cats) skill.categories[cat] = true;
    }
    g_skillsByName[skill.name] = skill;
  }
} // indexSkills


/////////////////////////////////////////////////
// Skill sorts
//
// A skill sort is any object with:
//   - compare(Skill,Skill) method, returns -1,0, or 1
//   - group(Skill) method, returns grouping under which skill falls
//   - desc property, description of what how it sorts
/////////////////////////////////////////////////
Skill.prototype.sorts = new Object; // by name

Skill.prototype.sorts["Name"] = {
  icon: "skill-name.png",
  desc: "All skills sorted in strict name order",
  compare: function(a,b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  },
  group: function(s) { return null; }
};
Skill.prototype.sorts["Profession"] = {
  icon: "skill-profession.png",
  desc: "Profession sorted the way Cloud likes it, not like the stupid in game one",
  compare: function(a,b) {
    if (a.pro < b.pro) return -1;
    if (a.pro > b.pro) return 1;
    return 0;
  },
  group: function(s) {
    if (s.pro == "") {
      return "Common Skills";
    } else {
      return g_pros[s.pro].name + " Skills";
    }
  }
};
Skill.prototype.sorts["Attribute"] = {
  icon: "skill-attribute.png",
  desc: "Skills grouped by associated attribute",
  compare: function(a,b) {
    if (a.attr != b.attr) {
      // sort skills with no attribute to the bottom
      if (a.attr == ATTR_NO_ATTRIBUTE) return 1;
      if (b.attr == ATTR_NO_ATTRIBUTE) return -1;
      if (a.attr < b.attr) return -1;
      return 1;
    }
    return 0;
  },
  group: function(s) { return s.attr; }
};
Skill.prototype.sorts["Type"] = {
  icon: "skill-type.png",
  desc: "Skills grouped by type attribute",
  compare: function(a,b) {
    var ta = a.type.split(' ').reverse().join(' ');
    var tb = b.type.split(' ').reverse().join(' ');
    if (ta < tb) return -1;
    if (ta > tb) return 1;
    return 0;
  },
  group: function(s) { return s.type; }
};
Skill.prototype.sorts["Cost"] = {
  icon: "skill-enCost.png",
  desc: "Skills grouped by cost type and amount",
  compare: function(a,b) {
    // Signets, Adrenals, Energies
    var ta = (a.adCost ? 1 : 0) + (a.enCost ? 2 : 0)
    var tb = (b.adCost ? 1 : 0) + (b.enCost ? 2 : 0)
    var rc = ta - tb;
    if (rc) return rc;
    // then by cost
    rc = a.adCost + parseInt(a.enCost) - b.adCost - parseInt(b.enCost);
    if (rc) return rc;
    // then by exhaustion
    rc = (a.exhaustion ? 1 : 0) - (b.exhaustion ? 1 : 0);
    return rc;
  },
  group: function(s) {
   if (s.enCost) return "Energy Skills";
   if (s.adCost) return "Adrenal Skills";
   return "Signets";
  }
};
Skill.prototype.sorts["Activation Time"] = {
  icon: "skill-activation.png",
  desc: "Skills sorted by activation time",
  compare: function(a,b) {
    return a.activation - b.activation;
  },
  group: function(s) { return null; }
};
Skill.prototype.sorts["Recharge Time"] = {
  icon: "skill-recharge.png",
  desc: "Skills sorted by recharge time",
  compare: function(a,b) {
    return a.recharge - b.recharge;
  },
  group: function(s) { return null; }
};
Skill.prototype.sorts["Campaign"] = {
  icon: "skill-campaign.png",
  desc: "Skills sorted by campaign",
  compare: function(a,b) {
    if (a.campaign < b.campaign) return -1;
    if (a.campaign > b.campaign) return 1;
    return 0;
  },
  group: function(s) { return s.campaign; }
};
Skill.prototype.sorts["Elite"] = {
  icon: "skill-elite.png",
  desc: "Skills sorted by elite status",
  compare: function(a,b) {
    if (a.elite != b.elite) return a.elite ? -1 : 1;
    return 0;
  },
  group: function(s) { return s.elite ? 'Elite' : 'Non-Elite'; }
};
Skill.prototype.sorts["PvE Only"] = {
  icon: "skill-pveOnly.png",
  desc: "Skills sorted by PvE-only status",
  compare: function(a,b) {
    if (a.pveOnly != b.pveOnly) return a.pveOnly ? -1 : 1;
    return 0;
  },
  group: function(s) { return s.pveOnly ? 'PvE Only' : 'PvE and PvP'; }
};


/////////////////////////////////////////////////
// Skill filters
//
// A skill filter is any object with:
//   - include(Skill) method, returns true to include skill
//   - desc property, description of what the filter includes
/////////////////////////////////////////////////
/**
 * SkillFilter constructor. A skill filter with a prototype
 * include() method that works with effect sets, used with
 * the xml defined skill filters
 *
 * @param name    name of filter
 * @param tags    hash of tags included in filter
 */
function SkillFilter(name, desc, tags) {
  this.name = name;
  this.desc = desc;
  this.tags = tags;
}
SkillFilter.prototype.include = function(s) {
  for (var e in s.tags) {
    if (this.tags[e]) return true;
  }
  return false;
}


/////////////////////////////////////////////////
// Set of skill filters indexed by name, initialized
// with default filter that includes everything
/////////////////////////////////////////////////
var g_skillFilters = new Object;
g_skillFilters[FILTER_ALL_SKILLS] = {
  include:function(s) { return true; },
  desc:"Shows all skills available to character"
};
