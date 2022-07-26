"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Suppression = _interopRequireDefault(require("../model/Suppression"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Suppressions service.
* @module api/SuppressionsApi
* @version 4.0.20
*/
var SuppressionsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new SuppressionsApi. 
  * @alias module:api/SuppressionsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SuppressionsApi(apiClient) {
    _classCallCheck(this, SuppressionsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the suppressionsBouncesGet operation.
   * @callback module:api/SuppressionsApi~suppressionsBouncesGetCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:model/Suppression>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get Bounce List
   * Retrieve your list of bounced emails. Required Access Level: ViewContacts, ViewSuppressions
   * @param {Object} opts Optional parameters
   * @param {String} opts.search Text fragment used for searching.
   * @param {Number} opts.limit Maximum number of returned items.
   * @param {Number} opts.offset How many items should be returned ahead.
   * @param {module:api/SuppressionsApi~suppressionsBouncesGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<module:model/Suppression>}
   */


  _createClass(SuppressionsApi, [{
    key: "suppressionsBouncesGet",
    value: function suppressionsBouncesGet(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'search': opts['search'],
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Suppression["default"]];
      return this.apiClient.callApi('/suppressions/bounces', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the suppressionsBouncesImportPost operation.
     * @callback module:api/SuppressionsApi~suppressionsBouncesImportPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add Bounces Async
     * Add Bounced. Required Access Level: ModifyContacts, ModifySuppressions
     * @param {Object} opts Optional parameters
     * @param {File} opts.file 
     * @param {module:api/SuppressionsApi~suppressionsBouncesImportPostCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "suppressionsBouncesImportPost",
    value: function suppressionsBouncesImportPost(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'file': opts['file']
      };
      var authNames = ['apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/suppressions/bounces/import', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the suppressionsBouncesPost operation.
     * @callback module:api/SuppressionsApi~suppressionsBouncesPostCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Suppression>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add Bounces
     * Add Bounced. Required Access Level: ModifyContacts, ModifySuppressions
     * @param {Array.<String>} requestBody Emails to add as bounces. Limited to 1000 per request
     * @param {module:api/SuppressionsApi~suppressionsBouncesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Suppression>}
     */

  }, {
    key: "suppressionsBouncesPost",
    value: function suppressionsBouncesPost(requestBody, callback) {
      var postBody = requestBody; // verify the required parameter 'requestBody' is set

      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling suppressionsBouncesPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [_Suppression["default"]];
      return this.apiClient.callApi('/suppressions/bounces', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the suppressionsByEmailDelete operation.
     * @callback module:api/SuppressionsApi~suppressionsByEmailDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Suppression
     * Delete Suppression. Required Access Level: ViewContacts, ViewSuppressions
     * @param {String} email Proper email address.
     * @param {module:api/SuppressionsApi~suppressionsByEmailDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "suppressionsByEmailDelete",
    value: function suppressionsByEmailDelete(email, callback) {
      var postBody = null; // verify the required parameter 'email' is set

      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling suppressionsByEmailDelete");
      }

      var pathParams = {
        'email': email
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/suppressions/{email}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the suppressionsByEmailGet operation.
     * @callback module:api/SuppressionsApi~suppressionsByEmailGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Suppression} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Suppression
     * Retrieve your suppression. Required Access Level: ViewContacts, ViewSuppressions
     * @param {String} email Proper email address.
     * @param {module:api/SuppressionsApi~suppressionsByEmailGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Suppression}
     */

  }, {
    key: "suppressionsByEmailGet",
    value: function suppressionsByEmailGet(email, callback) {
      var postBody = null; // verify the required parameter 'email' is set

      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling suppressionsByEmailGet");
      }

      var pathParams = {
        'email': email
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Suppression["default"];
      return this.apiClient.callApi('/suppressions/{email}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the suppressionsComplaintsGet operation.
     * @callback module:api/SuppressionsApi~suppressionsComplaintsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Suppression>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Complaints List
     * Retrieve your list of complaints. Required Access Level: ViewContacts, ViewSuppressions
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Text fragment used for searching.
     * @param {Number} opts.limit Maximum number of returned items.
     * @param {Number} opts.offset How many items should be returned ahead.
     * @param {module:api/SuppressionsApi~suppressionsComplaintsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Suppression>}
     */

  }, {
    key: "suppressionsComplaintsGet",
    value: function suppressionsComplaintsGet(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'search': opts['search'],
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Suppression["default"]];
      return this.apiClient.callApi('/suppressions/complaints', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the suppressionsComplaintsImportPost operation.
     * @callback module:api/SuppressionsApi~suppressionsComplaintsImportPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add Complaints Async
     * Add Complaints. Required Access Level: ModifyContacts, ModifySuppressions
     * @param {Object} opts Optional parameters
     * @param {File} opts.file 
     * @param {module:api/SuppressionsApi~suppressionsComplaintsImportPostCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "suppressionsComplaintsImportPost",
    value: function suppressionsComplaintsImportPost(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'file': opts['file']
      };
      var authNames = ['apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/suppressions/complaints/import', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the suppressionsComplaintsPost operation.
     * @callback module:api/SuppressionsApi~suppressionsComplaintsPostCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Suppression>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add Complaints
     * Add Complaints. Required Access Level: ModifyContacts, ModifySuppressions
     * @param {Array.<String>} requestBody Emails to add as complaints. Limited to 1000 per request
     * @param {module:api/SuppressionsApi~suppressionsComplaintsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Suppression>}
     */

  }, {
    key: "suppressionsComplaintsPost",
    value: function suppressionsComplaintsPost(requestBody, callback) {
      var postBody = requestBody; // verify the required parameter 'requestBody' is set

      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling suppressionsComplaintsPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [_Suppression["default"]];
      return this.apiClient.callApi('/suppressions/complaints', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the suppressionsGet operation.
     * @callback module:api/SuppressionsApi~suppressionsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Suppression>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Suppressions
     * Retrieve your suppressions. Required Access Level: ViewContacts, ViewSuppressions
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Maximum number of returned items.
     * @param {Number} opts.offset How many items should be returned ahead.
     * @param {module:api/SuppressionsApi~suppressionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Suppression>}
     */

  }, {
    key: "suppressionsGet",
    value: function suppressionsGet(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Suppression["default"]];
      return this.apiClient.callApi('/suppressions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the suppressionsUnsubscribesGet operation.
     * @callback module:api/SuppressionsApi~suppressionsUnsubscribesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Suppression>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Unsubscribes List
     * Retrieve your list of unsubscribes. Required Access Level: ViewContacts, ViewSuppressions
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Text fragment used for searching.
     * @param {Number} opts.limit Maximum number of returned items.
     * @param {Number} opts.offset How many items should be returned ahead.
     * @param {module:api/SuppressionsApi~suppressionsUnsubscribesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Suppression>}
     */

  }, {
    key: "suppressionsUnsubscribesGet",
    value: function suppressionsUnsubscribesGet(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'search': opts['search'],
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Suppression["default"]];
      return this.apiClient.callApi('/suppressions/unsubscribes', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the suppressionsUnsubscribesImportPost operation.
     * @callback module:api/SuppressionsApi~suppressionsUnsubscribesImportPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add Unsubscribes Async
     * Add Unsubscribes. Required Access Level: ModifyContacts, ModifySuppressions
     * @param {Object} opts Optional parameters
     * @param {File} opts.file 
     * @param {module:api/SuppressionsApi~suppressionsUnsubscribesImportPostCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "suppressionsUnsubscribesImportPost",
    value: function suppressionsUnsubscribesImportPost(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'file': opts['file']
      };
      var authNames = ['apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/suppressions/unsubscribes/import', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the suppressionsUnsubscribesPost operation.
     * @callback module:api/SuppressionsApi~suppressionsUnsubscribesPostCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Suppression>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add Unsubscribes
     * Add Unsubscribes. Required Access Level: ModifyContacts, ModifySuppressions
     * @param {Array.<String>} requestBody Emails to add as unsubscribes. Limited to 1000 per request
     * @param {module:api/SuppressionsApi~suppressionsUnsubscribesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Suppression>}
     */

  }, {
    key: "suppressionsUnsubscribesPost",
    value: function suppressionsUnsubscribesPost(requestBody, callback) {
      var postBody = requestBody; // verify the required parameter 'requestBody' is set

      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling suppressionsUnsubscribesPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [_Suppression["default"]];
      return this.apiClient.callApi('/suppressions/unsubscribes', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return SuppressionsApi;
}();

exports["default"] = SuppressionsApi;