(function(angular){
    "use strict";

    MainCtrl.$inject = ["$scope"];

    angular.module('jovaniApp').controller("MainCtrl", MainCtrl);

    function MainCtrl($scope) {
        $scope.nome = "Jovani";
        $scope.helloWorld = helloWorld;

        function helloWorld() {
            alert("Olá " + $scope.nome);
        }
    }
}(angular));