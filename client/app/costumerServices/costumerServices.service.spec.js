'use strict';

describe('Service: costumerServices', function () {

  // load the service's module
  beforeEach(module('radarProjectApp.costumerServices'));

  // instantiate service
  var costumerServices;
  beforeEach(inject(function (_costumerServices_) {
    costumerServices = _costumerServices_;
  }));

  it('should do something', function () {
    expect(!!costumerServices).to.be.true;
  });

});
