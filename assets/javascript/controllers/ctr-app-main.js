/**
 * Created by rodrigopavezi on 10/22/14.
 */
"use strict";
angular.module("risevision.developer.hub")
    .controller("MainAppController",
    ["$scope", "$location", "$state", "userState", "$loading",function($scope, $location, $state, userState, $loading) {

        if(userState.isLoggedIn()){
            $state.go("apps.add");
        }else{
            $state.go("apps.registration");
        }


        $scope.registerAnApp = function() {

            if(userState.isLoggedIn()){
                $state.go("apps.add");
            }else{
                $state.go("apps.userSignin");
            }
        }

        $scope.registerDeveloper = function() {
            $loading.startGlobal("auth-buttons-login");
            userState.authenticate(true).then().finally(function(){
                $loading.stopGlobal("auth-buttons-login");
                uiStatusManager.invalidateStatus("registerdAsRiseVisionUser");
                $state.go("apps.add");
            });
        }
    }]);