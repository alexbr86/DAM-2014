/* global describe, it */

(function () {
    'use strict';
    require.config({
        baseUrl: '../app/scripts',
        paths: {
            jquery: '../bower_components/jquery/dist/jquery'
        },
        shim: {
        }
    });

    describe('events module', function () {
        var $, CTRL, EV;

        beforeEach(function(done){
            require(['events','jquery', 'controller'], function(events, jquery, controller){
                EV = events;
                CTRL = controller;
                $ = jquery;
                done();
            });

        });
        describe('Events', function () {
            beforeEach(function(done){
                sinon.spy(CTRL, 'showLatestTweets');
                done();

            });

            afterEach(function(done){
                CTRL.showLatestTweets.restore();
                done();

            });
            it('events datachange', function (done) {
                var errTimeout = setTimeout (function(){
                    assert(false, 'event never fired');
                    done();
                }, 1000);
                $(document).on('datachange', function(e){
                    clearTimeout(errTimeout);
                    assert.isTrue(true);
                    done();
                });
                var event = new Event('datachange');
                document.dispatchEvent(event);
            });
            it('events showLatestTweets', function (done) {
                $(document).on('datachange', function(e){
                    assert.isTrue(CTRL.showLatestTweets.calledOnce);
                    done();
                });
                var event = new Event('datachange');
                document.dispatchEvent(event);
            });


        });


    });
})();