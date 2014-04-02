$(function(){
    var $li = $('.user');
    $li.each(function(){
        console.log($(this).data());
       if($(this).data('lang')==="es"){
            $(this).data('lang', "es_ES");
            console.log($(this).data('lang'));
       }
    });
    $('li[data-delete = true]').remove();
    
});
