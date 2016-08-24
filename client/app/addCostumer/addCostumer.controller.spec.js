'use strict';

describe('Component: AddCostumerComponent', function () {

  // load the controller's module
  beforeEach(module('radarProjectApp'));

  var AddCostumerComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    AddCostumerComponent = $componentController('AddCostumerComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
