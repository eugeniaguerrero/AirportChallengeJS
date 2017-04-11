'use strict';

describe("Plane", function() {
  var plane;
  var airport;
  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport', ['clearForLanding', 'clearForTakeoff']);
  });
  it('returns a string announcing plane has landed', function() {
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });

  it('returns a string announcing the plan has departed', function() {
    plane.land(airport);
    plane.takeoff();
    expect(airport.clearForTakeoff).toHaveBeenCalled();
  });
});
