function ServicesController($scope, $http) {
    $scope.user = {
        FirstName: '',
        LastName: '',
        UserName: '',
        Number: 1
    };

    $scope.userToGet = 0;

    $scope.save = function() {
        $http.post("/home/SavePerson", $scope.user, { params: {} })
            .success(function (data, status, headers, config) {
             window.alert("worked! " + status);
            })
            .error(function (data, status, headers, config) {
            window.alert("didn't work! " + status);
        });
    }

    $scope.retrieve = function (id) {
        $http.get("/home/GetPerson/" + id)
            .success(function (data, status, headers, config) {
            $scope.user = data;
        });
    }
}