(function () {
    "use strict";
    var app = angular.module("skillManagement",
    [
        "common.services",
        "ui.router"
    ]);
                            //"productResourceMock"]);

    app.config([
            "$stateProvider",
            "$urlRouterProvider",
            "appSettings",
            function ($stateProvider, $urlRouterProvider, appSettings) {
                $urlRouterProvider.otherwise("/");

                //$httpProvider.defaults.useXDomain = true;

                $stateProvider
                    .state("home", {
                        url: "/",
                        templateUrl: "app/welcomeView.html"
                    })
                    .state("skillList", {
                        url: "/skill/",
                        templateUrl: "app/skills/skillListView.html",
                        controller: "SkillListController as vm"
                        
                        
                    })


                .state("skillEdit", {
                    abstract: true,
                    url: "/skills/edit/:id",
                    templateUrl: "app/skills/skillEditView.html",
                    controller: "SkillEditController as vm",
                    resolve: {
                        skill: function($stateParams) {
                            return $stateParams;
                        }
                    }
                    //productResource: "productResource",

                    //    product: function (productResource, $stateParams) {
                    //        var productId = $stateParams.productId;
                    //        return productResource.get({ productId: productId }).$promise;
                    //    }
                    //}

                })
                .state("skillEdit.info", {
                    url: "/info",
                    templateUrl: "app/skills/skillEditInfoView.html"
                })
                .state("skillEdit.price", {
                    url: "/price",
                    templateUrl: "app/skills/skillEditPriceView.html"
                })
                .state("skillEdit.tags", {
                    url: "/tags",
                    templateUrl: "app/skills/skillEditTagsView.html"
                })
                .state("skillDetail", {
                    url: "/skill/:id",
                    templateUrl: "app/skills/skillDetailView.html",
                    controller: "SkillDetailController as vm",
                    resolve: {                        
                        skill: function($stateParams) {
                            return $stateParams;
                        }
                        //product: function($stateParams) {
                        //    var Id = $stateParams.Id;

                        //    var promise = $http.get(appSettings.serverPath + "/api/skill/37");// + Id);

                        //    promise.then(function (response) {
                        //        return response.data;
                        //    });                            
                        //}
                    }                        
                });
            }
        ]
    );
}());