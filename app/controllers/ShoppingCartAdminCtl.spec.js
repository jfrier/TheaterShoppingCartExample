describe("controller: ShoppingCartAdminCtl", function() {
  "use strict";

  var scope;
  var ctl;

  beforeEach(angular.mock.module("TheaterShoppingCart"));

  var snackFactory;
  beforeEach(inject(function($injector) {
    snackFactory = $injector.get('snackFactory');
  }));

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    Controller = $controller('ShoppingCartAdminCtl', {
      snackFactory: snackFactory,
      $scope: scope
    });
  }));
});
