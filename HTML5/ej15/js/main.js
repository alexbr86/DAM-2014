$(function () {
    "use strict";

    // Obtener los elementos del DOM
    var $text = $('#input'),
        $send = $('#send'),
        $status = $('#status');


    // Mi color asignado por el servidor
    var myColor = false;
    // Mi nick
    var myName = false;

   
    var addMessage = function (author, message, color, dt) {
        $('#content').prepend('<p><span style="color:' + color + '">' + author + '</span> @ ' +
             + (dt.getHours() < 10 ? '0' + dt.getHours() : dt.getHours()) + ':'
             + (dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes())
             + ': ' + message + '</p>');
    };

    if(Modernizr.websockets){
        // Comprobar la disponibilidad de Web Socket en el navegador
        /*if () {
            return false;
        }*/

        window.WebSocket = window.WebSocket || window.MozWebSocket;
        // Abrir la conexion con ws://www.arkaitzgarro.com:1337
        var socket = new WebSocket('ws://www.arkaitzgarro.com:1337');
        socket.onopen = function(e){
            $text.removeAttr('disabled');
            $send.removeAttr('disabled');
            $status.text("Conected");

            console.log("You are conected!");
        };
        // 1. Al abrir la conexión, solicitar el nick.
        $(document).on('click', '#send', function(e){
            socket.send($text[0].value);
            if(myName===false){
                myName = $text[0].value;
                $text[0].value = "";
            }
            else{
                $text[0].value = "";
            }
            

        });
        // 2. Controlar posibles errores del servidor.
        socket.onerror = function(e){console.log("There is a error with the conexion, please wait a minute and try again.");};
        // 3. Escucar los mensajes del servidor, y mostrarlos en el elemento "content"
        socket.onmessage = function(e) {
            var data = JSON.parse(e.data);
            if(data.type === "color"){
                myColor=data.data;
            }
            if(data.type==="history"){
                for (var i in data.data){
                    //console.log(data.data[i]);
                    var date1 = new Date(data.data[i].time);
                    addMessage(data.data[i].author, data.data[i].text, data.data[i].color, date1);
                }
            }
            if(data.type==="message"){
                console.log(data.data);
                var date2 = new Date(data.data.time);
                addMessage(data.data.author, data.data.text, data.data.color, date2);

            }
        };

        socket.onclose = function(e){console.log("You are disconected!");};
        // 4. La estructura del objeto enviado por el servidor es la siguiente:
        //      {
        //          // Contiene el tipo de mensaje recibido
        //          type : @string in ['color', 'history', 'message'],
        //          // Contiene los datos según el tipo de mensaje recibido
        //          data: @Object {author, text, color, time}
        //      }
        // 5. Enviar un mensaje al pulsar enter. El mensaje enviado es únicamente la cadena de caracteres.

        /**
         * Añadir el mensaje a la ventana de chat
         */

    }
    else{
        console.log("You don't have supported web sockets!!");
    }
});