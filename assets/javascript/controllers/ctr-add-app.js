/**
 * Created by rodrigopavezi on 10/15/14.
 */
"use strict";
angular.module("risevision.developer.hub")
    .controller("AddAppController",
    ["$scope", "$state", "$timeout", "createApp", "userState", "$log",
    function($scope,$state, $timeout, createApp, userState, $log){

        $scope.save = function(app) {
            createApp(userState.getUserCompanyId(), userState.getUsername(), app).then(function(result) {
                $state.go("apps.list");

            }, function(errorResult) {
                $log.debug("Error: " + errorResult.code + " - " + errorResult.message);
            });
        }
    }])