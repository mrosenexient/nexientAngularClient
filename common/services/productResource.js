(function() {
    "use strict";

    angular
        .module("common.services")
        .factory("productResource",
        [
            "$resource",
            "appSettings",
            productResource
        ]);

    //function productResource($resource) {
    //    return $resource("/api/products/:productId");
    //}    

    function productResource($resource, appSettings) {
        return $resource(appSettings.serverPath + "/api/skill/:id", null, //default values
        {
            'update': { method: 'PUT' }
        });
    }

    //function productResource($scope, $http, appSettings) {
    //    var promise = $http.get(appSettings.serverPath + "/api/skill/:id");

    //    promise.then(function(response) {
    //        $scope.skills = response.data;
    //    });
    //}


    //angular
    //    .module("common.services")
    //    .factory("productResource",
    //    ["$resource", "appSettings", function ($resource, appSettings) {
    //        return $resource(appSettings.serverPath + "/api/skill/:id");
    //    }]);       

}());