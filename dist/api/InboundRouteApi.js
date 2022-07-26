"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InboundPayload = _interopRequireDefault(require("../model/InboundPayload"));

var _InboundRoute = _interopRequireDefault(require("../model/InboundRoute"));

var _SortOrderItem = _interopRequireDefault(require("../model/SortOrderItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* InboundRoute service.
* @module api/InboundRouteApi
* @version 4.0.20
*/
var InboundRouteApi = /*#__PURE__*/function () {
  /**
  * Constructs a new InboundRouteApi. 
  * @alias module:api/InboundRouteApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function InboundRouteApi(apiClient) {
    _classCallCheck(this, InboundRouteApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the inboundrouteByIdDelete operation.
   * @callback module:api/InboundRouteApi~inboundrouteByIdDeleteCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete Route
   * Deletes the Inbound Route. Required Access Level: ModifySettings
   * @param {String} id 
   * @param {module:api/InboundRouteApi~inboundrouteByIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(InboundRouteApi, [{
    key: "inboundrouteByIdDelete",
    value: function inboundrouteByIdDelete(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling inboundrouteByIdDelete");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/inboundroute/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the inboundrouteByIdGet operation.
     * @callback module:api/InboundRouteApi~inboundrouteByIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InboundRoute} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Route
     * Load an Inbound Route. Required Access Level: ViewSettings
     * @param {String} id ID number of your attachment
     * @param {module:api/InboundRouteApi~inboundrouteByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InboundRoute}
     */

  }, {
    key: "inboundrouteByIdGet",
    value: function inboundrouteByIdGet(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling inboundrouteByIdGet");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InboundRoute["default"];
      return this.apiClient.callApi('/inboundroute/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the inboundrouteByIdPut operation.
     * @callback module:api/InboundRouteApi~inboundrouteByIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InboundRoute} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Route
     * Update the Inbound Route. Required Access Level: ModifySettings
     * @param {String} id 
     * @param {module:model/InboundPayload} inboundPayload 
     * @param {module:api/InboundRouteApi~inboundrouteByIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InboundRoute}
     */

  }, {
    key: "inboundrouteByIdPut",
    value: function inboundrouteByIdPut(id, inboundPayload, callback) {
      var postBody = inboundPayload; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling inboundrouteByIdPut");
      } // verify the required parameter 'inboundPayload' is set


      if (inboundPayload === undefined || inboundPayload === null) {
        throw new Error("Missing the required parameter 'inboundPayload' when calling inboundrouteByIdPut");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InboundRoute["default"];
      return this.apiClient.callApi('/inboundroute/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the inboundrouteGet operation.
     * @callback module:api/InboundRouteApi~inboundrouteGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InboundRoute>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Routes
     * Get all your Inbound Routes. Required Access Level: ViewSettings
     * @param {module:api/InboundRouteApi~inboundrouteGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InboundRoute>}
     */

  }, {
    key: "inboundrouteGet",
    value: function inboundrouteGet(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_InboundRoute["default"]];
      return this.apiClient.callApi('/inboundroute', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the inboundrouteOrderPut operation.
     * @callback module:api/InboundRouteApi~inboundrouteOrderPutCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InboundRoute>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Sorting
     * Required Access Level: ViewSettings
     * @param {Array.<module:model/SortOrderItem>} sortOrderItem Change the ordering of inbound routes for when matching the inbound
     * @param {module:api/InboundRouteApi~inboundrouteOrderPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InboundRoute>}
     */

  }, {
    key: "inboundrouteOrderPut",
    value: function inboundrouteOrderPut(sortOrderItem, callback) {
      var postBody = sortOrderItem; // verify the required parameter 'sortOrderItem' is set

      if (sortOrderItem === undefined || sortOrderItem === null) {
        throw new Error("Missing the required parameter 'sortOrderItem' when calling inboundrouteOrderPut");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [_InboundRoute["default"]];
      return this.apiClient.callApi('/inboundroute/order', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the inboundroutePost operation.
     * @callback module:api/InboundRouteApi~inboundroutePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InboundRoute} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Route
     * Create new Inbound Route. Required Access Level: ModifySettings
     * @param {module:model/InboundPayload} inboundPayload 
     * @param {module:api/InboundRouteApi~inboundroutePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InboundRoute}
     */

  }, {
    key: "inboundroutePost",
    value: function inboundroutePost(inboundPayload, callback) {
      var postBody = inboundPayload; // verify the required parameter 'inboundPayload' is set

      if (inboundPayload === undefined || inboundPayload === null) {
        throw new Error("Missing the required parameter 'inboundPayload' when calling inboundroutePost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InboundRoute["default"];
      return this.apiClient.callApi('/inboundroute', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return InboundRouteApi;
}();

exports["default"] = InboundRouteApi;