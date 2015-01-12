var bootstrapDataExampleApp = angular.module('bootstrapDataExampleApp', ['ngResource']);

bootstrapDataExampleApp.controller('UserRegistrationController', function ($scope, Users) {
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

bootstrapDataExampleApp.factory('Users', [
    '$resource', function ($resource) {
        return $resource("/api/Users/:id");
    }
]);