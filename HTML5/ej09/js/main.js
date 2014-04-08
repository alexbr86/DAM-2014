$(function(){
    'use strict';
    window.indexedDB = window.indexedDB || window.mozIndexedDB ||
                    window.webkitIndexedDB || window.msIndexedDB;

    window.IDBTransaction = window.IDBTransaction || 
                    window.webkitIDBTransaction || window.msIDBTransaction;
    window.IDBKeyRange = window.IDBKeyRange || 
                    window.webkitIDBKeyRange || window.msIDBKeyRange;

    var db = null;

    var open = function () {
        var version = 6;
        var request = indexedDB.open("todo-list", version);

        request.onupgradeneeded = function(e) {
            db = e.target.result;

            if(db.objectStoreNames.contains("todo-list")) db.deleteObjectStore("todo-list");

            var store = db.createObjectStore("todo-list", 
                        { keyPath: "timeStamp" });
            store.createIndex('completed', 'completed', { unique: false });
         };

        request.onerror = onerror;

        request.onsuccess = function(e) {
            db = e.target.result;
            console.log("DB opened");
         };
    };

    var add = function (todotext) {    
        var transaction = db.transaction(["todo-list"], "readwrite");
        var store = transaction.objectStore("todo-list");

        var data = {
            "text": todotext,
            "timeStamp": new Date().getTime(),
            "completed": "false"
        };

        var request = store.put(data);

        request.onsuccess = function(e) {
            console.log("Sucessful add: "+e);
        };

        request.onerror = function(e) {
            console.log("Error adding: ", e);
        };
    };

    var remove = function(key){
        var transaction = db.transaction(["todo-list"], "readwrite");
        var store = transaction.objectStore("todo-list");
        var id = parseInt(key);
        var request = store.delete(id);
        request.onsuccess = function(e) {
            console.log("Sucessful remove: "+e);
        };

        request.onerror = function(e) {
            console.log("Error adding: ", e);
        };

    };

    var update = function (id, text, checked) {    
        var transaction = db.transaction(["todo-list"], "readwrite");
        var store = transaction.objectStore("todo-list");
        var data;
    
        data = {
            "text": text,
            "timeStamp": parseInt(id),
            "completed": checked
        };


        var request = store.add(data);

        request.onsuccess = function(e) {
            console.log("Sucessful add: "+e);
        };

        request.onerror = function(e) {
            console.log("Error adding: ", e);
        };
    };

    var addTask = function (e) {
        var $todo = $('#todo');
        add($todo[0].value);
        $todo.value = "";
    };    
    
    var removeTask = function (e) {
        var $key = $('#id');
        remove($key[0].value);
        $key.value = "";
    };

    var updateTask = function(e) {
        var $key = $('#id');
        var $todo = $('#todo');
        var $cheked = $('#completed');
        update($key[0].value, $todo[0].value, $cheked[0].checked);

    };


function init() {
    open();
}

$(document).on('click', '#btn-add', addTask);
$(document).on('click', '#btn-rmv', removeTask);
$(document).on('click', '#btn-updt', updateTask);
//$(document).on('click', '#btn-get', getTask);
//$(document).on('click', '#completed', completed);
window.addEventListener("DOMContentLoaded", init, false);

});
