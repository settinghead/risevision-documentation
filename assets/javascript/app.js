---
---
"use strict";
angular.module("risevision.developer.hub",["ngRoute","risevision.common.header","JSONedit", "pascalprecht.translate", "risevision.common.app"])
    .config (function ($locationProvider, $routeProvider) {

        $routeProvider
            .when("/documentation",
            {
                controller: "DocumentationController",
                templateUrl: "documentation/documentation.html"
            })
            .when("/documentation/:category/:post",
            {
                controller: "DocumentationController",
                templateUrl: function(params){ return "{{ site.baseurl }}/documentation/" + params.category + "/" + params.post; }
            })
            .when("/documentation/search/:param",
            {
                controller: "DocumentationController",
                templateUrl: function(params){ return "{{ site.baseurl }}/documentation/search/" +  params.param; }
            })
            .when("/apps",
            {
                controller: "AppsController",
                templateUrl: "apps/apps.html"
            })
            .when("/apps/add",
            {
                controller: "AddAppController",
                templateUrl: "apps/app-form.html"
            })
            .when("/apps/edit/:id",
            {
                controller: "EditAppController",
                templateUrl: "apps/app-form.html"
            })
            .otherwise({redirectTo: "/"});

    })
    .config([
        "$interpolateProvider", function($interpolateProvider) {
            return $interpolateProvider.startSymbol("{(").endSymbol(")}");
        }
    ])
    .config(['$translateProvider', function ($translateProvider) {
        $translateProvider.translations('en', {
            'ADD_APP_TITLE': "Add a New App",
            'APP_NAME': "App Name",
            'APP_CLIENT_ID': "Client ID",
            'SAVE_BUTTON': "Save",
            'EDIT_BUTTON': "Edit",
            'APP_DESCRIPTION': "Description",
            'APP_URL': 'Url',
            'APP_NO_APP_YET_MESSAGE': "You haven't got an App yet!",
            'APP_ACTION': 'ACTION',
            'DELETE_BUTTON': "Delete"
        });


        $translateProvider.preferredLanguage('en');
    }]);;