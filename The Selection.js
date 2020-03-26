// ==UserScript==
// @name         The Selection.js
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Switches the flags in the language selection dropdown
// @author       Ejeffers1239, Sock
// @match        https://duelingnexus.com/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.4.1.min.js
// @updateURL    https://raw.githubusercontent.com/Yubelious/future-slash/master/The Selection.js
// ==/UserScript==

(function() {
    'use strict';

    var langclass = "en";
    $( document ).ready(function() {
        console.log("ready");
        $('#lang-select').change(function(){
            document.getElementById("flags").className = $("#lang-select").val();
        });
    });

})();
