/*
Copyright Glen Knowles 2022 - 2024.
Distributed under the Boost Software License, Version 1.0.

util.js - gw1builds util
*/

// This script is at <base>/javascripts/util/util.js, so resolve src relative
// to <base>.
let appRoot = new URL(document.currentScript.src, document.URL)
appRoot = new URL('../..', appRoot)

//===========================================================================
function includeHtmlFragment(src) {
    let node = document.currentScript
    this.waitingHtmlFragments += 1
    const frame = document.createElement("iframe")
    node.insertAdjacentElement('beforebegin', frame)
    frame.style.display = 'none'
    frame.onload = function() {
        this.insertAdjacentHTML(
            'afterend',
            this.contentDocument.body.innerHTML
        )
        this.remove()
        createApp()
    }
    let url = new URL(src, appRoot)
    frame.src = url.href
}
includeHtmlFragment.waitingHtmlFragments = 0

//===========================================================================
function replaceWithHtmlFragment(src, keep) {
    let node = document.currentScript
    includeHtmlFragment(src)
    node.remove()
}

//===========================================================================
function appendScriptToHead(src) {
    let script = document.createElement("script")
    let url = new URL(document.currentScript.src, document.URL)
    url = new URL(src, url)
    script.src = url
    document.head.appendChild(script)
}

//===========================================================================
// Generates html elements from array of elems, where each elem object has:
//  name: element name
//  props: properties (named values or functions) of element
//  kids: array of elems to become child elements
function addElems(elems, root) {
    let self = root || document.currentScript
    for (let i = tags.length - 1; i >= 0; --i) {
        let el = document.createElement(tags[i].tag)
        for (let prop in tags[i].props) {
            el[prop] = tags[i].props[prop]
        }
        if (tags[i].kids !== undefined)
            addElems(tags[i].kids, el)
        if (root === undefined) {
            self.insertAdjacentElement('afterend', el)
            self = el
        } else {
            self.insertAdjacentElement('beforeend', el)
        }
    }
}

//===========================================================================
// Modify derived class so that it's superclass is base.
function inherits(derived, base) {
    if (typeof base != 'function') {
        alert("The base class '" + base.toString() + "' must be a function.")
    }
    derived.prototype = new base();
    derived.prototype.constructor = derived;
    derived.superclass = base.prototype;
}

//===========================================================================
function isArray(val) {
    return Array.isArray(val)
        || val && val instanceof Array;
}

//===========================================================================
function isString(val) {
    return !!arguments.length && val != null
        && (typeof val == "string" || val instanceof String)
}

//===========================================================================
function isElem(val) {
    // dojo.dom.isNode
    return val instanceof HTMLElement;
}


/****************************************************************************
*
*   HTML Dom helpers
*
**/

//===========================================================================
function showElem(elem) {
    if (elem.style.display != 'none' && elem.style.display != '') {
        alert("Using show on element with non-standard display style.")
    }
    elem.style.removeProperty('display')
}

//===========================================================================
function hideElem(elem) {
    if (elem.style.display != 'none' && elem.style.display != '') {
        alert("Using hide on element with non-standard display style.")
    }
    elem.style.display = 'none'
}

//===========================================================================
function isDescendantOf(node, ancestor, requireProperAncestor) {
    // dojo.dom.isDescendantOf
    if (node && requireProperAncestor) node = node.parentNode;
    while (node) {
        if (node == ancestor) return true;
        node = node.parentNode;
    }
    return false;
}

//===========================================================================
function selectInputText(el) {
    // dojo.html.selectInputText
    alert("selectInputText: unimplemented");
}

//===========================================================================
function selectElementChildren(elem) {
    // dojo.html.selection.selectElementChildren(this)
    alert("selectElementChildren: unimplemented");
}

//===========================================================================
function getViewport() {
    // dojo.html.getViewport
    alert("getViewport: unimplemented");
}

//===========================================================================
function getScroll() {
    // dojo.html.getScroll
    alert("getScroll: unimplemented");
}

//===========================================================================
function getBorderBox(elem) {
    // dojo.html.getBorderBox
    return { width: elem.offsetWidth, height: elem.offsetHeight };
}

//===========================================================================
// Returns width (left + right) and height (top + bottom) of elements borders.
function getBorder(elem) {
    // dojo.html.getBorder
    alert("getBorder: unimplemented");
}

//===========================================================================
function getAbsolutePosition(elem) {
    // dojo.html.getAbsolutePosition(elem, /*includeScroll*/ true, BORDER_BOX)
    alert("getAbsolutePosition: unimplemented");
}


/****************************************************************************
*
*   HTML Dom event listeners
*
**/

//===========================================================================
function connectEvent(args) {
    // dojo.event.connect
    alert("connectEvent: unimplemented");
}

//===========================================================================
function disconnectEvent(args) {
    // dojo.event.disconnect
    alert("disconnectEvent: unimplemented");
}

//===========================================================================
function fixEvent(evt, el) {
    // dojo.event.browser.fixEvent
    alert("fixEvent: unimplemented");
}
