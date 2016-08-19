'use strict';

(function() {

class MainController {

  constructor($http,$scope) {
    this.$scope=$scope;
    this.$http = $http;
    this.awesomeThings = [];
  }

  $onInit() {
    this.$http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
    });
  }
}

MainController.$inject=['$http','$scope'];

angular.module('radarProjectApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });

})();
