/**
 * Created by rodrigopavezi on 10/17/14.
 */
module.exports = function(config){
    'use strict';
    config.set({

        basePath : './',

        files : [
            'assets/components/jquery/dist/jquery.js',
            'assets/components/angular/angular.js',
            'assets/components/q/q.js',
            "assets/components/angular-bootstrap/ui-bootstrap-tpls.js",
            'assets/components/rise-vision-common-header/dist/js/common-header.js',
            'assets/components/angular-route/angular-route.js',
            'assets/components/angular-mocks/angular-mocks.js',
            'assets/components/angular-local-storage/angular-local-storage.js',
            'assets/javascript/**/*.js'

        ],

        exclude : [
            'assets/javascript/route.js'
        ],

        autoWatch : true,

        frameworks: ['mocha', 'chai'],

        browsers : ['Chrome'],

        /*plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-junit-reporter'
        ],*/

        junitReporter : {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};