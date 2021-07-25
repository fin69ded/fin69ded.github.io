// preloader
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    var preloader = document.querySelector('#preloader');
    if (!preloader.classList.contains('preloader-done')) {
      preloader.classList.add('preloader-done');
    }
  }, 1000);
});


//scroll top at inst
$(document).ready(function(){
  $('html, body').animate({scrollTop: 0},0);
});

// togle menu
document.body.onload = function() {
  "use strict";
  var toggles = document.querySelectorAll(".toggle-hamburger");
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };
  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  };
};

// menu adaptive
$(document).ready(function(){
  var touch = $('#navbar');
  var menu = $('.header-wrapper-nav-right');
  $(touch).click(function(slide) {
    slide.preventDefault();
    menu.slideToggle();
  });
  $(window).resize(function() {
    var wid = $(window).width();
    if(wid > 884 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });
});

// about me hover
$(document).ready(function(){
  var img_1 = $('.about-left-image-f');
  var img_2 = $('.about-left-image-s');
  let time = 0;

  $('.about-left-images')
    .mouseenter(function() {
      time = performance.now()
      img_1.css({'top':'0', 'left':'0'});
      img_2.css({'bottom':'0', 'right':'0'});
      setTimeout(function () {
        img_2.css('z-index', '11');
        img_1.css({'top':'20px', 'left':'20px'})
        img_2.css({'bottom':'20px', 'right':'20px'})
      }, 500);
    })
    .mouseleave(function() {
      if ((performance.now() - time) < 500) {
        setTimeout(function () {
          img_1.css({'top':'0', 'left':'0'});
          img_2.css({'bottom':'0', 'right':'0'});
          setTimeout(function () {
            img_2.css('z-index', '9');
            img_1.css({'top':'20px', 'left':'20px'})
            img_2.css({'bottom':'20px', 'right':'20px'})
          }, 500);
        }, 700);
      } else {
        img_1.css({'top':'0', 'left':'0'});
        img_2.css({'bottom':'0', 'right':'0'});
        setTimeout(function () {
          img_2.css('z-index', '9');
          img_1.css({'top':'20px', 'left':'20px'})
          img_2.css({'bottom':'20px', 'right':'20px'})
        }, 500);
      }
    });
});

// pop-up plagin
$(document).ready(function(){
  $('.works-items').magnificPopup({
      delegate: '.works-item-content-icon-full', // child items selector, by clicking on it popup will open
      type: 'image',
      // other options
      midClick: true,
      gallery: {
        enabled: true
      },
      type: 'image' // this is default type
  });
});

// works isoyope plagin
$(document).ready(function(){
  $('.works-items').isotope({
    // options
    itemSelector: '.works-item',
    layoutMode: 'fitRows'
  });
  $('.works-sort-item').click(function(){
    $('.works-sort-underline').removeClass('works-sort-underline-active');
    $(this).children('.works-sort-underline').addClass('works-sort-underline-active');

    var selector = $(this).attr('data-filter');
    $('.works-items').isotope({
      filter: selector
    });
    return false;
  });
});

//tabs in testimonials
$(window).on('load resize', function () {
  if ($(window).width() > 1024 ) {
    $(window).on('resize', function () {
      if ( $(".testimonials-content-left-item-button:eq(0)").hasClass('orange-batton-smaller-active') ) {
        $(".testimonials-content-right-item:eq(0)").css('display', 'block');
        $(".testimonials-content-right-item:eq(1)").css('display', 'none');
        $(".testimonials-content-right-item:eq(2)").css('display', 'none');
      };
      //for the 2nd item
      if ( $(".testimonials-content-left-item-button:eq(1)").hasClass('orange-batton-smaller-active') ) {
        $(".testimonials-content-right-item:eq(1)").css('display', 'block');
        $(".testimonials-content-right-item:eq(0)").css('display', 'none');
        $(".testimonials-content-right-item:eq(2)").css('display', 'none');
      };
      //for the 3th item
      if ( $(".testimonials-content-left-item-button:eq(2)").hasClass('orange-batton-smaller-active') ) {
        $(".testimonials-content-right-item:eq(2)").css('display', 'block');
        $(".testimonials-content-right-item:eq(0)").css('display', 'none');
        $(".testimonials-content-right-item:eq(1)").css('display', 'none');
      };      
    });

    $('.testimonials-content-left-item-button').on('click', function (){
      $('.testimonials-content-left-item-button').removeClass('orange-batton-smaller-active');
      $(this).addClass('orange-batton-smaller-active');

      //for the 1st item
      if ( $(".testimonials-content-left-item-button:eq(0)").hasClass('orange-batton-smaller-active') ) {
        $(".testimonials-content-right-item:eq(1)").fadeOut(200);
        $(".testimonials-content-right-item:eq(2)").fadeOut(200);
        setTimeout(function () {
          $(".testimonials-content-right-item:eq(0)").fadeIn(200);
        }, 200);
      };
      //for the 2nd item
      if ( $(".testimonials-content-left-item-button:eq(1)").hasClass('orange-batton-smaller-active') ) {
        $(".testimonials-content-right-item:eq(0)").fadeOut(200);
        $(".testimonials-content-right-item:eq(2)").fadeOut(200);
        setTimeout(function () {
          $(".testimonials-content-right-item:eq(1)").fadeIn(200);
        }, 200);
      };
      //for the 3th item
      if ( $(".testimonials-content-left-item-button:eq(2)").hasClass('orange-batton-smaller-active') ) {
        $(".testimonials-content-right-item:eq(0)").fadeOut(200);
        $(".testimonials-content-right-item:eq(1)").fadeOut(200);
        setTimeout(function () {
          $(".testimonials-content-right-item:eq(2)").fadeIn(200);
        }, 200);
      };
    });
  } else {
    if ($(window).width() <= 1024) {
      $(".testimonials-content-right-item").fadeIn(0);
    };
  };
});

// contacts items resize
$(window).on('load resize', function () {
  var width1 = $('.contacts-inf-item:eq(0)').width();
  var width2 = $('.contacts-inf-item:eq(1)').width();
  var width3 = $('.contacts-inf-item:eq(2)').width();
  var width4 = $('.contacts-inf-item:eq(3)').width();

  var max_width = width1;

  if (max_width < width2) {
    max_width = width2;
  };
  if (max_width < width3) {
    max_width = width3;
  };
  if (max_width < width4) {
    max_width = width4;
  };

  $('.contacts-inf-item:eq(0)').css('width', max_width);
  $('.contacts-inf-item:eq(1)').css('width', max_width);
  $('.contacts-inf-item:eq(2)').css('width', max_width);
  $('.contacts-inf-item:eq(3)').css('width', max_width);
});

/* fixed navihation */
$("document").ready(function(){
  var nav = $('.header-wrapper-nav');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 88) {
      nav.addClass("f-nav");
    } else {
      nav.removeClass("f-nav");
    }
  });
});

// navigation punkts
$(document).ready(function(){
  $(window).scroll(function () {
    // vars
    var home =  $(".header-punkts-crossing:eq(0)");
    var about =  $(".header-punkts-crossing:eq(1)");
    var services =  $(".header-punkts-crossing:eq(2)");
    var works =  $(".header-punkts-crossing:eq(3)");
    var reviews =  $(".header-punkts-crossing:eq(4)");
    var contacts =  $(".header-punkts-crossing:eq(5)");

    var abouts = $(".about").offset().top-88;
    var servicess = $(".services").offset().top-88;
    var workss = $(".works").offset().top-88;
    var reviewss = $(".testimonials").offset().top-88;
    var contactss = $(".contacts").offset().top-88;
    var footer = $("footer").offset().top-88;

    if ($(this).scrollTop() >= 0 && $(this).scrollTop() < abouts) {
      home.addClass("header-punkts-crossing-active");
    } else {
      home.removeClass("header-punkts-crossing-active");
    }

    if ($(this).scrollTop() >= abouts && $(this).scrollTop() < servicess) {
      about.addClass("header-punkts-crossing-active");
    } else {
      about.removeClass("header-punkts-crossing-active");
    }

    if ($(this).scrollTop() >= servicess && $(this).scrollTop() < workss) {
      services.addClass("header-punkts-crossing-active");
    } else {
      services.removeClass("header-punkts-crossing-active");
    }

    if ($(this).scrollTop() >= workss && $(this).scrollTop() < reviewss) {
      works.addClass("header-punkts-crossing-active");
    } else {
      works.removeClass("header-punkts-crossing-active");
    }

    if ($(this).scrollTop() >= reviewss && $(this).scrollTop() < contactss) {
      reviews.addClass("header-punkts-crossing-active");
    } else {
      reviews.removeClass("header-punkts-crossing-active");
    }

    if ($(this).scrollTop() >= contactss && $(this).scrollTop() < footer) {
      contacts.addClass("header-punkts-crossing-active");
    } else {
      contacts.removeClass("header-punkts-crossing-active");
    }
  });
});

/* soft scroll */
$(document).ready(function() {
  $("a.scroll").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top-86;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 600);
    return false;
  });
});

// testimonials slider
$(window).on('load resize', function () {
  if ($(window).width() <= 1024 ) {
    $('.testimonials-content-right').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dotsClass: 'testim-dots'
    });
  } else {
    if ($(window).width() > 1024 ) {
      $('.testimonials-content-right').slick('unslick');
    };
  };
});
