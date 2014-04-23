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
                sinon.spy(SV, 'getTweets');
                sinon.spy(DB, 'addTweets');
                done();

            });

            afterEach(function(done){
                SV.getTweets.restore();
                DB.addTweets.restore();
                done();
            });
            it('get all tweets form twitter and save to db', function (done) {
                CTRL.getTweetsFromTwitter(function(){
                    assert.isTrue(DB.addTweets.calledOnce, 'addTweets not called');
                    done();
                }, function(){console.log('error calling getTweetsFromTwitter');});
                assert.isTrue(SV.getTweets.calledOnce, 'getTweets not called');
                
                
            });

        });


    });
})();