/*
Copyright Glen Knowles 2022 - 2024.
Distributed under the Boost Software License, Version 1.0.

util.js - gw1builds util
*/

// This script is at <base>/javascripts/util/util.js, so resolve src relative
// to <base>.
var appRoot = new URL(document.currentScript.src, document.URL)
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
