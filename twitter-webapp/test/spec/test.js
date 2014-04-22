/* global describe, it */

(function () {
    'use strict';
    require.config({
        baseUrl: '../app/scripts',
        paths: {
            'ydn-db': '../bower_components/ydn-db/jsc/ydn.db-dev'
        },
        shim: {
            'ydn-db': {
                exports: 'ydn'
            }
        }
    });

    describe('Database module', function () {
        var DB;

        beforeEach(function(done){
            require(['data'], function(data){
                DB = data;
                done();
            });

        });
        describe('Data addTweet', function () {
            it('should run here few assertions', function (done) {
                var tweet = {id : '242613977966850048', text : 'Hello, this is a tweet'};
                DB.addTweet(tweet, function(key){
                    console.log(key);
                    done();
                }, function(err){
                    console.log(err);
                    throw err;
                });
            });
        });
        describe('Data getTweet', function () {
            it('should run here few assertions', function (done) {
                var id = '242613977966850048';
                var result;
                DB.getTweet(id, function(record){
                    console.log(record.text);
                    result = record;
                    assert.strictEqual(result.id, id);
                    done();
                }, function(err){
                    console.log(err);
                    throw err;
                });
                
            });
        });
        describe('Data getAllTweets', function () {
            it('should run here few assertions', function (done) {
                var results;
                DB.getAllTweets(function(records){
                    console.log(records);
                    results = records;
                    assert.strictEqual(results.length, 1);
                    done();
                }, function(err){
                    console.log(err);
                    throw err;
                });
                

            });
        });
       /* describe('Data rmvTweet', function () {
            it('should run here few assertions', function (done) {
                var id = '242613977966850048';
                DB.rmvTweet(id, function(ndeleted){
                    console.log('your tweet is removed '+ndeleted);
                    assert.strictEqual(ndeleted, 1);
                    done();
                }, function(err){
                    console.log(err);
                    throw err;
                });
            });
        });*/        
        describe('Data rmvAllTweets', function () {
            it('should run here few assertions', function (done) {
                DB.rmvAllTweets(function(ndeleted){
                    console.log('your tweets are removed '+ndeleted);
                    assert.strictEqual(ndeleted, 1);
                    done();
                }, function(err){
                    console.log(err);
                    throw err;
                });
            });
        });

    });
})();
