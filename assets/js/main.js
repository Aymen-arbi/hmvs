jQuery(document).ready(function ($) {

	// /*----------------------------------------------------*/
	//  Hamburger menu
	// ------------------------------------------------------*/
	// $(".hamburger").click(function () {
	// 	$(".main-menu").slideToggle("slow", function () {
	// 		$(".hamburger").hide();
	// 		$(".close").show();
	// 		$(".menu").css('opacity', 1);
	// 	});
	// });

	// $(".close").click(function () {
	// 	$(".main-menu").slideToggle("slow", function () {
	// 		$(".close").hide();
	// 		$(".hamburger").show();
	// 		$(".menu").css('opacity', 0.7);
	// 	});
	// });

	// $(".main-menu ul li a").click(function () {
	// 	if ($(window).outerWidth() < 768) {
	// 		$(".main-menu").slideToggle("slow", function () {
	// 			$(".close").hide();
	// 			$(".hamburger").show();
	// 			$(".menu").css('opacity', 0.9);
	// 		});
	// 	}
	// });

	// /*----------------------------------------------------*/
	//  Highlight the current section in the navigation bar
	// ------------------------------------------------------*/
	var sections = $('section'),
		nav = $('.navbar'),
		nav_height = $('.navbar').outerHeight();
	$(window).on('scroll', function () {
		var cur_pos = $(this).scrollTop();

		sections.each(function () {
			var top = $(this).offset().top - nav_height,
				bottom = top + $(this).outerHeight();

			if (cur_pos >= top && cur_pos <= bottom) {
				nav.find('li').removeClass('active');
				nav.find('a[href="#' + $(this).attr('id') + '"]').parent().addClass('active');
			}
		});
	});

	// /*----------------------------------------------------*/
	//  Smooth Scrolling
	// ------------------------------------------------------*/
	$('a[href*=#]:not([href=#])').click(function () {
		nav_height = $('.navbar').outerHeight();
		console.log("Put a message here.");
		console.log(nav_height);
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {

				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				$('html, body').animate({
					scrollTop: target.offset().top - nav_height + 1
				}, 1000);
				return false;
			}
		}
	});


	/*----------------------------------------------------*/
	/*	Fade In/Out Primary Navigation
	------------------------------------------------------*/
	// $(window).on('scroll', function () {

	// 	var h = $('#home').height();
	// 	var y = $(window).scrollTop();
	// 	var nav = $('.menu');

	// 	if ((y > h * 0.10) && (y < h) && ($(window).outerWidth() > 768)) {
	// 		nav.fadeOut('fast');
	// 	} else {
	// 		if (y < h * 0.10) {
	// 			nav.css('opacity', 0.9).fadeIn('fast');
	// 		} else {
	// 			nav.css('opacity', 1).fadeIn('fast');

	// 		}
	// 	}
	// });


	$(window).scroll(function () {
		if ($(this).scrollTop() > 90) /*height in pixels when the navbar becomes non opaque*/ {
			$('.navbar-inverse').addClass('opaque');
			$('.navbar-inverse .navbar-nav > li > a').css("color", "#999999");
			$('.navbar-inverse .navbar-nav > .active > a').css("color", "#199E03");
			$('.navbar-inverse .navbar-nav > .active > a:hover').css("backgound-color", "none");
			$('.navbar-inverse .navbar-nav > .active > a:active').css("backgound-color", "none");
			$('.navbar-inverse .navbar-brand').css("color", "#999999");
			console.log("!!!!!!");
			console.log($(this).scrollTop());
		} else {
			$('.navbar-inverse').removeClass('opaque');
			$('.navbar-inverse .navbar-nav > li > a').css("color", '#FFFFFF');
			$('.navbar-inverse .navbar-nav > .active > a').css("color", "#199E03");
			$('.navbar-inverse .navbar-brand').css("color", '#999999');
		}
	});

	/*----------------------------------------------------*/
	/*Prevent a Google Maps iframe from capturing the mouse's scrolling
	------------------------------------------------------*/

	// to enable the pointer events only on click;

	$('.map-canvas').addClass('scrolloff'); // set the pointer events to none on doc ready
	$('.map-responsive').on('click', function () {
		$('.map-canvas').removeClass('scrolloff'); // set the pointer events true on click
		console.log("?????????");
	});

	// to disable pointer events when the mouse leave the canvas area;

	$(".map-canvas").mouseleave(function () {
		$('.map-canvas').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
		console.log("))??????????????");
	});

});