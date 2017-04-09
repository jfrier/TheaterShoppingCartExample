describe("factory: snackFactory", function() {

    var snackFactory;

    beforeEach(angular.mock.module("TheaterShoppingCart"));

    beforeEach(inject(function(_snackFactory_) {
        snackFactory = _snackFactory_;
    }));

    describe("Initializing snack list", function() {
        it("Popcorn is intialized", function() {
            var snackList = snackFactory.getSnackList();
            var result = snackList.filter(function(obj) {
                return obj.name == "Popcorn";
            });
            expect(result.length).toBe(1);
            expect(result[0].cost).toBe(3);
            expect(result[0].quantity).toBe(0);
        });

        it("Snickers is intialized", function() {
            var snackList = snackFactory.getSnackList();
            var result = snackList.filter(function(obj) {
                return obj.name == "Snickers";
            });
            expect(result.length).toBe(1);
            expect(result[0].cost).toBe(4);
            expect(result[0].quantity).toBe(0);
            expect(result[0].quantityDiscount.description).toBe("5 for the price of 3");
            expect(result[0].quantityDiscount.quantity).toBe(5);
            expect(result[0].quantityDiscount.adjustedQuantity).toBe(3);
        });

        it("Soda is intialized", function() {
            var snackList = snackFactory.getSnackList();
            var result = snackList.filter(function(obj) {
                return obj.name == "Soda";
            });
            expect(result.length).toBe(1);
            expect(result[0].cost).toBe(2);
            expect(result[0].quantity).toBe(0);
        });
    });

    describe("Calculating costs of snacks", function() {

        var getSnack = function(snackName) {
            var snackList = snackFactory.getSnackList();
            var result = snackList.filter(function(obj) {
                return obj.name == snackName;
            });
            return result[0];
        };

        it("Cost of 1 popcorn is $3", function() {
            var snack = getSnack("Popcorn");
            snack.quantity = 1;
            var cost = snackFactory.calculateTotalCost([snack]);
            expect(cost).toBe(3);
        });

        it("Cost of 2 popcorn is $6", function() {
            var snack = getSnack("Popcorn");
            snack.quantity = 2;
            var cost = snackFactory.calculateTotalCost([snack]);
            expect(cost).toBe(6);
        });

        it("Cost of 1 snickers is $4", function() {
            var snack = getSnack("Snickers");
            snack.quantity = 1;
            var cost = snackFactory.calculateTotalCost([snack]);
            expect(cost).toBe(4);
        });

        it("Cost of 5 snickers is $12", function() {
            var snack = getSnack("Snickers");
            snack.quantity = 5;
            var cost = snackFactory.calculateTotalCost([snack]);
            expect(cost).toBe(12);
        });

        it("Cost of 6 snickers is $16", function() {
            var snack = getSnack("Snickers");
            snack.quantity = 6;
            var cost = snackFactory.calculateTotalCost([snack]);
            expect(cost).toBe(16);
        });

        it("Cost of 1 soda is $2", function() {
            var snack = getSnack("Soda");
            snack.quantity = 1;
            var cost = snackFactory.calculateTotalCost([snack]);
            expect(cost).toBe(2);
        });

        it("Cost of 2 sodas is $4", function() {
            var snack = getSnack("Soda");
            snack.quantity = 2;
            var cost = snackFactory.calculateTotalCost([snack]);
            expect(cost).toBe(4);
        });

        it("Cost of 3 popcorn, 5 snickers, and 1 soda is $23", function() {
            var popcorn = getSnack("Popcorn");
            popcorn.quantity = 3;
            var snickers = getSnack("Snickers");
            snickers.quantity = 5;
            var soda = getSnack("Soda");
            soda.quantity = 1;

            var cost = snackFactory.calculateTotalCost([popcorn, snickers, soda]);
            expect(cost).toBe(23);
        });
    });
});
