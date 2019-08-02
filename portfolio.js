/*
============================================
; Title: Portfolio.js | week 4 (update)
; Author: Aaron Wilson
; Date: 02 August 2019
; Description: JQuery Code Portfolio Website
;===========================================
*/

// I created all Jquery code here!

// Automatic JQuery Statement to let the DOM know is is ready.
$(document).ready(function() {

  // Hide all other sections.
  $("#homePage, #aboutPage, #diagramPage, #portfolioPage, #presentationPage, #contactPage, .slogan, #week-two, #week-three, #week-four, #wk-1-img-1, wk-1-img-2, wk-2-img-1, wk-2-img-2, wk-2-img-3, wk-2-img-4, wk-3-img-1, wk-3-img-2, wk-3-img-3, wk-3-img-4").hide();
  $("#logoBtn").addClass("logo-active");

  // Run ths JQuery code when the home button is clicked.
  $("#introClick").click(function () {
    $("#introPage").show();
    $("#homePage, #aboutPage, #diagramPage, #portfolioPage, #presentationPage, #contactPage").hide();
    $("#logoBtn").addClass("logo-active");
    $("#homeBtn, #aboutBtn, #diagramsBtn, #portfolioBtn, #presentationsBtn, contactBtn").removeClass("active");
  });

  // Run ths JQuery code when the home button is clicked.
  $("#homeBtn").click(function () {
    $("#homePage").show();
    $("#introPage, #aboutPage, #diagramPage, #portfolioPage, #presentationPage, #contactPage").hide();
    $("#homeBtn").addClass("active");
    $("#logoBtn, #aboutBtn, #diagramsBtn, #portfolioBtn, #presentationsBtn, contactBtn").removeClass("active, logo-active");
  });

  // Run ths JQuery code when the about button is clicked.
  $("#aboutBtn").click(function () {
    $("#aboutPage").show();
    $("#introPage, #homePage, #diagramPage, #portfolioPage, #presentationPage, #contactPage").hide();
    $("#aboutBtn").addClass("active");
    $("#logoBtn, #homeBtn, #diagramsBtn, #portfolioBtn, #presentationsBtn, contactBtn").removeClass("active, logo-active");
  });

  // Run ths JQuery code when the diagrams button is clicked.
  $("#diagramsBtn").click(function () {
    $("#diagramPage").show();
    $("#introPage, #homePage, #aboutPage, #portfolioPage, #presentationPage, #contactPage").hide();
  });

  // Run ths JQuery code when the logo is clicked.
  $("#logoBtn").click(function () {
    $("#introPage").show();
    $("#homePage, #aboutPage, #diagramPage, #portfolioPage, #presentationPage, #contactPage, .slogan").hide();
    $("#logoBtn").addClass("logo-active");
    $("#homeBtn, #diagramsBtn, #portfolioBtn, #presentationsBtn, contactBtn").removeClass("active");
  });

  // Run ths JQuery code when the portfolio button is clicked.
  $("#portfolioBtn").click(function () {
    $("#portfolioPage").show();
    $("#introPage, #homePage, #aboutPage, #diagramPage, #presentationPage, #contactPage").hide();
    $("#portfolioBtn").addClass("active");
    $("#logoBtn, #homeBtn, #diagramsBtn, #presentationsBtn, contactBtn").removeClass("active, logo-active");
  });

  // Run ths JQuery code when the presentations button is clicked.
  $("#presentationBtn").click(function () {
    $("#presentationPage").show();
    $("#introPage, #homePage, #aboutPage, #diagramPage, #portfolioPage, #contactPage").hide();
  });

  // Run ths JQuery code when the contact button is clicked.
  $("#contactBtn").click(function () {
    $("#contactPage").show();
    $("#introPage, #homePage, #aboutPage, #diagramPage, #portfolioPage, #presentationPage").hide();
    $("#contactBtn").addClass("active");
    $("#logoBtn, #homeBtn, #diagramsBtn, #portfolioBtn, #presentationsBtn").removeClass("active, logo-active");
  });

  // Run ths JQuery code when the week two button is clicked.
  $("#wk-2-btn").click(function () {
    $("week-two").show();
    $("#week-one, #week-three, #week-four").hide();
    $("#wk-2-btn").addClass("active");
    $("#wk-1-btn, #wk-3-btn, #wk-4-btn").removeClass("active");
  });

  // Run ths JQuery code when the week one button is clicked.
  $("#wk-1-btn").click(function () {
    $("week-one").show();
    $("#week-two, #week-three, #week-four").hide();
    $("#wk-1-btn").addClass("active");
    $("#wk-2-btn, #wk-3-btn, #wk-4-btn").removeClass("active");
  });

  // Run ths JQuery code when the week one button is clicked.
  $("#wk-3-btn").click(function () {
    $("week-three").show();
    $("#week-two, #week-one, #week-four").hide();
    $("#wk-3-btn").addClass("active");
    $("#wk-1-btn, #wk-2-btn, #wk-4-btn").removeClass("active");
  });

  // Run ths JQuery code when the week one button is clicked.
  $("#wk-4-btn").click(function () {
    $("week-four").show();
    $("#week-two, #week-one, #week-three").hide();
    $("#wk-4-btn").addClass("active");
    $("#wk-1-btn, #wk-2-btn, #wk-3-btn").removeClass("active");
  });

  // Run ths JQuery code when the wk 1 ord button is clicked.
  $("#wk-1-ord-buck").click(function () {
    $("#wk-1-img-1").show();
    $("#week-one, #week-two, #week-three, #week-four, w#wk-1-img-2, #wk-2-img-1, #wk-2-img-2, #wk-2-img-3, #wk-2-img-4").hide();
    $("#wk-1-btn").addClass("active");
    $("#wk-2-btn, #wk-3-btn, #wk-4-btn").removeClass("active");
  });

  // Run ths JQuery code when the wk 1 nosql button is clicked.
  $("#wk-1-nosql-buck").click(function () {
    $("#wk-1-img-2").show();
    $("#week-one, #week-two, #week-three, #week-four, #wk-1-img-1, #wk-2-img-1, #wk-2-img-2, #wk-2-img-3, #wk-2-img-4").hide();
    $("#wk-1-btn").addClass("active");
    $("#wk-2-btn, #wk-3-btn, #wk-4-btn").removeClass("active");
  });

  // Run ths JQuery code when the wk-2-ord-ns button is clicked.
  $("#wk-2-ord-ns-buck").click(function () {
    $("#wk-2-img-1").show();
    $("#week-one, #week-two, #week-three, #week-four, #wk-1-img-1, #wk-1-img-2, #wk-2-img-2, #wk-2-img-3, #wk-2-img-4").hide();
    $("#wk-2-btn").addClass("active");
    $("#wk-1-btn, #wk-3-btn, #wk-4-btn").removeClass("active");
  });
  
  // Run ths JQuery code when the wk-2-ord-nt button is clicked.
  $("#wk-2-ord-nt-buck").click(function () {
    $("#wk-2-img-2").show();
    $("#week-one, #week-two, #week-three, #week-four, #wk-1-img-1, #wk-1-img-2, #wk-2-img-1, #wk-2-img-3, #wk-2-img-4").hide();
    $("#wk-2-btn").addClass("active");
    $("#wk-1-btn, #wk-3-btn, #wk-4-btn").removeClass("active");
  });

  // Run ths JQuery code when the wk-2-nosql-ns button is clicked.
  $("#wk-2-nosql-ns-buck").click(function () {
    $("#wk-2-img-3").show();
    $("#week-one, #week-two, #week-three, #week-four, #wk-1-img-1, #wk-1-img-2, #wk-2-img-1, #wk-2-img-2, #wk-2-img-4").hide();
    $("#wk-2-btn").addClass("active");
    $("#wk-1-btn, #wk-3-btn, #wk-4-btn").removeClass("active");
  });

  // Run ths JQuery code when the wk-2-nosql-nt button is clicked.
  $("#wk-2-nosql-nt-buck").click(function () {
    $("#wk-2-img-4").show();
    $("#week-one, #week-two, #week-three, #week-four, #wk-1-img-1, #wk-1-img-2, #wk-2-img-1, #wk-2-img-2, #wk-2-img-3").hide();
    $("#wk-2-btn").addClass("active");
    $("#wk-1-btn, #wk-3-btn, #wk-4-btn").removeClass("active");
  });

    // Run ths JQuery code when the wk-2-ord-ns button is clicked.
  $("#wk-3-ord-ns-buck").click(function () {
    $("#wk-3-img-1").show();
    $("#week-one, #week-two, #week-three, #week-four, #wk-1-img-1, #wk-1-img-2, #wk-2-img-2, #wk-2-img-3, #wk-2-img-4").hide();
    $("#wk-3-btn").addClass("active");
    $("#wk-1-btn, #wk-2-btn, #wk-4-btn").removeClass("active");
  });

  // Run ths JQuery code when the wk-2-ord-nt button is clicked.
  $("#wk-3-ord-nb-buck").click(function () {
    $("#wk-3-img-2").show();
    $("#week-one, #week-two, #week-three, #week-four, #wk-1-img-1, #wk-1-img-2, #wk-2-img-1, #wk-2-img-3, #wk-2-img-4").hide();
    $("#wk-3-btn").addClass("active");
    $("#wk-1-btn, #wk-2-btn, #wk-4-btn").removeClass("active");
  });

  // Run ths JQuery code when the wk-2-nosql-ns button is clicked.
  $("#wk-3-nosql-ns-buck").click(function () {
    $("#wk-3-img-3").show();
    $("#week-one, #week-two, #week-three, #week-four, #wk-1-img-1, #wk-1-img-2, #wk-2-img-1, #wk-2-img-2, #wk-2-img-4").hide();
    $("#wk-3-btn").addClass("active");
    $("#wk-1-btn, #wk-2-btn, #wk-4-btn").removeClass("active");
  });

  // Run ths JQuery code when the wk-2-nosql-nt button is clicked.
  $("#wk-3-nosql-nb-buck").click(function () {
    $("#wk-3-img-4").show();
    $("#week-one, #week-two, #week-three, #week-four, #wk-1-img-1, #wk-1-img-2, #wk-2-img-1, #wk-2-img-2, #wk-2-img-3").hide();
    $("#wk-3-btn").addClass("active");
    $("#wk-1-btn, #wk-2-btn, #wk-4-btn").removeClass("active");
  });

  // Intro page logo rollover.
  $('.logo').hover(function () {
    $(".slogan").show();
    $(this).find('img').attr('src', function (i, src) {
        return src.replace('svg/logoNorm.svg', 'svg/logoRoll.svg')
    }).click(function () {
      $(".content #homePage").show().siblings().hide();
    });
  }, function () {
    $(this).find('img').attr('src', function (i, src) {
        return src.replace('svg/logoRoll.svg', 'svg/logoNorm.svg')
    })
  });

  //Rotate cards.
  $(".buckBlock").mouseenter(function(){
    $(this).addClass("roto").delay(2000).queue(function(){
      $(this).removeClass("roto").dequeue();
    });
  });

  // For touch support for touch devices.
  var touchSensitivity = 5;
  $(".carousel").on("touchstart", function (event) {
      var xClick = event.originalEvent.touches[0].pageX;
      $(this).one("touchmove", function (event) {
          var xMove = event.originalEvent.touches[0].pageX;
          if (Math.floor(xClick - xMove) > touchSensitivity) {
              $(this).carousel('next');
          } else if (Math.floor(xClick - xMove) < -(touchSensitivity)) {
              $(this).carousel('prev');
          }
      });
      $(".carousel").on("touchend", function () {
          $(this).off("touchmove");
      });
  });
});
