'use strict';
(function(){
let service=null;
class CostumerAdmComponent {
  constructor($stateParams, costumerServices) {
    this.title = 'Iniciando';
    service=costumerServices;
    this.verifyStorage();
    this.list=[];
    this.getList();
  }
  /***
   * Verify the state of variable bd_tradiz od the LocalStorage
   * In case of that not exist was created
   */
  verifyStorage(){
    if(service!=null){
      service.initLocalStorage();
    }    
  }
  
  getList(){
    this.list=service.getListOfCostumers();
  }

  detailsCostumer(id){
    window.alert(id+" view DETAILS not yet implemented  !!!");
  }

  printURL(type){
    switch(type){
      case "A":{
        return "../assets/images/auto_small.jpg";
      }
      case "M":{
        return "../assets/images/moto_small.jpg";
      }
      default:{
        return "image";
      }
    }
  }
}
CostumerAdmComponent.$inject=['$stateParams','costumerServices'];
angular.module('radarProjectApp')
  .component('costumerAdm', {
    templateUrl: 'app/costumerAdm/costumerAdm.html',
    controller: CostumerAdmComponent
  });

})();
