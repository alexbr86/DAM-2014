define('events', ['quo', 'controller'], function($, controller){
    'use strict';

    $(document).on('datachange', controller.showLatestTweets);
});