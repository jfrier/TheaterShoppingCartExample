module.controller("ShoppingCart", ["$scope", "snackFactory", function($scope, snackService) {

    var getSnackList = function() {
        return snackService.getSnackList();
    };

    $scope.snackList = getSnackList();
    $scope.totalCost = 0;

    $scope.updateTotalCost = function() {
        $scope.totalCost = snackService.calculateTotalCost($scope.snackList);
    }

}])
