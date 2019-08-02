/*
============================================
; Title: main.js | week 4 (update)
; Author: Aaron Wilson
; Date: 02 August 2019
; Description: JQuery Code Portfolio Website
;===========================================
*/

// I created all Jquery code here!

$(document).ready(function() {

  // Hide all other sections.
  $('.content #introPage').show().siblings().hide();
  $('.slogan').hide();
 
  $('.main-menu ul li a').on('click', function(e) {

    var thisLink = $(this).attr('href');

		// Show/Hide Tabs
		$('.content ' + thisLink).show().siblings().hide();

		// Change/remove current tab to active
		$(this).parent('li').addClass(' active').siblings().removeClass('active');
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
});