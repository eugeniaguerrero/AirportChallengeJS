'use strict';

function Plane(){
  this.isAirbourne = false;
}

Plane.prototype.land = function(){
  this.isAirbourne = false;
};
Plane.prototype.takeoff = function(){
  this.isAirbourne = true;
};

