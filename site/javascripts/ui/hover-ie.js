/*
Copyright Glen Knowles 2006.
Distributed under the Boost Software License, Version 1.0.

hover-ie.js - gw1builds ui

Contants used by code to simulate :hover style under IE
*/

cssHover.impl = {
  borderColor: {
    borderTopColor: 'oldTopColor',
    borderBottomColor: 'oldBottomColor',
    borderLeftColor: 'oldLeftColor',
    borderRightColor: 'oldRightColor'
  },
  backgroundColor: {
    backgroundColor: 'oldBGColor'
  }
};


function hoverOverStyle(el, attrs) {
  if (attrs == null) return;
  for (var a in attrs) {
    var impl = cssHover.impl[a];
    for (var ia in impl) {
      var sa = impl[ia];
      el[sa] = el.style[ia];
    }
    el.style[a] = attrs[a];
  } // for each style attr being updated
} // hoverOverStyle

function hoverOutStyle(el, attrs) {
  if (attrs == null) return;
  for (var a in attrs) {
    var impl = cssHover.impl[a];
    for (var ia in impl) {
      var sa = impl[ia];
      if (el[sa] != null) el.style[ia] = el[sa];
    }
  } // for each style attr being restored
} // hoverOutStyle
