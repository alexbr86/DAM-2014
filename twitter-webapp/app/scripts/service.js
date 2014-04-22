define('service', ['jquery'], function($){
    
    var getTweets = function(config, success, error){
        $.ajax({
            url: '/app/data/tweets.json',
            dataType: 'json',
            success: success,
            error: error
        });

    };


    return {
        getTweets: getTweets

    };
});