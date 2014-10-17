/**
 * Created by rodrigopavezi on 10/16/14.
 */
"use strict";
angular.module("risevision.common.app",
    [
        "risevision.common.gapi",
        "risevision.common.util",
        'LocalStorageModule'

    ])
    .constant("APP_WRITABLE_FIELDS", [
        "name", "description", "clientId", "url"
    ])
    .factory("listApps",
    ["$q","coreAPILoader","$log", "localStorageService",function($q, coreAPILoader, $log, localStorageService){
        return function(companyId) {
            $log.debug("listApps called", companyId);

            var deferred = $q.defer();
            coreAPILoader().then(function (coreApi) {
                var criteria = {};
                if (companyId) {
                    criteria.companyId = companyId;
                }
                var apps = localStorageService.get("apps");
                //var mockApps = [{id: 1, name: "First app", description: "description of the app", clientId: "dadsa123123das", url: 'http://firstapp.com'}];

                deferred.resolve(apps);
                /*var request = coreApi.company.list(criteria);
                request.execute(function (resp) {
                    $log.debug("listApps resp", resp);
                    if (resp.result) {
                        deferred.resolve(resp.items);
                    }
                    else {
                        deferred.reject(resp);
                    }
                });
                */
            });
            return deferred.promise;
        }
    }])
    .factory("getApp",
    ["$q","coreAPILoader","$log", "localStorageService", function($q, coreAPILoader, $log, localStorageService){
        return function(id) {
            $log.debug("getApp called", id);

            var deferred = $q.defer();
            coreAPILoader().then(function (coreApi) {
                var criteria = {};
                if (id) {
                    criteria.id = id;
                }
                //var mockApp = {id: 1, name: "First app", description: "description of the app", clientId: "dadsa123123das", url: 'http://firstapp.com'};
                var apps = localStorageService.get("apps");

                deferred.resolve(apps[id]);
                /*var request = coreApi.app.get(criteria);
                request.execute(function (resp) {
                    $log.debug("listApps resp", resp);
                    if (resp.result) {
                        deferred.resolve(resp.items);
                    }
                    else {
                        deferred.reject(resp);
                    }
                });*/
            });
            return deferred.promise;
        }
    }])
    .factory("createApp",
    ["$q","coreAPILoader","$log", "localStorageService", "pick", "APP_WRITABLE_FIELDS", function($q, coreAPILoader, $log, localStorageService, pick, APP_WRITABLE_FIELDS){
        return function(companyId,userId, app) {
            $log.debug("createApp called", companyId, userId, app);

            var deferred = $q.defer();
            coreAPILoader().then(function (coreApi) {
                var fields = pick.apply(this, [app].concat(APP_WRITABLE_FIELDS));
                var request = coreApi.company.add({
                    companyId: companyId,
                    userId: userId,
                    data: JSON.stringify(fields)
                });
                var apps = localStorageService.get("apps");
                if(apps == null){
                    apps = [];
                }
                apps.push(fields);
                localStorageService.set("apps", apps);
                //var mockApp = {id: 1, name: "First app", description: "description of the app", clientId: "dadsa123123das", url: 'http://firstapp.com'};
                deferred.resolve(app);
                /*request.execute(function (resp) {
                 if(resp.result) {
                 deferred.resolve(resp.item);
                 }
                 else {
                 deferred.reject(resp);
                 }
                 }, deferred.reject);*/
            });
            return deferred.promise;
        }
    }])
    .factory("updateApp",
    ["$q","coreAPILoader","$log", "localStorageService", "pick", "APP_WRITABLE_FIELDS", function($q, coreAPILoader, $log, localStorageService, pick, APP_WRITABLE_FIELDS){
        return function(id, app) {
            $log.debug("updateApp called", id, app);

            var deferred = $q.defer();
            coreAPILoader().then(function (coreApi) {
                var fields = pick.apply(this, [app].concat(APP_WRITABLE_FIELDS));
                var request = coreApi.company.add({
                    id: id,
                    data: JSON.stringify(fields)
                });
                var apps = localStorageService.get("apps");
                if(apps == null){
                    apps = [];
                }
                apps[id] = fields;
                localStorageService.set("apps", apps);

                //var mockApp = {id: 1, name: "First app", description: "description of the app", clientId: "dadsa123123das", url: 'http://firstapp.com'};
                deferred.resolve(app);
                /*request.execute(function (resp) {
                 if(resp.result) {
                 deferred.resolve(resp.item);
                 }
                 else {
                 deferred.reject(resp);
                 }
                 }, deferred.reject);*/
            });
            return deferred.promise;
        }
    }])
    .factory("deleteApp",
    ["$q","coreAPILoader","$log", "localStorageService", function($q, coreAPILoader, $log, localStorageService){
        return function(id) {
            $log.debug("deleteApp called", id);

            var deferred = $q.defer();
            coreAPILoader().then(function (coreApi) {

               /* var criteria = {};
                if(id) {criteria.id = id; }
                var request = coreApi.company.delete(criteria);
                request.execute(function (resp) {
                    $log.debug("deleteCompany resp", resp);
                    if(resp.result) {
                        deferred.resolve(resp.item);
                    }
                    else {
                        deferred.reject(resp);
                    }
                });
                */
                var apps = localStorageService.get("apps");
                if(apps != null){
                    apps.splice(id,1);
                    localStorageService.set("apps", apps);
                }

                deferred.resolve(id);

            });
            return deferred.promise;
        }
    }]);
