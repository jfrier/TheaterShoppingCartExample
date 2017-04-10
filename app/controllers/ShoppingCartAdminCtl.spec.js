describe("controller: ShoppingCartAdminCtl", function() {

    var scope;
    var ctl;

    beforeEach(angular.mock.module("TheaterShoppingCart"));

    var snackFactory;
    beforeEach(inject(function(_snackFactory_) {
        snackFactory = _snackFactory_;
    }));

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        Controller = $controller('ShoppingCartAdminCtl', {
            snackFactory: snackFactory,
            $scope: scope
        });
    }));
});
