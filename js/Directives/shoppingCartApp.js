'use strict';

app.directive('shoppingCartApp', function() {
  return {
    restrict: 'E',
    controller: function($scope, ProductService, ProductFilterService) {
      $scope.products = ProductService.getProducts();
      $scope.filterOptions = {
        showSpecialOffers: true,
        currentSortOption: ProductFilterService.sortOptions[0],
        categoryFilter: []
      };

    },
    templateUrl: 'js/Directives/shoppingCartApp.html'
  };
});
