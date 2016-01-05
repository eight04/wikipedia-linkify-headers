// ==UserScript==
// @name        Wikipedia - Linkify headers
// @version     0.1.1
// @namespace   eight04.blogspot.com
// @description An userscript helping you get the url linking to specified section
// @include     https://*wikipedia.org/*
// @grant		GM_addStyle
// @compatible  firefox
// @compatible  chrome
// @compatible  opera
// ==/UserScript==

"use strict";

var nodes = document.querySelectorAll("#mw-content-text span.mw-headline[id]"),
	i, link;

for (i = 0; i < nodes.length; i++) {
	link = document.createElement("a");
	link.innerHTML = "&#128279;";
	link.href = "#" + nodes[i].id;
	link.className = "mw-headline-link";
	nodes[i].appendChild(link);
}

GM_addStyle(RP.CSS);
