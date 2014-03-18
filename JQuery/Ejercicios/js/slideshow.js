$(document).ready(function(){
    var $slideshow;
    $slideshow = $('#slideshow').bxSlider({
                        'mode' : 'fade',
                        'pager' : false,
                        'controls' : false,
                        onSlidePrev: function($slideElement, oldIndex, newIndex){
                            console.log('ha pasado a la imagen anterior ' + (newIndex+1) + '/3');
                        },
                        onSlideNext: function($slideElement, oldIndex, newIndex){
                            console.log('ha pasado a la siguiente imagen ' + (newIndex+1) + '/3');
                        }});

  $(document).on('click', '.anterior', function(e){
        e.preventDefault();
        $slideshow.goToPrevSlide();
  });
  $(document).on('click', '.siguiente', function(e){
        e.preventDefault();
        $slideshow.goToNextSlide();
  });

  $(".fancybox").fancybox({
                            afterShow : function(){
                                console.log('usted esta viendo la imagen en modo fancy');
                            }
  });

});