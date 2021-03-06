$(document).ready(function() {
    'use strict';
    // Calcular posición
    var position;
    var $divpos = $('#divpos');
    if(navigator.geolocation){
        navigator.geolocation.watchPosition(function (position){
            console.log(position);
            for (var i in position) {
                if (i === 'coords'){
                    for (var j in position[i]) {
                        $divpos.append(j + ' : ' + position[i][j] + '</br>');
                    }
                }
                
            }

            showMap(position);
        });
    }

    function showMap(position) {
        var mapcanvas = document.createElement('div');
        mapcanvas.id = 'mapcanvas';
        mapcanvas.style.height = '400px';
        mapcanvas.style.width = '560px';

        document.querySelector('article').appendChild(mapcanvas);

        var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var myOptions = {
            zoom: 15,
            center: latlng,
            mapTypeControl: false,
            navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("mapcanvas"), myOptions);

        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "¡Usted está aquí!"
        });
    }
});