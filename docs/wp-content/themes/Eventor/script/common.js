jQuery(function(){
    var opts = {
    lines: 9, // The number of lines to draw
    length: 6, // The length of each line
    width: 2, // The line thickness
    radius: 5, // The radius of the inner circle
    corners: 0.4, // Corner roundness (0..1)
    rotate: 0, // The rotation offset
    color: '#FFF', // #rgb or #rrggbb
    speed: 1, // Rounds per second
    trail: 60, // Afterglow percentage
    shadow: true, // Whether to render a shadow
    hwaccel: false, // Whether to use hardware acceleration
    className: 'spinner', // The CSS class to assign to the spinner
    zIndex: 2e9, // The z-index (defaults to 2000000000)
    top: 'auto', // Top position relative to parent in px
    left: 'auto' // Left position relative to parent in px
  };
  var target = document.getElementById('portfolio-loader');
  var spinner = new Spinner(opts).spin(target);
})       



jQuery(document).ready(function(){

    //MENU
    jQuery("ul.sf-menu").superfish();
    jQuery('.sub-menu li:last-child a').attr('style', 'border:none;margin-bottom:-4px;');
    jQuery(".sub-menu li:last-child").after('<div class="sub-menu-bottom"></div>');
    jQuery(".sub-menu li:first-child").attr('style', 'padding-top:4px');

    // PIRO BOX
    jQuery().piroBox({
        my_speed: 300, //animation speed
        bg_alpha: 0.5, //background opacity
        slideShow : 'true', // true == slideshow on, false == slideshow off
        slideSpeed : 3, //slideshow
        close_all : '.piro_close' // add class .piro_overlay(with comma)if you want overlay click close piroBox
    });

    jQuery(jQuery('[class^="footer-box-down recent-posts-"]')).each(function(){
        jQuery(this).addClass('recent-line-hight');
    })

    jQuery(jQuery('[class^="footer-box-down recent-comments-"]')).each(function(){
        jQuery(this).addClass('recent-line-hight');
    })


    // HOVER-IMAGES
    jQuery('.home-posts-one-img a').hover(function(){
       jQuery('img',this).stop().animate({opacity:0.4},500);
    },function(){
       jQuery('img',this).stop().animate({opacity:1},300);
    });

    jQuery('.home-post-one-img a').hover(function(){
       jQuery('img',this).stop().animate({opacity:0.4},500);
    },function(){
       jQuery('img',this).stop().animate({opacity:1},300);
    });

    jQuery('.blog-one-images a').hover(function(){
       jQuery('img',this).stop().animate({opacity:0.4},500);
    },function(){
       jQuery('img',this).stop().animate({opacity:1},300);
    });

    jQuery('.speakers-img a').hover(function(){
       jQuery('img',this).stop().animate({opacity:0.4},500);
    },function(){
       jQuery('img',this).stop().animate({opacity:1},300);
    });

    jQuery('.sponsors-one a').hover(function(){
       jQuery('img',this).stop().animate({opacity:0.4},500);
    },function(){
       jQuery('img',this).stop().animate({opacity:1},300);
    });


    //Tag Cloud style


        var tagfix = jQuery('.tagcloud a').html();
        jQuery('.tagcloud a').each(function(){
                var tagfix = jQuery(this).html();
                jQuery(this).html('').append('<div class="tags-button left"><div class="tag-left left"></div><div class="tag-center left">'+tagfix+'</div><div class="tag-right left"></div>');
        });


    // hide #back-top first
    jQuery("#back-top").hide();

    // fade in #back-top
    jQuery(function () {
            jQuery(window).scroll(function () {
                    if (jQuery(this).scrollTop() > 100) {
                            jQuery('#back-top').fadeIn();
                    } else {
                            jQuery('#back-top').fadeOut();
                    }
            });

            // scroll body to 0px on click
            jQuery('#back-top a').click(function () {
                    jQuery('body,html').animate({
                            scrollTop: 0
                    }, 800);
                    return false;
            });
    });


    //HORIZONTAL SLIDER
    jQuery('#mycarousel').jcarousel({
        animation: 300,
        wrap: 'circular',
        scroll: 1,
        auto: 2,
        itemLastInCallback: {
          onBeforeAnimation: beforeanimation,
          onAfterAnimation: afteranimation
        }
    });

    function beforeanimation(){
    }


    function afteranimation(){
    }


    jQuery('.jcarousel-item').each(function(){
            var cont = jQuery(this).html();
            var link = jQuery('img',this).attr('id');
            var title = jQuery('img',this).attr('rev');
            jQuery(this).html('<a href="'+link+'" title="'+title+'">'+cont+'<div class="image-preview-horizontal"></div></a>');
            jQuery('img',this).stop().animate({opacity:1},0);
    });

    jQuery('.jcarousel-prev').each(function(){
            jQuery(this).html('<span>Prev</span><p>/</p>');
    });

    jQuery('.jcarousel-next').each(function(){
            jQuery(this).html('<span>Next</span>');
    });




    jQuery('.jcarousel-item a').hover(function(){
       jQuery('img',this).stop().animate({opacity:0.4},500);
    },function(){
       jQuery('img',this).stop().animate({opacity:1},300);
    });


});