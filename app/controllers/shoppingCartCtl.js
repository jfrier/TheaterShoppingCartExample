module.controller("ShoppingCartCtl", ["$scope", "snackFactory", function($scope, snackService) {

    var getSnackList = function() {
        return snackService.getSnackList();
    };

    $scope.updateTotalCost = function() {
        $scope.totalCost = snackService.calculateTotalCost($scope.snackList);
    };

    //update snack list on route change
    $scope.$on('$routeChangeUpdate', getSnackList);

    $scope.snackList = getSnackList();
    $scope.totalCost = 0;
}])
