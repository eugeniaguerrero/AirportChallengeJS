'use strict';

describe('Feature Test:', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  it('instructs plane to land at airport', function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it('instructs plane to takeoff from airport', function(){
    plane.land(airport)
    plane.takeoff();
    expect(airport.planes()).not.toContain(plane);
  });

});
