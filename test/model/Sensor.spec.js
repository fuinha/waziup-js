/**
 * WAZIUP API
 * Applications API
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.WaziupApi);
  }
}(this, function(expect, WaziupApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new WaziupApi.Sensor();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Sensor', function() {
    it('should create an instance of Sensor', function() {
      // uncomment below and update the code to test Sensor
      //var instane = new WaziupApi.Sensor();
      //expect(instance).to.be.a(WaziupApi.Sensor);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new WaziupApi.Sensor();
      //expect(instance).to.be();
    });

    it('should have the property gatewayId (base name: "gateway_id")', function() {
      // uncomment below and update the code to test the property gatewayId
      //var instane = new WaziupApi.Sensor();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new WaziupApi.Sensor();
      //expect(instance).to.be();
    });

    it('should have the property owner (base name: "owner")', function() {
      // uncomment below and update the code to test the property owner
      //var instane = new WaziupApi.Sensor();
      //expect(instance).to.be();
    });

    it('should have the property measurements (base name: "measurements")', function() {
      // uncomment below and update the code to test the property measurements
      //var instane = new WaziupApi.Sensor();
      //expect(instance).to.be();
    });

    it('should have the property location (base name: "location")', function() {
      // uncomment below and update the code to test the property location
      //var instane = new WaziupApi.Sensor();
      //expect(instance).to.be();
    });

  });

}));
