/*
Copyright Glen Knowles 2006.
Distributed under the Boost Software License, Version 1.0.

character.js - gw1builds model
*/

/////////////////////////////////////////////////
// Character - represents an in game character
// with associated professions, skills, etc
//
// Global Options
//   .autoRunes
//   .autoHeadgear
//   .autoTrailingAlternate
//
// Structors
//   Character(name)
//   toCode(skipName/*=false*/) -- see character-io.js
//   parse(str, toon/*=new Character*/, skipName/*=false*/)
//     -- see character-io.js
//   clone(newName)
//
// Commands
//   setName(name)
//   setLevel(level, bonusPts)
//   setPrimary(abbrev)
//   setSecondary(abbrev)
//   setItem(part, slot, upgradeSlot)
//   setHeadgearAttr(attrName)
//   setAttrValue(attrName, val)
//   setAttrRune(attrName, runeName/+val)
//   setSlot(pos, [alt], skillName) - sets a skillbar slot
//   moveSlot(pos, alt, fromPos, fromAlt)
//   insertAlt(pos, alt, skill)
//   deleteAlt(pos, alt)
//   optimize() - adjusts runes and headgear according to auto mode,
//     called implicitly by setAttrValue
//
// Queries
//   .name
//   .level
//   .attrBonusPts
//   .primary
//   .secondary
//   typeName() - char type 'E/Me20' etc
//   fullName() - name with owner 'You/Toon Name'
//   attrPoints() - attribute points [avail, total]
//   health() - [adjusted, base for current level]
//   headgearAttr()
//   pattr(attrName)
//   pattrArray() - all pattrs valid for type
//   slotPrimes() - current skillbar slots, simple array, alternates excluded
//   slots() - array of arrays, containing the primary and alternates
//     for each skill slot
//   slotRefs() - skill slots returned as array of objects of the form
//     {pos:, alt:, value:}
//   slotValue(pos, alt) - skill at a specific slot
//   toAnet()
//
//   primaryChoices()
//   secondaryChoices()
//   attrValueChoices(attrName) - CharacterAttrCost for each value 0-16
//   validAttr(attrName)
//   effectiveAttr(attrName) - required for attrSource
//   skillFilter(skillObj) - required for attrSource
//
// Static Data
//   levelHealth
//   levelAttrPts
//   attrCost
//   attrCost.highAttr(pts)
//   runeTypes
//   changeKeys
//
/////////////////////////////////////////////////
// Set functions (and optimize()) return a hash of what has been changed
// or null if the requested change was invalid. Possible keys in the
// hash are:
//   name
//   desc
//   level
//   attrBonusPts
//   primary
//   secondary
//   attrPoints
//   health
//   headgearAttr
//   items
//   runes
//   effectiveAttr
//   attrValueChoices
//   skillAdjust (expertise or fast casting)
//   skillArray
//   targetSkillArray
//
//   secondaryChoices (primary)
//   headgearAttrChoices (primary)
//   skillFilter (primary | secondary)
//   typeName (primary | secondary | level)
/////////////////////////////////////////////////

// These three statements mirror the way dojo.inherit(...) works,
// but we're trying to keep model/*.js dependency free
Character.prototype = new SlotSet;
Character.prototype.constructor = Character;
Character.prototype.superclass = SlotSet.prototype;
delete Character.prototype.insertSlot;
delete Character.prototype.deleteSlot;

/////////////////////////////////////////////////
// Global Options
/////////////////////////////////////////////////
// change runes with attr values are set
Character.prototype.autoRunes = true;

// change headgear when attr values are set
Character.prototype.autoHeadgear = true;

// ensure there is always exactly one trailing empty
// alternate skill for the last skill slot
Character.prototype.autoTrailingAlternate = false;

// change name to conform to Anet's character naming rules
Character.prototype.anetNameFormat = false;

/////////////////////////////////////////////////
// Static Data
/////////////////////////////////////////////////
Character.prototype.nameFormatNone = 0;
Character.prototype.nameFormatAnet = 1;
Character.prototype.nameFormatRelaxed = 2;

// characters that can appear in a name (upper case is
// also allowed)                     0         1         2
//                                   012345678901234567890123456
Character.prototype.anetNameChars = " abcdefghijklmnopqrstuvwxyz";
Character.prototype.anetNameMaxLength = 19;

Character.prototype.relaxedNameChars =
// 0         1         2         3         4         5         6
// 012345678901234567890123456789012345678901234567890123456789012
  " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
Character.prototype.relaxedNameMaxLength = 30;


// health per level
Character.prototype.levelHealth = [
// 0   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20
   0,100,120,140,160,180,200,220,240,260,280,300,320,340,360,380,400,420,440,460,480
];

// attr points per level
Character.prototype.levelAttrPts = [
// 0 1 2  3  4  5  6  7  8  9 10 11 12 13 14 15  16  17  18  19  20
   0,0,5,10,15,20,25,30,35,40,45,55,65,75,85,95,110,125,140,155,170
];

// array of attribute points required for attribute of given level
Character.prototype.attrCost = [
// 0 1 2 3  4  5  6  7  8  9 10 11 12
   0,1,3,6,10,15,21,28,37,48,61,77,97
];
Character.prototype.attrCost.highAttr = function(pts) {
  var out = 0;
  for (var i1 = 0; i1 < this.length; ++i1) {
    if (this[i1] > pts) break;
    out = i1;
  }
  return out;
}

// hash of runes
Character.prototype.runeTypes = { // <name>:[<attr bonus>,<health change>]
  "None":[0,0],"Minor":[1,-10],"Major":[2,-45],"Superior":[3,-85]
};
Character.prototype.runeNames = ["None", "Minor", "Major", "Superior"];

// hash of things that can change in a char
Character.prototype.changeKeys = {
  name: true,
  desc: true,
  level: true,
  attrBonusPts: true,
  primary: true,
  secondary: true,
  attrPoints: true,
  health: true,
  headgearAttr: true,
  items: true,
  runes: true,
  effectiveAttr: true,
  attrValueChoices: true,
  skillAdjust: true,
  skillArray: true,
  secondaryChoices: true,
  headgearAttrChoices: true,
  skillFilter: true,
  typeName: true // e.g. E/Me20
};


/////////////////////////////////////////////////
// CharacterAttr
/////////////////////////////////////////////////
/**
 * Construct data for a specific attribute of a char
 */
function CharacterAttr(value, rune, headgear,
  id, name, abbrev, desc, isPrimary, isPrimaryAttr)
{
  this.value = value; // effective value, after headgear and runes
                      //   headgear/runes are not included if !isPrimary
  this.rune = rune; // 'None', 'Minor', 'Major', 'Superior'
                    //   if !isPrimary the rune must be ignored
  this.headgear = headgear; // is headgear for this attribute?
                            //   if !isPrimary the headgear must be ignored

  this.id = id; // attr id
  this.name = name; // name of attribute
  this.abbrev = abbrev;
  this.desc = desc;
  this.isPrimary = isPrimary; // is from primary profession?
  this.isPrimaryAttr = isPrimaryAttr; // is this the primary attribute?
} // CharacterAttr(...)

CharacterAttr.prototype.rawValue = function() {
  if (this.isPrimary) {
    return this.value - Character.prototype.runeTypes[this.rune][0]
      - this.headgear;
  }
  return this.value;
} // rawValue()

CharacterAttr.prototype.clone = function() {
  return new CharacterAttr(this.value, this.rune, this.headgear,
    this.id, this.name, this.abbrev, this.desc,
    this.isPrimary, this.isPrimaryAttr);
} // clone()

/////////////////////////////////////////////////
// CharacterAttrCost
/////////////////////////////////////////////////
/**
 * Construct data for the cost of a set of character attributes
 */
function CharacterAttrCost(attrPts, runes, health) {
  this.attrPts = attrPts; // number of attribute points used
  this.runes = runes; // number of runes used
  this.health = health; // adjustment to health caused by runes
} // CharacterAttrCost(...)

CharacterAttrCost.prototype.clone = function() {
  return new CharacterAttrCost(this.attrPts, this.runes, this.health);
} // clone()

CharacterAttrCost.prototype.copyTo = function(out) {
  out.attrPts = this.attrPts;
  out.runes = this.runes;
  out.health = this.health;
} // copyTo(out)

/**
 * Compare two cattr objects
 *
 * @param   c2  CharacterAttrCost to compare with
 * @return      result of comparison, an integer <0, 0, or >0
 */
CharacterAttrCost.prototype.compare = function(c2) {
  if (this.health != c2.health) return this.health - c2.health;
  if (this.runes != c2.runes) return c2.runes - this.runes; // fewer is better
  return c2.attrPts - this.attrPts; // attrs used, fewer is better
} // CharacterAttrCost.compare(c2)

/**
 * Compare two cattr objects, and set the second to be equal
 * to the first if it was greater. Used when searching for
 * a new best.
 *
 * @param   c2  (in/out) CharacterAttrCost to compare (and maybe update)
 * @return      was c2 updated to be equal to c1?
 */
CharacterAttrCost.prototype.compareAndSet = function(c2) {
  if (this.compare(c2) > 0) {
    c2.health = this.health;
    c2.runes = this.runes;
    c2.attrPts = this.attrPts;
    return true;
  }
  return false;
} // CharacterAttrCost.compareAndSet(c2)


/**
 * Score a CharacterAttr object and update the cost object
 * accordingly. If add is invalid the object is unchanged.
 *
 * @param   pattr   attribute whose score is to be accumulated
 * @return          was pattr valid?
 */
CharacterAttrCost.prototype.addAttr = function(pattr) {
  if (!pattr.isPrimary) {
    var raw = pattr.value;
    if (raw > 12) return false;
    this.attrPts += Character.prototype.attrCost[raw];
  } else {
    var runeType = Character.prototype.runeTypes[pattr.rune];
    var runeBonus = runeType[0];
    var raw = pattr.value - runeBonus - pattr.headgear;
    if (raw < 0 || raw > 12) return false;
    // has rune? increment num runes used
    if (runeBonus) {
      this.runes += 1;
      // didn't leave room for vigor? take away 40 health (50 - implied vitae)
      if (this.runes == 5) this.health += -40;
      this.health += runeType[1];
    }
    this.attrPts += Character.prototype.attrCost[raw];
  }
  return true;
} // CharacterAttrCost.addAttr(pattr)


/////////////////////////////////////////////////
// Structors
/////////////////////////////////////////////////
/**
 * Constructs a character with:
 *   - first two defined professions as primary and secondary
 *   - all attributes set to 0
 *   - no runes
 *   - headgear matching primary attribute
 *   - no skills
 *   - level 20 + 30 attribute points
 *   - no armor
 *   - no weapon or off-hand
 *
 *   - implements functions required to be an attrSource
 *       effectiveAttr(attr)
 *       skillFilter(skill)
 */
function Character(name) {
  this.setName(name);
  this.desc = '';
  // this.primary = Profession // not null
  // this.secondary = Profession // not null
  // this.slots // array of prime+alts skill ref arrays
  //   with array property for each profession
  // this.pattrs = {"attrName":CharacterAttr, ...}
  // this.cattrs = {"attrName":CharacterAttrCost[17], ...}

  // init profession
  this.primary = null;
  this.secondary = null;
  var maxAttrs = 0;
  for (var p in g_pros) {
    var pro = g_pros[p];
    if (this.primary == null) {
      this.primary = pro;
    } else if (this.secondary == null) {
      this.secondary = pro;
    } else {
      break;
    }
  }

  // init skill slots
  SlotSet.call(this, 8, 'skillArray', 7);
  // holds skills of unselected professions when switching back and forth
  this.offSlots = {}
  for (var p in g_pros) {
    this.offSlots[p] = [];
  }

  // init attrs
  this.pattrs = new Object;
  // add attrs for all professions
  for (var p in g_pros) {
    var pro = g_pros[p];
    var isPrimary = (p == this.primary.abbrev);
    for (var a in pro.attrs) {
      var ainfo = pro.attrs[a];
      this.pattrs[a] = new CharacterAttr(0, 'None', false,
        ainfo.id, a, ainfo.abbrev, ainfo.desc,
        isPrimary, ainfo.isPrimary);
    }
  }
  this.attrHealth = 0;

  // init attr choices cache
  this.cattrs = new Object;
  this.cautoRunes = this.autoRunes;
  this.cautoHeadgear = this.autoHeadgear;

  // init step data used by optimizer, extra element on the end
  // is for the headgear step
  this.optimizeStepData_i = [];
  var maxAttrs = Profession.prototype.maxAttrs;
  for (var i1 = 0; i1 < maxAttrs + 1; ++i1) {
    this.optimizeStepData_i.push(new Object);
    var data = this.optimizeStepData_i[i1];
    data.cattr = new CharacterAttrCost;
    data.best = [];
    for (var i2 = 0; i2 < maxAttrs; ++i2) {
      data.best.push(new Object);
    }
  }
  this.optimizeData_i = this.optimizeStepData_i[maxAttrs];
  this.optimizeStepData_i.pop();

  // init level and attr points
  this.setLevel(20, 30);

  // init items
  var slots = Item.prototype.slots;
  // holds armor of unselected professions when switching back and forth
  this.offItems = {}
  for (var p in g_pros) {
    this.offItems[p] = {};
    for (var i1 = 0, l = slots.length; i1 < l; ++i1) {
      var item = new Item;
      var slot = slots[i1];
      switch (slot) {
      case 'head':
      case 'hands':
      case 'chest':
      case 'legs':
        item.setRune(item.armorRune('Vitae'),
          slot, g_pros[p]);
        break;
      case 'feet':
        item.setRune(item.armorRune('Superior Vigor'),
          slot, g_pros[p]);
        break;
      }
      item.setColor(0);
      this.offItems[p][slot] = item;
    }
  }
  this.items = this.offItems[this.primary.abbrev];
} // Character(name)


/**
 * Duplicate a character object, but with a new name
 *
 * @param   name  name of new character
 * @return  Character object
 */
Character.prototype.clone = function(name) {
  var p = this.parse(this.toCode());
  if (name) p.setName(name);
  return p;
} // clone(newName)


Character.prototype.dumpAttrs = function() {
  var out = "";
  var pattrs = this.pattrArray();
  for (var i1 = 0; i1 < pattrs.length; ++i1) {
    var pattr = pattrs[i1];
    out += pattr.name + ': ' + pattr.rawValue() + ',' +
      pattr.rune + ',' + pattr.headgear + '\n';
  }
  return out;
} // dumpAttrs()


/////////////////////////////////////////////////
// Commands
/////////////////////////////////////////////////
/**
 * Set name. Automaticly converts it to a valid GW character
 * name if it isn't one.
 *
 * @param   name    new character name
 */
Character.prototype.setName = function(name) {
  var ret = {};
  var old = this.name;

  if (this.anetNameFormat) {
    this.name = this.toAnetName(name);
  } else {
    this.name = this.toRelaxedName(name);
  }

  // no change? exit
  if (this.name == old) return ret;
  ret.name = true;
  return ret;
} // setName(newName)


/**
 * Converts a name into a legal Anet format name
 *
 * @param name    name to translate
 * @return        Anet formatted name
 */
Character.prototype.toAnetName = function(name) {
  var n = String(name).toLowerCase();
  var cap = true; // should next letter be capitalized? true at start of name
                  //   and immediately following a space
  var space = false; // is there a space pending?
  var out = "";
  for (var i1 = 0; i1 < n.length; ++i1) {
    var ch = n.charAt(i1);
    // not an allowed character? skip
    if (this.anetNameChars.indexOf(ch) == -1) continue;

    // space? handle it
    if (ch == ' ') {
      // space where capital belongs? skip
      if (cap) continue;
      space = true; // pending space
      cap = true; // next char should be capitalized
      continue;
    }

    // name (and any pending space) max length? done
    if (out.length + space >= this.anetNameMaxLength) break;

    // space pending? add it
    if (space) {
      out += ' ';
      space = false;
    }

    // cap? add capitalized
    if (cap) {
      out += ch.toUpperCase();
      cap = false;
    } else {
      // not cap. just add
      out += ch;
    }
  }

  return out;
} // toAnetName


/**
 * Converts a name into a legal relaxed format name, relaxed
 * format allows any combination of upper- and lowercase letters
 * and numbers. Spaces may appear as long as they appear singlely
 * and are not leading or trailing
 *
 * @param name    name to translate
 * @return        Relaxed formatted name
 */
Character.prototype.toRelaxedName = function(name) {
  // Replace repeated spaces, newlines and tabs with a single space
  var n = String(name).replace(/^\s*|\s(?=\s)|\s*$/g, "");
  var out = "";
  for (var i1 = 0; i1 < n.length; ++i1) {
    var ch = n.charAt(i1);
    // not an allowed character? skip
    if (this.relaxedNameChars.indexOf(ch) == -1) continue;

    // name (and any pending space) max length? done
    if (out.length >= this.relaxedNameMaxLength) break;

    out += ch;
  }
  return out;
} // toRelaxedName


/**
 * Set level and number of bonus attr points
 *
 *  - calculates total attribute points
 *  - adjusts attributes down if mandated by reduced attr points
 *  - clears attribute choices cache
 *
 * @param   level     character level
 * @param   bonusPts  number of points from quests [0, 15, 30]
 */
Character.prototype.setLevel = function(level, bonusPts) {
  if (level < 0 || level > 20) {
    alert("Level " + level + " isn't in the range [0,20]");
    return null;
  }
  switch (bonusPts) {
  case 0:
  case 15:
  case 30:
    break;
  default:
    alert("Bonus points '" + bonusPts + "': must be 0, 15, or 30");
    return null;
  }

  var ret = {};
  var oldTotal = this.attrTotalPts;
  if (this.level != level) {
    ret.level = true;
    ret.health = true;
    ret.typeName = true;
    this.level = level;
  }
  if (this.attrBonusPts != bonusPts) {
    ret.attrBonusPts = true;
    this.attrBonusPts = bonusPts;
  }
  this.attrTotalPts = this.levelAttrPts[this.level] +
    this.attrBonusPts;

  // total attr points changed?
  //   - recalculate attr points
  //   - adjust down attributes if needed
  //   - clear attr choices cache
  if (!oldTotal || oldTotal != this.attrTotalPts) {
    ret.attrPoints = true;
    ret.attrValueChoices = true;
    ret.effectiveAttr = true; // TODO: check for change
    this.cattrs = new Object;
    this.correctAttrs_i(/*changePrimaryFirst = */ false);
  }

  return ret;
} // setLevel(level, bonusPts)


/**
 * Set the primary profession
 *
 * - change secondary to old primary if it conflicts with new primary
 * - adjust attribute values of new primary
 * - save selected skills of old primary
 * - update skillbar with selected skills of new primary
 * - clear attribute choices cache
 *
 * @param abbrev  abbrev of new primary profession
 */
Character.prototype.setPrimary = function(abbrev) {
  var ret = {};
  var pri = g_pros[abbrev];
  var oldPri = this.primary;

  if (pri == null) {
    alert(abbrev + " is not a valid primary profession");
    return null;
  }

  // no change? exit
  if (pri == oldPri) return ret;
  ret.primary = true;
  ret.secondaryChoices = true;
  ret.headgearAttr = true;
  ret.headgearAttrChoices = true;
  ret.runes = true;
  ret.effectiveAttr = true;
  ret.attrValueChoices = true;
  if (pri.skillAdjust || oldPri.skillAdjust) {
    ret.skillAdjust = true; // TODO: test for change
  }
  ret.typeName = true;
  ret.attrPoints = true; // TODO: test for change
  ret.health = true; // TODO: test for change

  // new pri same as secondary? change secondary to old pri
  if (pri.name == this.secondary.name) {
    ret.secondary = true;
    this.secondary = this.primary;
    // strip rune and headgear effects
    this.demoteAttrs_i(this.secondary);
  }

  this.primary = pri;
  // enable rune and headgear
  this.promoteAttrs_i(this.primary);

  // adjust attributes
  this.correctAttrs_i(/*changePrimaryFirst = */ true);

  // adjust skills
  if (oldPri.abbrev != this.secondary.abbrev) {
    ret.skillArray = true;
    ret.skillFilter = true;
    this.swapProSkills_i(oldPri.abbrev, this.primary.abbrev);
  }

  // adjust items
  this._swapProItems(oldPri.abbrev, this.primary.abbrev);

  // clear attribute choices cache
  this.cattrs = new Object;

  return ret;
} // setPrimary(abbrev)


/**
 * Set the secondary profession
 *
 * - adjust attribute values and highs of new secondary
 * - save selected skills of old secondary
 * - update skillbar with selected skills of new secondary
 * - clear attribute choices cache
 *
 * @param abbrev  abbrev of new secondary profession
 */
Character.prototype.setSecondary = function(abbrev) {
  var ret = {};
  var sec = g_pros[abbrev];
  var oldSec = this.secondary;

  // invalid new secondary? fail
  if (sec == null || sec == this.primary) {
    alert(abbrev + " is not a valid secondary profession");
    return null;
  }

  // no change? exit
  if (sec == this.secondary) return ret;

  ret.secondary = true;
  ret.attrPoints = true; // TODO: test for change
  ret.health = true; // TODO: test for change
  ret.effectiveAttr = true;
  ret.attrValueChoices = true;
  ret.skillArray = true;
  ret.skillFilter = true;
  ret.typeName = true;

  // test for skillAdjust
  for (var a in oldSec.attrs) {
    var attr = oldSec.attrs[a];
    if (attr.skillAdjust && !attr.isPrimary) {
      ret.skillAdjust = true;
    }
  }
  for (var a in sec.attrs) {
    var attr = sec.attrs[a];
    if (attr.skillAdjust && !attr.isPrimary) {
      ret.skillAdjust = true;
    }
  }

  this.secondary = sec;
  // strip rune and headgear effects
  this.demoteAttrs_i(this.secondary);

  // recalculate attr points and adjust down attributes in new secondary
  //   if needed
  this.correctAttrs_i(/*changePrimaryFirst = */ false);

  // adjust skills
  this.swapProSkills_i(oldSec.abbrev, this.secondary.abbrev);

  // clear attribute choices cache
  this.cattrs = new Object;

  return ret;
} // setSecondary(abbrev)


/**
 * Set equipment item. Item must be allowed for primary profession
 * or null.
 *
 * @param   part    item or upgrade to set
 * @param   slot    location on character of item
 * @param   uslot   location of item to upgrade
 */
Character.prototype.setItem = function(part, slot, uslot) {
  var ret = {}, ret1 = {}, ret2 = {};
  if (!(slot in this.items)) {
    alert("setItem: unknown location '" + slot + "'");
    return null;
  }
  if (part && part.pro && part.pro != this.primary.abbrev) {
    alert("'" + part.name + "' not valid for " + this.primary.name);
    return;
  }
  var item = this.items[slot];
  uslot = uslot || 'base';
  if (uslot == 'base') {
    if (part && part.where != slot) {
      alert("'" + part.name + "' can't be used as " + slot);
      return null;
    }
    if (slot == 'head') {
      ret1 = this._setHeadgearAttr(part.attrName);
    }
  } // if uslot == base
  else if (uslot == 'suffix' &&
    item.typeKeys[item.base.type] == 'armor')
  {
    if (item[uslot] && item[uslot].attrName) {
      ret1 = this._setAttrRune(item[uslot].attrName, 'None');
    }
    if (part && part.attrName) {
      ret2 = this._setAttrRune(part.attrName, part.attrValue);
    }
  } // if rune
  if (!ret1 || !ret2) return null
  ret = item.setPart(part, uslot);
  for (var k in ret1) ret[k] = true;
  for (var k in ret2) ret[k] = true;
  return ret;
} // setItem


/**
 * Set attribute to receive headgear bonus. This must be an attribute
 * of the primary profession or 'None' for no headgear bonus
 *
 * - sets headgear
 * - adjusts low/value/high range for affected attributes
 * - clear attribute choices cache
 *
 * @param   name  name of attribute
 */
Character.prototype.setHeadgearAttr = function(name) {
  var ret = this._setHeadgearAttr(name);
  if (ret && ret.headgearAttr) {
    var item = this.items['head'];
    var base = Item.prototype.headgearBase(name);
    if (base != item.base) {
      item.setBase(base);
      ret.items = true;
    }
  }
  return ret;
} // setHeadgearAttr(attrName)


/**
 * Set the value of an attribute.
 *
 * - adjusts the overall attribute point usage
 * - clear effected part of attribute choices cache
 *
 * @param   name        attribute to set
 * @param   val         new value of the attribute
 * @param   noOptimize  don't optimize, even if autoHeadgear/Runes is set
 */
Character.prototype.setAttrValue = function(name, val, noOptimize) {
  var ret = {};
  if (!this.validAttr(name)) {
    alert(name + " attribute doesn't exist for " + this.typeName());
    return null;
  }
  var pattr = this.pattrs[name];
  var minval = 0, maxval = 12;
  if (!this.autoRunes) {
    if (!this.autoHeadgear) { // fully manual
      minval = pattr.value - pattr.rawValue();
      maxval = minval + 12;
    } else { // manual runes, auto headgear
      minval = pattr.value - pattr.rawValue();
      if (pattr.isPrimary) minval -= pattr.headgear;
      maxval = minval + 12 + pattr.isPrimary;
    }
  } else {
    if (!this.autoHeadgear) { // auto runes, manual headgear
      minval = (pattr.isPrimary && pattr.headgear) ? 1 : 0;
      maxval = minval + 15;
    } else { // fully auto
      minval = 0;
      maxval = 16;
    }
  }
  if (val > maxval || val < minval) {
    alert("Attempt to set " + name + " to " + val + " must be " +
      minval + ".." + maxval);
    return null;
  }

  var oldVal = pattr.value;
  // no change? exit
  if (oldVal == val) return ret;

  pattr.value = val;
  // try to optimize and fail? restore old value and exit
  if (!noOptimize && !this.optimize()) {
    pattr.value = oldVal;
    alert("Attempt to set " + name + " to " + val);
    return null;
  }

  ret.attrPoints = true; // TODO: test for change
  ret.health = true; // TODO: test for change
  ret.headgearAttr = true; // TODO: test for change
  ret.runes = true; // TODO: test for change
  ret.effectiveAttr = true;
  ret.attrValueChoices = true;
  if (pattr.isPrimary && this.primary.attrs[name].skillAdjust) {
    // TODO: check secondary attr skillAdjust
    ret.skillAdjust = true;
  }

  // clear effected attribute choices
  for (var a in this.cattrs) {
    if (a != name) {
      delete this.cattrs[a];
    }
  }

  return ret;
} // setAttrValue(name, val)


/**
 * Set the rune for an attribute of the primary profession
 *
 * - sets rune
 * - adjusts value for related attribute
 * - clear attributes choices cache
 *
 * @param name  attribute of rune to set
 * @param val   name or attr bonus from Character.prototype.runeTypes
 */
Character.prototype.setAttrRune = function(name, val) {
  var ret = this._setAttrRune(name, val);
  if (ret && ret.runes) {
    this._updateItems();
  }
  return ret;
} // setAttrRune


/**
 * Set, or empty, slot in skillbar
 *
 * @param pos     position in skillbar [0,7] to set
 * @param alt     (optional) 0 or ordinal of alternate for pos
 * @param skill   skill object or null
 */
Character.prototype.setSlot = function(pos, alt, skill) {
  if (arguments.length == 2) {
    skill = alt;
    alt = 0;
  }

  // make sure skill is valid for this character
  if (skill && !this.skillFilter(skill)) {
    alert("setSlot: " + skill.name + " not valid for " + this.typeName());
    return null;
  }

  var ret = this.superclass.setSlot.call(this, pos, alt, skill);

  // changed a prime to non-null? remove any conflicting primaries
  if (skill && alt == 0 && ret.skillArray) {
    var slots = this.slots();
    // remove duplicates (unless skill allows multiple)
    // or 2nd elite
    for (var i1 = 0; i1 < slots.length; ++i1) {
      if (i1 == pos) continue;
      var s0 = slots[i1][0];
      if (s0 == null) continue;
      if (s0.name == skill.name && !s0.allowMultiple ||
        s0.elite && skill.elite)
      {
        slots[i1][0] = null;
      }
    } // for each slot
  } // if alt == 0

  return ret;
} // setSlot(pos, [alt], skill)


/**
 * Updates headgear and runes for best health first and fewest
 * attribute points second. Changes are limited by the .autoRunes
 * and .autoHeadgear settings.
 *
 * @return  change hash, or null if impossible combination of attributes
 */
Character.prototype.optimize = function() {
  var pattrs = this.pattrArray();
  var cattr = new Object;
  var ret = this.optimize_i(pattrs, cattr);
  if (ret == null) return null;
  var pts = this.attrTotalPts - cattr.attrPts;
  if (this.attrPts != pts) {
    this.attrPts = pts;
    ret.attrPoints = true;
  }
  if (this.attrHealth != cattr.health) {
    this.attrHealth = cattr.health;
    ret.health = true;
  }
  if (ret.headgearAttr || ret.runes) {
    var ret2 = this._updateItems();
    for (var k in ret2) ret[k] = true;
  }
  return ret;
} // optimize()


/////////////////////////////////////////////////
// Queries
/////////////////////////////////////////////////
/**
 * Get type code for character, such as E/Me20
 *
 * @return  type code
 */
Character.prototype.typeName = function(inclLevel/*=true*/) {
  var val = this.primary.abbrev + '/' + this.secondary.abbrev;
  if (inclLevel !== false) val += this.level;
  return val;
} // typeName()


/**
 * Get full name, including owner if present
 *
 * @return  full name
 */
Character.prototype.fullName = function() {
  var out = this.name;
  if (this.access && this.access.owner) {
    out = this.access.owner + '/' + out;
  }
  return out;
} // fullName()


/**
 * Get attribute points used and total. Returns a two element array:
 *   arr[0] is the number of unused attribute points
 *   arr[1] is the total attribute points that can be used
 *
 * @return  array of unused and total attribute points
 */
Character.prototype.attrPoints = function() {
  return [this.attrPts,this.attrTotalPts];
} // attrPoints()


/**
 * Get health, both adjusted for selected runes and base value for current
 * level. Returns a two element array:
 *   arr[0] is the adjusted health
 *   arr[1] is the base health for character of this level + superior vigor
 *
 * @return  array of adjusted and base health
 */
Character.prototype.health = function() {
  var base = this.levelHealth[this.level] + 90;
  return [base + this.attrHealth, base];
} // attrPoints()


/**
 * Get attribute name of current headgear
 *
 * @return  attribute name
 */
Character.prototype.headgearAttr = function() {
  for (var a in this.primary.attrs) {
    if (this.pattrs[a].headgear) return this.pattrs[a].name;
  }
  return "None";
} // headgearAttr()


/**
 * Get attribute info for a specific named attribute, must be valid for
 * the current professions
 *
 * @param   name  name of attribute
 * @return        CharacterAttr object for named attribute
 */
Character.prototype.pattr = function(name) {
  // attr not of primary or secondary, or is the primary of the secondary? fail
  if (!this.validAttr(name)) {
    alert(name + " attribute doesn't exist for " + this.typeName());
    return null;
  }

  return this.pattrs[name];
} // pattr(attrName)


/**
 * Get array of CharacterAttr objects for each attribute of the current
 * primary and secondary professions. The primary attribute is first,
 * followed by the other attributes of the primary profession by name,
 * finally followed by the attributes of the secondary profession, also
 * sorted by name.
 *
 * @param   secondaryFirst  if true secondary profession attrs come first
 * @param   byRank          if true attrs come highest rank first, instead
 *                            of by name
 * @return                  array of CharacterAttrs
 */
Character.prototype.pattrArray = function(secondaryFirst/*=false*/,
  byRank/*=false*/)
{
  var out = new Array;
  var other = new Array;
  var secs = new Array;
  // add primary profession attributes
  for (var a in this.primary.attrs) {
    var pattr = this.pattrs[a];
    // primary attr? push front
    if (pattr.isPrimaryAttr && !byRank) {
      out.push(pattr);
    } else {
      other.push(pattr);
    }
  }
  for (var a in this.secondary.attrs) {
    // not primary attr of secondary profession? add
    var pattr = this.pattrs[a];
    if (!pattr.isPrimaryAttr) {
      secs.push(pattr);
    }
  }

  var cmpFn = function(a,b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  };
  other.sort(cmpFn);
  secs.sort(cmpFn);
  if (byRank) {
    cmpFn = function(a,b) { return b.value - a.value; }
    other.sort(cmpFn);
    secs.sort(cmpFn);
  }

  if (secondaryFirst) {
    secs.concat(out, other);
    return secs;
  }

  out = out.concat(other, secs);
  return out;
} // pattrArray()


/**
 * Get array of names of potential primary professions
 *
 * @return  array of primary profession names
 */
Character.prototype.primaryChoices = function() {
  var out = new Array;
  for (var p in g_pros) {
    out.push(p);
  }
  out.sort();
  return out;
} // primaryChoices()


/**
 * Get array of names of potential secondary professions
 *
 * @return  array of secondary profession names
 */
Character.prototype.secondaryChoices = function() {
  var out = new Array;
  for (var p in g_pros) {
    if (p != this.primary.abbrev) out.push(p);
  }
  out.sort();
  return out;
} // secondaryChoices()


/**
 * Get array of what the health and used attribute points would be
 * for each of the potential values of an attribute
 *
 * @return  array of cattrs, may have nulls for impossible values
 */
Character.prototype.attrValueChoices = function(attrName) {
  // auto mode inconsistent with cache? clear cache
  if (this.cautoRunes != this.autoRunes ||
    this.cautoHeadgear != this.autoHeadgear)
  {
    this.cautoRunes = this.autoRunes;
    this.cautoHeadgear = this.autoHeadgear;
    this.cattrs = new Object;
  }

  // already in cache? return it
  if (attrName in this.cattrs) {
    return this.cattrs[attrName];
  }

  var out = new Array(17);
  var pattrs = cloneArray(this.pattrArray());
  var pattr = null;
  for (var i1 = 0; i1 < pattrs.length; ++i1) {
    if (pattrs[i1].name == attrName) {
      pattr = pattrs[i1];
      break;
    }
  }
  if (pattr == null) {
    if (!this.validSkillAttr(attrName)) {
      alert("Character.attrValueChoices: Invalid attrName '" + attrName + "'");
    } else {
      this.cattrs[attrName] = out;
    }
    return out;
  }
  var val = pattr.value;
  // get scores for current value on down to zero
  for (var i1 = val; i1 >= 0; --i1) {
    pattr.value = i1;
    var cattr = new Object;
    // illegal? all lower ones will be too
    if (!this.optimize_i(pattrs, cattr)) break;
    out[i1] = cattr;
  }
  // get scores for values above the current one
  for (var i1 = val + 1; i1 < 17; ++i1) {
    pattr.value = i1;
    var cattr = new Object;
    // illegal? all higher ones will be too
    if (!this.optimize_i(pattrs, cattr)) break;
    out[i1] = cattr;
  }

  // update cache
  this.cattrs[attrName] = out;
  return out;
} // attrValueChoices(attrName)


/**
 * Check if attribute is valid for current pri/sec professions
 *
 * @param   name  attribute to be checked
 * @return        is valid?
 */
Character.prototype.validAttr = function(name) {
  // attr is of primary? success
  if (name in this.primary.attrs) return true;
  var ainfo = this.secondary.attrs[name];
  // is of secondary but not primary of secondary? success
  if (ainfo != null && !ainfo.isPrimary) return true;
  return false;
} // validAttr(attrName)


/**
 * Check if skills based on a particular attribute are valid
 * for current pri/sec professions
 *
 * @param   name  attribute to be checked
 * @return        is valid?
 */
Character.prototype.validSkillAttr = function(name) {
  // attr is of primary, secondary, or unlinked? success
  return (name in this.primary.attrs) ||
    (name in this.secondary.attrs) ||
    g_attrs[name].pro == '';
} // validSkillAttr(attrName)


/**
 * Part of the attrSource interface
 *
 * Get effective attribute value. Handles requests for attribute
 * levels from all professions
 *
 * @param   name    name of attribute whose value is sought
 */
Character.prototype.effectiveAttr = function(name) {
  if (!this.validAttr(name)) return 0;
  return this.pattrs[name].value;
} // effectiveAttr(attrName)


/**
 * Part of the attrSource interface
 *
 * Filter skills not appropriate for this character
 *
 * @param   skill   Skill object to test
 * @return          skill should be included?
 */
Character.prototype.skillFilter = function(s) {
  if (s != null) {
    switch (s.pro) {
    case "":
    case this.primary.abbrev:
    case this.secondary.abbrev:
      return true;
    }
  }
  return false;
} // skillFilter(skillObj)


/////////////////////////////////////////////////
// INTERNAL FUNCTIONS
/////////////////////////////////////////////////
/**
 * Internal function
 *
 * Updates the headgear and runes settings in pattrs for best health
 * first and fewest attribute points second. Changes are limited by
 * the .autoRunes and .autoHeadgear settings.
 *
 * @param   pattrs    (in/out) array of CharacterAttr objects
 * @param   cattrBest (out) score of best combination
 * @return            requested attributes form valid combination?
 */
Character.prototype.optimize_i = function(basePattrs, cattrBest) {
  //var out = "Optimizing:\n";
  //for (var i1 = 0; i1 < pattrs.length; ++i1) {
  //  out += pattrs[i1].name + ": " + pattrs[i1].value + "\n";
  //}
  //alert(out);
  var ret = { runes:true, headgearAttr:true };

  var data = this.optimizeData_i;

  // var pattrs = basePattrs.filter(function(p) { return p.isPrimary; });
  var pattrs = [];
  for (var i1 = 0; i1 < basePattrs.length; ++i1) {
    var pattr = basePattrs[i1];
    if (pattr.isPrimary) pattrs.push(basePattrs[i1]);
  }

  pattrs.sort(function (a,b) { return b.value - a.value; });

  // calculate score for invariant secondary attributes
  var cattrFixed = new CharacterAttrCost(0, 0, 0);
  for (var i1 = basePattrs.length - 1; i1 >= 0; --i1) {
    var pattr = basePattrs[i1];
    if (pattr.isPrimary) break;
    if (!cattrFixed.addAttr(pattr)) return null;
  }

  // init best to be very, very bad
  if (cattrBest == null) alert("null cattrBest");
  cattrBest.attrPts = 0;
  cattrBest.runes = 0;
  cattrBest.health = -1000;

  // only check headgear options if autoHeadgear
  // is enabled and there is a non-zero primary profession
  // attribute
  var checkHeadgear = false;

  // headgear adjustments allowed?
  if (this.autoHeadgear) {
    // clear headgear and check if there's a reason to consider
    //   headgear (has a non-zero attribute of primary profession)
    for (var i1 = 0; i1 < pattrs.length; ++i1) {
      var pattr = pattrs[i1];
      pattr.headgear = false;
      // primary pro attribute used? flag headgear testing
      if (pattr.value) checkHeadgear = true;
    }
  }

  if (!checkHeadgear) {
    // best found? return it
    if (this.optimizeRunes_i(pattrs, cattrBest, cattrFixed)) {
      return ret;
    } else {
      // no best. no valid combinations. fail
      return null;
    }
  }

  // try each, save best
  var best = null; // best attrs
  for (var i1 = 0; i1 < pattrs.length; ++i1) {
    var pattr = pattrs[i1];
    if (pattr.isPrimary) {
      pattr.headgear = true;
      // new best? save it
      if (this.optimizeRunes_i(pattrs, cattrBest, cattrFixed)) {
        // no prior best? update to initial best
        if (best == null) best = data.best;
        // update current best with new best
        this.copyAttrArrayMods_i(best, pattrs);
      }
      pattr.headgear = false;
    } // if isPrimary
  } // for each pattr

  // no best found? must be invalid
  if (best == null) {
    return null;
  }
  // copy headgear and runes from best
  this.copyAttrArrayMods_i(pattrs, best);
  return ret;
} // optimize_i(pattrs, cattrBest)


/**
 * Internal function
 *
 * Updates the runes settings in pattrs for best health first and
 * fewest attribute points second. Changes are limited by the .autoRunes
 * setting.
 *
 * @param   pattrs      (in/out) array of CharacterAttr objects
 * @param   cattrBest   (in/out) cost of best combination found so far
 * @param   cattrFixed  cost of invariant 2ndary attributes
 * @return              was a new best found?
 */
Character.prototype.optimizeRunes_i = function(pattrs, cattrBest, cattrFixed) {
  // adjust runes? init, try each, save best

  var cattrCum = new CharacterAttrCost(0,0,0);
  cattrFixed.copyTo(cattrCum);

  // no rune adjustments allowed? just score it
  if (!this.autoRunes) {
    for (var i1 = 0; i1 < pattrs.length; ++i1) {
      if (!cattrCum.addAttr(pattrs[i1])) return false;
    }
    // too many attr points required? skip
    if (cattrCum.attrPts > this.attrTotalPts) return false;

    return cattrCum.compareAndSet(cattrBest);
  }

  return this.optimizeRunesStep_i(pattrs, cattrBest, 0, cattrCum);
} // optimizeRunes_i(pattrs, cattrBest)


/**
 * Internal function
 *
 * Loops through all possible runes for attribute at the requested
 * position and recursively calls itself to process the next position,
 * ultimately processing all rune combinations on current and following
 * attributes, returning the overall best combination.
 *
 * Updates the runes settings in pattrs for best health first and
 * fewest attribute points second.
 *
 * @param   pattrs      (in/out) CharacterAttrs of primary profession
 * @param   cattrBest   (in/out) cost of best combination found so far
 * @param   pos
 * @param   cattrParent
 * @return              was a new best found?
 */
Character.prototype.optimizeRunesStep_i = function(
  pattrs, cattrBest, pos, cattrParent)
{
  // no more attributes? no more runes possible, score
  if (pos == pattrs.length) {
    return cattrParent.compareAndSet(cattrBest);
  }

  var pattr = pattrs[pos];

  // try each, save best
  var data = this.optimizeStepData_i[pos];
  var cattr = data.cattr;
  var best = null; // best attrs
  for (var r in this.runeTypes) {
    pattr.rune = r;
    cattrParent.copyTo(cattr);
    // impossible rune for value? skip
    if (!cattr.addAttr(pattr)) continue;
    // too many attr points required? skip
    if (cattr.attrPts > this.attrTotalPts) continue;
    // no chance of improving best? skip
    if (cattr.compare(cattrBest) <= 0) continue;

    //alert(pos + ": " + r);

    // new best found? update best
    if (this.optimizeRunesStep_i(pattrs, cattrBest, pos + 1, cattr)) {
      // no prior best?
      if (best == null) best = data.best;
      this.copyAttrArrayMods_i(best, pattrs);
    }
  } // for each pattr

  // no best found? must be invalid
  if (best == null) {
    return false;
  }
  // copy headgear and runes from best
  this.copyAttrArrayMods_i(pattrs, best);
  return true;
} // optimizeRunesStep_i(pattrs, pos)


/**
 * Internal function
 *
 * Loops through all possible runes for attribute at the requested
 * position and recursively calls itself to process the next position,
 * ultimately processing all rune combinations on current and following
 * attributes, returning the overall best combination.
 *
 * Updates the runes settings in pattrs for best health first and
 * fewest attribute points second.
 *
 * @return      CharacterAttrCost of resulting combination
 *              null if requested attributes form an impossible combination
 */
Character.prototype.scoreRunes_i = function(pattrs) {
  // for each attr add up the health from the runes and needed attr points
  var cattr = new CharacterAttrCost(0,0,0);
  for (var i1 = 0; i1 < pattrs.length; ++i1) {
    var pattr = pattrs[i1];
    if (!cattr.addAttr(pattr)) return null;
  } // for each attr
  // too many attr points required? fail
  if (cattr.attrPts > this.attrTotalPts) {
    return null;
  }
  return cattr;
} // scoreRunes_i(pattrs)


/**
 * Internal function
 *
 * @param to    array of CharacterAttr objects to update
 * @param from  array with rune and headgear settings to copy
 */
Character.prototype.copyAttrArrayMods_i = function(to, from) {
  var num = this.primary.numAttrs;
  switch (num) {
  case 8: to[7].headgear = from[7].headgear;
          to[7].rune = from[7].rune;
  case 7: to[6].headgear = from[6].headgear;
          to[6].rune = from[6].rune;
  case 6: to[5].headgear = from[5].headgear;
          to[5].rune = from[5].rune;
  case 5: to[4].headgear = from[4].headgear;
          to[4].rune = from[4].rune;
  case 4: to[3].headgear = from[3].headgear;
          to[3].rune = from[3].rune;
  case 3: to[2].headgear = from[2].headgear;
          to[2].rune = from[2].rune;
  case 2: to[1].headgear = from[1].headgear;
          to[1].rune = from[1].rune;
  case 1: to[0].headgear = from[0].headgear;
          to[0].rune = from[0].rune;
  }
} // copyAttrArrayMods_i(to, from)


/**
 * Internal function
 *
 * Set attribute to receive headgear bonus. This must be an attribute
 * of the primary profession or 'None' for no headgear bonus
 *
 * - sets headgear
 * - adjusts low/value/high range for affected attributes
 * - clear attribute choices cache
 *
 * @param   name  name of attribute
 */
Character.prototype._setHeadgearAttr = function(name) {
  var ret = {};
  if (name != 'None') {
    if (!(name in this.primary.attrs)) {
      alert(name + " headgear not valid for " + this.primary.name + " profession");
      return null;
    }
    // no change? exit
    if (this.pattrs[name].headgear) return ret;
  }

  ret.headgearAttr = true;
  ret.effectiveAttr = true;
  ret.attrValueChoices = true;
  for (var a in this.primary.attrs) {
    var hg = (a == name);
    var pattr = this.pattrs[a];
    if (pattr.headgear != hg) {
      if (this.primary.attrs[a].skillAdjust) {
        ret.skillAdjust = true;
      }
      var diff = hg ? 1 : -1;
      pattr.headgear = hg;
      pattr.value += diff;
    }
  }

  // clear attribute choices
  this.cattrs = new Object;

  return ret;
} // _setHeadgearAttr


/**
 * Internal function
 *
 * Set the rune for an attribute of the primary profession
 *
 * - sets rune
 * - adjusts value for related attribute
 * - clear attributes choices cache
 *
 * @param name  attribute of rune to set
 * @param val   name or attr bonus from Character.prototype.runeTypes
 */
Character.prototype._setAttrRune = function(name, val) {
  var ret = {};
  var attr = this.primary.attrs[name];
  if (attr == null) {
    // setting secondary attribute rune to 'None'? exit
    if (this.secondary.attrs[name] != null && val == 'None') {
      return ret;
    }
    alert(name + " is not a primary profession attribute " +
          "and can't have a rune");
    return null;
  }
  if (!isNaN(val)) {
    for (var r in this.runeTypes) {
      if (this.runeTypes[r][0] == val) {
        val = r;
        break;
      }
    }
  } // val is number?
  if (this.runeTypes[val] == null) {
    alert(val + " is not a valid type of rune");
    return null;
  }

  var pattr = this.pattrs[name];
  // no change? exit
  if (pattr.rune == val) return ret;
  ret.runes = true;
  ret.effectiveAttr = true;
  ret.attrValueChoices = true;
  ret.skillAdjust = attr.skillAdjust;

  var diff = this.runeTypes[val][0] - this.runeTypes[pattr.rune][0];
  var diffHealth = this.runeTypes[val][1] - this.runeTypes[pattr.rune][1];

  pattr.rune = val;
  pattr.value += diff;

  if (diffHealth != 0) {
    ret.health = true;
    this.attrHealth += diffHealth;
  }
  this.cattrs = new Object;

  return ret;
} // _setAttrRune


/**
 * Internal function
 *
 * Updates runes on armor items to matched selected attribute runes
 */
Character.prototype._updateItems = function() {
  var hgPattr;
  var ret = {}
  var items = this.items;
  // calc new runes and update headgear
  var newRunes = {};
  for (var a in this.primary.attrs) {
    var pattr = this.pattrs[a];
    if (pattr.headgear) {
      hgPattr = pattr;
      var base = Item.prototype.headgearBase(pattr.name);
      var item = items['head'];
      if (item.base != base) {
        item.setBase(base);
        ret.items = true;
      }
    }
    if (pattr.rune != 'None') {
      var rune = Item.prototype.armorRune(pattr.rune + ' ' + pattr.name);
      newRunes[a] = rune;
    }
  } //

  var vitae = Item.prototype.armorRune('Vitae'),
    vminor = Item.prototype.armorRune('Minor Vigor'),
    vmajor = Item.prototype.armorRune('Major Vigor'),
    vsup = Item.prototype.armorRune('Superior Vigor');
  var vitaes = [], vminors = [], vmajors = [], vsups = [];
  // update or remove item attr runes
  for (var pos = 0; pos < 5; ++pos) {
    var slot = Item.prototype.slots[pos];
    var item = this.items[slot];
    if (!item.suffix) continue;
    if (!item.suffix.attrName) {
      if (item.suffix == vitae) {
        vitaes.push(slot);
      } else if (item.suffix == vminor) {
        vminors.push(slot);
      } else if (item.suffix == vmajor) {
        vmajors.push(slot);
      } else if (item.suffix == vsup) {
        vsups.push(slot);
      }
      continue;
    }
    var n = newRunes[item.suffix.attrName];
    if (n) {
      delete newRunes[item.suffix.attrName];
      if (n != item.suffix) {
        item.setRune(n, slot, this.primary);
        ret.items = true;
      }
    } else {
      if (n != item.suffix) {
        item.setRune(vitae, slot, this.primary);
        vitaes.push(slot);
        ret.items = true;
      }
    }
  } // update or remove

  // combined free slots
  vitaes = vitaes.concat(vminors, vmajors, vsups);

  // add new attr runes
  for (var a in newRunes) {
    var slot = vitaes.shift();
    var item = items[slot];
    item.setRune(newRunes[a], slot, this.primary);
    ret.items = true;
  }

  // make last vitae a vigor
  if (vitaes.length && items[vitaes[vitaes.length - 1]] == vitae) {
    var slot = vitaes.pop();
    item = items[slot];
    item.setRune(vsup, slot, this.primary);
    ret.items = true;
  }

  return ret;
} // _updateItems


/**
 * Internal function
 *
 * Swaps out all skills associated with one profession from the skill
 * bar and swaps in skills that were previously selected under a
 * different profession
 *
 * @param   oldab   abbrev of profession whose skills are being removed
 * @param   newab   abbrev of pro whose skills are to be brought in
 */
Character.prototype.swapProSkills_i = function(oldab, newab) {
  var oldSkills = this.offSlots[oldab];
  var newSkills = this.offSlots[newab];
  var inew = 0;
  var slots = this.slots();

  // do we have an elite for the profession we're keeping?
  var hasElite = false;
  for (var i1 = 0; i1 < slots.length; ++i1) {
    var skill = slots[i1][0];
    if (skill && skill.elite && skill.pro != oldab) {
      hasElite = true;
    }
  }

  // save selected old pro skills and fill in empty/emptied
  // slots with new pro skills
  oldSkills.splice(0, oldSkills.length);
  for (var i1 = 0; i1 < slots.length; ++i1) {
    var slot = slots[i1];
    for (var i2 = 1; i2 < slot.length; ++i2) {
      if (slot[i2] != null && slot[i2].pro == oldab) slot[i2] == null;
    }
    var skill = slot[0];
    if (skill != null && skill.pro == oldab) {
      oldSkills.push(skill);
      slot[0] = null;
      skill = null;
    }
    if (skill == null && inew < newSkills.length) {
      // new pro elite? skip it if we already have an elite
      if (hasElite && newSkills[inew].elite) {
        inew += 1;
        if (inew >= newSkills.length) continue;
      }
      slot[0] = newSkills[inew];
      inew += 1;
    }
  }
} // swapProSkills_i(oldab, newab)


/**
 * Internal function
 *
 * Swaps out all armor associated with one profession and swaps in
 * armor that was previously selected under a different profession
 *
 * @param   oldab   abbrev of profession whose armor is being removed
 * @param   newab   abbrev of pro whose armor is to be brought in
 */
Character.prototype._swapProItems = function(oldab, newab) {
  this.offItems[oldab] = this.items;
  this.items = this.offItems[newab];
  this._updateItems();
} // _swapProItems


/**
 * Internal function
 *
 * Adjusts attributes down to bring them into compliance with the
 * overall number of attribute points. Available attribute points
 * is recalculated. No changes are made if the total cost of the
 * attributes is less or equal to the total attribute points.
 *
 * @param   changePrimaryFirst
 *   true  - adjust attributes of primary before considering secondary ones
 *   false - prefer keeping primary attributes unchanged
 */
Character.prototype.correctAttrs_i = function(changePrimaryFirst) {
  var pattrs = this.pattrArray(/*secondaryFirst=*/changePrimaryFirst);
  this.attrPts = this.attrTotalPts;
  // go through attrs, count and adjust down for insufficient points
  for (var i1 = 0; i1 < pattrs.length; ++i1) {
    var pattr = pattrs[i1];
    var raw = pattr.rawValue();
    if (this.attrCost[raw] > this.attrPts) {
      var rawMax = this.attrCost.highAttr(this.attrPts);
      pattr.value -= raw - rawMax;
      raw = rawMax;
    }
    this.attrPts -= this.attrCost[raw];
  }
} // correctAttrs_i(changePrimaryFirst)


Character.prototype.promoteAttrs_i = function(pro) {
  // enable rune and headgear
  for (var a in pro.attrs) {
    var pattr = this.pattrs[a];
    if (!pattr.isPrimary) {
      pattr.isPrimary = true;
      var bonus = pattr.headgear ? 1 : 0;
      bonus += this.runeTypes[pattr.rune][0];
      pattr.value += bonus;
    }
  }
} // promoteAttrs_i(pro)


Character.prototype.demoteAttrs_i = function(pro) {
  // strip rune and headgear effects
  for (var a in pro.attrs) {
    var pattr = this.pattrs[a];
    pattr.value = pattr.rawValue();
    pattr.isPrimary = false;
  }
} // demoteAttrs_i(pro)


/**
 * Internal function
 *
 * When autoTrailingAlternate is true, ensures that a single trailing empty
 * alternate skill is attached to the last skill slot. If multiple empty
 * alts are on the end all but one of them are removed.
 */
Character.prototype.ensureTrailingAlternate_i = function() {
  // auto trailing alternates and we removed an alt from the
  //   last skill slot? ensure it has single trailing empty alt
  if (!this.autoTrailingAlternate) return;
  var slot = this.slots[this.slots.length - 1];
  // remove all trailing empty alts
  for (var i1 = slot.length - 1; i1 > 0; --i1) {
    if (slot[i1] != null) break;
    slot.pop();
  }
  // append an empty alt
  slot.push(null);
} // ensureTrailingAlternate_i()


/////////////////////////////////////////////////
// Character sorts
//
// A character sort is any object with:
//   - compare(Character,Character) method, returns -1,0, or 1
//   - title(s) method, returns category under which character falls
//   - desc property, description of what how it sorts
/////////////////////////////////////////////////
Character.prototype.sorts = new Object; // by name

Character.prototype.sorts["Name"] = {
  key:"name",
  desc:"Strict name order.",
  compare:function(a,b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  },
  group:function(s) { return null; }
};
Character.prototype.sorts["Profession"] = {
  key:"profession",
  desc:"Sorted by profession.",
  compare:function(a,b) {
    var an = a.primary.name;
    var bn = b.primary.name;
    if (an < bn) return -1;
    if (an > bn) return 1;
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  },
  group:function(s) { return s.primary.name; }
};

