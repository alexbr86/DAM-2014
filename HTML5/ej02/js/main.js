$(function(){
    'use strict';

    document.desingMode= 'on';

    $(document).on('click', '#btn-bold', function(e){
        document.execCommand('bold',false,null);
    });
    $(document).on('click', '#btn-itlc', function(e){
        document.execCommand('italic',false,null);
    });
    $(document).on('click', '#btn-line', function(e){
        document.execCommand('underline',false,null);
    });

});