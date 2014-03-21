$(function(){
    var intervalid, i, indice;
    var textarray = [];
    var $ticker = $('#ticker');

    var petajax = function(e){
        $.ajax({
            url : '../servidor/generaContenidos.php',
            dataType : 'text',
            cache : false,  
            success : escribir,
            error : function(jqXHR, textStatus, errorThrown){
                console.log(errorThrown);
            }
        });

           
    };

    intervalid = setInterval(petajax, 1000);

    $('#detener').on('click', function(e){
        if (intervalid > 0){
            clearInterval(intervalid);
            intervalid = 0;
        }
        else {
            intervalid = setInterval(petajax, 1000); 
        }
    });

    $('#anterior').on('click', function(e){
        if (intervalid > 0){
            clearInterval(intervalid);
            intervalid = 0;
        }

        if ( indice === 0){
            indice = textarray.length;
            $ticker.text(textarray[indice]);
        }
        else{
            indice = indice - 1;
            $ticker.text(textarray[indice]);
        }
    });

     $('#siguiente').on('click', function(e){
        if (intervalid > 0){
            clearInterval(intervalid);
            intervalid = 0;
        }
        if ( indice === textarray.length){
            indice = 0;
            $ticker.text(textarray[indice]);
        }
        else{
            indice = indice + 1;
            $ticker.text(textarray[indice]);
        }
    });




    var escribir = function(data){
        var date = new Date();
        var time = date.toTimeString(date.getTime());
        var text = (time.substr(0, 8) + "  " + data);
        textarray.push(text);
        indice = textarray.length;
        $ticker.text(text);
    };


});
    