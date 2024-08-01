/*
Copyright Glen Knowles 2006 - 2024.
Distributed under the Boost Software License, Version 1.0.

slotset.js - gw1builds model

Slots for objects with alternatives
*/

/////////////////////////////////////////////////
// Global Options
//   .autoTrailingAlt
//
// Helpers
//   makeBullet(pos, alt)
//   bulletPos('2')
//   bulletAlt('8a')
//
// Structors
//   SlotSet(numSlots, [changeKey], [maxAlts])
//
// Commands
//   setSlot(pos, [alt], val) - sets a skillbar slot
//   moveSlot(pos, alt, fromPos, fromAlt)
//   insertSlot(pos, val[, ..., altN])
//   deleteSlot(pos)
//   insertAlt(pos, alt, val)
//   deleteAlt(pos, alt)
//   appendAlt([pos], val)
//
// Queries
//   countSlots()
//   countAlts()
//   slotPrimes() - current objects, simple array, alternates excluded
//   slots() - array of arrays, containing the primary and alternates
//     for each slot
//   slotRefs(inclNulls = true) - array of objects of the form:
//     {pos:, alt:, value:}
//   slotValue(pos, [alt])
//   slotValue(bullet)
/////////////////////////////////////////////////


/////////////////////////////////////////////////
// Global Options
/////////////////////////////////////////////////
// ensure there is always exactly one trailing empty
// alternate skill for the last skill slot
SlotSet.prototype.autoTrailingAlt = false;

/////////////////////////////////////////////////
// Helpers
/////////////////////////////////////////////////
SlotSet.prototype.makeBullet = function(pos, alt) {
  var bullet = String(pos + 1);
  if (alt) bullet += String.fromCharCode(96 + alt);
  return bullet;
} // makeBullet

SlotSet.prototype.bulletPos = function(bullet) {
  var pos = parseInt(bullet) - 1;
  return pos;
} // bulletPos

SlotSet.prototype.bulletAlt = function(bullet) {
  var alt = String(bullet).charCodeAt(bullet.length - 1) - 96;
  return alt < 0 ? 0 : alt;
} // bulletAlt

/////////////////////////////////////////////////
// Structors
/////////////////////////////////////////////////
/**
 * Constructs a slot set
 */
function SlotSet(numSlots, changeKey, maxAlts) {
  this._changed = {};
  this._changed[changeKey || 'slotArray'] = true;
  this._slotMaxAlts = maxAlts || Infinity;
  this._slots = [];
  var num = numSlots || 0;
  for (var i1 = 0; i1 < numSlots; ++i1) {
    this._slots.push([null]);
  }
  this._ensureTrailingAlt();
} // SlotSet


/////////////////////////////////////////////////
// Commands
/////////////////////////////////////////////////
/**
 * Set, or empty, a slot
 *
 * @param pos   position of slot to set
 * @param alt   (optional) 0 or ordinal of alternate for pos
 * @param val   value or null to store in slot
 * @return      changed hash, or null if invalid
 */
SlotSet.prototype.setSlot = function(pos, alt, val) {
  var slots = this.slots();
  if (arguments.length == 2) {
    val = alt;
    alt = 0;
  }
  if (pos < 0 || pos >= slots.length ||
    alt < 0 || alt > this._slotMaxAlts)
  {
    alert("setSlot: Invalid position " + pos + "/" + alt +
      ", must be 0-" + (slots.length - 1) +
      "/0-" + this._slotMaxAlts);
    return null;
  }
  // null? clear out slot
  if (name == null) {
    // no change? exit
    if (slots[pos][alt] == null) return false;
    slots[pos][alt] = null;
    this.ensureTrailingAlternate_i();
    return this._changed;
  }

  // no change? exit
  if (slots[pos][alt] != null && slots[pos][alt] == val) {
    return {};
  }

  // remove duplicate alternates
  for (var i1 = 0; i1 < slots[pos].length; ++i1) {
    var sval = slots[pos][i1];
    if (sval == val) {
      slots[pos][i1] = null;
    }
  }
  slots[pos][alt] = val;
  this._ensureTrailingAlt();

  return this._changed;
} // setSlot(pos, [alt], val)


/**
 * Insert a slot, slides other slots down to make room.
 *
 * @param pos      position to add slot, can be one past the end
 * @param val      (optional) slots prime value
 * @param ...altN  (optional) alternates
 * @return         changed hash, or null if invalid
 */
SlotSet.prototype.insertSlot = function(pos/*, val, ...altN*/) {
  var slots = this.slots();
  var vals;
  if (pos < 0 || pos > slots.length) {
    alert("insertSlot: Invalid position " + pos +
      ", must be 0-" + slots.length);
    return null;
  }
  if (arguments.length == 1) {
    vals = [null];
  } else {
    vals = [];
    for (var i1 = 1; i1 < arguments.length; ++i1) {
      vals.push(arguments[i1]);
    }
  }
  slots.splice(pos, 0, vals);
  return this._changed;
} // insertSlot(pos, val[, ..., altN])


/**
 * Delet a slot and its alternates, slides other slots up.
 *
 * @param pos   position of slot to delete
 * @return      changed hash, or null if invalid
 */
SlotSet.prototype.deleteSlot = function(pos/*, val, ...altN*/) {
  var slots = this.slots();
  if (pos < 0 || pos >= slots.length) {
    alert("deleteSlot: Invalid position " + pos +
      ", must be 0-" + (slots.length - 1));
    return null;
  }
  slots.splice(pos, 1);
  return this._changed;
} // deleteSlot(pos)


/**
 * Move slot from one position to another. Can be used to reorder
 * the slots. Slides other slots down the bar to make room.
 *
 * @param pos
 * @param alt
 * @param fromPos
 * @param fromAlt
 * @return          changed hash, or null if invalid
 */
SlotSet.prototype.moveSlot = function(pos, alt, fromPos, fromAlt) {
  var slots = this.slots();
  var numSlots = slots.length;
  // target location can be first to one past the end
  //   if pos is end+1, alt must be 0
  if (pos < 0 || alt < 0 ||
    pos < numSlots && alt > slots[pos].length ||
    pos == numSlots && alt > 0 ||
    pos > numSlots)
  {
    alert('moveSlot: Invalid target slot ' +
      '(' + pos + '/' + alt + ')');
    return null;
  }
  // from location must exist
  if (fromPos < 0 || fromAlt < 0 ||
    fromPos >= numSlots || fromAlt >= slots[fromPos].length)
  {
    alert('moveSlot: Invalid from slot ' +
      '(' + fromPos + '/' + fromAlt + ')');
    return null;
  }
  if ((alt == 0) != (fromAlt == 0) && pos != fromPos) {
    alert('moveSlot: Invalid alternate conversion (' +
      fromPos + ',' + fromAlt + ') => (' + pos + ',' + alt + ')');
    return null;
  }
  // no change? exit
  if (pos == fromPos && alt == fromAlt) {
    return {};
  }

  // reordering a prime and its alternates
  if (pos == fromPos) {
    var slot = slots[pos];
    var s0 = slot[0];
    var tmp = slot.splice(fromAlt, 1)[0];
    if (fromAlt < alt) slot.splice(alt - 1, 0, tmp)
    else slot.splice(alt, 0, tmp);
    // primary of slot changed? reapply to ensure there
    // are no duplicates, multiple elites, etc, in primary skills
    if (s0 != slot[0]) {
      s0 = slot[0];
      slot[0] = null;
      this.setSlot(pos, 0, s0);
    }
  }
  // slot move
  else if (alt == 0) {
    var tmp = slots.splice(fromPos, 1)[0];
    // trailing alternate? leave it on the tail
    if (this.autoTrailingAlt &&
      fromPos == numSlots - 1)
    {
      if (tmp.length > 1 && tmp[tmp.length - 1] == null) tmp.pop();
    }
    if (fromPos < pos) {
      slots.splice(pos - 1, 0, tmp);
    } else {
      slots.splice(pos, 0, tmp);
    }
  }
  // alternate move
  else {
    var tmp = slots[fromPos].splice(fromAlt, 1)[0];
    slots[pos].splice(alt, 0, tmp);
  }

  this._ensureTrailingAlt();
  return this._changed;
} // moveSlot(pos, alt, fromPos, fromAlt)


/**
 * Insert an alternate, slides other alternates down to make room.
 *
 * @param pos   position of slot this is an alternate of
 * @param alt   position of alternate within slot, can be one
 *                past the end
 * @param val   (optional) value of alternate
 * @return      changed hash, or null if invalid
 */
SlotSet.prototype.insertAlt = function(pos, alt, val) {
  var ret = {}
  var slots = this.slots();
  if (pos < 0 || alt <= 0 ||
    pos >= slots.length || alt > slots[pos].length)
  {
    alert('insertAlt: Invalid target ' +
      '(' + pos + '/' + alt + ')');
    return null;
  }
  // add empty space for alt
  slots[pos].splice(alt, 0, null);
  if (val == null) {
    ret = this._changed;
  }
  // wanted more then an empty? set it, if it fails remove the
  // null alt that was added
  else {
    ret = this.setSlot(pos, alt, val);
    // error adding value? remove space that was added for it
    if (ret == null) {
      slots[pos].splice(alt, 1);
    }
  }
  return ret;
} // insertAlt(pos, alt, val)


/**
 * Delete an alternate, slides other alternates up.
 *
 * @param pos   position of slot this is an alternate of
 * @param alt   position of alternate within slot
 * @return      changed hash, or null if invalid
 */
SlotSet.prototype.deleteAlt = function(pos, alt) {
  var slots = this.slots();
  if (pos < 0 || alt < 0 ||
    pos >= slots.length || alt >= slots[pos].length)
  {
    alert('deleteAlt: Invalid alternate ' +
      '(' + pos + '/' + alt + ')');
    return null;
  }
  slots[pos].splice(alt, 1);
  return this._changed;
} // deleteAlt(pos, alt)


/**
 * Append an alternate to the end of a slot, or to the last slot
 * if a specific slot isn't specified
 *
 * @param pos   (optional) position of slot to set, defaults to last slot
 * @param val   value or null to store in slot
 * @return      changed hash, or null if invalid
 */
SlotSet.prototype.appendAlt = function(pos, val) {
  var slots = this.slots();
  if (arguments.length == 1) {
    val = pos;
    pos = slots.length - 1;
  }
  if (pos < 0 || pos >= slots.length) {
    alert("appendAlt: Invalid position " + pos +
      ", must be 0-" + (slots.length - 1));
    return null;
  }
  return this.insertAlt(pos, slots[pos].length, val);
} // appendAlt


/////////////////////////////////////////////////
// Queries
/////////////////////////////////////////////////
/**
 * Get number of slots in the set
 *
 * @return  count of slots
 */
SlotSet.prototype.countSlots = function() {
  return this.slots().length;
} // countSlots


/**
 * Get number of alternates in the set
 *
 * @return  count of alternates
 */
SlotSet.prototype.countAlts = function() {
  var slots = this.slots();
  var num = -slots.length;
  for (var i1 = 0; i1 < slots.length; ++i1) {
    num += slots[i1].length;
  }
  return num;
} // countAlts


/**
 * Return array of current slots, alternates are excluded
 *
 * @return  array of primes
 */
SlotSet.prototype.slotPrimes = function() {
  var slots = this.slots();
  var out = [];
  for (var i1 = 0; i1 < slots.length; ++i1) {
    out[i1] = slots[i1][0];
  }
  return out;
} // slotPrimes()


/**
 * Return current skills and alternates. An array of arrays is
 * returned, one array for each slot. Each slot array has the main
 * skill at 0 and the alternates at 1,2,etc.
 *
 * @return  skill slot arrays
 */
SlotSet.prototype.slots = function() {
  return this._slots;
} // slots()


/**
 * Return current skills and alternates. An array of hashes is
 * returned, one element for each value. The elements are of the
 * form {pos:, alt:, value:}, in pos,alt order.
 *
 * @param  inclNulls    defaults to true
 * @return  slot value refs
 */
SlotSet.prototype.slotRefs = function(inclNulls/*=true*/) {
  var slots = this.slots();
  var out = [];
  for (var pos = 0; pos < slots.length; ++pos) {
    for (var alt = 0; alt < slots[pos].length; ++alt) {
      var val = slots[pos][alt];
      if (val == null && inclNulls === false) continue;
      out.push({pos: pos, alt: alt, value: val});
    }
  }
  return out;
} // slotRefs()


SlotSet.prototype.slotValue = function(pos, alt) {
  if (dojo.lang.isString(pos)) {
    alt = this.bulletAlt(pos);
    pos = this.bulletPos(pos);
  } else {
    alt = alt || 0;
  }
  var slots = this.slots();
  if (pos < 0 || pos >= slots.length ||
    alt < 0 || alt > this._slotMaxAlts)
  {
    alert("slotValue: Invalid position " + pos + "/" + alt +
      ", must be 0-" + (slots.length - 1) +
      "/0-" + this._slotMaxAlts);
    return null;
  }
  return slots[pos][alt];
} // slotValue


/////////////////////////////////////////////////
// INTERNAL FUNCTIONS
/////////////////////////////////////////////////
/**
 * Internal function
 *
 * When autoTrailingAlt is true, ensures that a single trailing empty
 * alternate is attached to the last slot. If multiple empty alts are
 * on the end all but one of them are removed.
 */
SlotSet.prototype._ensureTrailingAlt = function() {
  // auto trailing alternates and we removed an alt from the
  //   last skill slot? ensure it has single trailing empty alt
  if (!this.autoTrailingAlt) return;
  var slots = this.slots();
  if (slots.length == 0) return;
  var slot = slots[slots.length - 1];
  // remove all trailing empty alts
  for (var i1 = slot.length - 1; i1 > 0; --i1) {
    if (slot[i1] != null) break;
    slot.pop();
  }
  // append an empty alt
  slot.push(null);
} // _ensureTrailingAlt()


