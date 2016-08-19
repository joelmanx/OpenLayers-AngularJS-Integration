'use strict';

describe('Component: TrackingMapComponent', function () {

  // load the controller's module
  beforeEach(module('radarProjectApp'));

  var TrackingMapComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    TrackingMapComponent = $componentController('TrackingMapComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
