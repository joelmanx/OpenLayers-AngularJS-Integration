'use strict';
(function(){

class TrackingMapComponent {
  constructor($http, $scope) {
    this.$scope=$scope;
    this.$http = $http;
    this.awesomeThings = [];
	console.log("test console......111");
    angular.extend(this.$scope, {
        center: {
            lat: -21.521382,
            lon: -64.728095,
            zoom: 14,
            //autodiscover: true
        },
        bing: {
            source: {
                name: 'Bing Maps',
                type: 'BingMaps',
                key: 'Aj6XtE1Q1rIvehmjn2Rh1LR2qvMGZ-8vPS9Hn3jCeUiToM77JFnf-kFRzyMELDol',
                imagerySet: 'AerialWithLabels'
            }
        }
    });
  }
}

TrackingMapComponent.$inject=['$http','$scope'];

angular.module('radarProjectApp')
  .component('trackingMap', {
    templateUrl: 'app/trackingMap/trackingMap.html',
    controller: TrackingMapComponent
  });

})();
