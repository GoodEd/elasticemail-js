"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CompressionFormat = _interopRequireDefault(require("../model/CompressionFormat"));

var _Contact = _interopRequireDefault(require("../model/Contact"));

var _ContactHistory = _interopRequireDefault(require("../model/ContactHistory"));

var _ContactPayload = _interopRequireDefault(require("../model/ContactPayload"));

var _ContactUpdatePayload = _interopRequireDefault(require("../model/ContactUpdatePayload"));

var _EmailsPayload = _interopRequireDefault(require("../model/EmailsPayload"));

var _ExportFileFormats = _interopRequireDefault(require("../model/ExportFileFormats"));

var _ExportLink = _interopRequireDefault(require("../model/ExportLink"));

var _ExportStatus = _interopRequireDefault(require("../model/ExportStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Contacts service.
* @module api/ContactsApi
* @version 4.0.20
*/
var ContactsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ContactsApi. 
  * @alias module:api/ContactsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ContactsApi(apiClient) {
    _classCallCheck(this, ContactsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the contactsByEmailDelete operation.
   * @callback module:api/ContactsApi~contactsByEmailDeleteCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete Contact
   * Deletes the provided contact. Required Access Level: ModifyContacts
   * @param {String} email Proper email address.
   * @param {module:api/ContactsApi~contactsByEmailDeleteCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(ContactsApi, [{
    key: "contactsByEmailDelete",
    value: function contactsByEmailDelete(email, callback) {
      var postBody = null; // verify the required parameter 'email' is set

      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling contactsByEmailDelete");
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
      return this.apiClient.callApi('/contacts/{email}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the contactsByEmailGet operation.
     * @callback module:api/ContactsApi~contactsByEmailGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Contact} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Load Contact
     * Load detailed contact information for specified email. Required Access Level: ViewContacts
     * @param {String} email Proper email address.
     * @param {module:api/ContactsApi~contactsByEmailGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Contact}
     */

  }, {
    key: "contactsByEmailGet",
    value: function contactsByEmailGet(email, callback) {
      var postBody = null; // verify the required parameter 'email' is set

      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling contactsByEmailGet");
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
      var returnType = _Contact["default"];
      return this.apiClient.callApi('/contacts/{email}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the contactsByEmailHistoryGet operation.
     * @callback module:api/ContactsApi~contactsByEmailHistoryGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ContactHistory>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Load History
     * Returns detailed history of specified Contact. Required Access Level: ViewContacts
     * @param {String} email Proper email address.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Maximum number of returned items.
     * @param {Number} opts.offset How many items should be returned ahead.
     * @param {module:api/ContactsApi~contactsByEmailHistoryGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ContactHistory>}
     */

  }, {
    key: "contactsByEmailHistoryGet",
    value: function contactsByEmailHistoryGet(email, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'email' is set

      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling contactsByEmailHistoryGet");
      }

      var pathParams = {
        'email': email
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
      var returnType = [_ContactHistory["default"]];
      return this.apiClient.callApi('/contacts/{email}/history', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the contactsByEmailPut operation.
     * @callback module:api/ContactsApi~contactsByEmailPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Contact} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Contact
     * Update selected contact. Omitted contact's fields will not be changed. Required Access Level: ModifyContacts
     * @param {String} email Proper email address.
     * @param {module:model/ContactUpdatePayload} contactUpdatePayload 
     * @param {module:api/ContactsApi~contactsByEmailPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Contact}
     */

  }, {
    key: "contactsByEmailPut",
    value: function contactsByEmailPut(email, contactUpdatePayload, callback) {
      var postBody = contactUpdatePayload; // verify the required parameter 'email' is set

      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling contactsByEmailPut");
      } // verify the required parameter 'contactUpdatePayload' is set


      if (contactUpdatePayload === undefined || contactUpdatePayload === null) {
        throw new Error("Missing the required parameter 'contactUpdatePayload' when calling contactsByEmailPut");
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
      var returnType = _Contact["default"];
      return this.apiClient.callApi('/contacts/{email}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the contactsDeletePost operation.
     * @callback module:api/ContactsApi~contactsDeletePostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Contacts Bulk
     * Deletes provided contacts in bulk. Required Access Level: ModifyContacts
     * @param {module:model/EmailsPayload} emailsPayload Provide either rule or a list of emails, not both.
     * @param {module:api/ContactsApi~contactsDeletePostCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "contactsDeletePost",
    value: function contactsDeletePost(emailsPayload, callback) {
      var postBody = emailsPayload; // verify the required parameter 'emailsPayload' is set

      if (emailsPayload === undefined || emailsPayload === null) {
        throw new Error("Missing the required parameter 'emailsPayload' when calling contactsDeletePost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/contacts/delete', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the contactsExportByIdStatusGet operation.
     * @callback module:api/ContactsApi~contactsExportByIdStatusGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExportStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check Export Status
     * Check the current status of the export. Required Access Level: Export
     * @param {String} id ID of the exported file
     * @param {module:api/ContactsApi~contactsExportByIdStatusGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExportStatus}
     */

  }, {
    key: "contactsExportByIdStatusGet",
    value: function contactsExportByIdStatusGet(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling contactsExportByIdStatusGet");
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
      var returnType = _ExportStatus["default"];
      return this.apiClient.callApi('/contacts/export/{id}/status', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the contactsExportPost operation.
     * @callback module:api/ContactsApi~contactsExportPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExportLink} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Export Contacts
     * Request an Export of specified Contacts. Required Access Level: Export
     * @param {Object} opts Optional parameters
     * @param {module:model/ExportFileFormats} opts.fileFormat Format of the exported file
     * @param {String} opts.rule Query used for filtering.
     * @param {Array.<String>} opts.emails Comma delimited list of contact emails
     * @param {module:model/CompressionFormat} opts.compressionFormat FileResponse compression format. None or Zip.
     * @param {String} opts.fileName Name of your file including extension.
     * @param {module:api/ContactsApi~contactsExportPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExportLink}
     */

  }, {
    key: "contactsExportPost",
    value: function contactsExportPost(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'fileFormat': opts['fileFormat'],
        'rule': opts['rule'],
        'emails': this.apiClient.buildCollectionParam(opts['emails'], 'multi'),
        'compressionFormat': opts['compressionFormat'],
        'fileName': opts['fileName']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ExportLink["default"];
      return this.apiClient.callApi('/contacts/export', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the contactsGet operation.
     * @callback module:api/ContactsApi~contactsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Contact>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Load Contacts
     * Returns a list of contacts. Required Access Level: ViewContacts
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Maximum number of returned items.
     * @param {Number} opts.offset How many items should be returned ahead.
     * @param {module:api/ContactsApi~contactsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Contact>}
     */

  }, {
    key: "contactsGet",
    value: function contactsGet(opts, callback) {
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
      var returnType = [_Contact["default"]];
      return this.apiClient.callApi('/contacts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the contactsImportPost operation.
     * @callback module:api/ContactsApi~contactsImportPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload Contacts
     * Upload contacts from a file. Required Access Level: ModifyContacts
     * @param {Object} opts Optional parameters
     * @param {String} opts.listName Name of an existing list to add these contacts to
     * @param {String} opts.encodingName In what encoding the file is uploaded
     * @param {File} opts.file 
     * @param {module:api/ContactsApi~contactsImportPostCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "contactsImportPost",
    value: function contactsImportPost(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'listName': opts['listName'],
        'encodingName': opts['encodingName']
      };
      var headerParams = {};
      var formParams = {
        'file': opts['file']
      };
      var authNames = ['apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/contacts/import', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the contactsPost operation.
     * @callback module:api/ContactsApi~contactsPostCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Contact>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add Contact
     * Add new Contacts to your Lists. Up to 1000 can be added (for more please refer to the import request). Required Access Level: ModifyContacts
     * @param {Array.<module:model/ContactPayload>} contactPayload 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.listnames Names of lists to which the uploaded contacts should be added to
     * @param {module:api/ContactsApi~contactsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Contact>}
     */

  }, {
    key: "contactsPost",
    value: function contactsPost(contactPayload, opts, callback) {
      opts = opts || {};
      var postBody = contactPayload; // verify the required parameter 'contactPayload' is set

      if (contactPayload === undefined || contactPayload === null) {
        throw new Error("Missing the required parameter 'contactPayload' when calling contactsPost");
      }

      var pathParams = {};
      var queryParams = {
        'listnames': this.apiClient.buildCollectionParam(opts['listnames'], 'multi')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [_Contact["default"]];
      return this.apiClient.callApi('/contacts', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ContactsApi;
}();

exports["default"] = ContactsApi;