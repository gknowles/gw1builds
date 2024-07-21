
if (typeof dojo != 'undefined') { dojo.provide("ui.slotset"); }

/**
 * Dervied policies must set:
 *  slotType     type of object in slotset, 'skill' or 'toon'
 *  orientation  'vertical' or 'horizontal' 
 *  maxSlots     maximum number of slots (alts aren't slots)
 *  maxAlts      maximum number of total alternates
 */
var DDMixSlotDrop = {
  tbIndicatorGap: -1,
  lrIndicatorGap: 0,
  tbSameIndicatorClass: 'sameSlotDropTB',
  tbOtherIndicatorClass: 'otherSlotDropTB',
  lrSameIndicatorClass: 'sameSlotDropLR',
  lrOtherIndicatorClass: 'otherSlotDropLR',
  slotType: 'skill',
  orientation: 'vertical'
}
DDMixSlotDrop.acceptDrop = function(obj, dragObj) {
  // obj = { id:<pos>, slotset:<SlotSet> }
  var bSide = this.orientation == 'vertical' ? 't' : 'l';
  var aSide = this.orientation == 'vertical' ? 'b' : 'r';
  var slots = obj.slotset.slotRefs();
  var slot = slots[obj.id];
  if (dragObj.type.empty) {
    return slot.value ? true : null;
  } else if (dragObj.type.newAlt) {
    this.tbIndicatorClass = this.tbSameIndicatorClass;
    this.lrIndicatorClass = this.lrSameIndicatorClass;
    return obj.id != 0 ? (bSide + aSide) : aSide;
  } else if (dragObj.type.slot && obj.slotset == dragObj.slotset) {
    var dragSlot = slots[dragObj.id];
    var north = false, south = false;
    this.tbIndicatorClass = this.tbOtherIndicatorClass;
    this.lrIndicatorClass = this.lrOtherIndicatorClass;
    // within same slot? okay
    if (slot.pos == dragSlot.pos) {
      // within slot with alts? use alt color
      if (obj.slotset.slots()[slot.pos].length > 1) {
        this.tbIndicatorClass = this.tbSameIndicatorClass;
        this.lrIndicatorClass = this.lrSameIndicatorClass;
      }
      north = south = true;
    } 
    // primary skill slot drag
    else if (dragSlot.alt == 0) {
      // 1. directly infront of another primary
      // 2. at the end
      north = (slot.alt == 0);
      south = (obj.id == slots.length - 1) || slots[obj.id + 1].alt == 0;
    }
    // alternate skill slot drag
    else {
      // anywhere but the very first spot
      north = (obj.id != 0);
      south = true;
    }
    return (north ? bSide : '') + (south ? aSide : '');
  } else if (dragObj.type[this.slotType]) {
    if (this.slotType == 'skill') {
      return obj.slotset.skillFilter(dragObj.value);
    } else if (this.slotType == 'toon') {
      return true;
    }
  }
  return null;
} // DDMixSlotDrop.acceptDrop
DDMixSlotDrop.drop = function(obj, dragObj, side) {
  // obj = { id:<pos>, slotset:<SlotSet> }
  var ukeys = null;
  var bSide = this.orientation == 'vertical' ? 't' : 'l';
  var aSide = this.orientation == 'vertical' ? 'b' : 'r';
  var slots = obj.slotset.slotRefs();
  var slot = slots[obj.id];
  if (dragObj.type.empty) {
    ukeys = obj.slotset.setSlot(slot.pos, slot.alt, null);
  } else if (dragObj.type.newAlt) {
    if (slots.length >= this.maxSlots + this.maxAlts) {
      alert('There is a limit of ' + this.maxAlts + ' alternates.');
      return;
    }
    // on before edge? really means bottom of prev slot
    if (side == bSide) {
      slot = slots[obj.id - 1];
    }
    ukeys = obj.slotset.insertAlt(slot.pos, slot.alt + 1, null);
  } else if (dragObj.type.slot && dragObj.slotset == obj.slotset) {
    var dragSlot = slots[dragObj.id];
    // within same slot?
    if (slot.pos == dragSlot.pos) {
      // on after edge? want next alt
      if (side == aSide) {
        slot = {pos: slot.pos, alt: slot.alt + 1};
      }
    } 
    // primary skill slot drop?
    else if (dragSlot.alt == 0) {
      // on after edge? really wanted next slot, switch to it
      if (side == aSide) {
        slot = slots[obj.id + 1];
        if (slot == null) slot = {pos: slots[obj.id].pos + 1, alt: 0};
      }
    }
    else {
      // alt on before edge of primary? really wanted to append to 
      //   prev alt list
      if (slot.alt == 0 && side == bSide) {
        slot = slots[obj.id - 1];
        side = aSide;
      }
      if (side == aSide) {
        slot = {pos: slot.pos, alt: slot.alt + 1};
      }
    }
    ukeys = obj.slotset.moveSlot(slot.pos, slot.alt, 
      dragSlot.pos, dragSlot.alt);  
  } else if (dragObj.type[this.slotType]) {
    ukeys = obj.slotset.setSlot(slot.pos, slot.alt, dragObj.value);
  }
  if (ukeys && this.updSlotSet) { 
    this.updSlotSet( {keys: ukeys, what: obj.slotset}, obj, dragObj); 
  }
} // DDMixSlotDrop.drop

var DDMixSlotReverseDrop = {
  acceptReverseDrop: function(obj, dragObj) {
    // obj = { id:<pos>, slotset:<SlotSet> }
    if (obj.type.empty) {
      return dragObj.type.slot ? true : null;
    } else if (obj.type.deleteAlt) {
      return dragObj.alt ? true : null;
    }
    return null;
  }, // acceptReverseDrop
  reverseDrop: function(obj, dragObj) {
    // obj = { id:<pos>, slotset:<SlotSet> }
    var ukeys = null;
    if (obj.type.empty) {
      ukeys = dragObj.slotset.setSlot(dragObj.pos, dragObj.alt, null);
    } else if (obj.type.deleteAlt) {
      ukeys = dragObj.slotset.deleteAlt(dragObj.pos, dragObj.alt);
    }
    if (ukeys && this.updSlotSet) { 
      this.updSlotSet( {keys: ukeys, what: dragObj.slotset}, dragObj, obj); 
    }
  } // reverseDrop
} // DDMixSlotReverseDrop

