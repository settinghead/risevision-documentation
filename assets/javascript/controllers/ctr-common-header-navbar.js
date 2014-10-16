angular.module("risevision.developer.hub")
    .controller("CommonHeaderNavbarCtrl", function($rootScope,$scope) {
        $rootScope.navOptions = [{
            title: "Apps",
            link: "#/apps"
        }, {
            title: "Documentation",
            link: "#/documentation"
        }, {
            title: "Style Guide",
            link: "http://rise-vision.github.io/style-guide/",
            target: "_blank"
        }];
    });


