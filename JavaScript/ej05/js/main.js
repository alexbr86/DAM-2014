(function(){
    "use strict";
    //Numero de enlaces que hay en la pagina

    var enlaces = document.getElementsByTagName('a');
    console.log(enlaces.length);

    enlaces = document.querySelectorAll('a');
    console.log(enlaces.length);

    console.log(enlaces);

    //Dirección a la que enlaza el penúltimo enlace

    var enlace = enlaces[enlaces.length-2];
    console.log(enlace.href);

    //Numero de enlaces que enlazan a http://prueba
    var count;
    for (var i = 0; i < enlaces.length; i++) {
        if(enlaces[i].href === "http://prueba/")
            count++;

    }
    console.log(count);

    enlaces = document.querySelectorAll('a[href $="http://prueba"]');
    console.log(enlaces.length);


    //Número de enlaces del tercer párrafo
    var parrafos = document.querySelectorAll('body > p');
    if(parrafos.length>=3){
        enlaces = parrafos.querySelectorAll('a');
        console.log(enlaces.length);
    }


})();
