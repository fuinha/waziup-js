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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Error', 'model/HistoricalValue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/HistoricalValue'));
  } else {
    // Browser globals (root is window)
    if (!root.WaziupApi) {
      root.WaziupApi = {};
    }
    root.WaziupApi.HistoricalDataApi = factory(root.WaziupApi.ApiClient, root.WaziupApi.Error, root.WaziupApi.HistoricalValue);
  }
}(this, function(ApiClient, Error, HistoricalValue) {
  'use strict';

  /**
   * HistoricalData service.
   * @module api/HistoricalDataApi
   * @version 1.0.0
   */

  /**
   * Constructs a new HistoricalDataApi. 
   * @alias module:api/HistoricalDataApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the domainsDomainHistoryGet operation.
     * @callback module:api/HistoricalDataApi~domainsDomainHistoryGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HistoricalValue} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Historical data for analysis
     * @param {String} domain 
     * @param {module:api/HistoricalDataApi~domainsDomainHistoryGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/HistoricalValue}
     */
    this.domainsDomainHistoryGet = function(domain, callback) {
      var postBody = null;

      // verify the required parameter 'domain' is set
      if (domain === undefined || domain === null) {
        throw new Error("Missing the required parameter 'domain' when calling domainsDomainHistoryGet");
      }


      var pathParams = {
        'domain': domain
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = HistoricalValue;

      return this.apiClient.callApi(
        '/domains/{domain}/history', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
