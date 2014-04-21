$(function(){
    'use strict';
    var $progreso = $('#progreso')[0];
    var video = document.getElementById('vid');
    video.volume=0;
    
    var play = function(e){
        video.play();

    };
    var pause = function(e){
        video.pause();
    };
    var stop = function(e){
        video.pause();
        video.currentTime=0;
    };
    var fwd = function(e){
        video.currentTime-=10;
    };
    var rwd = function(e){
        video.currentTime+=10;
    };
    var tobegin = function(e){
        video.currentTime=0;
    };
    var toend = function(e){
        video.currentTime=video.duration;
    };    
    var full = function(e){
        video.webkitRequestFullScreen();
    };    
    var vol = function(e){
        video.volume=this.value/100;
    };    
    var progreso = function(e){
        var percent = Math.floor((100/video.duration)*video.currentTime);
        $progreso.value=percent;
       
    };

     $(document).on('click', '#play', play);
     $(document).on('click', '#pause', pause);
     $(document).on('click', '#stop', stop);
     $(document).on('click', '#fwd', fwd);
     $(document).on('click', '#rwd', rwd);
     $(document).on('click', '#tobegin', tobegin);
     $(document).on('click', '#toend', toend);
     $(document).on('click', '#full', full);
     $(document).on('change', '#vol', vol);
     video.ontimeupdate = progreso;
});
