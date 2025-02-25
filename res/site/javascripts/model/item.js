/*
Copyright Glen Knowles 2006 - 2025.
Distributed under the Boost Software License, Version 1.0.

item.js - gw1builds model

Item and upgrade definitions
*/

/////////////////////////////////////////////////
// Globals
/////////////////////////////////////////////////
Item.prototype.typeKeys = {} // set in data-equip.js
// { 1: 'axe', 2: 'bow', ... }
Item.prototype.typeCodes = {} // set in data-equip.js
// { axe: 1, bow: 2, ... }
Item.prototype.typeNames = {
  armor: 'Armor', axe: 'Axe',
  bow: 'Bow', daggers: 'Daggers',
  hammer: 'Hammer',  scythe: 'Scythe',
  spear: 'Spear',  sword: 'Sword',
  staff: 'Staff',  wand: 'Wand',
  shield: 'Shield', focus: 'Focus'
}

Item.prototype.slots = [
  'head', 'chest', 'hands', 'legs', 'feet', 'weapon', 'offhand' ];
Item.prototype.slotNames = {
  head: 'Head', chest: 'Chest', hands: 'Hands', legs: 'Legs', feet: 'Feet',
  weapon: 'Weapon', offhand: 'Off-Hand'
}
Item.prototype.slotCodes = {
  head: 4, chest: 2, hands: 6, legs: 3, feet: 5,
  weapon: 0, offhand: 1
}


Item.prototype.colors = {
  2: { id: 2, name: 'Blue' },
  3: { id: 3, name: 'Green' },
  4: { id: 4, name: 'Purple' },
  5: { id: 5, name: 'Red' },
  6: { id: 6, name: 'Yellow' },
  7: { id: 7, name: 'Brown' },
  8: { id: 8, name: 'Orange' },
  9: { id: 9, name: 'Gray' }
}

ItemUpgrade.prototype.slots = [
  'base', 'color', 'prefix', 'suffix', 'inside' ];
ItemUpgrade.prototype.slotNames = {
  prefix:  {
    armor: 'Insignia', axe: 'Axe Haft',
    bow: 'Bow String', daggers: 'Dagger Tang',
    hammer: 'Hammer Haft', scythe: 'Scythe Snathe',
    spear: 'Spearhead', sword: 'Sword Hilt',
    staff: 'Staff Head'
  },
  suffix:  {
    armor: 'Rune', axe:  'Axe Grip',
    bow: 'Bow Grip', daggers: 'Dagger Handle',
    hammer: 'Hammer Grip', scythe: 'Scythe Grip',
    spear: 'Spear Grip', sword: 'Sword Pommel',
    staff: 'Staff Wrapping', wand: 'Wand Wrapping',
    shield: 'Shield Handle', focus: 'Focus Core'
  },
  inside: {
    axe: 'Inscription', bow: 'Inscription',
    daggers: 'Inscription', hammer: 'Inscription',
    scythe: 'Inscription', spear: 'Inscription',
    sword: 'Inscription', staff: 'Inscription',
    wand: 'Inscription', shield: 'Inscription',
    focus: 'Inscription'
  }
}

g_itemEffects = [];
g_itemBases = [];
g_itemUpgrades = [];

/////////////////////////////////////////////////
// ItemEffect
/////////////////////////////////////////////////
/**
 * ItemEffect constructor
 */
function ItemEffect(value, type, attr, req, dtype, stacking, where) {
  this.type = type; // energy, health, recovery
  this.attr = attr; // attribute being adjusted (for attr runes)
  this.req = req; // required attribute
  this.dtype = dtype;
  this.stacking = stacking;
  this.where = where;
  this.value = value;
} // ItemEffect

ItemEffect.prototype.addEffects = function(out, effect_ids) {
  out.effects = [];
  effect_ids = effect_ids || [];
  for (var i1 = 0; i1 < effect_ids.length; ++i1) {
    out.effects.push(g_itemEffects[effect_ids[i1]]);
  }
} // ItemEffect.addEffects

ItemEffect.prototype.rollupAttr = function(out) {
  for (var i1 = 0; i1 < out.effects.length; ++i1) {
    var e = out.effects[i1];
    if (e.attr) {
      out.attrName = e.attr;
      out.attrValue = e.value;
      break;
    }
  }
} // ItemEffect.rollupAttrs

ItemEffect.prototype.desc = function(where, dtype) {
  function withSign(val) {
    return val < 0 ? String(val) : ('+' + val);
  }
  var out = [];
  if (where != null) {
    if (this.value == null) return null;
    if (this.where && where != this.where) return null;
  }
  if (this.dtype) {
    out.push(dtype || this.dtype, ' Dmg: ');
  }
  if (this.type == 'energy') {
    out.push('Energy ', withSign(this.value));
  } else if (this.type == 'health') {
    out.push('Health ', withSign(this.value));
  } else if (this.type == 'recovery') {
    out.push("Energy recovery ", withSign(this.value));
  } else if (this.attr) {
    out.push(this.attr, ' ', withSign(this.value));
  } else {
    out.push(this.value);
  }
  if (this.req) {
    out.push(" (Requires 9 ", this.req, ")");
  }
  if (where && this.where) {
    out.push(' (on ', this.where, ')');
  }
  if (this.stacking != null) {
    out.push(this.stacking ? ' (Stacking)' : ' (Non-stacking)');
  }

  return out.join('');
} // desc

ItemEffect.prototype.compare = function(a,b) {
  if (a.type < b.type) return -1;
  if (a.type > b.type) return 1;
  if (a.value < b.value) return -1;
  if (a.value > b.value) return 1;
  if (a.where < b.where) return -1;
  if (a.where > b.where) return 1;
  if (a.attr < b.attr) return -1;
  if (a.attr > b.attr) return 1;
  if (a.dtype < b.dtype) return -1;
  if (a.dtype > b.dtype) return 1;
  if (a.stacking < b.stacking) return -1;
  if (a.stacking > b.stacking) return 1;
  return 0;
} // ItemEffect.compare


/////////////////////////////////////////////////
// ItemBase
/////////////////////////////////////////////////
/**
 * ItemBase constructor
 */
function ItemBase(name, id, pro, type, where, effect_ids) {
  this.name = name || '';
  this.id = id;
  this.pro = pro;
  this.type = type; //
  this.where = where; //
  ItemEffect.prototype.addEffects(this, effect_ids);
  // find req for non-armor
  if (Item.prototype.typeKeys[type] != 'armor') {
    for (var i1 = 0; i1 < this.effects.length; ++i1) {
      var effect = this.effects[i1];
      if (effect.req) {
        this.req = effect.req;
        break;
      }
    }
  } else {
    ItemEffect.prototype.rollupAttr(this);
  }
} // ItemBase

ItemBase.prototype.validUpgrade = function(upg) {
  if (upg == null) return true;
  if (upg.pro && upg.pro != this.pro) return false;
  if ((this.type & upg.for_mask) == 0) return false;
  return true;
} // ItemBase.validUpgrade

ItemBase.prototype.getSlotArray = function() {
  var out = ['base', 'color'];
  var found = {}
  for (var i1 = 0; i1 < g_itemUpgrades.length; ++i1) {
    var upg = g_itemUpgrades[i1];
    if (!upg || !this.validUpgrade(upg)) continue;
    found[upg.where] = true;
  }
  if (found['prefix']) out.push('prefix');
  if (found['suffix']) out.push('suffix');
  if (found['inside']) out.push('inside');
  return out;
} // ItemBase.getSlotArray

ItemBase.prototype.getArray = function(where, pro, pro2) {
  var out = [];
  for (var i1 = 0; i1 < g_itemBases.length; ++i1) {
    var base = g_itemBases[i1];
    if (base && (!base.pro || base.pro == pro) && base.where == where) {
      out.push(base);
    }
  }
  var akeys = Attribute.prototype.sortKeys();
  out.sort(function(a,b) {
    if (a.req != b.req) {
      var apro = g_attrs[a.req].pro;
      var bpro = g_attrs[b.req].pro;
      if (apro != bpro) {
        if (apro == pro) return -1;
        if (bpro == pro) return 1;
        if (apro == pro2) return -1;
        if (bpro == pro2) return 1;
        return (apro < bpro) ? -1 : 1;
      }
      if (a.type < b.type) return -1;
      if (a.type > b.type) return 1;
      return akeys[a.req] - akeys[b.req];
    }
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
  return out;
} // ItemBase.getArray

ItemBase.prototype.desc = function(where, dtype) {
  var out = [this.name];
  for (var i2 = 0; i2 < this.effects.length; ++i2) {
    var effect = this.effects[i2];
    var desc = effect.desc(where, dtype);
    if (desc) out.push(desc);
  }
  return out;
} // ItemBase.desc

/////////////////////////////////////////////////
// ItemUpgrade
/////////////////////////////////////////////////
/**
 * ItemUpgrade constructor
 */
function ItemUpgrade(name, id, pro, where, for_mask, effect_ids) {
  this.name = name;
  this.id = id;
  this.pro = pro;
  this.where = where;
  this.for_mask = for_mask; // bitwise-or of type codes upgrade can attach to
  ItemEffect.prototype.addEffects(this, effect_ids);
  if (this.where == 'suffix' &&
    (Item.prototype.typeCodes['armor'] & this.for_mask) != 0)
  {
    ItemEffect.prototype.rollupAttr(this);
  }
} // ItemUpgrade

ItemUpgrade.prototype.getArray = function(where, pro, type) {
  var out = [];
  for (var i1 = 0; i1 < g_itemUpgrades.length; ++i1) {
    var upg = g_itemUpgrades[i1];
    if (upg &&
      (!upg.pro || upg.pro == pro) &&
      upg.where == where &&
      (upg.for_mask & type) != 0)
    {
      out.push(upg);
    }
  }
  var akeys = Attribute.prototype.sortKeys();
  out.sort(function(a,b) {
    if (a.pro != b.pro) {
      if (a.pro == null) return -1;
      if (b.pro == null) return 1;
      return (apro < bpro) ? -1 : 1;
    }
    var rc = akeys[a.req] - akeys[b.req];
    if (rc) return rc;
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
  return out;
} // ItemUpgrade.getArray

ItemUpgrade.prototype.desc = function(where, dtype) {
  var name = this.name;
  if (this.where == 'inside') {
    name = 'Inscription: ' + name;
  } else {
    var tname = Item.prototype.typeKeys[this.for_mask];
    var pname = this.slotNames[this.where][tname];
    if (this.where == 'prefix') {
      name = name + ' ' + pname;
    } else { // where == 'suffix'
      name = pname + ' of ' + name;
    }
  }
  var out = [name];
  for (var i2 = 0; i2 < this.effects.length; ++i2) {
    var effect = this.effects[i2];
    var desc = effect.desc(where, dtype);
    if (desc) out.push(desc);
  }
  return out;
} // ItemUpgrade.desc

/////////////////////////////////////////////////
// Item
/////////////////////////////////////////////////
function Item(base, color, prefix, suffix, inside) {
  this.base = base;
  this.color = color;
  this.prefix = prefix;
  this.suffix = suffix;
  this.inside = inside;
  this.rollupEffects();
} // Item

Item.prototype.clone = function() {
  var n = new Item(this.base, this.color,
    this.prefix, this.suffix, this.inside);
  return n;
} // Item.clone

Item.prototype.setPart = function(part, uslot) {
  switch (uslot) {
  case 'base': return this.setBase(part);
  case 'color': return this.setColor(part);
  default:
    if (part && part.where != uslot) {
      alert("'" + part.name + "' can't be used as " + uslot);
      return null;
    }
    return this.setUpgrade(part, uslot);
  }
} // Item.setPart

Item.prototype.setBase = function(base) {
  if (this.base == base) return {}
  this.base = base;
  if (base == null) {
    this.color = null;
    this.prefix = this.suffix = this.inside = null;
  } else {
    if (!base.validUpgrade(this.prefix)) this.prefix = null;
    if (!base.validUpgrade(this.suffix)) this.suffix = null;
    if (!base.validUpgrade(this.inside)) this.inside = null;
  }
  this.rollupEffects();
  return {items: true}
} // Item.setBase

Item.prototype.ensureBase = function(slot, pro) {
  if (this.base == null) {
    for (var i1 = 0; i1 < g_itemBases.length; ++i1) {
      var base = g_itemBases[i1];
      if (base && base.where == slot && base.pro == pro.abbrev) {
        this.base = base;
        this.rollupEffects();
        return {items: true}
      }
    }
  }
  return {}
} // Item.ensureBase

Item.prototype.setColor = function(color) {
  var colors = Item.prototype.colors;
  if (!isNaN(color)) {
    var tmp = colors[color];
    if (color >= 0 && color <= 12) tmp = colors[9];
    color = tmp;
  } else {
    if (color != colors[color.id]) {
      alert("Invalid color code (" + color.id + ")");
      return null;
    }
  }
  if (this.color == color) return {}
  this.color = color;
  return {items: true};
} // Item.setColor

Item.prototype.setUpgrade = function(upg, slot) {
  slot = slot || upg && upg.where;
  if (this[slot] == upg) return {};
  if (!this.base || !this.base.validUpgrade(upg)) {
    alert("Invalid upgrade for item");
    return null;
  }
  if (upg && upg.where != slot) {
    alert("Invalid location for upgrade");
    return null;
  }
  this[slot] = upg;
  this.rollupEffects();
  return {items: true}
} // Item.setUpgrade

Item.prototype.setRune = function(rune, slot, pro) {
  this.ensureBase(slot, pro);
  return this.setUpgrade(rune);
} // Item.setRune

Item.prototype.rollupAttr = function(attr, stacking, value) {
  if (stacking != null && stacking == false) {
    if (!this.cumNonStack[attr] || value > this.cumNonStack[attr]) {
      this.cumNonStack[attr] = value;
    }
  } else {
    if (this.cumStack[attr] == null) {
      this.cumStack[attr] = value;
    } else {
      this.cumStack[attr] += value;
    }
  }
} // Item.rollupAttr

Item.prototype.rollupEffects = function() {
  this.cumDtype = null;
  this.cumHealth = 0;
  this.cumEnergy = 0;
  this.cumRecovery = 0;
  this.cumStack = {}
  this.cumNonStack = {}
  var parts = [this.base, this.inside, this.prefix, this.suffix];
  for (var i1 = 0; i1 < parts.length; ++i1) {
    var part = parts[i1];
    if (part == null) continue;
    for (var i2 = 0; i2 < part.effects.length; ++i2) {
      var effect = part.effects[i2];
      if (effect.dtype) this.cumDtype = effect.dtype;
      if (effect.attr) {
        this.rollupAttr(effect.attr, effect.stacking, effect.value);
      }
      switch (effect.type) {
      case 'health': this.cumHealth += effect.value; break;
      case 'energy': this.cumEnergy += effect.value; break;
      case 'recovery': this.cumRecovery += effect.value; break;
      }
    } // for each effect
  } // for each part
} // Item.rollupEffects

Item.prototype.colorArray = function() {
  var out = [];
  for (c in Item.prototype.colors) {
    out.push(Item.prototype.colors[c]);
  }
  return out;
} // Item.colorArray

Item.prototype.headgearBase = function(attrName) {
  if (!Item.prototype.headgearByAttr) {
    var hg = {}
    for (var i1 = 0; i1 < g_itemBases.length; ++i1) {
      var base = g_itemBases[i1];
      if (base && base.where == 'head') {
        for (var i2 = 0; i2 < base.effects.length; ++i2) {
          var e = base.effects[i2];
          if (e.attr && e.stacking !== false) {
            hg[e.attr] = base;
            break;
          }
        }
      }
    }
    Item.prototype.headgearByAttr = hg;
  }
  return Item.prototype.headgearByAttr[attrName];
} // Item.headgearBase

Item.prototype.armorRune = function(name) {
  if (!Item.prototype.runesByName) {
    Item.prototype.runesByName = {}
    for (var i1 = 0; i1 < g_itemUpgrades.length; ++i1) {
      var upg = g_itemUpgrades[i1];
      if (upg && upg.where == 'suffix' &&
        (upg.for_mask & Item.prototype.typeCodes['armor']) != 0)
      {
        Item.prototype.runesByName[upg.name] = upg;
      }
    }
  }
  return Item.prototype.runesByName[name];
} // armorRune

Item.prototype.desc = function(where) {
  if (!this.base) return null;
  var name = this.base.name;
  if (this.prefix) name = this.prefix.name + ' ' + name;
  if (this.suffix) name += ' of ' + this.suffix.name;
  var out = [name];
  var parts = [this.base, this.prefix, this.suffix, this.inside];
  for (var i1 = 0; i1 < parts.length; ++i1) {
    var part = parts[i1];
    if (part == null) continue;
    if (part.where == 'inside') {
      out.push("Inscription: " + part.name);
    }
    for (var i2 = 0; i2 < part.effects.length; ++i2) {
      var effect = part.effects[i2];
      var desc = effect.desc(where, this.cumDtype);
      if (desc) out.push(desc);
    }
  }
  return out;
} // Item.desc

