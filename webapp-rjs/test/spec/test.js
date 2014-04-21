/* global describe, it */
(function () {
    'use strict';

    //  tests.js
    require.config({
        baseUrl: '../app/scripts',
        nodeRequire: require
    });


    describe('Test', function () {
        var mod;

        beforeEach(function(done){
            require(['Fizz'], function(Fizz){
                mod = Fizz;
                done();
            });
        });

        describe('Fizz 1 testing',   function(){
            it('it should give true',   function(){
                var resp = mod.check(21);
                assert.typeOf(resp, 'boolean');
                assert.strictEqual(resp, true);
            });
        });

        describe('Fizz 3 testing',   function(){
            it('it should give true',   function(){
                var resp = mod.check(3);
                assert.typeOf(resp, 'boolean');
                assert.strictEqual(resp, true);

            });
        });

        describe('Fizz 8 testing',   function(){ 
            it('it should give false',   function(){
                var resp = mod.check(8);   
                assert.typeOf(resp, 'boolean');  
                assert.strictEqual(resp, false);     

            });
        });

        describe('Fizz void testing',   function(){ 
            it('it should give false',   function(){
                var resp = mod.check();
                assert.typeOf(resp, 'boolean');
                assert.strictEqual(resp, false);

            });
        });

        describe('Fizz 12 testing',   function(){
            it('it should give true',   function(){
                var resp = mod.check(12);
                assert.typeOf(resp, 'boolean');
                assert.strictEqual(resp, true);

            });
        });


    });

    describe.only('Test', function () {
        var mod;

        beforeEach(function(done){
            require(['Buzz'], function(Buzz){
                mod = Buzz;
                done();
            });
        });

        describe('Buzz 5 testing',   function(){
            it('it should give true',   function(){
                var resp = mod.check(5);
                assert.typeOf(resp, 'boolean');
                assert.strictEqual(resp, true);
            });
        });

        describe('Buzz 10 testing',   function(){
            it('it should give true',   function(){
                var resp = mod.check(10);
                assert.typeOf(resp, 'boolean');
                assert.strictEqual(resp, true);

            });
        });

        describe('Buzz 8, 54 testing',   function(){ 
            it('it should give false',   function(){
                var resp = mod.check(8, 54);   
                assert.typeOf(resp, 'boolean');  
                assert.strictEqual(resp, false);     

            });
        });

        describe('Buzz adsf testing',   function(){ 
            it('it should give false',   function(){
                var resp = mod.check('adsf');
                assert.typeOf(resp, 'boolean');
                assert.strictEqual(resp, false);

            });
        });

        describe('Buzz void testing',   function(){
            it('it should give false',   function(){
                var resp = mod.check();
                assert.typeOf(resp, 'boolean');
                assert.strictEqual(resp, false);

            });
        });
    });

    describe('Test', function () {
        var mod;

        beforeEach(function(done){
            require(['FizzBuzz'], function(FizzBuzz){
                mod = FizzBuzz;
                done();
            });
        });

        describe('FizzBuzz 15 testing',   function(){ 
            it('it should give multiples of 3 like fizz, of 5 like buzz and of both like fizzbuzz',   function(){
                var resp = mod.test(15);   
                assert.typeOf(resp, 'string');  
                assert.strictEqual(resp, '1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz'); 
                assert.lengthOf(resp, 71);    

            });
        });

    });
})();
