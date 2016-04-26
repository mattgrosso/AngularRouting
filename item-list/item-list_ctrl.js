(function() {
  'use strict';

  angular
    .module('shop')
    .controller('ItemListController', ItemListController);

  ItemListController.$inject = ['inventoryFactory'];

  function ItemListController(inventoryFactory) {

    this.itemList = inventoryFactory;
  }

})();
