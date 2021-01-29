//preloader
document.body.onload = function () {
  setTimeout(function () {
    var preloader = document.getElementById('preloader');
    if(!preloader.classList.contains('done')){
      preloader.classList.add('done');
    }
  }, 4000);
}

//carousel header
$(document).ready(function(){
  $("#slider-header").owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items:1,
    loop:true,
    autoplay:false,
    autoplayTimeout:10000,
    smartSpeed:1000,
    mouseDrag:false,
    touchDrag:false,
    nav:false,
    dots:false,
    center:true
  });
});

//carousel reviews
$(document).ready(function(){
  $("#slider-reviews").owlCarousel({
    nav:true,
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:10000,
    smartSpeed:500,
    dots:false,
    navText: "",
    navContainerClass:"navigation-reviews"
  });
});

//carousel team
$(document).ready(function(){
  $("#slider-team").owlCarousel({
    nav:true,
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:10000,
    smartSpeed:500,
    dots:false,
    navText: "",
    navContainerClass:"navigation-team",
    responsive:{
        0:{
          items: 1
        },

        600:{
          items: 2
        },

        900:{
          items: 3
        }
    }
  });
});

//menu adaptive
$(document).ready(function(){
	var touch = $('#navbar');
	var menu = $('.navigation-header-right');
	$(touch).click(function(slide) {
		slide.preventDefault();
		menu.slideToggle();
	});
	$(window).resize(function() {
		var wid = $(window).width();
		if(wid > 600 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});
});

/* soft scroll */
$(document).ready(function() {
  $("a.scroll").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top-82;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });
});

/* fixed navihation */
$("document").ready(function(){
  var nav = $('.navigation-header');
  var navwrapper = $('.wrapper-navigation-header');
  var navwrapperright = $('.navigation-header-right')
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      nav.addClass("f-nav"),
      navwrapper.addClass("f-nav-wrapper"),
      navwrapperright.addClass('f-nav-right');
    } else {
      nav.removeClass("f-nav"),
      navwrapper.removeClass("f-nav-wrapper"),
      navwrapperright.removeClass('f-nav-right');
    }
  });
});

/* navigation punkts */
$("document").ready(function(){
  /* vars */
  var home =  $(".navigation-header-pointer-underline:eq(0)");
  var about =  $(".navigation-header-pointer-underline:eq(1)");
  var menu =  $(".navigation-header-pointer-underline:eq(2)");
  var reservation =  $(".navigation-header-pointer-underline:eq(3)");
  var reviews =  $(".navigation-header-pointer-underline:eq(4)");
  var team =  $(".navigation-header-pointer-underline:eq(5)");

  var abouts = $(".about-restaurant").offset().top-83;
  var menus = $(".from-our-menu").offset().top-83;
  var reservations = $(".reservation").offset().top-83;
  var reviewss = $(".reviews").offset().top-83;
  var teams = $(".team").offset().top-83;
  var footer = $("footer").offset().top-83;

  $(window).scroll(function () {
    if ($(this).scrollTop() >= 0 && $(this).scrollTop() < abouts) {
      home.addClass("navigation-header-pointer-underline-active");
    } else {
      home.removeClass("navigation-header-pointer-underline-active");
    }

    if ($(this).scrollTop() >= abouts && $(this).scrollTop() < menus) {
      about.addClass("navigation-header-pointer-underline-active");
    } else {
      about.removeClass("navigation-header-pointer-underline-active");
    }

    if ($(this).scrollTop() >= menus && $(this).scrollTop() < reservations) {
      menu.addClass("navigation-header-pointer-underline-active");
    } else {
      menu.removeClass("navigation-header-pointer-underline-active");
    }

    if ($(this).scrollTop() >= reservations && $(this).scrollTop() < reviewss) {
      reservation.addClass("navigation-header-pointer-underline-active");
    } else {
      reservation.removeClass("navigation-header-pointer-underline-active");
    }

    if ($(this).scrollTop() >= reviewss && $(this).scrollTop() < teams) {
      reviews.addClass("navigation-header-pointer-underline-active");
    } else {
      reviews.removeClass("navigation-header-pointer-underline-active");
    }

    if ($(this).scrollTop() >= teams && $(this).scrollTop() < footer) {
      team.addClass("navigation-header-pointer-underline-active");
    } else {
      team.removeClass("navigation-header-pointer-underline-active");
    }
  });
});