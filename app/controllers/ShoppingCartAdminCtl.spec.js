describe("controller: ShoppingCartAdminCtl", function() {

    var ctl, rootScope;

    beforeEach(angular.mock.module("TheaterShoppingCart"));

    var $controller;

    beforeEach(inject(function($rootScope, $controller) {
        var scope = $rootScope.$new();
        ctl = $controller('ShoppingCartAdminCtl', {
            $scope: scope
        });
    }));

    describe("Test setup", function() {
        it("Test controller is resolved", function() {
            expect(ctl).toBe(6);
        });
    });
});
