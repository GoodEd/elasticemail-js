"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SubAccountInfo = _interopRequireDefault(require("../model/SubAccountInfo"));

var _SubaccountEmailCreditsPayload = _interopRequireDefault(require("../model/SubaccountEmailCreditsPayload"));

var _SubaccountEmailSettings = _interopRequireDefault(require("../model/SubaccountEmailSettings"));

var _SubaccountPayload = _interopRequireDefault(require("../model/SubaccountPayload"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* SubAccounts service.
* @module api/SubAccountsApi
* @version 4.0.20
*/
var SubAccountsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new SubAccountsApi. 
  * @alias module:api/SubAccountsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SubAccountsApi(apiClient) {
    _classCallCheck(this, SubAccountsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the subaccountsByEmailCreditsPatch operation.
   * @callback module:api/SubAccountsApi~subaccountsByEmailCreditsPatchCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Add, Subtract Email Credits
   * Update email credits of a subaccount by the given amount. Required Access Level: ModifySubAccounts
   * @param {String} email Email address of Sub-Account
   * @param {module:model/SubaccountEmailCreditsPayload} subaccountEmailCreditsPayload Amount of email credits to add or subtract from the current SubAccount email credits pool (positive or negative value)
   * @param {module:api/SubAccountsApi~subaccountsByEmailCreditsPatchCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(SubAccountsApi, [{
    key: "subaccountsByEmailCreditsPatch",
    value: function subaccountsByEmailCreditsPatch(email, subaccountEmailCreditsPayload, callback) {
      var postBody = subaccountEmailCreditsPayload; // verify the required parameter 'email' is set

      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling subaccountsByEmailCreditsPatch");
      } // verify the required parameter 'subaccountEmailCreditsPayload' is set


      if (subaccountEmailCreditsPayload === undefined || subaccountEmailCreditsPayload === null) {
        throw new Error("Missing the required parameter 'subaccountEmailCreditsPayload' when calling subaccountsByEmailCreditsPatch");
      }

      var pathParams = {
        'email': email
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/subaccounts/{email}/credits', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the subaccountsByEmailDelete operation.
     * @callback module:api/SubAccountsApi~subaccountsByEmailDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete SubAccount
     * Deletes specified SubAccount. An email will be sent to confirm this change. Required Access Level: ModifySubAccounts
     * @param {String} email Email address of Sub-Account
     * @param {module:api/SubAccountsApi~subaccountsByEmailDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "subaccountsByEmailDelete",
    value: function subaccountsByEmailDelete(email, callback) {
      var postBody = null; // verify the required parameter 'email' is set

      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling subaccountsByEmailDelete");
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
      return this.apiClient.callApi('/subaccounts/{email}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the subaccountsByEmailGet operation.
     * @callback module:api/SubAccountsApi~subaccountsByEmailGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SubAccountInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Load SubAccount
     * Returns details for the specified SubAccount. Required Access Level: ViewSubAccounts
     * @param {String} email Email address of Sub-Account
     * @param {module:api/SubAccountsApi~subaccountsByEmailGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SubAccountInfo}
     */

  }, {
    key: "subaccountsByEmailGet",
    value: function subaccountsByEmailGet(email, callback) {
      var postBody = null; // verify the required parameter 'email' is set

      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling subaccountsByEmailGet");
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
      var returnType = _SubAccountInfo["default"];
      return this.apiClient.callApi('/subaccounts/{email}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the subaccountsByEmailSettingsEmailPut operation.
     * @callback module:api/SubAccountsApi~subaccountsByEmailSettingsEmailPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SubaccountEmailSettings} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update SubAccount Email Settings
     * Update SubAccount email settings. Required Access Level: ModifySubAccounts
     * @param {String} email 
     * @param {module:model/SubaccountEmailSettings} subaccountEmailSettings Updated Email Settings
     * @param {module:api/SubAccountsApi~subaccountsByEmailSettingsEmailPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SubaccountEmailSettings}
     */

  }, {
    key: "subaccountsByEmailSettingsEmailPut",
    value: function subaccountsByEmailSettingsEmailPut(email, subaccountEmailSettings, callback) {
      var postBody = subaccountEmailSettings; // verify the required parameter 'email' is set

      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling subaccountsByEmailSettingsEmailPut");
      } // verify the required parameter 'subaccountEmailSettings' is set


      if (subaccountEmailSettings === undefined || subaccountEmailSettings === null) {
        throw new Error("Missing the required parameter 'subaccountEmailSettings' when calling subaccountsByEmailSettingsEmailPut");
      }

      var pathParams = {
        'email': email
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _SubaccountEmailSettings["default"];
      return this.apiClient.callApi('/subaccounts/{email}/settings/email', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the subaccountsGet operation.
     * @callback module:api/SubAccountsApi~subaccountsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SubAccountInfo>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Load SubAccounts
     * Returns a list of all your SubAccounts. Required Access Level: ViewSubAccounts
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Maximum number of returned items.
     * @param {Number} opts.offset How many items should be returned ahead.
     * @param {module:api/SubAccountsApi~subaccountsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SubAccountInfo>}
     */

  }, {
    key: "subaccountsGet",
    value: function subaccountsGet(opts, callback) {
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
      var returnType = [_SubAccountInfo["default"]];
      return this.apiClient.callApi('/subaccounts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the subaccountsPost operation.
     * @callback module:api/SubAccountsApi~subaccountsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SubAccountInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add SubAccount
     * Add a new SubAccount to your Account. To receive an access token for this SubAccount, make a POST security/apikeys request using the 'subaccount' parameter. Required Access Level: ModifySubAccounts
     * @param {module:model/SubaccountPayload} subaccountPayload 
     * @param {module:api/SubAccountsApi~subaccountsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SubAccountInfo}
     */

  }, {
    key: "subaccountsPost",
    value: function subaccountsPost(subaccountPayload, callback) {
      var postBody = subaccountPayload; // verify the required parameter 'subaccountPayload' is set

      if (subaccountPayload === undefined || subaccountPayload === null) {
        throw new Error("Missing the required parameter 'subaccountPayload' when calling subaccountsPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _SubAccountInfo["default"];
      return this.apiClient.callApi('/subaccounts', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return SubAccountsApi;
}();

exports["default"] = SubAccountsApi;