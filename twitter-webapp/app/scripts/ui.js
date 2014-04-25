define('ui', ['quo', 'handlebars'], function($, Handlebars){
    'use strict';

    var showTweetsList = function(tweets){
        console.log(tweets);
        var $listtpl = $('#list-tpl').html();
        var template = Handlebars.compile($listtpl);

        var html = template({tweets : tweets});
        $('#twitter-list').html(html);
    };




    return{
        showTweetsList: showTweetsList
    };
});