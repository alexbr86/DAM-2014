require.config({
    paths: {
        'ydn-db': '../bower_components/ydn-db/jsc/ydn.db-dev',
        handlebars: '../bower_components/handlebars.js/dist/handlebars',
        quo: '../bower_components/QuoJS/quo.debug',
        lungo: '../bower_components/lungo/lungo'
    },
    shim: {
        quo: {
            exports: '$$'
        },

        lungo: {
            deps: ['quo'],
            exports: 'Lungo'
        },
        handlebars: {
            exports: 'Handlebars'
        },
        'ydn-db': {
            exports: 'ydn'
        }
    }
});

require(['app'], function (app) {
    'use strict';
    // use app here
    console.log(app);
});
