function FormController($scope) {
    $scope.user = {
        FirstName: '',
        LastName: '',
        UserName: '',
        Number: 1
    };

    $scope.save = function() {
        var firstName = $scope.user.FirstName;
        var lastName = $scope.user.LastName;
        var userName = $scope.user.UserName;

        var message = "Do stuff to add " + firstName + " " + lastName + " user id " + userName;
        window.alert(message);
    }

    $scope.oldNumber = $scope.user.Number;

    $scope.numberChanged = function(newValue) {
        window.alert("changed from " + $scope.oldNumber + " to " + newValue);
        $scope.oldNumber = newValue;
    }    
}