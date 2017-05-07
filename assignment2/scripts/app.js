(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var itemsToBuy = this;
    itemsToBuy.itemsList = ShoppingListCheckOffService.getItemsToBuy();

    itemsToBuy.boughtItem = function(itemIndex) {
      console.log('controller');
      ShoppingListCheckOffService.boughtItem(itemIndex);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var itemsAlreadyBought = this;
    itemsAlreadyBought.itemsList = ShoppingListCheckOffService.getItemsAlreadyBought();

  }

  function ShoppingListCheckOffService() {
    var service = this;

    var itemsToBuy = [
    {
      name : 'butter',
      quantity : '3'
    },
    {
      name : 'cookies',
      quantity : '11'
    },
    {
      name : 'yogurts',
      quantity : '7'
    },
    {
      name : 'waffles',
      quantity : '3'
    },
    {
      name : 'eggs',
      quantity : '8'
    },
    {
      name : 'tea',
      quantity : '1'
    }];

    var itemsAlreadyBought = [];

    service.getItemsToBuy = function() {
      return itemsToBuy;
    };

    service.getItemsAlreadyBought = function() {
      return itemsAlreadyBought;
    }

    service.boughtItem = function (itemIndex) {
      var item = itemsToBuy[itemIndex];
      itemsAlreadyBought.push(item);
      itemsToBuy.splice(itemIndex, 1);
    };
  }

})();
