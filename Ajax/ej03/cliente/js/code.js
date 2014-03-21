$(function(){
    'use strict';


    $('#comprobar').on('click', function(e){
        e.preventDefault();
        $.ajax({
            url : '../servidor/compruebaDisponibilidadJSON.php',
            data : {login : $login.val()},
            dataType : 'json',
            cache : false,  
            success : escribir,
            error : function(jqXHR, textStatus, errorThrown){
                console.log(errorThrown);
            }
        });

    });
    var $login = $('#login');
    var $div = $('#disponibilidad');


    var escribir = function(data, textStatus, jqXHR){
        if (data.disponible === 'si'){
            $div.text('esta disponible');
        }
        else{
           var  str = 'el nombre de usuario no esta disponible. Pruebe con estos ejemplos: </br>';
                for (var i = 0; i < data.alternativas.length; i++) {
                    str = str + (data.alternativas[i] + '</br>');
                }

                $div.html(str);
            
        }
    };
});
