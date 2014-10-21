"use strict";
angular.module("risevision.developer.hub",["ui.router","ngRoute","risevision.common.header","JSONedit", "pascalprecht.translate", "risevision.common.app"])
    .config([
        "$interpolateProvider", function($interpolateProvider) {
            return $interpolateProvider.startSymbol("{(").endSymbol(")}");
        }
    ])
    .config(['$translateProvider', function ($translateProvider) {
        $translateProvider.translations('en', {
            'ADD_APP_TITLE': "Add a New App",
            'APP_NAME': "App Name",
            'APP_CLIENT_ID': "Client Id",
            'SAVE_BUTTON': "Save",
            'EDIT_BUTTON': "Edit",
            'APP_DESCRIPTION': "Description",
            'APP_URL': 'Url',
            'APP_NO_APP_YET_MESSAGE': "You haven't got an App yet!",
            'APP_ACTION': 'ACTION',
            'DELETE_BUTTON': "Delete"
        });


        $translateProvider.preferredLanguage('en');
    }]);