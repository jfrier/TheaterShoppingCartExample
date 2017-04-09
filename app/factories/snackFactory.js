module.factory("snackFactory", function() {
    var snacks = [];

    //intiialize the default snack values list
    var init = function() {
        snacks.push({
            "name": "Popcorn",
            "quantity": 0,
            "cost": 3,
            "computeCost": function() {
                return this.quantity * this.cost;
            }
        });
        snacks.push({
            "name": "Snickers",
            "quantity": 0,
            "cost": 4,
            "discount": "5 for the price of three",
            "computeCost": function() {
                return Math.floor(this.quantity / 5) * (this.cost * 3) + (this.quantity % 5) * this.cost;
            }
        });
        snacks.push({
            "name": "Soda",
            "quantity": 0,
            "cost": 2,
            "computeCost": function() {
                return this.quantity * this.cost;
            }
        });
    }

    var getSnackList = function() {
        return snacks;
    };

    var calculateTotalCost = function(snackList) {
        var cost = 0;
        for (var i = 0; i < snackList.length; i++) {
            cost += snackList[i].computeCost();
        }
        return cost;
    };

    init();

    return {
        "getSnackList": getSnackList,
        "calculateTotalCost": calculateTotalCost
    }
});
