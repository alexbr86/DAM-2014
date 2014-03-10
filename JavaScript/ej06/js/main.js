window.$ = Element.prototype.$ = function(selector) {
    var that =(this instanceof Element) ? this : document;
    var elems = that.querySelectorAll(selector);

    return (elems.length === 1) ? elems[0] : elems;

};


var APP = APP || {};


APP.muestra = (function(){
    "use strict";
    var muestra = function(){

        var parrafoculto = document.querySelectorAll('p > span.adicional');
        var segleyendo = document.querySelectorAll('a.enlace');

        segleyendo[0].classList.add("oculto");
        parrafoculto[0].classList.remove("oculto");

    };

    return muestra;

})();

