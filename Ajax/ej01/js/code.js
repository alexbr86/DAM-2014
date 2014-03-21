$(function(){
    'use strict';
    var $rec = $('#recurso');
    $rec.val(window.location);
    $('#enviar').on('click', function(e){
        $.ajax({
            url : $rec.val(),
            data : { data : $rec.val()},
            dataType : 'text',
            cache : false,  
            success : escribir,
            error : function(jqXHR, textStatus, errorThrown){
                console.log(errorThrown);
            }
        });
    });

    var escribir = function(data, textStatus, jqXHR){
        $('#contenidos').text(data);
        $('#cabeceras').text(jqXHR.getAllResponseHeaders());
        $('#codigo').text(jqXHR.status + '\n' + jqXHR.statusText );
        

    };

});