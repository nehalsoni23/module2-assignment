(function(){
'use strict';

angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyList = this;

  toBuyList.items = ShoppingListCheckOffService.getItems();

  toBuyList.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
  }
};

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;

  boughtList.boughtItems = ShoppingListCheckOffService.getBoughtItems();
};

function ShoppingListCheckOffService() {

  var service = this;
  var existingItems = [
     {name: "Cookies", quantity: 10},
     {name: "Chips", quantity: 15},
     {name: "Cheese", quantity: 20},
     {name: "Chocolate", quantity: 50},
     {name: "Ice-cream", quantity: 10}
  ];

  var boughtItems = [];

  service.removeItem = function (itemIndex) {
    boughtItems.push(existingItems[itemIndex]);
    existingItems.splice(itemIndex, 1);
  };

  service.getItems = function () {
    return existingItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  }
}
})();
