define('controller', ['data', 'service', 'ui'], function(DB, srv, ui){
    'use strict';
    var processTweets = function(data, success, error){
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
            success(tweets);
        }
    };
    var error = function(error){
        console.log(error);
    };

    var getTweetsFromTwitter = function(success, error) {
        srv.getTweets({}, function(data){
            processTweets(data, function(tweets){
                DB.addTweets(tweets, success, error);
                ui.showTweetsList(tweets);

            }, error);
            

        }, error);
        

    };

    return{
        getTweetsFromTwitter: getTweetsFromTwitter
    };
});