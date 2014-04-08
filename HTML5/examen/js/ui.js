var App = App || {};
App.Ui = (function(){
    'use strict';

    var drawplayer = function (player, level) {
        var playerimg = $('<img/>', {
                        'src' : player.photo
        });
        $('#player').prepend('<img src = "' + player.photo + '"/>');
        console.log($('#player')[0]);

        var $first = $('#first');
        var newimg1 = $('<img/>', {
                        'src' : player.challenge[level].option1.photo
        });        
        var $second = $('#second');
        var newimg2 = $('<img/>', {
                        'src' : player.challenge[level].option1.photo
        });

        $first.append(newimg1);
        $second.append(newimg2);       


    };

    var loadlevel = function() {
        $('#game').load('player-game.html');

    };

        
    
    return {
        drawplayer : drawplayer,
        loadlevel: loadlevel
    };
   
})();