'use strict';

describe("Plane", function() {
  var plane;
  var airport;
  beforeEach(function(){
    plane = new Plane();
  });
  it('returns a string announcing plane has landed', function() {
    plane.land();
    expect(plane.isAirbourne).toBe(false);
  });

  it('returns a string announcing the plan has departed', function() {
    plane.land();
    plane.takeoff();
    expect(plane.isAirbourne).toBe(true);
  });
});
