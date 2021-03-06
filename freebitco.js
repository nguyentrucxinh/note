// ==UserScript==
// @name         Freebitco.in auto collector
// @namespace    http://www.youtube.com/c/nguyentrucxjnh
// @version      1.0.0
// @description  Autoclaim Freebitco.in
// @description  Please use my Referal-Link https://freebitco.in/?r=25137207
// @author       Xinh Nguyen
// @match        https://freebitco.in/
// @match        https://freebitco.in/?op=home
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// ==/UserScript==


(function() {
    'use strict';

var count_min = 1;
var isCaptchaSolved = false;

$(document).ready(function(){
    console.log("Status: Page loaded.");
    setTimeout(function(){
        waitForRecaptcha();
    }, random(2000,4000));
    setInterval(function(){
        console.log("Status: Elapsed time " + count_min + " minutes");
        count_min = count_min + 1;
        if (count_min > 10 && !isCaptchaSolved) {
            location.reload();
        }
    }, 60000);
    setTimeout(function(){
        waitForModal();
    }, random(12000,18000));
    setInterval(function(){
        waitForRecaptcha();
    }, random(3605000,3615000));
});
function random(min,max){
   return min + (max - min) * Math.random();
}
function waitForRecaptcha() {
    // Check exist
    var exist = $("div.g-recaptcha").length > 0;
    if (exist) {
        var solved1 = $("textarea#g-recaptcha-response").val().length > 0;
        var solved2 = grecaptcha.getResponse();
        if (solved1 && solved2) {
            isCaptchaSolved = true;
            $('#free_play_form_button').click();
            console.log("Status: Button ROLL clicked.");
        } else {
            setTimeout(waitForRecaptcha, 250);
        }
    } else {
        isCaptchaSolved = true;
    }
}
function waitForModal(callback) {
    var btnModal = $('.close-reveal-modal')[0];
    if (btnModal) {
        btnModal.click();
        console.log("Status: Button CLOSE POPUP clicked.");
    } else {
        setTimeout(waitForModal, 250);
    }
}
})();
