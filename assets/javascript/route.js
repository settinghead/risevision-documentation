---
---
/**
 * Created by rodrigopavezi on 10/17/14.
 */

"use strict";
angular.module("risevision.documentation")
    .config (["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.rule(function ($injector, $location) {
            var path = $location.url();

            // check to see if the path has a trailing slash
            if ('/' === path[path.length - 1]) {
                return path.replace(/\/$/, '');
            }

            if (path.indexOf('/?') > 0) {
                return path.replace('/?', '?');
            }

            return false;
        });

        $stateProvider
            .state('developer', {
                url: '/developer',
                templateUrl: 'developer/developer.html',
                controller: 'DocumentationController'
            })
            .state('developer-post', {
                url: '/developer/:category/:post',
                templateUrl: function(params){ return "{{ site.baseurl }}/developer/" + params.category +"/" + params.post + "/index.html"; },
                controller: 'DocumentationController'
            })
            .state('developer-post-sub', {
                url: '/developer/:category/:subCategory/:post',
                templateUrl: function(params){ return "{{ site.baseurl }}/developer/" + params.category + "/" + params.subCategory + "/" + params.post + "/index.html"; },
                controller: 'DocumentationController'
            })
            .state('user', {
                url: '/user',
                templateUrl: 'user/user.html',
                controller: 'DocumentationController'
            })
            .state('user-post', {
                url: '/user/:category/:post',
                templateUrl: function(params){ return "{{ site.baseurl }}/user/" + params.category + "/" + params.post + "/index.html"; },
                controller: 'DocumentationController'
            })
            .state('user-post-sub', {
                url: '/user/:category/:subCategory/:post',
                templateUrl: function(params){ return "{{ site.baseurl }}/user/" + params.category + "/" + params.subCategory + "/" + params.post + "/index.html"; },
                controller: 'DocumentationController'
            })

    }]);