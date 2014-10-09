---
---
appDeveloperSpace
    .controller('CommonHeaderCtrl', function($rootScope,$scope) {
        $rootScope.navOptions = [{
            title: 'App Registration',
            link: '#/'
        }, {
            title: 'Documentation',
            link: '#{{ site.baseurl }}/documentation'
        }, {
            title: 'API Explorer',
            link: ''
        }, {
            title: 'Style Guide',
            link: ''
        }];
    })
    .controller('DocumentationController', function($scope,$location){

    });


