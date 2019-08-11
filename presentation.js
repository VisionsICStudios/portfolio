/*
============================================
; Title: Presentation.js | week 5 (update)
; Author: Aaron Wilson
; Date: 09 August 2019
; Description: JQuery Code Portfolio Website
;===========================================
**/

   // I created all Jquery code here!

// Automatic JQuery Statement to let the DOM know is is ready.
$(document).ready(function() {

    // Hide all other sections.
    $("#wk-1-img-1, wk-1-img-2").hide();
  
    // Run ths JQuery code when the home button is clicked.
    $("#homeBtn").click(function () {
      $("#wk-1-img-1").show();
      $("#wk-1-img-2").hide();
    });
  
    // Run ths JQuery code when the about button is clicked.
    $("#aboutBtn").click(function () {
      $("#wk-1-img-2").show();
      $("#wk-1-img-1").hide();
    });
  
    //Rotate cards.
    $(".buckBlock").mouseenter(function(){
      $(this).addClass("roto").delay(2000).queue(function(){
        $(this).removeClass("roto").dequeue();
      });
    });
});
