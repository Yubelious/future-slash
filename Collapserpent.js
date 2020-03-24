// ==UserScript==
// @name         Collapserpent the navbar
// @namespace    https://duelingnexus.com/
// @version      1.0
// @description  Toggle the navbar on and off with a button
// @author       Yubelious!
// @grant        none
// @include      https://duelingnexus.com/*
// @updateURL   https://raw.githubusercontent.com/Yubelious/future-slash/master/Collapserpent.js
// @downloadURL https://raw.githubusercontent.com/Yubelious/future-slash/master/Collapserpent.js
// ==/UserScript==

document.body.onload = addElement;

function addElement() {
    var btn = document.createElement("BUTTON");
    btn.outerHTML = "<button></button>";
    btn.setAttribute("id", "togglenavbar");
    btn.innerHTML = "Ξ";
    btn.onclick = function() {togglenavbar()};
    document.getElementById("app").appendChild(btn);
}
function togglenavbar() {
	var x = document.getElementById("togglenavbar");
		if (x.innerHTML === "◄") {
			x.innerHTML = "►";
		}
		else if (x.innerHTML === "►") {
			x.innerHTML = "◄";
		}
		var element = document.getElementById("app");
		element.classList.toggle("app-navbar-hidden");
	};
