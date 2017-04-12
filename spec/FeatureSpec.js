'use strict';

describe('Feature Test:', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  it('instructs plane to land at airport', function(){
    plane.land();
    airport.clearForLanding(plane)
    expect(airport.planes()).toContain(plane);
  });

  it('instructs plane to takeoff from airport', function(){
    plane.land(airport)
    plane.takeoff();
    expect(airport.planes()).not.toContain(plane);
  });

  it('blocks takeoff when weather is stormy', function(){
    airport.clearForLanding(plane)
    plane.land()
    spyOn(airport, 'isStormy').and.returnValue(true);
    expect(function(){airport.clearForTakeoff();}).toThrowError('cannot takeoff during storm');
    expect(airport.planes()).toContain(plane);
  });
});
