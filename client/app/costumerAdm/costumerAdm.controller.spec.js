'use strict';

describe('Component: CostumerAdmComponent', function () {

  // load the controller's module
  beforeEach(module('radarProjectApp'));

  var CostumerAdmComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    CostumerAdmComponent = $componentController('CostumerAdmComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
