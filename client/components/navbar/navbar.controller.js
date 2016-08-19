'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
  },{
    'title': 'Tracking Maps',
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
