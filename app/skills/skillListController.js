(function () {
    "use strict";
    angular
        .module("skillManagement")
        .controller("SkillListController",
            ["appSettings",
                "$http",
            SkillListController]);

    function SkillListController(appSettings, $http) {
        var vm = this;
        console.log(vm.Id);

        var promise = $http.get(appSettings.serverPath + "/api/skill/");

        promise.then(function (response) {
            vm.skills = response.data;
        });

        //var promise = $http.post(appSettings.serverPath + "/api/skill/?name=gary");

        //promise.then(function (response) {
        //    vm.products = response.data;
        //});

        //console.log(appSettings.serverPath);        
        //productResource.query(function(data) {
        //    vm.products = data;
        //});

        //vm.products = [
        //    {
        //        "productId": 1,
        //        "productName": "Leaf Rake",
        //        "productCode": "GDN-01",
        //        "releaseDate": "March 19, 2009",
        //        "price": 19.95
        //    }
        //];
        vm.delete = function (id) {
            console.log("deleting " + id);
            var promise = $http.delete(appSettings.serverPath + "/api/skill/" + id);

            promise.then(function (response) {                
                var get = $http.get(appSettings.serverPath + "/api/skill/");

                get.then(function (response) {
                    vm.skills = response.data;
                });
            });
        }

        vm.showProductName = false;

        vm.toggleProductName = function () {
            vm.showProductName = !vm.showProductName;
        }
    }
}());