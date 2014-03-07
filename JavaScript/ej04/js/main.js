var APP = APP || {};

APP.palindromo = (function(){
    "use strict";


    var palindromo = function(cadena){
        cadena = cadena.trim().replace(/ /gi, "").toLowerCase();
        var pal = cadena.split("").reverse().join("");

        return pal === cadena;

    };

    return palindromo;

})();

console.log(APP.palindromo("radar"));
console.log(APP.palindromo("RADAR"));
console.log(APP.palindromo("La ruta nos aporto otro paso natural"));