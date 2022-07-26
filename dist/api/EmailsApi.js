"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EmailData = _interopRequireDefault(require("../model/EmailData"));

var _EmailMessageData = _interopRequireDefault(require("../model/EmailMessageData"));

var _EmailSend = _interopRequireDefault(require("../model/EmailSend"));

var _EmailTransactionalMessageData = _interopRequireDefault(require("../model/EmailTransactionalMessageData"));

var _MergeEmailPayload = _interopRequireDefault(require("../model/MergeEmailPayload"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Emails service.
* @module api/EmailsApi
* @version 4.0.20
*/
var EmailsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new EmailsApi. 
  * @alias module:api/EmailsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function EmailsApi(apiClient) {
    _classCallCheck(this, EmailsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the emailsByMsgidViewGet operation.
   * @callback module:api/EmailsApi~emailsByMsgidViewGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/EmailData} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * View Email
   * Returns email details for viewing or rendering. Required Access Level: None
   * @param {String} msgid Message identifier
   * @param {module:api/EmailsApi~emailsByMsgidViewGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/EmailData}
   */


  _createClass(EmailsApi, [{
    key: "emailsByMsgidViewGet",
    value: function emailsByMsgidViewGet(msgid, callback) {
      var postBody = null; // verify the required parameter 'msgid' is set

      if (msgid === undefined || msgid === null) {
        throw new Error("Missing the required parameter 'msgid' when calling emailsByMsgidViewGet");
      }

      var pathParams = {
        'msgid': msgid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailData["default"];
      return this.apiClient.callApi('/emails/{msgid}/view', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the emailsMergefilePost operation.
     * @callback module:api/EmailsApi~emailsMergefilePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmailSend} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send Bulk Emails CSV
     * Send bulk merge email. Required Access Level: SendHttp
     * @param {module:model/MergeEmailPayload} mergeEmailPayload Email data
     * @param {module:api/EmailsApi~emailsMergefilePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmailSend}
     */

  }, {
    key: "emailsMergefilePost",
    value: function emailsMergefilePost(mergeEmailPayload, callback) {
      var postBody = mergeEmailPayload; // verify the required parameter 'mergeEmailPayload' is set

      if (mergeEmailPayload === undefined || mergeEmailPayload === null) {
        throw new Error("Missing the required parameter 'mergeEmailPayload' when calling emailsMergefilePost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EmailSend["default"];
      return this.apiClient.callApi('/emails/mergefile', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the emailsPost operation.
     * @callback module:api/EmailsApi~emailsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmailSend} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send Bulk Emails
     * Send bulk merge email. Required Access Level: SendHttp
     * @param {module:model/EmailMessageData} emailMessageData Email data
     * @param {module:api/EmailsApi~emailsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmailSend}
     */

  }, {
    key: "emailsPost",
    value: function emailsPost(emailMessageData, callback) {
      var postBody = emailMessageData; // verify the required parameter 'emailMessageData' is set

      if (emailMessageData === undefined || emailMessageData === null) {
        throw new Error("Missing the required parameter 'emailMessageData' when calling emailsPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EmailSend["default"];
      return this.apiClient.callApi('/emails', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the emailsTransactionalPost operation.
     * @callback module:api/EmailsApi~emailsTransactionalPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmailSend} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send Transactional Email
     * Send transactional emails (recipients will be known to each other). Required Access Level: SendHttp
     * @param {module:model/EmailTransactionalMessageData} emailTransactionalMessageData Email data
     * @param {module:api/EmailsApi~emailsTransactionalPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmailSend}
     */

  }, {
    key: "emailsTransactionalPost",
    value: function emailsTransactionalPost(emailTransactionalMessageData, callback) {
      var postBody = emailTransactionalMessageData; // verify the required parameter 'emailTransactionalMessageData' is set

      if (emailTransactionalMessageData === undefined || emailTransactionalMessageData === null) {
        throw new Error("Missing the required parameter 'emailTransactionalMessageData' when calling emailsTransactionalPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EmailSend["default"];
      return this.apiClient.callApi('/emails/transactional', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return EmailsApi;
}();

exports["default"] = EmailsApi;