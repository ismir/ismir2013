jQuery(document).ready(function(){


// SLIDER
 $('#slider').anythingSlider({
            resizeContents      : false,
            expand              : false,
            startStopped        : false,
            buildArrows         : true,
            buildStartStop      : false,
            delay                  : 5000,
            animationTime     : 200,
            autoPlay            : true,
        onSlideComplete : function(slider){
        },
            onSlideBegin : function(slider) {
                $(".images-slider").fadeTo( 100, 0);
                $(".text-slider").fadeTo( 100, 0);
                $(".slider-in-images-text img").fadeTo( 100, 0);
                $(".text-in-images").fadeTo( 100, 0);
                $(".video-slider").fadeTo( 100, 0);
                $(".video-text-slider").fadeTo( 100, 0);
            }
            ,onSlideComplete : function(slider) {

                window.setTimeout(function() {
                    $(".activePage .images-slider").stop().animate({"opacity" : "1"}, "300");
                }, 200);

                window.setTimeout(function() {
                    $(".activePage .text-slider").stop().animate({"opacity" : "1"}, "600");
                }, 400);

                window.setTimeout(function() {
                    $(".activePage .slider-in-images-text img").stop().animate({"opacity" : "1"}, "300");
                }, 200);

                window.setTimeout(function() {
                    $(".activePage .text-in-images").stop().animate({"opacity" : "1"}, "600");
                }, 400);

                window.setTimeout(function() {
                    $(".activePage .video-slider").stop().animate({"opacity" : "1"}, "300");
                }, 200);

                window.setTimeout(function() {
                    $(".activePage .video-text-slider").stop().animate({"opacity" : "1"}, "600");
                }, 400);

            }
    });







    jQuery('.back a').each(function(){
            jQuery(this).html('<span>Prev</span><p>/</p>');
    });

    jQuery('.forward a').each(function(){
            jQuery(this).html('<span>Next</span>');
    });



});




$(window).load(function(){
   var prev = $('.back');
   var next = $('.forward');

  $('.anythingControls').append(prev);
  $('.anythingControls').append(next);

});