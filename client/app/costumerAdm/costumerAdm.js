'use strict';

angular.module('radarProjectApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('costumerAdm', {
        url: '/costumerAdm',
        template: '<costumer-adm></costumer-adm>'
      });
  });
