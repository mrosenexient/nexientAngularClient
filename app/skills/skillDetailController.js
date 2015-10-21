(function() {
    "use strict";

    angular
        .module("skillManagement")
        .controller("SkillDetailController",
        ["skill",
        "$http",
        "appSettings",
        "$stateParams",
            SkillDetailController]);

    function SkillDetailController(skill, $http, appSettings, $stateParams) {
        var vm = this;

        //vm.product = {
        //    "productId": 2,
        //    "productName": "Garden Cart",
        //    "productCode": "GDN-0023",
        //    "releaseDate": "March 18, 2010",
        //    "description": "15 gallon capacity rolling garden cart",
        //    "cost": 20.00,
        //    "price": 32.99,
        //    "category": "garden",
        //    "tags": ["barrow", "car", "wheelbarrow"]
        //    //"imageUrl": "http://openclipart.org/image/300px/svg_to_"
        //};    
        console.log($stateParams);


            var promise = $http.get(appSettings.serverPath + "/api/skill/" + $stateParams.id);// + Id);

            promise.then(function (response) {
                vm.skill = response.data;
            });                            
        
        ////vm.product = product;
        vm.title = "Skill Detail: " + $stateParams.id;

        //if (vm.product.tags) {
        //    vm.product.taglist = vm.product.tags.toString();
        //}
    }
}());