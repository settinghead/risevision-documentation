---
---
'use strict';
var appDeveloperSpace = angular.module('appDeveloperSpace',["ngRoute","risevision.common.header","JSONedit"])
    .config (['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('{{ site.baseurl }}/documentation',
            {
                controller: 'DocumentationController',
                templateUrl: 'documentation/documentation.html'
            })
            .when('{{ site.baseurl }}/documentation/:category/:post',
            {
                controller: 'DocumentationController',
                templateUrl: function(params){ return '/documentation/' + params.category + '/' + params.post; }
            })
            .when('{{ site.baseurl }}/documentation/search/:param',
            {
                controller: 'DocumentationController',
                templateUrl: function(params){ return '/documentation/search/' +  params.param; }
            })
            .otherwise({redirectTo: '/'});

    }])
    .config([
        '$interpolateProvider', function($interpolateProvider) {
            return $interpolateProvider.startSymbol('{(').endSymbol(')}');
        }
    ]);