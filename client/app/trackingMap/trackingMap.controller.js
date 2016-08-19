'use strict';
(function(){

class TrackingMapComponent {
  constructor($http, $scope) {
    this.$scope=$scope;
    this.$http = $http;
    this.usuarios = [{
        nombre: "Edgar Poma Huiza",
        Placa: "338-TRE",
        tipo: "Motorcylce",
        coordenadas:{
            lat:-21.537561510616563,
            long:-64.71230506896973,
            alt: 1869
        }
    },{
        nombre: "Roberto Saavedra Junior",
        Placa: "528-YOU",
        tipo: "Car",
        coordenadas:{
            lat:-21.53325020859576,
            long:-64.74801063537598,
            alt: 1915
        }
    }];
    
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

  openLocation(res){
      window.alert("index"+res);

  }
}

TrackingMapComponent.$inject=['$http','$scope'];

angular.module('radarProjectApp')
  .component('trackingMap', {
    templateUrl: 'app/trackingMap/trackingMap.html',
    controller: TrackingMapComponent
  });

})();
