/*
Copyright Glen Knowles 2006.
Distributed under the Boost Software License, Version 1.0.

part.js - gw1builds ui
*/

/////////////////////////////////////////////////
// Alternate Factory
/////////////////////////////////////////////////
function drawAlternateFactory() {
  var out = ["<div style='width: 100%; height: 100%'",
      " onMouseOver='DDAltFactory.over(this,event)'",
      " onMouseOut='DDAltFactory.out(this,event)'",
      " onMouseDown='DDAltFactory.down(this,event)'",
      " onMouseUp='DDAltFactory.up(this,event)'>",
    "Alternate<br>Factory",
    "</div>"];
  return out.join('');
} // drawAlternateFactory()

var DDAltFactory = DDPolicy;
DDAltFactory.drawDrag = function(obj) {
  obj.type = {newAlt: true};
  return "<span class='emptyAlt'>Alternate</div>";
};
DDAltFactory.acceptDrop = function(obj, dragObj) {
  // our own drag? skip it, otherwise, because its aliased,
  // we'd be setting the the persistent dragObj.type and not
  // just our temporary one.
  if (dragObj.srcEl == obj.srcEl) return null;
  obj.type = {deleteAlt: true};
  return dragObj.srcPolicy.acceptReverseDrop(obj, dragObj);
};
DDAltFactory.drop = function(obj, dragObj) {
  obj.type = {deleteAlt: true};
  dragObj.srcPolicy.reverseDrop(obj, dragObj);
};


/////////////////////////////////////////////////
// Empty Factory
/////////////////////////////////////////////////
function drawEmptyFactory() {
  var out = ["<div style='width: 100%; height: 100%'",
      " onMouseOver='DDEmpty.over(this,event)'",
      " onMouseOut='DDEmpty.out(this,event)'",
      " onMouseDown='DDEmpty.down(this,event)'",
      " onMouseUp='DDEmpty.up(this,event)'>",
    "Trash<br>Can",
    "</div>"];
  return out.join('');
} // drawEmptyFactory();

var DDEmpty = DDPolicy;
DDEmpty.drawDrag = function(obj) {
  obj.type = {empty: true};
  return "<div class='empty'>Empty</div>";
};
DDEmpty.acceptDrop = function(obj, dragObj) {
  obj.type = {empty: true};
  return dragObj.srcPolicy.acceptReverseDrop(obj, dragObj);
};
DDEmpty.drop = function(obj, dragObj) {
  obj.type = {empty: true};
  dragObj.srcPolicy.reverseDrop(obj, dragObj);
};


/////////////////////////////////////////////////
// Data Pager
/////////////////////////////////////////////////
function DataPager() {}
DataPager.pageDeltas = [1,2,10,20,50];

DataPager.draw = function() {
  var deltas = this.pageDeltas;
  var out = ["<div class='dataPager'>",
    "<span class='last' style='display: none; float: right'>Last</span>",
    "<span class='next' style='display: none; float: right'>Next</span>"];
  for (var i1 = deltas.length - 1; i1 >= 0; --i1) {
    out.push("<span style='display: none; float: right'>", deltas[i1], "</span>");
  }
  out.push("<span style='display: none' class='first'>First</span>",
    "<span style='display: none' class='prev'>Prev</span>");
  for (var i1 = deltas.length - 1; i1 >= 0; --i1) {
    out.push("<span style='display: none'>", -deltas[i1], "</span>");
  }
  out.push("<span class='current'>Page X of Y</span>",
    "</div>");
  return out.join('');
} // DataPager.draw()


/**
 * Update pager for current page and page count. The name of the
 * page handler is passed as a string so that a Function can be
 * created without a closure. Although I'm not sure why we should
 * care that much about it...
 *
 * @param el            pager base element
 * @param pages         {:current, :count} // current is 1 based
 * @param handlerName   name of function to handle page changes
 */
DataPager.update = function(el, pages, handlerName) {
  var deltas = this.pageDeltas;
  var spans = el.firstChild.childNodes;
  var vals = [];
  var first = 1;
  var last = pages.count;
  var current = pages.current;
  if (current == last) {
    vals[0] = last + 1;
    vals[1] = last + 1;
  } else {
    vals[0] = last;
    vals[1] = current + 1;
  }
  var pos = 2;
  for (var i1 = 0; i1 < deltas.length; ++i1, ++pos) {
    var d = deltas[deltas.length - 1 - i1];
    vals[pos] = current + d;
  }
  if (current == first) {
    vals[pos] = first - 1;
    vals[pos + 1] = first - 1;
  } else {
    vals[pos] = first;
    vals[pos + 1] = current - 1;
  }
  pos += 2;
  for (var i1 = 0; i1 < deltas.length; ++i1, ++pos) {
    var d = deltas[deltas.length - 1 - i1];
    vals[pos] = current - d;
  }
  for (var i1 = 0; i1 < vals.length; ++i1) {
    if (vals[i1] < first || vals[i1] > last) {
      spans[i1].style.display = 'none';
    } else {
      spans[i1].style.display = '';
      if (i1 != 0 && i1 != 1 &&
        i1 != deltas.length + 2 && i1 != deltas.length + 3)
      {
        spans[i1].innerHTML = vals[i1];
      }
      spans[i1].onclick = new Function(handlerName + '(' + vals[i1] + ')');
    }
  }
  spans[i1].innerHTML = "Page " + current + " of " + (last - first + 1);
} // DataPager.update(el, pages, handlerName)


/////////////////////////////////////////////////
// DDPart - Simple part tooltip policy
/////////////////////////////////////////////////
var DDPart = DDPolicy;
DDPart.drawTooltip = function(obj) {
  var res = { side: 't', align: 'l', width: 'auto' }
  var out = ["<span class='partName'>", obj.name, "</span>",
    "<div class='partDesc' style='white-space: nowrap'>", obj.desc,
    "</div>"];
  res.body = out.join('');
  return res;
};
