angular.module("risevision.developer.hub")
    .controller("CommonHeaderNavbarCtrl", function($rootScope,$scope) {
        $rootScope.navOptions = [{
            title: "App Registration",
            link: "#/"
        }, {
            title: "Documentation",
            link: "#/documentation"
        }, {
            title: "Api Explorer",
            link: "#/api-explorer"
        }, {
            title: "Style Guide",
            link: ""
        }];
    });


