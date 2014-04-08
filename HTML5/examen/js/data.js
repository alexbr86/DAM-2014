var App = App || {};
App.Data = (function(){
    'use strict';
//iniciar base de datos
window.indexedDB = window.indexedDB || window.mozIndexedDB ||
                window.webkitIndexedDB || window.msIndexedDB;

window.IDBTransaction = window.IDBTransaction || 
                window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || 
                window.webkitIDBKeyRange || window.msIDBKeyRange;

var db = null;

var open = function () {
    var version = 5;
    var request = indexedDB.open("games", version);

    request.onupgradeneeded = function(e) {
        db = e.target.result;

        if(db.objectStoreNames.contains("games")) db.deleteObjectStore("games");

        var store = db.createObjectStore("games", 
                    { keyPath: "name" });
     };

    request.onerror = onerror;

    request.onsuccess = function(e) {
        db = e.target.result;
        console.log("DB opened");

     //obtener el json de los datos del juego   
   
        $.ajax({
                url : 'data/show.json',
                type : 'GET',
                dataType : 'json',
                cache : false,  
                success : function(data){
                    $.each(data.players, function (index){
                        var transaction = db.transaction(["games"], "readwrite");
                        var store = transaction.objectStore("games");
                        var game;
                        var player = data.players[index];
                        console.log(player);
                        game = {
                            "id-game": data.id,
                            "date": data.date,
                            "hour": data.hour,
                            "name": player.player.name,
                            "age" : player.player.age,
                            "description": player.player.description,
                            "photo" : player.player.photo,
                            "challenge": player.challenges
   
                        };
                        var request = store.put(game);

                        request.onsuccess = function(e) {
                            console.log("Sucessful add: "+e);
                        };

                        request.onerror = function(e) {
                            console.log("Error adding: ", e);
                         };

                    });

                },
                error : function(jqXHR, textStatus, errorThrown){
                    console.log(errorThrown);
                }
            });
     };
    };

    var getplayer = function (name, success) {

    var transaction = db.transaction(["games"]);
    var store = transaction.objectStore("games");

    var singleKeyRange = IDBKeyRange.only(name);
    var request = store.openCursor(singleKeyRange);


    request.onsuccess = function(e) {
        var result = e.target.result;
       if (result) {
        success(result.value);
        console.log(result.value);

        } 
    };

    request.onerror = onerror;
    };
    
    return {
        open : open,
        getplayer: getplayer
    };
   
})();