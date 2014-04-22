/* global describe, it */

(function () {
    'use strict';
    require.config({
        baseUrl: '../app/scripts',
        paths: {
            jquery: '../bower_components/jquery/dist/jquery'
        },
        shim: {
            'ydn-db': {
                exports: 'ydn'
            }
        }
    });

    describe('controller module', function () {
        var SV, DB, CTRL;

        beforeEach(function(done){
            require(['controller', 'data', 'service'], function(controller, data, service){
                CTRL = controller;
                DB = data;
                SV = service;
                done();
            });

        });
        describe('controller getTweetsFromTwitter', function () {

            beforeEach(function(done){
                //sinon.spy(DB, 'addTweets');
                sinon.spy(SV, 'getTweets');
                done();

            });

            afterEach(function(done){
               // DB.addTweets.restore();
                SV.getTweets.restore();
                done();

            });
            it('get all tweets form twitter and save to db', function (done) {
                CTRL.getTweetsFromTwitter();
               // assert.isTrue(DB.addTweets.calledOnce, 'addTweets not called');
                assert.isTrue(SV.getTweet.calledOnce, 'getTweets not called');
                done();
            });

        });


    });
})();