module.factory("snackFactory", ["$http", function($http) {
  "use strict";

    var calculateSnackCost = function(snack) {

        //compute total with quantity discount
        if (snack.hasOwnProperty("quantityDiscount")) {
            return Math.floor(snack.quantity / snack.quantityDiscount.quantity) *
                (snack.cost * snack.quantityDiscount.adjustedQuantity) +
                (snack.quantity % snack.quantityDiscount.quantity) * snack.cost;
        }

        //compute total with no discounts
        return snack.quantity * snack.cost;
    };

    var addSnack = function(snack) {
        snacks.push(snack);
    }

    var getSnackList = function() {
        return $http.get('data/snacks.json');
    };

    var calculateTotalCost = function(snackList) {
        var cost = 0;
        for (var i = 0; i < snackList.length; i++) {
            var snackCost = calculateSnackCost(snackList[i]);
            cost += snackCost;
        }
        return cost;
    };

    return {
        "getSnackList": getSnackList,
        "calculateTotalCost": calculateTotalCost
    }
}]);
