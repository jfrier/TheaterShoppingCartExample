module.factory("snackFactory", function() {
    var snacks = [];

    var quantityDiscounts = [{
        "description": "5 for the price of 3",
        "quantity": 5,
        "adjustedQuantity": 3
    }];

    //intiialize the default snack values list
    var init = function() {
        snacks.push({
            "name": "Popcorn",
            "quantity": 0,
            "cost": 3
        });
        snacks.push({
            "name": "Snickers",
            "quantity": 0,
            "cost": 4,
            "quantityDiscount": quantityDiscounts[0]
        });
        snacks.push({
            "name": "Soda",
            "quantity": 0,
            "cost": 2
        });
    };

    var calculateSnackCost = function(snack) {
        //compute total with quantity discount
        if (snack.hasOwnProperty("quantityDiscount")) {
            return Math.floor(snack.quantity / snack.quantityDiscount.quantity) * (snack.cost * snack.quantityDiscount.adjustedQuantity) +
                (snack.quantity % snack.quantityDiscount.quantity) * snack.cost;
        }

        //compute total with no discounts
        return snack.quantity * snack.cost;
    };

    var getSnackList = function() {
        return snacks;
    };

    var calculateTotalCost = function(snackList) {
        var cost = 0;
        for (var i = 0; i < snackList.length; i++) {
            var snackCost = calculateSnackCost(snackList[i]);
            cost += snackCost;
        }
        return cost;
    };

    //build the default snack list
    init();

    return {
        "getSnackList": getSnackList,
        "calculateTotalCost": calculateTotalCost
    }
});
