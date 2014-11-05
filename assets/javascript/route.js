---
---
/**
 * Created by rodrigopavezi on 10/17/14.
 */

"use strict";
angular.module("risevision.documentation")
    .config (["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('developer', {
                url: '/developer',
                templateUrl: 'developer/developer.html',
                controller: 'DocumentationController'
            })
            .state('developer-post', {
                url: '/developer/:category/:post',
                templateUrl: function(params){ return "{{ site.baseurl }}/developer/" + params.category + "/" + params.post; },
                controller: 'DocumentationController'
            })
            .state('user', {
                url: '/user',
                templateUrl: 'user/user.html',
                controller: 'DocumentationController'
            })
            .state('user-post', {
                url: '/user/:category/:post',
                templateUrl: function(params){ return "{{ site.baseurl }}/user/" + params.category + "/" + params.post; },
                controller: 'DocumentationController'
            })

    }]);