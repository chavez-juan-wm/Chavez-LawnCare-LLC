
function main() {

    (function () {
       'use strict';

        $('a.page-scroll').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset().top - 80
                }, 900);
                return false;
              }
            }
          });

        // Show Menu on Book
        $(window).bind('scroll', function() {
            var navHeight = $(window).height() - 570;
            if ($(window).scrollTop() > navHeight)
            {
                $('#logo').fadeIn("slow");
            }
            else
            {
                $('#logo').fadeOut("slow");
            }
        });

        $('body').scrollspy({
            target: '.navbar-default',
            offset: 80
        });

        // Hide nav on click
      $(".navbar-nav li a").click(function (event) {
        // check if window is small enough so dropdown is created
        var toggle = $(".navbar-toggle").is(":visible");
        if (toggle) {
          $(".navbar-collapse").collapse('hide');
        }
      });

        // Portfolio isotope filter
        $(window).load(function() {
            var $container = $('.portfolio-items');

            $container.isotope({
                filter: '.slider',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });

            $('.cat a').click(function() {
                $('.cat .active').removeClass('active');
                $(this).addClass('active');
                var selector = $(this).attr('data-filter');

                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });

            $('.dog a').click(function() {
                if(!$(this).hasClass('mode')){
                    $('.dog .mode').removeClass('mode');
                    $(this).addClass('mode');
                    var selector = $(this).attr('data-filter');

                    if(selector === '.grid'){
                        $("#carousel7").carousel('pause');
                        $('.categories').fadeIn("slow");
                    }
                    else{
                        $('#carousel7').carousel({
                            interval: 4000,
                            keyboard: true,
                            pause: "hover"
                        });

                        $('.categories').fadeOut("fast");
                    }

                    $container.isotope({
                        filter: selector,
                        animationOptions: {
                            duration: 750,
                            easing: 'linear',
                            queue: false
                        }
                    });
                }
                return false;
            });

        });

        // Nivo Lightbox
        $('.portfolio-item a').nivoLightbox({
                effect: 'slideDown',
                keyboardNav: true
        });

        // Testimonial Slider
        $(document).ready(function() {
            $('.owl-carousel').owlCarousel({
                margin: 10,
                loop: true,
                nav: false,
                items: 1
            });

            $('#carousel7').carousel({
                interval: 4000,
                keyboard: true,
                pause: "hover"
            });
            $('.grid .carousel').carousel({
                interval: false
            });

        });
    }());
}

function clearText(className) {
    $(className).html("");
}

function clearAll() {
    if($("input#inputCity").val() === "" && $("input#inputAddress").val() === "" && $("input#inputZip").val() === "") {
        $(".address").html("");
        $(".zip").html("");
        $(".city").html("");
    }
}

main();