HTMLFormElement.prototype.validar = function(opts){
    "use strict";

    var form = this,
        errores = [],
        elementos = form.querySelectorAll('[data-validator]');

    var llamarErrores = function(err){
        if (err) {
            console.log(err.error);
            errores.push(err.error);
        }
        else {
            console.log("error, faltan datos o son incorrectos");
        }
    };

    var validarRequerido = function(e){
        if(!APP.validador.required(this.value)){
            if (opts){
                llamarErrores(opts.required);
                this.classList.add(opts.required.class);
            }
            else {
                this.classList.add("wrong");
            }
        }
        else{
            if (opts){
                this.classList.remove(opts.required.class);
            }
            else{
                this.classList.remove("wrong");
            }
            errores.pop();
        }
    };

    var validarEmail = function(e){
        if(!APP.validador.email(this.value)){
            if (opts){
                llamarErrores(opts.email);
                this.classList.add(opts.email.class);
            }
            else {
                this.classList.add("wrong");
            }
        }
        else{
            if (opts){
                this.classList.remove(opts.email.class);
            }
            else{
                this.classList.remove("wrong");
            }
            errores.pop();
        }
    };

    var validarPassword = function(e){
        if(!APP.validador.password(this.value)){
            if (opts){
                llamarErrores(opts.password);
                this.classList.add(opts.password.class);
            }
            else {
                this.classList.add("wrong");
            }
        }
        else{
            if (opts){
                this.classList.remove(opts.password.class);
            }
            else{
                this.classList.remove("wrong");
            }
            errores.pop();
        }
    };

    var validarMini = function(e){
        if(!APP.validador.mini(this.value)){
            if (opts){
                llamarErrores(opts.mini);
                this.classList.add(opts.mini.class);
            }
            else {
                this.classList.add("wrong");
            }
        }
        else{
            if (opts){
                this.classList.remove(opts.mini.class);
            }
            else{
                this.classList.remove("wrong");
            }
            errores.pop();
        }
    };

    var validarCheck = function(e){
        if(this.checked ===  false){
            if (opts){
                llamarErrores(opts.check);
                this.labels[0].classList.add(opts.check.class);
            }
            else {
                this.labels[0].classList.add("checkwrong");
            }
        }
        else{
            if (opts){
                this.labels[0].classList.remove(opts.check.class);
            }
            else{
                this.labels[0].classList.remove("checkwrong");
            }
            errores.pop();
        }
    };
    var validarSubmit = function(e){
        for (var i = 0; i < elementos.length; i++) {
            switch(elementos[i].dataset.validator){
                case 'required' : validarRequerido.call(elementos[i]);break;
                case 'email' : validarEmail.call(elementos[i]); break;
                case 'password' : validarPassword.call(elementos[i]); break;
                case 'mini' : validarMini.call(elementos[i]); break;
                case 'check' : validarCheck.call(elementos[i]); break;
            }
        }
        if (errores.length > 0) {
            e.preventDefault();
            errores.pop();
        }

    };

    for (var i = 0; i < elementos.length; i++) {
        switch(elementos[i].dataset.validator){
            case 'required' : elementos[i].addEventListener("blur", validarRequerido); break;
            case 'email' : elementos[i].addEventListener("blur", validarEmail);
                           elementos[i].addEventListener("keyup", validarEmail); break;
            case 'password' : elementos[i].addEventListener("blur", validarPassword);
                              elementos[i].addEventListener("keyup", validarPassword); break;
            case 'mini' : elementos[i].addEventListener("blur", validarMini);
                           elementos[i].addEventListener("keyup", validarMini); break;
        }

    }
    form.addEventListener("submit", validarSubmit);


};