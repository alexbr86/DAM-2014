$(function(){
    'use script';

    var $boxes = $('.box');
    var $width = $(document).width();

    $boxes.css({
        'height' : '50px',
        'width' : '50px',
        'color' : 'yellow',
        'font-size' : '18px',
        'background-color' : 'blue',
        '-webkit-transform' : 'translatex(' + ($width - 100) +'px)',
        '-webkit-transition': 'all 5s'

    });
    
    /*$boxes.animate({
        'height' : '50px',
        'width' : '50px',
        'color' : 'yellow',
        'background-color' : 'red',
        'font-size' : '18px',
        'left' : '100%'
    }, 800, function(){
        console.log('¡Eres el puto amo!');
    });*/


   /* $boxes.first().animate({
        'left' : '100%'
    }, 1000);*/
});
