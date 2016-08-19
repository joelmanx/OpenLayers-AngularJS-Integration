'use strict';

angular.module('radarProjectApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('trackingMap', {
        url: '/trackingMap',
        template: '<tracking-map></tracking-map>'
      });
  });
