---
---
'use strict';
var appDeveloperSpace = angular.module('appDeveloperSpace',["ngRoute","risevision.common.header","JSONedit"])
    .config (['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/documentation',
            {
                controller: 'DocumentationController',
                templateUrl: 'documentation/documentation.html'
            })
            .when('/documentation/:category/:post',
            {
                controller: 'DocumentationController',
                templateUrl: function(params){ return '{{ site.baseurl }}/documentation/' + params.category + '/' + params.post; }
            })
            .when('/documentation/search/:param',
            {
                controller: 'DocumentationController',
                templateUrl: function(params){ return '{{ site.baseurl }}/documentation/search/' +  params.param; }
            })
            .otherwise({redirectTo: '/'});

    }])
    .config([
        '$interpolateProvider', function($interpolateProvider) {
            return $interpolateProvider.startSymbol('{(').endSymbol(')}');
        }
    ]);