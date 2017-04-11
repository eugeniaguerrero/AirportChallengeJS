'use strict';

describe("Plane", function() {
  var plane;
  var airport;
  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport', ['clearForLanding']);
  });
  it('returns a string announcing plane has landed', function() {
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });
});
