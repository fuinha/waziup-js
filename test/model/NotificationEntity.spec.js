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
    instance = new WaziupApi.NotificationEntity();
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

  describe('NotificationEntity', function() {
    it('should create an instance of NotificationEntity', function() {
      // uncomment below and update the code to test NotificationEntity
      //var instane = new WaziupApi.NotificationEntity();
      //expect(instance).to.be.a(WaziupApi.NotificationEntity);
    });

    it('should have the property entityName (base name: "EntityName")', function() {
      // uncomment below and update the code to test the property entityName
      //var instane = new WaziupApi.NotificationEntity();
      //expect(instance).to.be();
    });

  });

}));
