/**
 * Created by rodrigopavezi on 9/23/14.
 */

appDeveloperSpace
    .controller('CommonHeaderCtrl', function($rootScope,$scope) {
        $rootScope.navOptions = [{
            title: 'App Registration',
            link: '#/'
        }, {
            title: 'Documentation',
            link: '#/documentation'
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


