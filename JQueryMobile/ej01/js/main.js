$(function(){


    $('body').bind('swipe', '#main', function(e){
        $('#header').html("<h1>SWIPE!!!</h1>" );
        
        
    });
    $(window).bind('orientationchange', function(e){
        $('#header').html( "<h1>This device is in " + e.orientation + " mode!</h1>" );
    });
});