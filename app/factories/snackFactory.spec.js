describe("factory: snackFactory", function() {
  "use strict";

  var snackFactory, httpBackend, q;

  beforeEach(angular.mock.module("TheaterShoppingCart"));

  function getSnackData() {
    var request = new XMLHttpRequest();

    //make synchronous request
    request.open('GET', 'base/app/data/snacks.json');

    //no request body since GET
    request.send(null);

    return [request.status, request.response, {}];
  }

  beforeEach(inject(function($injector) {
    httpBackend = $injector.get('$httpBackend');
    q = $injector.get('$q');
    snackFactory = $injector.get('snackFactory');

    httpBackend.whenGET('data/snacks.json').respond(getSnackData());
  }));

  describe("Initializing snack list", function() {
    it("Popcorn is intialized", function() {
      snackFactory.getSnackList().then(function(snackList) {
        var result = snackList.filter(function(obj) {
          return obj.name == "Popcorn";
        });
        expect(result.length).toBe(1);
        expect(result[0].cost).toBe(3);
        expect(result[0].quantity).toBe(0);
      });
    });

    it("Snickers is intialized", function() {
      snackFactory.getSnackList().then(function(snackList) {
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
    });

    it("Soda is intialized", function() {
      snackFactory.getSnackList().then(function(snackList) {
        var result = snackList.filter(function(obj) {
          return obj.name == "Soda";
        });
        expect(result.length).toBe(1);
        expect(result[0].cost).toBe(2);
        expect(result[0].quantity).toBe(0);
      });
    });
  });

  describe("Calculating costs of snacks", function() {

    //helper method for getting first element of specific snack name
    var getSnack = function(snackName) {
      return snackFactory.getSnackList().then(function(snackList) {
        var result = snackList.filter(function(obj) {
          return obj.name == snackName;
        });
        return result[0];
      });
    };

    it("Cost of 1 popcorn is $3", function() {
      getSnack("Popcorn").then(function(snack) {
        snack.quantity = 1;
        var cost = snackFactory.calculateTotalCost([snack]);
        expect(cost).toBe(3);
      });
    });

    it("Cost of 2 popcorn is $6", function() {
      getSnack("Popcorn").then(function(snack) {
        snack.quantity = 2;
        var cost = snackFactory.calculateTotalCost([snack]);
        expect(cost).toBe(6);
      });
    });

    it("Cost of 1 snickers is $4", function() {
      getSnack("Snickers").then(function(snack) {
        snack.quantity = 1;
        var cost = snackFactory.calculateTotalCost([snack]);
        expect(cost).toBe(4);
      });
    });

    it("Cost of 5 snickers is $12", function() {
      var snack = getSnack("Snickers").then(function(snack) {
        snack.quantity = 5;
        var cost = snackFactory.calculateTotalCost([snack]);
        expect(cost).toBe(12);
      });
    });

    it("Cost of 6 snickers is $16", function() {
      var snack = getSnack("Snickers").then(function(snack) {
        snack.quantity = 6;
        var cost = snackFactory.calculateTotalCost([snack]);
        expect(cost).toBe(16);
      });
    });

    it("Cost of 1 soda is $2", function() {
      var snack = getSnack("Soda").then(function(snack) {
        snack.quantity = 1;
        var cost = snackFactory.calculateTotalCost([snack]);
        expect(cost).toBe(2);
      });
    });

    it("Cost of 2 sodas is $4", function() {
      var snack = getSnack("Soda").then(function(snack) {
        snack.quantity = 2;
        var cost = snackFactory.calculateTotalCost([snack]);
        expect(cost).toBe(4);
      });
    });

    it("Cost of 3 popcorn, 5 snickers, and 1 soda is $23", function() {

      var arr = [];

      for (var a = 0; a < 3; ++a) {
        arr.push(getSnack("Popcorn"));
        arr.push(getSnack("Snickers"));
        arr.push(getSnack("Soda"));
      }

      q.all(arr).then(function(ret) {
        var popcorn = ret[0];
        var snickers = ret[1];
        var soda = ret[2];

        popcorn.quantity = 3;
        snickers.quantity = 5;
        soda.quantity = 1;
        var cost = snackFactory.calculateTotalCost([popcorn, snickers, soda]);
        expect(cost).toBe(23);
      });
    });
  });
});
