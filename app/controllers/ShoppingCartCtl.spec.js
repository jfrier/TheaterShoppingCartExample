describe("controller: ShoppingCartCtl", function() {
  "use strict";

  var scope, ctl, q;

  beforeEach(angular.mock.module("TheaterShoppingCart"));

  var snackFactory;
  beforeEach(inject(function($injector) {
    snackFactory = $injector.get('snackFactory');
    scope = $injector.get('$rootScope');
    q = $injector.get('$q');

    var controller = $injector.get('$controller');

    ctl = controller('ShoppingCartCtl', {
      snackFactory: snackFactory,
      $scope: scope
    });
  }));

  describe("Controller method test", function() {
    it("Test snack list is refreshed on route change", function() {

      spyOn(snackFactory, 'getSnackList').and.callFake(function() {
        var deferred = q.defer();
        deferred.resolve([]);
        return deferred.promise;
      });

      scope.$broadcast('$routeChangeUpdate');
      expect(snackFactory.getSnackList).toHaveBeenCalled();
    });
  });
});
