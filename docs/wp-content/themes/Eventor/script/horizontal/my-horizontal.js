jQuery(document).ready(function(){


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




