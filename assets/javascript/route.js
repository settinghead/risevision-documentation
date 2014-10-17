---
---
/**
 * Created by rodrigopavezi on 10/17/14.
 */

"use strict";
angular.module("risevision.developer.hub")
    .config (["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('apps', {
                url: '/apps',
                templateUrl: 'apps/apps.html',
                controller: 'AppsController'
            })
            .state('addApp', {
                url: '/apps/add',
                templateUrl: 'apps/app-form.html',
                controller: 'AddAppController'
            })
            .state('editApp', {
                url: '/apps/edit/:id',
                templateUrl: 'apps/app-form.html',
                controller: 'EditAppController'
            })
            .state('documentation', {
                url: '/documentation',
                templateUrl: 'documentation/documentation.html',
                controller: 'DocumentationController'
            })
            .state('post', {
                url: '/documentation/:category/:post',
                templateUrl: function(params){ return "{{ site.baseurl }}/documentation/" + params.category + "/" + params.post; },
                controller: 'DocumentationController'
            })


    }]);