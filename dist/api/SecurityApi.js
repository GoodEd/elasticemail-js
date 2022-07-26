"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ApiKey = _interopRequireDefault(require("../model/ApiKey"));

var _ApiKeyPayload = _interopRequireDefault(require("../model/ApiKeyPayload"));

var _NewApiKey = _interopRequireDefault(require("../model/NewApiKey"));

var _NewSmtpCredentials = _interopRequireDefault(require("../model/NewSmtpCredentials"));

var _SmtpCredentials = _interopRequireDefault(require("../model/SmtpCredentials"));

var _SmtpCredentialsPayload = _interopRequireDefault(require("../model/SmtpCredentialsPayload"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Security service.
* @module api/SecurityApi
* @version 4.0.20
*/
var SecurityApi = /*#__PURE__*/function () {
  /**
  * Constructs a new SecurityApi. 
  * @alias module:api/SecurityApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SecurityApi(apiClient) {
    _classCallCheck(this, SecurityApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the securityApikeysByNameDelete operation.
   * @callback module:api/SecurityApi~securityApikeysByNameDeleteCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete ApiKey
   * Delete your existing ApiKey. Required Access Level: Security
   * @param {String} name Name of the ApiKey
   * @param {Object} opts Optional parameters
   * @param {String} opts.subaccount Email of the subaccount of which ApiKey should be deleted
   * @param {module:api/SecurityApi~securityApikeysByNameDeleteCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(SecurityApi, [{
    key: "securityApikeysByNameDelete",
    value: function securityApikeysByNameDelete(name, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling securityApikeysByNameDelete");
      }

      var pathParams = {
        'name': name
      };
      var queryParams = {
        'subaccount': opts['subaccount']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/security/apikeys/{name}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the securityApikeysByNameGet operation.
     * @callback module:api/SecurityApi~securityApikeysByNameGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiKey} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Load ApiKey
     * Load your existing ApiKey info. Required Access Level: Security
     * @param {String} name Name of the ApiKey
     * @param {Object} opts Optional parameters
     * @param {String} opts.subaccount Email of the subaccount of which ApiKey should be loaded
     * @param {module:api/SecurityApi~securityApikeysByNameGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiKey}
     */

  }, {
    key: "securityApikeysByNameGet",
    value: function securityApikeysByNameGet(name, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling securityApikeysByNameGet");
      }

      var pathParams = {
        'name': name
      };
      var queryParams = {
        'subaccount': opts['subaccount']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ApiKey["default"];
      return this.apiClient.callApi('/security/apikeys/{name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the securityApikeysByNamePut operation.
     * @callback module:api/SecurityApi~securityApikeysByNamePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiKey} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update ApiKey
     * Update your existing ApiKey. Required Access Level: Security
     * @param {String} name Name of the ApiKey
     * @param {module:model/ApiKeyPayload} apiKeyPayload 
     * @param {module:api/SecurityApi~securityApikeysByNamePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiKey}
     */

  }, {
    key: "securityApikeysByNamePut",
    value: function securityApikeysByNamePut(name, apiKeyPayload, callback) {
      var postBody = apiKeyPayload; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling securityApikeysByNamePut");
      } // verify the required parameter 'apiKeyPayload' is set


      if (apiKeyPayload === undefined || apiKeyPayload === null) {
        throw new Error("Missing the required parameter 'apiKeyPayload' when calling securityApikeysByNamePut");
      }

      var pathParams = {
        'name': name
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ApiKey["default"];
      return this.apiClient.callApi('/security/apikeys/{name}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the securityApikeysGet operation.
     * @callback module:api/SecurityApi~securityApikeysGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ApiKey>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List ApiKeys
     * List all your existing ApiKeys. Required Access Level: Security
     * @param {Object} opts Optional parameters
     * @param {String} opts.subaccount Email of the subaccount of which ApiKeys should be loaded
     * @param {module:api/SecurityApi~securityApikeysGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ApiKey>}
     */

  }, {
    key: "securityApikeysGet",
    value: function securityApikeysGet(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'subaccount': opts['subaccount']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_ApiKey["default"]];
      return this.apiClient.callApi('/security/apikeys', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the securityApikeysPost operation.
     * @callback module:api/SecurityApi~securityApikeysPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NewApiKey} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add ApiKey
     * Add a new ApiKey. Required Access Level: Security
     * @param {module:model/ApiKeyPayload} apiKeyPayload 
     * @param {module:api/SecurityApi~securityApikeysPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NewApiKey}
     */

  }, {
    key: "securityApikeysPost",
    value: function securityApikeysPost(apiKeyPayload, callback) {
      var postBody = apiKeyPayload; // verify the required parameter 'apiKeyPayload' is set

      if (apiKeyPayload === undefined || apiKeyPayload === null) {
        throw new Error("Missing the required parameter 'apiKeyPayload' when calling securityApikeysPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _NewApiKey["default"];
      return this.apiClient.callApi('/security/apikeys', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the securitySmtpByNameDelete operation.
     * @callback module:api/SecurityApi~securitySmtpByNameDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete SMTP Credential
     * Delete your existing SMTP Credentials. Required Access Level: Security
     * @param {String} name Name of the SMTP Credential
     * @param {Object} opts Optional parameters
     * @param {String} opts.subaccount Email of the subaccount of which credential should be deleted
     * @param {module:api/SecurityApi~securitySmtpByNameDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "securitySmtpByNameDelete",
    value: function securitySmtpByNameDelete(name, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling securitySmtpByNameDelete");
      }

      var pathParams = {
        'name': name
      };
      var queryParams = {
        'subaccount': opts['subaccount']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/security/smtp/{name}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the securitySmtpByNameGet operation.
     * @callback module:api/SecurityApi~securitySmtpByNameGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SmtpCredentials} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Load SMTP Credential
     * Load your existing SMTP Credential info. Required Access Level: Security
     * @param {String} name Name of the SMTP Credential
     * @param {Object} opts Optional parameters
     * @param {String} opts.subaccount Email of the subaccount of which credential should be loaded
     * @param {module:api/SecurityApi~securitySmtpByNameGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SmtpCredentials}
     */

  }, {
    key: "securitySmtpByNameGet",
    value: function securitySmtpByNameGet(name, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling securitySmtpByNameGet");
      }

      var pathParams = {
        'name': name
      };
      var queryParams = {
        'subaccount': opts['subaccount']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SmtpCredentials["default"];
      return this.apiClient.callApi('/security/smtp/{name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the securitySmtpByNamePut operation.
     * @callback module:api/SecurityApi~securitySmtpByNamePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SmtpCredentials} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update SMTP Credential
     * Update your existing SMTP Credentials. Required Access Level: Security
     * @param {String} name Name of the SMTP Credential
     * @param {module:model/SmtpCredentialsPayload} smtpCredentialsPayload 
     * @param {module:api/SecurityApi~securitySmtpByNamePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SmtpCredentials}
     */

  }, {
    key: "securitySmtpByNamePut",
    value: function securitySmtpByNamePut(name, smtpCredentialsPayload, callback) {
      var postBody = smtpCredentialsPayload; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling securitySmtpByNamePut");
      } // verify the required parameter 'smtpCredentialsPayload' is set


      if (smtpCredentialsPayload === undefined || smtpCredentialsPayload === null) {
        throw new Error("Missing the required parameter 'smtpCredentialsPayload' when calling securitySmtpByNamePut");
      }

      var pathParams = {
        'name': name
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _SmtpCredentials["default"];
      return this.apiClient.callApi('/security/smtp/{name}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the securitySmtpGet operation.
     * @callback module:api/SecurityApi~securitySmtpGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SmtpCredentials>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List SMTP Credentials
     * List all your existing SMTP Credentials. Required Access Level: Security
     * @param {Object} opts Optional parameters
     * @param {String} opts.subaccount Email of the subaccount of which credentials should be listed
     * @param {module:api/SecurityApi~securitySmtpGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SmtpCredentials>}
     */

  }, {
    key: "securitySmtpGet",
    value: function securitySmtpGet(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'subaccount': opts['subaccount']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_SmtpCredentials["default"]];
      return this.apiClient.callApi('/security/smtp', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the securitySmtpPost operation.
     * @callback module:api/SecurityApi~securitySmtpPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NewSmtpCredentials} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add SMTP Credential
     * Add new SMTP Credential. Required Access Level: Security
     * @param {module:model/SmtpCredentialsPayload} smtpCredentialsPayload 
     * @param {module:api/SecurityApi~securitySmtpPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NewSmtpCredentials}
     */

  }, {
    key: "securitySmtpPost",
    value: function securitySmtpPost(smtpCredentialsPayload, callback) {
      var postBody = smtpCredentialsPayload; // verify the required parameter 'smtpCredentialsPayload' is set

      if (smtpCredentialsPayload === undefined || smtpCredentialsPayload === null) {
        throw new Error("Missing the required parameter 'smtpCredentialsPayload' when calling securitySmtpPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _NewSmtpCredentials["default"];
      return this.apiClient.callApi('/security/smtp', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return SecurityApi;
}();

exports["default"] = SecurityApi;