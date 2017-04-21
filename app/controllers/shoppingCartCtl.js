module.controller("ShoppingCartCtl", ["$scope", "snackFactory", function($scope, snackService) {

    $scope.snackList = [];
    $scope.totalCost = 0;

    var getSnackList = function() {
        snackService.getSnackList()
            .then(function(response) {
                $scope.snackList = response.data;
            });
    };

    $scope.updateTotalCost = function() {
        $scope.totalCost = snackService.calculateTotalCost($scope.snackList);
    };

    //update snack list on route change
    $scope.$on('$routeChangeUpdate', getSnackList);

    getSnackList();
}])
