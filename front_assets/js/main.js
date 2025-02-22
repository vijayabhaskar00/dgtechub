$(document).ready(function() {
    "use strict";

    /*------------- preloader js --------------*/
    $(window).on('load', function() {
        setTimeout(function() {
            $('.loader-wraper').fadeOut();
        }, 3000);
    });


    /*------------ Start site menu  ------------*/

    // Start sticky header
    $(window).on('scroll', function() {
        if ($(window).scrollTop() >= 150) {
            $('#sticky-header').addClass('sticky-menu');
        } else {
            $('#sticky-header').removeClass('sticky-menu');
        }
    });

    // slicknav
    $('ul#navigation').slicknav({
        prependTo: ".responsive-menu-wrap"
    });

    /*------------ Start page banner slider carousel ------------*/

    $('.banner-carousel').owlCarousel({
        margin: 10,
        loop: true,
        autoplay: true,
        smartSpeed: 900,
        autoplayTimeout: 3000,
        items: 1
    });

    /*------------ Start counter up ------------*/
    $('.counter').counterUp();

    /*------------ Start gallery popup ------------*/
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
        }
    });

    /*------------ Start testimonial ------------*/
    $('.testimoni').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        smartSpeed: 900,
        autoplayTimeout: 3000,
        items: 1
    });


    $('.testimonio').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        smartSpeed: 900,
        autoplayTimeout: 3000,
        items: 4
    });
});