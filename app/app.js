var module = angular.module("TheaterShoppingCart", ["ngRoute"]);

module.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "../partials/home.html"
        })
        .when("/shoppingcart", {
          templateUrl: "../partials/shoppingcart.html",
          controller: "ShoppingCartCtl"
        })
        .when("/admin", {
            templateUrl: "../partials/admin.html"
        });
});
