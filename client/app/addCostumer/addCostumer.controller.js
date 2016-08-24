'use strict';
(function(){

class AddCostumerComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('radarProjectApp')
  .component('addCostumer', {
    templateUrl: 'app/addCostumer/addCostumer.html',
    controller: AddCostumerComponent
  });

})();
