/*
Copyright Glen Knowles 2006 - 2024.
Distributed under the Boost Software License, Version 1.0.

util-dragdrop.js - gw1builds ui
*/

//////////////////////////////////////////////////
// Mouse Actions:
//   Tooltip
//   Drag and Drop System
//////////////////////////////////////////////////

//////////////////////////////////////////////////
// A dragObj starts life as a simple hash passed to a DDPolicy's
// over, out, down, or up function. At the time of the initial call
// it is normal to have an 'id' property and any others that the user
// policies may want to distinguish the specific thing being dragged.
// However, the following properties are reserved by the drop system:
//   id - optional, used by policies to help identify the specific
//        object being dragged.
//   type - a hash of types the object can be interpreted as (i.e. a
//          skill slot could be a slot or a skill based on the target)
//   srcEl - the dom node that originated the drag
//   srcEvent - the event that caused the source to drag
//   srcPolicy - the policy object that is operating on behalf of the
//               srcEl
/////////////////////////////////////////////////

/////////////////////////////////////////////////
// z-index
//    0   almost everything
//  100   modal windows (search, save as, etc)
//  199   dropIndicator
//  200   dragProxy
//  300   tooltip
//  400   popup menu
/////////////////////////////////////////////////
/**
 * DDPolicy
 */
var DDPolicy = {
  over: function(el, event, obj) {
    return DDManager.over(el, event, obj, this); },
  out: function(el, event, obj) {
    return DDManager.out(el, event, obj, this); },
  down: function(el, event, obj) {
    return DDManager.down(el, event, obj, this); },
  up: function(el, event, obj) {
    return DDManager.up(el, event, obj, this); },

  // CSS CLASSES
  acceptDropClass: 'acceptDrop',
  rejectDropClass: 'rejectDrop',
  tbIndicatorClass: 'dropIndicatorTB',
  lrIndicatorClass: 'dropIndicatorLR',

  // CALL BACKS
  // mousedown
  drawDrag: function(obj) {
    // Must set dragObj.type if intiating a drag (returning
    //   a non-null value)
    // null     not draggable
    // string   proxy drag, innerHTML of proxy
    // element  direct drag of element (no drop logic)
    return null; },
  // mouseup
  drop: function(obj, dragObj, side) {
    // side - t,b,l, or r for tweener accepts, otherwise null
    },
  rejectedDrop: function(obj, dragObj, side) {
    // side - t,b,l, or r for tweener accepts, otherwise null
    },
  unhandledDrop: function(event, dragObj) {},
  // mouseover
  mouseOver: function(obj, dragObj) {},
  drawTooltip: function(obj) {
    // returns:
    // null     no tip
    // string   body of tooltip, has LT side/alignment
    // obj      { body:, side:'l', align:'t', width:'185px' }
    return null; },
  acceptDrop: function(obj, dragObj) {
    // returns:
    // null     not involved with type of object being dragged
    // true     will accept drop
    // false    specific object being dragged is invalid for this
    // string   Use divider bar to show drop location between elements
    //          contains any, all, or none of the chars 'tblr' indicating
    //          the sides of the element where a drop will be accepted
    return null; },
  // mouseout
  mouseOut: function(obj, dragObj) {},

  // REVERSE DROP CALL BACKS (target changes source)
  // mouseup
  reverseDrop: function(obj, dragObj) {},
  // mouseover
  acceptReverseDrop: function(obj, dragObj) {
    return null; }
};


/**
 * DDMove - Simple DragDrop policy that allows the element to be moved
 * around, use by window titlebars
 */
var DDMove = DDPolicy;
DDMove.drawDrag = function(obj) {
  return obj.node ? obj.node : obj.srcEl;
};


var DDManager = {
  _proxyElId: 'dragProxy',
  _dropIndicatorElId: 'dropIndicator',
  acceptance: null, // non-null means current over declared involvement
  dragObj: null, // non-null if drag in progress

  over: function(el, event, obj, policy) {
    this._prepare(arguments);
    if (this._isRelatedDescendant(el, event)) return;
    policy.mouseOver(obj, this.dragObj);
    //console.log('over: ',[obj.id,obj.slot]);
    if (this.dragObj) {
      this._showDropIndicator(obj);
    } else { // not inDrag
      if (el && this._tipBaseEl != el) {
        var out = policy.drawTooltip(obj);
        if (el && out) {
          this._tipBaseEl = el;
          if (out.body) {
            this._tooltip(el, out.body, out.side, out.align, out.width);
          } else {
            this._tooltip(el, out);
          }
        }
      }
    }
  },

  out: function(el, event, obj, policy) {
    this._prepare(arguments);
    if (this._isRelatedDescendant(el, event)) return;
    if (el == this._tipBaseEl) {
      this._tooltip();
      this._tipBaseEl = null;
    }
    this._hideDropIndicator(obj);
    policy.mouseOut(obj, this.dragObj);
  },

  down: function(el, event, obj, policy) {
    this._prepare(arguments);
    // already dragging? assume initiated by child
    if (this.dragObj) {
      // handle case where child is drag source, but parent
      // accepts the drop
      this._showDropIndicator(obj);
      return;
    }
    var htmlOrEl = policy.drawDrag(obj);
    if (htmlOrEl == null) return;

    this.dragObj = obj;
    //console.log('drag start: ',[obj.id,obj.slot]);
    if (typeof htmlOrEl == 'string') { // drag a proxy around
      this.dragEl = document.getElementById(this._proxyElId);
      this.dragEl.innerHTML = htmlOrEl;
      this.isProxyEl = true;
    } else { // direct element drag
      this.dragEl = htmlOrEl;
      this.isProxyEl = false;
    }

    this._lastMovePos = null;

    var style = this.dragEl.style;
    var pos = [event.pageX, event.pageY];
    if (this.isProxyEl) {
      this._dragOffset = [4,4];
      style.visibility = 'hidden';
      style.display = "";
      var view = getViewport();
      var offset = getScroll();
      var proxy = getBorderBox(this.dragEl);
      this._dragLimitRight = offset.left + view.width -
        proxy.width - this._dragOffset[0];
    } else {
      this._dragOffset =
        [ this.dragEl.offsetLeft - pos[0], this.dragEl.offsetTop - pos[1] ];
    }
    style.left = pos[0] + this._dragOffset[0];
    style.top = pos[1] + this._dragOffset[1];

    connectEvent('before', document, 'onmousemove', this, '_dragMove');
    connectEvent(document, 'onmouseup', this, '_dragUp');

    event.preventDefault();

    document.body.style.cursor = 'move';

    setTimeout(function() { dijit._editor.selection.remove(); }, 100);
  },

  up: function(el, event, obj, policy) {
    this._prepare(arguments);
    // not ours? let parent handle it
    if (el != this._hoverEl) return;
    if (this.acceptance != null) {
      if (this.acceptance == true || this.acceptance != '') {
        //console.log('drag drop: ',[obj.id, this._hoverSide]);
        policy.drop(obj, this.dragObj, this._hoverSide);
      } else {
        policy.rejectedDrop(obj, this.dragObj, this._hoverSide);
      }
      this.dragObj = null;
    }
    this._hideDropIndicator(obj);
  },

  hideTooltip: function() {
    this._tooltip();
  },

  /**
   * args is the 'arguments' of a function with defined
   * arguments of (el, event, obj, policy)
   */
  _prepare: function(args) {
    args[1] = fixEvent(args[1], args[0]);
    if (args[2] == null) args[2] = {};
    var obj = args[2];
    obj.srcEl = args[0];
    obj.srcEvent = args[1];
    obj.srcPolicy = args[3];
  },

  _isRelatedDescendant: function(el, event) {
    var node = event.relatedTarget;
    while(node) {
      if (node == el) return true;
      // see https://bugzilla.mozilla.org/show_bug.cgi?id=208427 for
      // why we need this try/catch.
      try {
        node = node.parentNode;
      } catch (e) {
        return true;
      }
    }
    return false;
  },

  _dragMove: function(event) {
    var pos = [event.pageX, event.pageY];
    // Mozilla-based browsers fire successive mousemove events with
    // the same coordinates, prevent needless redrawing (moz bug?)
    if (this._lastMovePos && this._lastMovePos[0] == pos[0] &&
      this._lastMovePos[1] == pos[1])
    {
      return;
    }
    this._lastMovePos = pos;

    // using proxy? adjust to keep it in viewport
    if (this.isProxyEl) {
      if (pos[0] > this._dragLimitRight) {
        pos[0] = this._dragLimitRight;
      }
    }

    with(this.dragEl.style) {
      visibility = 'visible';
      left = pos[0] + this._dragOffset[0] + 'px';
      top = pos[1] + this._dragOffset[1] + 'px';
    }
    if (typeof this.acceptance == 'string') {
      var side = this._gravity(event);
      if (side != this._hoverSide) {
        this._positionIndicator(side);
      }
    }
  },

  _dragUp: function(event) {
    if (this.dragObj) {
      //console.log('unhandled drop: ',[this.dragObj.id]);
      this.dragObj.srcPolicy.unhandledDrop(event, this.dragObj);
      this.dragObj = null;
    }

    disconnectEvent('before', document, 'onmousemove', this, '_dragMove');
    disconnectEvent(document, 'onmouseup', this, '_dragUp');

    if (this.isProxyEl) {
      this.dragEl.style.display = 'none';
    }

    document.body.style.cursor = '';
  },

  _showDropIndicator: function(obj) {
    // already have an active responder?
    if (this._hoverEl) {
      // parent has responded to drag action, it preempts us
      return;
    }

    // stop any possible swipe select that might be in progress
    dijit._editor.selection.remove();

    var policy = obj.srcPolicy;
    this.acceptance = policy.acceptDrop(obj, this.dragObj);
    if (this.acceptance == null) return;
    this._hoverEl = obj.srcEl;
    this._hoverPos = null;
    this._hoverSide = null;
    if (typeof this.acceptance == 'boolean') {
      this._hoverClass = this.acceptance
        ? policy.acceptDropClass
        : policy.rejectDropClass;
      this._hoverEl.classList.remove(this._hoverClass);
    }
    // must be TBLR between indicator bar
    else {
      this._hoverGap = {
        y: (typeof policy.tbIndicatorGap == 'number' ?
          policy.tbIndicatorGap : 0),
        x: (typeof policy.lrIndicatorGap == 'number' ?
          policy.lrIndicatorGap : 0)
      }
      this._hoverClass = {
        tb: policy.tbIndicatorClass,
        lr: policy.lrIndicatorClass
      }
      var side = this._gravity(obj.srcEvent);
      this._positionIndicator(side);
    }
  },

  _hideDropIndicator: function(obj) {
    if (this._hoverEl) {
      // active responder that's not us?
      if (this._hoverEl != obj.srcEl) {
        // parent has responded and preempts our involvement
        return;
      }
      if (typeof this.acceptance == 'boolean') {
        this._hoverEl.classList.remove(this._hoverClass);
      } else { // must be tween indicator
        if (this.dropIndicatorEl) {
          this.dropIndicatorEl.style.display = 'none';
        }
      }
      this._hoverEl = null;
    }
    this.acceptance = null;
  },

  _gravity: function(event) {
    var pos = this._hoverPos;
    if (pos == null) {
      pos = getAbsolutePosition(this._hoverEl);
      var bb = getBorderBox(this._hoverEl);
      pos.height = bb.height;
      pos.width = bb.width;
      this._hoverPos = pos;
    }

    var sides = this.acceptance;
    var x = event.pageX - pos.x;
    var y = event.pageY - pos.y;
    var w = pos.width;
    var h = pos.height;

    var tmp, dist = 0, best = '';
    if (sides.indexOf('t') != -1) {
      tmp = (h - y) / h;
      if (tmp >= dist) { best = 't'; dist = tmp }
    }
    if (sides.indexOf('b') != -1) {
      tmp = y / h;
      if (tmp >= dist) { best = 'b'; dist = tmp }
    }
    if (sides.indexOf('l') != -1) {
      tmp = (w - x) / w;
      if (tmp >= dist) { best = 'l'; dist = tmp }
    }
    if (sides.indexOf('r') != -1) {
      tmp = x / w;
      if (tmp >= dist) { best = 'r'; dist = tmp }
    }

    return best;
  },

  _positionIndicator: function(side) {
    var indEl = this.dropIndicatorEl;
    if (indEl == null) {
      indEl = document.getElementById('dropIndicator');
      this.dropIndicatorEl = indEl;
    }
    this._hoverSide = side;
    if (side == '') return;
    var pos = this._hoverPos;
    indEl.style.visibility = 'hidden';
    indEl.style.display = '';
    if (side == 't' || side == 'b') {
      var gap = this._hoverGap.y;
      indEl.className = this._hoverClass.tb;
      indEl.style.height = '0';
      indEl.style.width = this._hoverPos.width + 'px';
      indEl.style.top = (side == 't' ?
        this._hoverPos.y - getBorderBox(indEl).height - gap :
        this._hoverPos.y + this._hoverPos.height + gap
        ) + 'px';
      indEl.style.left = this._hoverPos.x + 'px';
    } else { // side is l or r
      var gap = this._hoverGap.x;
      indEl.className = this._hoverClass.lr;
      indEl.style.height = this._hoverPos.height + 'px';
      indEl.style.width = '0px';
      indEl.style.top = this._hoverPos.y + 'px';
      indEl.style.left = (side == 'l' ?
        this._hoverPos.x - getBorder(indEl).width - gap :
        this._hoverPos.x + this._hoverPos.width + gap
        ) + 'px';
    }
    indEl.style.visibility = 'visible';
  },

  // Position and show/hide the tooltip at an element and fill
  // it with HTML goodness
  //
  // param element to position it neat
  // param HTML to fill tooltip
  _tooltip: function(baseEl, body, side, align, width) {
  	var tipEl = document.getElementById("tipPopup");
  	// dismissal or drag in progress? hide tips
    if (baseEl == null || body == null) {
      hideElem(tipEl);
      tipEl.style.left = "20px";
      tipEl.style.top = "20px";
      return;
    }
    if (width == null) width = '';
    tipEl.style.width = width;
    tipEl.innerHTML = body;

    // position tip window
    showBy(tipEl, baseEl, side, align);
  }
};


//////////////////////////////////////////////////
// Show div by element
function showBy(tipEl, baseEl, side, align) {
  tipEl.style.visibility = 'hidden';
  showElem(tipEl);
  positionBy(tipEl, baseEl, side, align);
  tipEl.style.visibility = 'visible';
} // showBy

//////////////////////////////////////////////////
// Position a div by an element if space permits
//
// @param tipEl    div element being positioned
// @param baseEl   element to position next to
// @param side     t,b,l, or r. defaults to 'l'
// @param align    t,b,l, or r. defaults to 't' or 'l' on the axis
//                   not specified by side
function positionBy(tipEl, baseEl, side, align) {
  var padSide = 4, padAlign = 0;
  var view = getViewport();
  var off = getScroll();
  view.top = off.top;
  view.left = off.left;
  view.bottom = view.top + view.height;
  view.right = view.left + view.width;

	// Get absolute position and dimensions of base element
  var base = getBorderBox(baseEl);
  var page = getAbsolutePosition(baseEl);
  base.left = page.left;
  base.top = page.top;

  var tip = getBorderBox(tipEl);

  if (side == 't' || side == 'b') {
    // place on side
    if (side == 't') {
      tip.top = base.top - tip.height - padSide;
      if (tip.top < view.top) tip.top = base.top + base.height + padSide;
    } else { // side == 'b'
      tip.top = base.top + base.height + padSide;
      if (tip.top + tip.height > view.top + view.height) {
        tip.top = base.top - tip.height - padSide;
      }
    }
    // slide alignment
    tip.left = base.left;
    if (align == 'r') tip.left += base.width - tip.width;

    // off the left? move to left of viewport
    if (tip.left < view.left + padAlign) {
      tip.left = view.left + padAlign;
    } else {
      var maxLeft = view.left + view.width - tip.width - padAlign;
      // off the right? move to right of viewport
      if (tip.left > maxLeft) tip.left = maxLeft;
    }
  } else {
    // place on side
    if (side == 'r') {
      tip.left = base.left + base.width + padSide;
      if (tip.left + tip.width > view.right) {
        tip.left = base.left - tip.width - padSide;
      }
    } else { // side assumed to be 'l'
      tip.left = base.left - tip.width - padSide;
      if (tip.left < view.left) tip.left = base.left + base.width + padSide;
    }
    // slide alignment
    tip.top = base.top;
    if (align == 'b') tip.top += base.height - tip.height;

    // too high? move to top of viewport
    if (tip.top < view.top + padAlign) {
      tip.top = view.top + padAlign;
    }
    else {
      var maxTop = view.top + view.height - tip.height - padAlign;
      // too low? move to bottom of viewport
      if (tip.top > maxTop) tip.top = maxTop;
    }
  }

//  console.log('base: ' + base.left + ',' + base.top +
//    '; tip: ' + tip.left + ',' + tip.top +
//    '; view: ' + view.width + ',' + view.height +
//    '; page: ' + page.left + ',' + page.top);
  tipEl.style.left = tip.left + "px";
  tipEl.style.top = tip.top + "px";
} // positionBy(tipEl, baseEl)

