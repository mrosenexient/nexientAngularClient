(function() {
    "use strict";

    angular
        .module("skillManagement")
        .controller("SkillEditController",
        [
            "skill",
            "$http",
        "appSettings",
        "$stateParams",
        "$state",
            SkillEditController
        ]);

    function SkillEditController(skill, $http, appSettings, $stateParams, $state) {
        var vm = this;

        var promise = $http.get(appSettings.serverPath + "/api/skill/" + $stateParams.Id);// + Id);

        promise.then(function (response) {
            vm.skill = response.data;

            if (vm.skill && vm.skill.Id) {
                vm.title = "Edit: " + vm.skill.Name;
            } else {
                vm.title = "New Skill";
            }
            console.log(vm.skill);
        });

        vm.submit = function () {
            var promise = $http.post(appSettings.serverPath + "/api/skill/?name=" + vm.skill.Name);

            promise.then(function (response) {
                vm.skills = response.data;
                $state.go('skillList');
            });
        }

        vm.cancel = function () {
            $state.go('skillList');
        }
    }

}());