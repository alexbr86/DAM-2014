(function($){
    'use strict';

    $.fn.formValidator = function(options){

        var opts = $.extend({}, $.fn.formValidator.defaults, options);

        return this.filter('form').each(function(){
            var $this = $(this);

            $this.find(':input[data-validator=required]').on('keyup', opts, validarRequerido);
            $this.find(':input[data-validator=password]').on('keyup', opts, validarPassword);
            $this.find(':input[data-validator=email]').on('keyup', opts, validarEmail);
            $this.find(':input[data-validator=mini]').on('keypress', opts, validarMini);
            $this.on('submit', opts, validarSubmit);



        });
    };

    //defaults
    $.fn.formValidator.defaults = {
        'required' : {
            'error' : 'This field is required',
            'class' : 'wrong'
        },
        'email' : {
            'error' : 'This email is not correct',
            'class' : 'wrong'
        },
        'password' : {
            'error' : 'This password is not correct',
            'class' : 'wrong'
        },
        'mini' : {
            'error' : 'This text is not enough',
            'class' : 'wrong'
        },
        'check' : {
            'error' : 'Accept the conditions',
            'class' : 'checkwrong'
        }
    };
    //end of defaults

    //funciones validadoras
    var email = function(ml){

        var mail = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
        return ml && mail.test(ml);
    };

    var password = function(passwd){

        var pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        return passwd && pass.test(passwd);
    };

    var required = function(requi){

        var req = /^[a-zA-Z]+(\s[a-zA-Z]+)*$/;
        return requi && req.test(requi);
    };

    var mini = function(text){

        var mi = /.{50,}/;
       return text && mi.test(text);

    };
    // final funciones validadoras

    var errores = [];

    //funciones
    var validarRequerido = function(e){
        if(!required(this.value)){
                llamarErrores(e.data.required);
                this.classList.add(e.data.required.class);
        }
        else{
            this.classList.remove(e.data.required.class);
            errores = [];
        }
    };

    var validarEmail = function(e){
        if(!email(this.value)){
                llamarErrores(e.data.email);
                this.classList.add(e.data.email.class);
        }
        else{
            this.classList.remove(e.data.email.class);
            errores = [];
        }
    };

    var validarPassword = function(e){
        if(!password(this.value)){
                llamarErrores(e.data.password);
                this.classList.add(e.data.password.class);
                crearAyuda.call(this);
        }
        else{
            this.classList.remove(e.data.password.class);
            errores = [];
            $('.aviso').remove();
        }
    };

    var validarMini = function(e){
        if(!mini(this.value)){
                llamarErrores(e.data.mini);
                this.classList.add(e.data.mini.class);
        }
        else{
            this.classList.remove(e.data.mini.class);
            errores = [];
        }
    };

    var validarCheck = function(e){
        if(this.checked ===  false){
                llamarErrores(e.data.check);
                this.labels[0].classList.add(e.data.check.class);
        }
        else{
            this.labels[0].classList.remove(e.data.check.class);
            errores = [];
        }
    };

    var llamarErrores = function(err){
            console.log(err.error);
            errores.push(err.error);
    };

    var crearAyuda = function(){
            var $this = $(this);
            var $aviso = $('.aviso');
        if ($aviso.length === 0) {
            var $mess = $('<span/>',{
                'class' : 'aviso',
                'html' : '<strong>La contraseña debe contener: Mayúsculas, minúsculas y al menos un número</strong>'
            });
            $mess.insertAfter($this);
        }

    };

    var validarSubmit = function(e){

        var $this = $(this).find(':input[data-validator]');
        $this.each(function(){
                switch(this.dataset.validator){
                    case 'required' : validarRequerido.call(this, { data : e.data });break;
                    case 'email' : validarEmail.call(this, { data : e.data }); break;
                    case 'password' : validarPassword.call(this, { data : e.data }); break;
                    case 'mini' : validarMini.call(this, { data : e.data }); break;
                    case 'check' : validarCheck.call(this, { data : e.data }); break;
                }
        });

        if (errores.length > 0) {
            e.preventDefault();
            errores = [];
        }

    };

    //final funciones

})(jQuery);

$('form').formValidator();