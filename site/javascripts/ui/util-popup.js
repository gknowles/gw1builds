/*
Copyright Glen Knowles 2006 - 2024.
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
  var titleEl = dlg.containerNode.getElementsByClassName('titlebar')[0];
  var contentEl = dlg.containerNode.getElementsByClassName('content')[0];
  dlg.containerNode.className = className ? className : '';
  titleEl.innerHTML = /[<>]/.test(title) ?
    title : ("<h2>" + title + "</h2>");
  if (isNode(body)) {
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
    return this.popEl || (this.popEl = document.getElementById('menuPopup'));
  },

  show: function(baseEl, body, className) {
    baseEl.blur();
    var popEl = this.getEl();
    popEl.className = className || '';
    if (isNode(body)) {
      popEl.innerHTML = '';
      popEl.appendChild(body);
    } else {
      popEl.innerHTML = body;
    }
    showBy(popEl, baseEl, 'b');
    setFirstFocus(popEl);
    connectEvent('before', document, 'onmousedown', this, '_mouseHandler');
  }, // show

  hide: function() {
    var popEl = this.getEl();
    hideElem(popEl);
    disconnectEvent('before', document, 'onmousedown', this, '_mouseHandler');
  }, // hide

  _mouseHandler: function(event) {
    fixEvent(event);
    var popEl = this.getEl();
    if (!isDescendantOf(event.target, popEl)) {
      this.hide();
    }
  } // mouseHandler
} // DDPopup.*
