$(function(){
    'use strict';
    var $editor = $('#editor');
    if($editor[0].value.length===0){
       // var valuese = sessionStorage.getItem('$editor');
        var valuelo = localStorage.getItem('$editor');
        if(valuelo){
            //$editor[0].value=valuese;
            $editor[0].value=valuelo;
        }
    }
    var save = function (e) {
        if (event.newValue === null) { 
           // sessionStorage.removeItem('$editor');
           // sessionStorage.clear();
            localStorage.removeItem('$editor');
            localStorage.clear();
         } else {
           // sessionStorage.setItem('$editor', this.value);
            localStorage.setItem('$editor', this.value);
            console.log(this.value);
         
         }
        };    
        var handleStorage = function (e) {
        if (event.newValue!==$editor[0].value) { 
            $editor[0].value = localStorage.getItem('$editor');
            console.log(this.value);
         
         }
        };


    $(document).on('keyup', '#editor', save);
    window.addEventListener('storage', handleStorage, false);

});