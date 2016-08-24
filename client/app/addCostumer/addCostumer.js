'use strict';

angular.module('radarProjectApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('addCostumer', {
        url: '/addCostumer',
        template: '<add-costumer></add-costumer>'
      });
  });
