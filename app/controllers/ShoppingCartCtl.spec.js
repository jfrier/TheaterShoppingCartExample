describe("controller: ShoppingCartCtl", function() {

    var scope;
    var ctl;

    beforeEach(angular.mock.module("TheaterShoppingCart"));

    var snackFactory;
    beforeEach(inject(function(_snackFactory_) {
        snackFactory = _snackFactory_;
        spyOn(snackFactory, 'getSnackList')
    }));

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        Controller = $controller('ShoppingCartCtl', {
            snackFactory: snackFactory,
            $scope: scope
        });
    }));

    describe("Controller method test", function() {
        it("Test snack list is refreshed on route change", function() {
            scope.$broadcast('$routeChangeUpdate');
            expect(snackFactory.getSnackList).toHaveBeenCalled();
        });
    });
});
