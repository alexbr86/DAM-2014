  window.$ = Element.prototype.$ = function(selector){
        var that = (this instanceof Element) ? this : document;
        var elems = that.querySelectorAll(selector);
        return (elems.length === 1) ? elems[0] : elems;
    };

var APP = APP || {};
APP.validador = (function(){
    "use strict";

    var email = function(ml){

        var mail = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
        return ml && mail.test(ml);
    };

    var password = function(passwd){

        var pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        return passwd && pass.test(passwd);
    };

    var required = function(requi){

        var req = /.+/;
        return requi && req.test(requi);
    };

    var mini = function(text){

        var mi = /.{50,}/;
       return text && mi.test(text);

    };


    return {
        required : required,
        email : email,
        password : password,
        mini: mini
    };

})();