"use strict";
angular.module("risevision.documentation",["ui.router","risevision.common.header","JSONedit", "pascalprecht.translate", "ui.bootstrap","risevision.google-analytics"])
    .config(['$translateProvider', function ($translateProvider) {
        $translateProvider.translations('en', {
            'DEVELOPER_DOCS': 'Developer Documentation',
            'USER_DOCS': 'User Documentation',
            'DEVELOPER': 'Developer',
            'USER': 'User'
        });


        $translateProvider.preferredLanguage('en');
    }]);