/**
 * Created by rodrigopavezi on 10/15/14.
 */
"use strict";
angular.module("risevision.developer.hub")
    .controller("AppManagementController",
    ["$scope", "$location","listApps", "userState", "deleteApp", function($scope, $location, listApps, userState, deleteApp){
        $scope.apps = [];
        var toogleMessageAndTable = function(){
            if($scope.apps != null && $scope.apps.length > 0){
                $scope.showNoAppMessage = false;
                $scope.showAppTable = true;
            }else{
                $scope.showNoAppMessage = true;
                $scope.showAppTable = false;
            }
        }

        listApps(userState.getUserCompanyId()).then(function (apps) {
            $scope.apps = apps;

            toogleMessageAndTable();
        });


        $scope.addNewApp = function() {
            $location.path("/apps/add");

        }

        $scope.editApp = function(id) {
            $location.path("/apps/edit/" +id);
        }

        $scope.deleteApp = function(id) {
            deleteApp(id).then(function(result) {
                $scope.apps.splice(id,1);

                toogleMessageAndTable();
            });
        }
    }]);