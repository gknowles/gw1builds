/*
Copyright Glen Knowles 2006.
Distributed under the Boost Software License, Version 1.0.

util-popup.js - gw1builds ui
*/

/////////////////////////////////////////////////
// Support for
//   Popup menus
//   Dialogs
/////////////////////////////////////////////////

if (typeof dojo != 'undefined') { dojo.provide("ui.util-popup"); }

function showDialog(title, body, className) {
  var dlg = dijit.byId('dialog');
  var titleEl = dojo.html.getElementsByClass(
    "titlebar", dlg.containerNode)[0];
  var contentEl = dojo.html.getElementsByClass(
    "content", dlg.containerNode)[0];
  dlg.containerNode.className = className ? className : '';
  titleEl.innerHTML = /[<>]/.test(title) ?
    title : ("<h2>" + title + "</h2>");
  if (dojo.dom.isNode(body)) {
    contentEl.innerHTML = '';
    contentEl.appendChild(body);
  } else {
    contentEl.innerHTML = body;
  }
  dlg.show();
  setFirstFocus(contentEl);
} // showDialog(title, body)

function hideDialog() {
  dijit.byId('dialog').hide();
} // hideDialog()



var DDPopup = {
  popEl: null,

  getEl: function() {
    return this.popEl || (this.popEl = dojo.byId('menuPopup'));
  },

  show: function(baseEl, body, className) {
    baseEl.blur();
    var popEl = this.getEl();
    popEl.className = className || '';
    if (dojo.dom.isNode(body)) {
      popEl.innerHTML = '';
      popEl.appendChild(body);
    } else {
      popEl.innerHTML = body;
    }
    showBy(popEl, baseEl, 'b');
    setFirstFocus(popEl);
    dojo.event.connect('before', document, 'onmousedown',
      this, '_mouseHandler');
  }, // show

  hide: function() {
    var popEl = this.getEl();
    dojo.html.hide(popEl);
    dojo.event.disconnect('before', document, 'onmousedown',
      this, '_mouseHandler');
  }, // hide

  _mouseHandler: function(event) {
    dojo.event.browser.fixEvent(event);
    var popEl = this.getEl();
    if (!dojo.dom.isDescendantOf(event.target, popEl)) {
      this.hide();
    }
  } // mouseHandler
} // DDPopup.*
