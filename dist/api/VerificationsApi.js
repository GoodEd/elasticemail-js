"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EmailValidationResult = _interopRequireDefault(require("../model/EmailValidationResult"));

var _VerificationFileResult = _interopRequireDefault(require("../model/VerificationFileResult"));

var _VerificationFileResultDetails = _interopRequireDefault(require("../model/VerificationFileResultDetails"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Verifications service.
* @module api/VerificationsApi
* @version 4.0.20
*/
var VerificationsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new VerificationsApi. 
  * @alias module:api/VerificationsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function VerificationsApi(apiClient) {
    _classCallCheck(this, VerificationsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the verificationsByEmailDelete operation.
   * @callback module:api/VerificationsApi~verificationsByEmailDeleteCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete Email Verification Result
   * Delete a result with given email if exists. Required Access Level: VerifyEmails
   * @param {String} email Email address to verification
   * @param {module:api/VerificationsApi~verificationsByEmailDeleteCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(VerificationsApi, [{
    key: "verificationsByEmailDelete",
    value: function verificationsByEmailDelete(email, callback) {
      var postBody = null; // verify the required parameter 'email' is set

      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling verificationsByEmailDelete");
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
      return this.apiClient.callApi('/verifications/{email}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the verificationsByEmailGet operation.
     * @callback module:api/VerificationsApi~verificationsByEmailGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmailValidationResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Email Verification Result
     * Returns a result of verified email. Required Access Level: ViewEmailVerifications
     * @param {String} email Email address to view verification result of
     * @param {module:api/VerificationsApi~verificationsByEmailGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmailValidationResult}
     */

  }, {
    key: "verificationsByEmailGet",
    value: function verificationsByEmailGet(email, callback) {
      var postBody = null; // verify the required parameter 'email' is set

      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling verificationsByEmailGet");
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
      var returnType = _EmailValidationResult["default"];
      return this.apiClient.callApi('/verifications/{email}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the verificationsByEmailPost operation.
     * @callback module:api/VerificationsApi~verificationsByEmailPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmailValidationResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Verify Email
     * Verify single email address and returns result of verification. Required Access Level: VerifyEmails
     * @param {String} email Email address to verify
     * @param {module:api/VerificationsApi~verificationsByEmailPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmailValidationResult}
     */

  }, {
    key: "verificationsByEmailPost",
    value: function verificationsByEmailPost(email, callback) {
      var postBody = null; // verify the required parameter 'email' is set

      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling verificationsByEmailPost");
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
      var returnType = _EmailValidationResult["default"];
      return this.apiClient.callApi('/verifications/{email}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the verificationsFilesByIdDelete operation.
     * @callback module:api/VerificationsApi~verificationsFilesByIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete File Verification Result
     * Delete Verification Results if they exist. Required Access Level: VerifyEmails
     * @param {String} id ID of the exported file
     * @param {module:api/VerificationsApi~verificationsFilesByIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "verificationsFilesByIdDelete",
    value: function verificationsFilesByIdDelete(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling verificationsFilesByIdDelete");
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
      return this.apiClient.callApi('/verifications/files/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the verificationsFilesByIdResultDownloadGet operation.
     * @callback module:api/VerificationsApi~verificationsFilesByIdResultDownloadGetCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Download File Verification Result
     * Download verification results as a ZIP file. Required Access Level: VerifyEmails
     * @param {String} id Verification ID to download
     * @param {module:api/VerificationsApi~verificationsFilesByIdResultDownloadGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */

  }, {
    key: "verificationsFilesByIdResultDownloadGet",
    value: function verificationsFilesByIdResultDownloadGet(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling verificationsFilesByIdResultDownloadGet");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = [];
      var accepts = ['application/_*'];
      var returnType = File;
      return this.apiClient.callApi('/verifications/files/{id}/result/download', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the verificationsFilesByIdResultGet operation.
     * @callback module:api/VerificationsApi~verificationsFilesByIdResultGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VerificationFileResultDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Detailed File Verification Result
     * Returns status and results (if verified) of file with given ID. Required Access Level: ViewEmailVerifications
     * @param {String} id ID of the Verification to display status of
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Maximum number of returned email verification results
     * @param {Number} opts.offset How many result items should be returned ahead
     * @param {module:api/VerificationsApi~verificationsFilesByIdResultGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VerificationFileResultDetails}
     */

  }, {
    key: "verificationsFilesByIdResultGet",
    value: function verificationsFilesByIdResultGet(id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling verificationsFilesByIdResultGet");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _VerificationFileResultDetails["default"];
      return this.apiClient.callApi('/verifications/files/{id}/result', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the verificationsFilesByIdVerificationPost operation.
     * @callback module:api/VerificationsApi~verificationsFilesByIdVerificationPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start verification
     * Start a verification of the previously uploaded file with emails. Required Access Level: VerifyEmails
     * @param {String} id File ID to start verification
     * @param {module:api/VerificationsApi~verificationsFilesByIdVerificationPostCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "verificationsFilesByIdVerificationPost",
    value: function verificationsFilesByIdVerificationPost(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling verificationsFilesByIdVerificationPost");
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
      return this.apiClient.callApi('/verifications/files/{id}/verification', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the verificationsFilesPost operation.
     * @callback module:api/VerificationsApi~verificationsFilesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VerificationFileResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload File with Emails
     * Uploads a CSV file with list of emails that can then be triggered for verification. An 'email' column is required. Required Access Level: VerifyEmails
     * @param {Object} opts Optional parameters
     * @param {File} opts.file 
     * @param {module:api/VerificationsApi~verificationsFilesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VerificationFileResult}
     */

  }, {
    key: "verificationsFilesPost",
    value: function verificationsFilesPost(opts, callback) {
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
      var accepts = ['application/json'];
      var returnType = _VerificationFileResult["default"];
      return this.apiClient.callApi('/verifications/files', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the verificationsFilesResultGet operation.
     * @callback module:api/VerificationsApi~verificationsFilesResultGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/VerificationFileResult>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Files Verification Results
     * Returns a list of uploaded files, their statuses and results. Required Access Level: ViewEmailVerifications
     * @param {module:api/VerificationsApi~verificationsFilesResultGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/VerificationFileResult>}
     */

  }, {
    key: "verificationsFilesResultGet",
    value: function verificationsFilesResultGet(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_VerificationFileResult["default"]];
      return this.apiClient.callApi('/verifications/files/result', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the verificationsGet operation.
     * @callback module:api/VerificationsApi~verificationsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/EmailValidationResult>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Emails Verification Results
     * Returns a results of all verified single emails. Required Access Level: ViewEmailVerifications
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Maximum number of returned items.
     * @param {Number} opts.offset How many items should be returned ahead.
     * @param {module:api/VerificationsApi~verificationsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/EmailValidationResult>}
     */

  }, {
    key: "verificationsGet",
    value: function verificationsGet(opts, callback) {
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
      var returnType = [_EmailValidationResult["default"]];
      return this.apiClient.callApi('/verifications', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return VerificationsApi;
}();

exports["default"] = VerificationsApi;