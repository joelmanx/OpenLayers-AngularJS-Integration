'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
  },{
    'title': 'Business',
    'state': 'costumerAdm'
  },{
    'title': 'Monitoring',
    'state': 'trackingMap'
  }
  ];

  isCollapsed = true;
  //end-non-standard

  constructor() {
    }
}

angular.module('radarProjectApp')
  .controller('NavbarController', NavbarController);
