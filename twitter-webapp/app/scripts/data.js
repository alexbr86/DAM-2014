define('data', ['ydn-db'], function(ydn) {
    'use strict';
    var dbname = 'twitterdb';
    var storagename = 'tweets';
    var db = new ydn.db.Storage(dbname);

    var setTweet = function(tweet, success, error){
        var req = db.put({name: storagename, keyPath: 'id'}, tweet);
        req.done(function(key){
            success(key);
        });
        req.fail(function(e){
            error(e);
        });
    };

    var getTweet = function(id, success, error){
        var req = db.get(storagename, id);
        req.done(function(record){
            success(record);
        });
        req.fail(function(err){
            error(err);
        });
    };

    var getAllTweets = function(success, error){
        var req = db.values(storagename);
        req.done(function(records){
            success(records);
        });
        req.fail(function(err){
            error(err);
        });
    };

    var rmvTweet = function(id, success, error){
        var req = db.remove(storagename, id);
        req.done(function(ndeleted){
            success(ndeleted);
        });
        req.fail(function(err){
            error(err);
        });
    };

    var rmvAllTweets = function(success, error){
        var req = db.clear(storagename);
        req.done(function(ndeleted){
            success(ndeleted);
        });
        req.fail(function(err){
            error(err);
        });
    };

    return{
        setTweet: setTweet,
        getTweet: getTweet,
        getAllTweets: getAllTweets,
        rmvTweet: rmvTweet,
        rmvAllTweets: rmvAllTweets
    };
});