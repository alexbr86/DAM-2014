$(function(){
    'use strict';
    var $provincias = $('#provincias');
    

    var escribirprov = function(data, textStatus, jqXHR){
        var opc;

        opc = new Option('Selecciona una provincia', '');
        $provincias[0].options.add(opc);
        for (var i in data) {
            opc = new Option(data[i], i);
            $provincias[0].options.add(opc);
        }
       // console.log($provincias);
    };

    var escribirmuni = function(data, textStatus, jqXHR){
        var $municipios = $('#municipios');
        $municipios[0].options.length = 0;
        var opc;
        for (var i in data) {
            opc = new Option(data[i], i);
            $municipios[0].options.add(opc);
        }

    };

    $.ajax({
            url : '../servidor/cargaProvinciasJSON.php',
            dataType : 'json',
            type : 'POST',
            cache : false,  
            success : escribirprov,
            error : function(jqXHR, textStatus, errorThrown){
                console.log(errorThrown);
            }
        });

    $provincias.on('change', function(e){
        $.ajax({
            url : '../servidor/cargaMunicipiosJSON.php',
            type : 'POST',
            data: {provincia : $(this).val()},
            dataType : 'json',
            cache : false,  
            success : escribirmuni,
            error : function(jqXHR, textStatus, errorThrown){
                console.log(errorThrown);
            }
        });


    });
});