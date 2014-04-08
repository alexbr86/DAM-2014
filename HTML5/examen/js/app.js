$(document).ready(function() {
    "use strict";

    //inicializar la aplicación
    App.Data.open();
    var level = 0;
    var showplayer = function(e){
        var $this = $(this);
        App.Ui.loadlevel();
        App.Data.getplayer($this[0].value, function(player){
            localStorage.setItem('player-moment', player);
            App.Ui.drawplayer(player, level);


        });
        level = 1;
    };

    var counteropt1 = function(e){
        var playermoment = localStorage.getItem('player-moment');
        if (playermoment.challenge[level].option1.selected === "option1"){
            acerts++;
        }
        else{
            errors++;
        }


    };
    var counteropt2 = function(e){
        var playermoment = localStorage.getItem('player-moment');
        if (playermoment.challenge[level].option2.selected === "option2"){
            acerts++;
        }
        else{
            errors++;
        }
        App.Ui.drawplayer(playermoment, level);
        level = 0;


    };

    $(document).on('click', '#option1', counteropt1);
    $(document).on('click', '#option2', counteropt2);
    $(document).on('change', '#players', showplayer);

});