'use strict';
(function(){

class CostumerAdmComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('radarProjectApp')
  .component('costumerAdm', {
    templateUrl: 'app/costumerAdm/costumerAdm.html',
    controller: CostumerAdmComponent
  });

})();
