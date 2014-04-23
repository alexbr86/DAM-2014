/* global describe, it */

(function () {
    'use strict';
    require.config({
        baseUrl: '../app/scripts',
        paths: {
            jquery: '../bower_components/jquery/dist/jquery',
            handlebars: '../bower_components/handlebars.js/dist/handlebars'
        },
        shim: {
            handlebars: {
                exports: 'Handlebars'
            }
        }
    });

    describe('ui module', function () {
        var UI, HDBRS, $, CTRL;

        beforeEach(function(done){
            require(['ui', 'handlebars', 'jquery', 'controller'], function(ui, handlebars, jquery, controller){
                UI = ui;
                HDBRS = handlebars;
                $ = jquery;
                CTRL = controller;
                done();
            });

        });
        describe('UI', function () {
            it('UI showTweetsList one tweet', function (done) {
                var tweet;
                tweet = [{
                        id : '428415326124908544',
                        text : 'Customizable #combo #ui component with support for icons and skins, sync and async data: http://t.co/EzI9Ub8VDI #css3 #html5 #javascript',
                        date : 'Wed Jan 29 06:32:27 +0000 2014',
                        user : {
                                name : 'Semtex UI Framework',
                                image : 'http://pbs.twimg.com/profile_images/378800000625430762/577247151177b346ab7864177621f2cb_normal.png'
                            }
                        }];
                UI.showTweetsList(tweet);
                //console.log($('#twitter-list').children());
                assert.strictEqual($('#twitter-list').children().length, 1);
                done();
                
                
            });
            it('UI showTweetsList 100 tweets', function (done) {
                CTRL.getTweetsFromTwitter(function(){
                    console.log($('#twitter-list').children().length);
                    assert.strictEqual($('#twitter-list').children().length, 100);
                    console.log('todo bien');
                    done();
                }, function(err){
                    throw err;
                });
                
                
            });

        });


    });
})();