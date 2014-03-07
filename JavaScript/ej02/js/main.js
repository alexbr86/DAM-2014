var APP = APP || {};

 APP.validardni = (function(){
    "use strict";

    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    var validarlongitud = function(dni){
        return dni && dni.length == 9;

    };
    
    var validarnumero = function(dni){
        var num = dni && parseInt(dni);

        return !isNaN(num) && num > 0 && num < 99999999;

    };

    var validarletra = function(dni){
        var letra = dni.charAt(dni.length-1);
        var num = parseInt(dni);

        var index = num % 23;

        return letras[index] === letra;
    };

    var validardni = function(dni){
        return validarlongitud(dni) && validarnumero(dni) && validarletra(dni);
    };

    return validardni;

})();

console.log(APP.validardni("44342183T"));
console.log(APP.validardni("44342183J"));