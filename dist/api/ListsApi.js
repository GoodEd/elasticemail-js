"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ContactsList = _interopRequireDefault(require("../model/ContactsList"));

var _EmailsPayload = _interopRequireDefault(require("../model/EmailsPayload"));

var _ListPayload = _interopRequireDefault(require("../model/ListPayload"));

var _ListUpdatePayload = _interopRequireDefault(require("../model/ListUpdatePayload"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Lists service.
* @module api/ListsApi
* @version 4.0.20
*/
var ListsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ListsApi. 
  * @alias module:api/ListsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ListsApi(apiClient) {
    _classCallCheck(this, ListsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the listsByNameContactsPost operation.
   * @callback module:api/ListsApi~listsByNameContactsPostCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ContactsList} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Add Contacts to List
   * Add existing Contacts to specified list. Required Access Level: ModifyContacts
   * @param {String} name Name of your list.
   * @param {module:model/EmailsPayload} emailsPayload Provide either rule or a list of emails, not both.
   * @param {module:api/ListsApi~listsByNameContactsPostCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/ContactsList}
   */


  _createClass(ListsApi, [{
    key: "listsByNameContactsPost",
    value: function listsByNameContactsPost(name, emailsPayload, callback) {
      var postBody = emailsPayload; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling listsByNameContactsPost");
      } // verify the required parameter 'emailsPayload' is set


      if (emailsPayload === undefined || emailsPayload === null) {
        throw new Error("Missing the required parameter 'emailsPayload' when calling listsByNameContactsPost");
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
      var returnType = _ContactsList["default"];
      return this.apiClient.callApi('/lists/{name}/contacts', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listsByNameContactsRemovePost operation.
     * @callback module:api/ListsApi~listsByNameContactsRemovePostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove Contacts from List
     * Remove specified Contacts from your list. Required Access Level: ModifyContacts
     * @param {String} name Name of your list.
     * @param {module:model/EmailsPayload} emailsPayload Provide either rule or a list of emails, not both.
     * @param {module:api/ListsApi~listsByNameContactsRemovePostCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "listsByNameContactsRemovePost",
    value: function listsByNameContactsRemovePost(name, emailsPayload, callback) {
      var postBody = emailsPayload; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling listsByNameContactsRemovePost");
      } // verify the required parameter 'emailsPayload' is set


      if (emailsPayload === undefined || emailsPayload === null) {
        throw new Error("Missing the required parameter 'emailsPayload' when calling listsByNameContactsRemovePost");
      }

      var pathParams = {
        'name': name
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/lists/{name}/contacts/remove', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listsByNameDelete operation.
     * @callback module:api/ListsApi~listsByNameDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete List
     * Deletes List and removes all the Contacts from it (does not delete Contacts). Required Access Level: ModifyContacts
     * @param {String} name Name of your list.
     * @param {module:api/ListsApi~listsByNameDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "listsByNameDelete",
    value: function listsByNameDelete(name, callback) {
      var postBody = null; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling listsByNameDelete");
      }

      var pathParams = {
        'name': name
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/lists/{name}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listsByNameGet operation.
     * @callback module:api/ListsApi~listsByNameGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContactsList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Load List
     * Returns detailed information about specified list. Required Access Level: ViewContacts
     * @param {String} name Name of your list.
     * @param {module:api/ListsApi~listsByNameGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContactsList}
     */

  }, {
    key: "listsByNameGet",
    value: function listsByNameGet(name, callback) {
      var postBody = null; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling listsByNameGet");
      }

      var pathParams = {
        'name': name
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ContactsList["default"];
      return this.apiClient.callApi('/lists/{name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listsByNamePut operation.
     * @callback module:api/ListsApi~listsByNamePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContactsList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update List
     * Update existing list. Required Access Level: ModifyContacts
     * @param {String} name Name of your list.
     * @param {module:model/ListUpdatePayload} listUpdatePayload 
     * @param {module:api/ListsApi~listsByNamePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContactsList}
     */

  }, {
    key: "listsByNamePut",
    value: function listsByNamePut(name, listUpdatePayload, callback) {
      var postBody = listUpdatePayload; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling listsByNamePut");
      } // verify the required parameter 'listUpdatePayload' is set


      if (listUpdatePayload === undefined || listUpdatePayload === null) {
        throw new Error("Missing the required parameter 'listUpdatePayload' when calling listsByNamePut");
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
      var returnType = _ContactsList["default"];
      return this.apiClient.callApi('/lists/{name}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listsGet operation.
     * @callback module:api/ListsApi~listsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ContactsList>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Load Lists
     * Returns all your existing lists. Required Access Level: ViewContacts
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Maximum number of returned items.
     * @param {Number} opts.offset How many items should be returned ahead.
     * @param {module:api/ListsApi~listsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ContactsList>}
     */

  }, {
    key: "listsGet",
    value: function listsGet(opts, callback) {
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
      var returnType = [_ContactsList["default"]];
      return this.apiClient.callApi('/lists', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listsPost operation.
     * @callback module:api/ListsApi~listsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContactsList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add List
     * Add a new list. Required Access Level: ModifyContacts
     * @param {module:model/ListPayload} listPayload 
     * @param {module:api/ListsApi~listsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContactsList}
     */

  }, {
    key: "listsPost",
    value: function listsPost(listPayload, callback) {
      var postBody = listPayload; // verify the required parameter 'listPayload' is set

      if (listPayload === undefined || listPayload === null) {
        throw new Error("Missing the required parameter 'listPayload' when calling listsPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ContactsList["default"];
      return this.apiClient.callApi('/lists', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ListsApi;
}();

exports["default"] = ListsApi;