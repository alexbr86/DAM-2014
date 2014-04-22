define('controller', ['data', 'service'], function(DB, srv){
    'use strict';
    var processTweets = function(data){
        var tweets = [];

        if (data && data.statuses && data.statuses.length > 0){
            for (var i = data.statuses.length - 1; i >= 0; i--) {
                var date = new Date();
                date = data.statuses[i].created_at;
                var newtweet = {
                    id : data.statuses[i].id_str,
                    text : data.statuses[i].text,
                    date : date,
                    user : {
                        name : data.statuses[i].user.name,
                        image : data.statuses[i].user.profile_image_url
                    }
                };
                tweets.push(newtweet);
            }
        }
        console.log(tweets);
    };
    var error = function(){};

    var getTweetsFromTwitter = function() {
        srv.getTweets({}, processTweets, error);
    };

    return{
        getTweetsFromTwitter: getTweetsFromTwitter
    };
});