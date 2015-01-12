userModule.controller("UserController", function ($scope, bootstrappedUsers) {
    $scope.bootstrappedUsers = bootstrappedUsers.users;
});