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

    describe('service module', function () {
        var SV, $;

        beforeEach(function(done){
            require(['service', 'jquery'], function(service, jquery){
                SV = service;
                $ = jquery;
                done();
            });

        });
        describe('service getTweets', function () {

            beforeEach(function(done){
                sinon.spy($, 'ajax');
                done();

            });

            afterEach(function(done){
                $.ajax.restore();
                done();

            });
            it('$.ajax has been called', function (done) {
                SV.getTweets();
                assert.isTrue($.ajax.calledOnce);
                assert.strictEqual('/app/data/tweets.json', $.ajax.firstCall.args[0].url);
                done();
            });

            it('get all tweets form twitter', function (done) {
                SV.getTweets({
                    apiKey: ''
                }, function(tweets){
                    if (tweets && tweets.statuses && tweets.statuses.length > 0){
                        assert.strictEqual(tweets.statuses.length, 100);
                        done();
                    }else{
                        throw 'No se han obtenido los tweets';
                    }
                }, function(err){
                    throw err;
                });
            
              
            });
        });


    });
})();
