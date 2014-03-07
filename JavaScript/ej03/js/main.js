var APP = APP || {};

APP.tipocadena = (function(){
    "use strict";

    var validarmayusculas = function(cadena){
        return cadena && cadena.toUpperCase() === cadena;

    };

    var validarminusculas = function(cadena){
        return cadena && cadena.toLowerCase() === cadena;

    };

    var tipocadena = function(cadena){
        return (validarmayusculas(cadena) && "Mayusculas") || (validarminusculas(cadena) && "Minusculas") || "Mixto";
    };

    return tipocadena;


})();

console.log(APP.tipocadena("hola"));
console.log(APP.tipocadena("Kaixo"));
console.log(APP.tipocadena("HELLO"));