var servicesExampleApp = angular.module('servicesExampleApp', ['ngResource']);

servicesExampleApp.controller('UserRegistrationController', function ($scope, Users) {
    Users.query(function (data) {
        $scope.users = data;
    });

    $scope.getUser = function (id) {
        Users.get({ id: id }, function (data) {
            $scope.currentUser = data;
        });
    };

    $scope.addUser = function () {
        Users.save($scope.currentUser, function () {
            Users.query(function (data) {
                $scope.users = data;
            });
            $scope.currentUser = {};
        });
    }
});

servicesExampleApp.factory('Users', [
    '$resource', function ($resource) {
        return $resource("/api/Users/:id");
    }
]);