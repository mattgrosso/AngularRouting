(function() {
  'use strict';

  angular
    .module('shop', ['ui.router'])
    .config(shopConfig);

  shopConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function shopConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
      .state('categories', {
        url: '/categories',
        templateUrl: 'category-list/categories.html'
      })
      .state('item-detail', {
        url: '/item-detail',
        templateUrl: 'item-detail/item-detail.html'
      })
      .state('item-list', {
        url: '/item-list',
        templateUrl: 'item-list/item-list.html',
        controller: 'ItemListController',
        controllerAs: 'items'
      })
      .state('search-results', {
        url: '/search',
        templateUrl: 'search-results/search-results.html'
      })
      .state('cart', {
        url: '/cart',
        templateUrl: 'shopping-cart/shopping-cart.html'
      });

  }

})();
