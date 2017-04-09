describe("factory: snackFactory", function() {

    var snackFactory;

    beforeEach(angular.mock.module("TheaterShoppingCart"));

    beforeEach(inject(function(_snackFactory_) {
        snackFactory = _snackFactory_;
    }));

    describe("Calculating individual costs of snacks", function() {

        it("Cost of 1 popcorn is $3", function() {
            var snackList = snackFactory.getSnackList();

            var result = snackList.filter(function(obj) {
                return obj.name == "Popcorn";
            });

            result[0].quantity = 1;
            var cost = result[0].computeCost();

            expect(cost).toBe(3);
        });

        it("Cost of 2 popcorn is $6", function() {
            var snackList = snackFactory.getSnackList();

            var result = snackList.filter(function(obj) {
                return obj.name == "Popcorn";
            });

            result[0].quantity = 2;
            var cost = result[0].computeCost();

            expect(cost).toBe(6);
        });

        it("Cost of 1 snickers is $4", function() {
            var snackList = snackFactory.getSnackList();

            var result = snackList.filter(function(obj) {
                return obj.name == "Snickers";
            });

            result[0].quantity = 1;
            var cost = result[0].computeCost();

            expect(cost).toBe(4);
        });

        it("Cost of 5 snickers is $12", function() {
            var snackList = snackFactory.getSnackList();

            var result = snackList.filter(function(obj) {
                return obj.name == "Snickers";
            });

            result[0].quantity = 5;
            var cost = result[0].computeCost();

            expect(cost).toBe(12);
        });

        it("Cost of 6 snickers is $16", function() {
            var snackList = snackFactory.getSnackList();

            var result = snackList.filter(function(obj) {
                return obj.name == "Snickers";
            });

            result[0].quantity = 6;
            var cost = result[0].computeCost();

            expect(cost).toBe(16);
        });

        it("Cost of 1 soda is $2", function() {
            var snackList = snackFactory.getSnackList();

            var result = snackList.filter(function(obj) {
                return obj.name == "Soda";
            });

            result[0].quantity = 1;
            var cost = result[0].computeCost();

            expect(cost).toBe(2);
        });

        it("Cost of 2 sodas is $4", function() {
            var snackList = snackFactory.getSnackList();

            var result = snackList.filter(function(obj) {
                return obj.name == "Soda";
            });

            result[0].quantity = 2;
            var cost = result[0].computeCost();

            expect(cost).toBe(4);
        });
    });
});
