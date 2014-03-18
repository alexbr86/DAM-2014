$(function(){

    //ejercicio 3.8.1
    "use strict";
    var $divs = $('div.module'); 
    console.log($divs);

    var $li = $('#myList li').eq(2);
    console.log($li[0]);
    $li = $('#myList').find('li').eq(2);
    console.log($li[0]);
    $li = $('#myList li:nth-child(3)');
    console.log($li[0]);
    $li = $('#myListItem');
    console.log($li[0]);

    var $input = $('input[name=q]');
    var $label = $input.closest('form').find('label[for="' + $input.attr('name') +'"]');
    console.log($label);

    var $ocultos = $(':hidden');


    var img = $('img[alt]');

   // var $filas = $('tbody tr:odd').css('background-color', 'gray');


    //ejercicio 3.8.2
    img.each(function() {
        console.log(this.alt);
    }); 


    var $input2 = $('input').closest('form').addClass('fomurlario');
    console.log($input2);

    
    var $item = $('#myList .current').removeClass('current').next().addClass('current');


    var $submit = $('#specials select').closest('form').find('input[type=submit]');
    console.log($submit);

    $('#slideshow li:first').addClass('current').siblings().addClass('disabled');

    //ejercicio 3.8.3

    var end, start = new Date(), Items = [], $myList = $('#myList');
    for (var i = 0; i < 5; i++) {
    Items.push('<li>item ' + i + '</li>');   
    }
    $myList.append(Items.join(''));
    end = new Date();
    console.log(end-start);
    console.log($myList);

    $('#myList li:even').remove();

    $('div.module:last').append('<h2>Lorem ipsum</h2>').append('<p>Dolor sit amet</p>');

    var opt = new Option ('Wednesday', 'wednesday');
    $('select[name=day]')[0].options.add(opt);

    var $div = $('div.module').last();
    var $new = $('<div/>', {
                'class' : 'module',
                'id' : 'myModule'
    });
    $new.append(img.first().clone()).insertAfter($div);










});