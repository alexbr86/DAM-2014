$(function (argument) {
    'use strict';
    var $imptext = $('#autocompletar');
    var $div = $('#sugerencias');

    var convertirarraylista = function(data){
        var $lista = $('<ul/>', {
                    'id' : 'sugelista' });
        for (var i in data) {
            var $li = $('<li/>', {
                    'id' : data[i],
                    'text': data[i]
            });
            $lista.append($li);
        }
        return $lista;


    };

    var arriba = function(){
        //$('.current').removeClassList('current').next().addClassList('current');

    };
    var abajo = function(){

    };
    var enter = function(){

    };

    var escribirmuni = function(data, textStatus, jqXHR){
        if(data.length === 0){
            $div.text ('Lo sentimos pero no encuentra coincidencias');
        }
        else{
            var  str = 'Sugerencias de posibles municipios: </br>';
            var $lista = convertirarraylista(data);
            $div.html('');
            $div.append(str);
            $div.append($lista);
        }
                
        
    };

    $imptext.on('keyup', function(e){
        var $this = $(this);
        if (e.which === 38){ // arriba
            e.preventDefault();
            console.log('payaso'); 
        }
        else if(e.which === 40) { //abajo
            e.preventDefault();
            console.log('payaso');
        }
        else if (e.which === 13){ // enter
            e.preventDefault();
            console.log('payaso');
        }
        else {
            if ($this.val().length === 0){
                $div.hide();


            }
            else{
                $div.show();
                $.ajax({
                    url : '../servidor/autocompletaMunicipios.php',
                    type : 'POST',
                    data: {municipio : $this.val()},
                    dataType : 'json',
                    cache : false,  
                    success : escribirmuni,
                    error : function(jqXHR, textStatus, errorThrown){
                        console.log(errorThrown);
                    }
                });
            }
        }


    });

});