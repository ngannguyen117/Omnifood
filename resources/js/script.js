$(document).ready(function() {
  /* Sticky navigation */
  $('.js--section-features').waypoint(function(direction) {
    if(direction == 'down') {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '60px'
  });

  /* Scroll on buttons */
  $('.js--scroll-to-plans').click(function (e) {
    e.preventDefault();
    document.querySelector('.js--section-plans').scrollIntoView({ behavior: 'smooth' });
  });
 
  $('.js--scroll-to-start').click(function (e) {
    e.preventDefault();
    document.querySelector('.js--section-features').scrollIntoView({ behavior: 'smooth' });
  });

  /* Animations on scroll */
  $('.js--wp-1').waypoint(function() {
    $('.js--wp-1').addClass('animated fadeIn');
  }, {
    offset: '50%'
  });
  
  $('.js--wp-2').waypoint(function() {
    $('.js--wp-2').addClass('animated fadeInUp');
  }, {
    offset: '50%'
  });

  $('.js--wp-3').waypoint(function() {
    $('.js--wp-3').addClass('animated fadeIn');
  }, {
    offset: '50%'
  });

  $('.js--wp-4').waypoint(function() {
    $('.js--wp-4').addClass('animated pulse');
  }, {
    offset: '50%'
  });

  /* Mobile Navigation */
  $('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav'),
        icon = $('.js--nav-icon ion-icon');

    nav.slideToggle(200);

    if(icon.attr('name') === 'menu'){
      icon.attr('name', 'close');
    } else {
      icon.attr('name', 'menu')
    }
  });
});