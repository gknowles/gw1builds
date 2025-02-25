/*
Copyright Glen Knowles 2006 - 2024.
Distributed under the Boost Software License, Version 1.0.

character-io.js - gw1builds model
*/

/////////////////////////////////////////////////
// Commands
//   parse(str, toon/*=new Character*/, skipName/*=false*/)
//   parseAnet
//   parseAnetEquip
//
// Queries
//   toCode(skipName/*=false*/)
//   toAnet(skipName/*=false*/)
//   toAnetEquip(skipName/*=false*/)
/////////////////////////////////////////////////

/////////////////////////////////////////////////
// Commands
/////////////////////////////////////////////////
/**
 * Creates a character object from string representation
 * created by the toCode() or toAnetXXX() functions
 *
 * @param   source  string encoded character
 * @return          Character object
 */
Character.prototype.parse = function(source, toon, skipName/*=false*/) {
  var p = toon || new Character("Unnamed");
  // check for [name;code] format
  if (source.charAt(0) == '[') {
    var vals = source.match(/\[(.*);(.*)\]/);
    if (skipName != true) p.setName(vals[1]);
    source = vals[2];
  }
  var codec = new Base64Codec(source);
  // version
  var ver = codec.get(4);
  if (ver == 0 || ver == 14) {
    return Character.prototype.parseAnet(source, p);
  }
  if (ver == 1 || ver == 15) {
    return Character.prototype.parseAnetEquip(source, p);
  }
  if (ver != 8) {
    alert("Unknown character encoding '" + source + "'");
    return p;
  }
  if (toon) {
    var oname = toon.name;
    Character.call(p, oname);
  }
  var id, size;
  // professions
  size = 4 + codec.get(2);
  id = codec.get(size);
  var pro = searchHashById(g_pros, id);
  if (pro) p.setPrimary(pro.abbrev);
  id = codec.get(size);
  pro = searchHashById(g_pros, id);
  if (pro) p.setSecondary(pro.abbrev);
  // level, attr bonus
  var lvl = codec.get(5);
  var bonusPts = 15 * codec.get(2);
  p.setLevel(lvl, bonusPts);
  // attributes (rune, headgear)
  size = 4 + codec.get(4);
  var num = codec.get(4);
  for (var i1 = 0; i1 < num; ++i1) {
    id = codec.get(size);
    var attr = searchHashById(g_attrs, id);
    var raw = codec.get(4);
    var rune = codec.get(2);
    var hg = codec.get(1);
    if (attr == null) continue;
    // set rune
    if (rune) {
      // find (and then set) rune via its attr bonus [0,3]
      p.setAttrRune(attr.name, rune);
    }
    // set headgear
    if (hg) {
      p.setHeadgearAttr(attr.name);
    }
    // set value
    p.setAttrValue(attr.name, raw + rune + hg, /*noOptimize=*/true);
  }
  // skills, alternates come before the skill for the slot
  size = 8 + codec.get(4);
  var slots = p.slots();
  for (var i1 = 0, alt = 1; i1 < slots.length; ) {
    var isAlternate = codec.get(1);
    var id = codec.get(size);
    var skill = g_skillsById[id];
    if (skill) {
      p.setSlot(i1, isAlternate ? alt : 0, skill);
    }
    if (isAlternate) {
      alt += 1;
    } else {
      i1 += 1; alt = 1;
    }
  }
  // items
  p._unpackItemsAnet(codec);
  // name
  var n = "";
  var nameFmt = codec.get(2);
  if (nameFmt == this.nameFormatAnet) {
    for (;;) {
      var ch = codec.get(5);
      if (ch == 0) break; // endmark? break
      if (ch > this.anetNameChars.length) {
        alert("Invalid name encoding '" + source + "'");
        break;
      }
      n += this.anetNameChars.charAt(ch - 1);
    }
  } else if (nameFmt == this.nameFormatRelaxed) {
    for (;;) {
      var ch = codec.get(6);
      if (ch == 0) break; // endmark? break
      if (ch > this.relaxedNameChars.length) {
        alert("Invalid name encoding '" + source + "'");
        break;
      }
      n += this.relaxedNameChars.charAt(ch - 1);
    }
  }
  if (n.length > 0 && skipName != true) p.setName(n);
  //done
  //alert('parse:\n' + p.dumpAttrs());
  return p;
} // parse(source)


/**
 * Creates/updates a character object from Anet Skill Template
 * string representation
 *
 * @param   source  string encoded character
 * @return          Character object
 */
Character.prototype.parseAnet = function(source, toon) {
  var p = toon || new Character("Unnamed");
  var codec = new Base64Codec(source);
  // version
  var ver = codec.get(4);
  if (ver == 14) ver = codec.get(4);
  if (ver != 0) {
    alert("Unknown character encoding '" + source + "'");
    return p;
  }
  if (toon) {
    var oname = toon.name;
    var oitems = toon.items;
    var oab = toon.primary.abbrev;
    Character.call(p, oname);
    if (p.primary.abbrev == oab) {
      p.items = oitems;
    } else {
      p.offItems[oab] = oitems;
    }
  }
  var id, size;
  // professions
  size = 4 + codec.get(2);
  id = codec.get(size);
  var pro = searchHashById(g_pros, id);
  if (pro) p.setPrimary(pro.abbrev);
  id = codec.get(size);
  pro = searchHashById(g_pros, id);
  if (pro) p.setSecondary(pro.abbrev);
  // attributes
  var num = codec.get(4);
  size = 4 + codec.get(4);
  for (var i1 = 0; i1 < num; ++i1) {
    id = codec.get(size);
    var attr = searchHashById(g_attrs, id);
    var raw = codec.get(4);
    if (attr == null) continue;
    p.setAttrValue(attr.name, raw, /*noOptimize=*/true)
  }
  // skills
  size = 8 + codec.get(4);
  for (var i1 = 0; i1 < 8; ++i1) {
    id = codec.get(size);
    var skill = g_skillsById[id];
    if (skill) p.setSlot(i1, skill);
  }
  // tail
  codec.get(1); // get meaningless trailing null

  // done
  return p;
} // parseAnet


/**
 * Creates/updates a character object from Anet Equipment Template
 * string representation
 *
 * @param   source  string encoded character
 * @return          Character object
 */
Character.prototype.parseAnetEquip = function(source, toon) {
  var p = toon || new Character("Unnamed");
  var codec = new Base64Codec(source);
  // version
  var ver = codec.get(4), ver2 = 1;
  if (ver == 15) ver2 = codec.get(4);
  if (ver != 1 && ver2 != 0) {
    alert("Unknown character encoding '" + source + "'");
    return p;
  }
  p._unpackItemsAnet(codec);
  return p;
} // parseAnetEquip


/////////////////////////////////////////////////
// Queries
/////////////////////////////////////////////////
/**
 * Creates a string representation of a character object. Suitable
 * for use as a url parameter.
 *
 * Information included:
 *  - name (optional)
 *  - primary and secondary professions
 *  - attribute values
 *  - helm
 *  - runes
 *  - skills
 *
 * @param  skipName  don't include name in encoded string?
 * @return           string representation
 */
Character.prototype.toCode = function(skipName/*=false*/) {
  //alert('toCode:\n' + this.dumpAttrs());
  var codec = new Base64Codec();
  // version
  codec.put(8, 4);
  // professions
  var size = 4; // size of profession id
  codec.put(size - 4, 2);
  codec.put(this.primary.id, size);
  codec.put(this.secondary.id, size);
  // level, attr bonus
  codec.put(this.level, 5);
  codec.put(this.attrBonusPts / 15, 2);
  // attributes (rune, headgear)
  size = 6;
  codec.put(size - 4, 4);
  var num = 0;
  var pattrs = this.pattrArray();
  for (var i1 = 0; i1 < pattrs.length; ++i1) {
    if (pattrs[i1].value) num += 1;
  }
  codec.put(num, 4);
  for (var i1 = 0; i1 < pattrs.length; ++i1) {
    var pattr = pattrs[i1];
    if (pattr.value == 0) continue;
    codec.put(pattr.id, size);
    codec.put(pattr.rawValue(), 4); // raw attr value
    var runeBonus = this.runeTypes[pattr.rune][0];
    var hgBonus = (pattr.isPrimary && pattr.headgear) ? 1 : 0;
    codec.put(runeBonus, 2); // rune attr bonus
    codec.put(hgBonus, 1); // headgear bonus
  }
  // skills, alternates before the skill for each slot
  size = 12;
  codec.put(size - 8, 4);
  var slots = this.slots();
  for (var i1 = 0; i1 < slots.length; ++i1) {
    for (var i2 = 0; i2 < slots[i1].length; ++i2) {
      var alt = (i2 + 1) % slots[i1].length;
      var skill = slots[i1][alt];
      if (alt && skill == null) continue;
      codec.put(alt != 0, 1); // is alternate?
      if (skill == null) codec.put(0, size);
      else codec.put(skill.id, size);
    }
  }
  // items
  this._packItemsAnet(codec);
  // name
  if (skipName) {
    codec.put(this.nameFormatNone, 2);
  } else {
    if (this.anetNameFormat) {
      codec.put(this.nameFormatAnet, 2); // is anet name
      var name = this.name.toLowerCase();
      for (var i1 = 0; i1 < name.length; ++i1) {
        var ch = name.charAt(i1);
        codec.put(this.anetNameChars.indexOf(ch) + 1, 5);
      }
      codec.put(0, 5); // name endmark
    } else {
      codec.put(this.nameFormatRelaxed, 2); // relaxed name
      var name = this.name;
      for (var i1 = 0; i1 < name.length; ++i1) {
        var ch = name.charAt(i1);
        codec.put(this.relaxedNameChars.indexOf(ch) + 1, 6);
      }
      codec.put(0, 6); // name endmark
    }
  }
  codec.putBoundary();
  return codec.str;
} // toCode()


/**
 * Convert to Anet formatted Skill Template string. Only includes
 * professions, attribute levels, and skillbar.
 *
 * ----------------------------------------------
 * Format of encoded string
 *
 * 4 bits - always 0, assumed to indicate the version and that this is a
 *     Skill Template.
 * 2 bits - size of profession codes.
 * (4 + size) bits - Primary profession (see table below)
 * (4 + size) bits - Secondary profession (see table below)
 * 4 bits - The number of attributes specified in the template
 * 4 bits - Size of attribute codes. All attribute codes are the same size,
 *     and the size (in bits) is equal to 4 plus this number. For example,
 *     if the size is 2, each of the attribute codes will be 6 bits.
 * Sequence of attribute codes and values
 *   (4 + size) bits - attribute code (see table below)
 *   4 bits - value of attribute, this is 1 - 12, and does not take into
 *       account runes, headgear, etc.
 * 4 bits - Size of the skill codes. This works in the same way as the
 *     attribute size, except that each skill code is (8 + size) bits.
 * Sequence of exactly 8 skill codes
 *   (8 + size) bits - skill code (see table below)
 * ----------------------------------------------
 */
Character.prototype.toAnet = function(skipName/*=false*/) {
  var codec = new Base64Codec();
  // version
  codec.put(0, 4);
  // professions
  var size = 4;
  while (this.primary.id >= (1 << size)) size += 1;
  while (this.secondary.id >= (1 << size)) size += 1;
  codec.put(size - 4, 2);
  codec.put(this.primary.id, size);
  codec.put(this.secondary.id, size);
  // attributes
  var pattrs = this.pattrArray();
  size = 4;
  var num = 0;
  for (var i1 = 0; i1 < pattrs.length; ++i1) {
    if (pattrs[i1].rawValue()) {
      num += 1;
      var id = pattrs[i1].id;
      while (id >= (1 << size)) size += 1;
    }
  }
  codec.put(num, 4); // num attrs
  codec.put(size - 4, 4);
  for (var i1 = 0; i1 < pattrs.length; ++i1) {
    var pattr = pattrs[i1];
    var val = pattr.rawValue();
    if (val) {
      codec.put(pattr.id, size);
      codec.put(val, 4);
    }
  }
  // skills
  var skills = this.slotPrimes();
  size = 8;
  for (var i1 = 0; i1 < skills.length; ++i1) {
    var skill = skills[i1];
    var val = skill ? skill.id : 0;
    while (val >= (1 << size)) size += 1;
  }
  codec.put(size - 8, 4);
  for (var i1 = 0; i1 < skills.length; ++i1) {
    var skill = skills[i1];
    codec.put(skill ? skill.id : 0, size);
  }
  codec.put(0, 1); // single meaningless trailing null, we do it because
                   // anet does it.
  // done
  codec.putBoundary();
  if (skipName) return codec.str;
  return '[' + this.name + ';' + codec.str + ']';
} // toAnet()


/**
 * Convert to Anet formatted Equipment Template string. Only includes
 * items.
 *
 * ----------------------------------------------
 * Format of encoded string
 *
 * 4 bits - always 15, assumed to indicate the version and that this is an
 *     Equipment Template.
 * 4 bits - always 0
 * 4 bits - Size of item codes
 * 4 bits - Size of modifier codes
 * 3 bits - number of items in template
 * Sequence of items
 *   3 bits - Equipment slot
 *   n bits - Item code (0 for armor location means default)
 *   2 bits - Number of modifiers
 *   4 bits - Color code
 *   Sequence of modifiers
 *     n bits - Modifier code
 * ----------------------------------------------
 */
Character.prototype.toAnetEquip = function(skipName/*=false*/) {
  var codec = new Base64Codec();
  // version
  codec.put(15, 4);
  codec.put(0, 4);
  this._packItemsAnet(codec);
  // done
  codec.putBoundary();
  if (skipName) return codec.str;
  return '[' + this.name + ';' + codec.str + ']';
} // toAnetEquip


/////////////////////////////////////////////////
// Internal functions
/////////////////////////////////////////////////
/**
 * Internal function
 *
 * Unpacks items from anet equipment template
 *
 * @param codec   input bit stream
 */
Character.prototype._unpackItemsAnet = function(codec) {
  var isize = codec.get(4);
  var usize = codec.get(4);
  var num = codec.get(3);
  for (var i1 = 0; i1 < num; ++i1) {
    var item = null;
    var scode = codec.get(3);
    var icode = codec.get(isize);
    var unum = codec.get(2);
    var color = codec.get(4);
    var mods = [];
    for (var i2 = 0; i2 < unum; ++i2) {
      mods.push(codec.get(usize));
    }
    for (var slot in Item.prototype.slotCodes) {
      if (Item.prototype.slotCodes[slot] == scode) {
        item = this.items[slot];
        break;
      }
    }
    if (!item) continue;
    if (icode == 0) {
      item.ensureBase(slot, this.primary);
    } else {
      item.setBase(g_itemBases[icode]);
    }
    item.setColor(color);
    for (var i2 = 0; i2 < unum; ++i2) {
      item.setUpgrade(g_itemUpgrades[mods[i2]]);
    }
  } // each item
  codec.get(1); // get meaningless trailing null
} // _unpackItemsAnet


/**
 * Internal function
 *
 * Packs items into anet equipment template
 *
 * @param codec   output bit stream
 */
Character.prototype._packItemsAnet = function(codec) {
  var mods = {prefix: true, suffix: true, inside: true}
  // size codes
  var num = 0;
  var isize = 0, usize = 0;
  for (var slot in this.items) {
    var item = this.items[slot];
    if (!item || !item.base) continue;
    num += 1;
    while (item.base.id >= (1 << isize)) isize += 1;
    for (var mod in mods) {
      if (item[mod]) while (item[mod].id >= (1 << usize)) usize += 1;
    }
  }
  codec.put(isize, 4);
  codec.put(usize, 4);
  // items
  codec.put(num, 3);
  for (var slot in this.items) {
    var item = this.items[slot];
    if (!item || !item.base) continue;
    codec.put(Item.prototype.slotCodes[slot], 3);
    codec.put(item.base.id, isize);
    num = 0;
    for (var mod in mods) {
      if (item[mod]) num += 1;
    }
    codec.put(num, 2);
    codec.put(item.color ? item.color.id : 0, 4);
    for (var mod in mods) {
      if (item[mod]) codec.put(item[mod].id, usize);
    }
  } // each slot
  codec.put(0, 1); // put meaningless trailing null
} // _packItemsAnet

