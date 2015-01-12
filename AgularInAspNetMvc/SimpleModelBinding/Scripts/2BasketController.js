function BasketController($scope) {

    $scope.items = [
        { title: "Apples", quantity: 10, price: .5 },
        { title: "Oranges", quantity: 5, price: .65 },
        { title: "Blue Berries", quantity: 8, price: 1.1 }
    ];

    $scope.remove = function(index) {
        $scope.items.splice(index, 1);
    }

    $scope.title = "Fruit Basket";
}