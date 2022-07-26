"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FileInfo = _interopRequireDefault(require("../model/FileInfo"));

var _FilePayload = _interopRequireDefault(require("../model/FilePayload"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Files service.
* @module api/FilesApi
* @version 4.0.20
*/
var FilesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new FilesApi. 
  * @alias module:api/FilesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function FilesApi(apiClient) {
    _classCallCheck(this, FilesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the filesByNameDelete operation.
   * @callback module:api/FilesApi~filesByNameDeleteCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete File
   * Permanently deletes the file from your Account. Required Access Level: ModifyFiles
   * @param {String} name Name of your file including extension.
   * @param {module:api/FilesApi~filesByNameDeleteCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(FilesApi, [{
    key: "filesByNameDelete",
    value: function filesByNameDelete(name, callback) {
      var postBody = null; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling filesByNameDelete");
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
      return this.apiClient.callApi('/files/{name}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the filesByNameGet operation.
     * @callback module:api/FilesApi~filesByNameGetCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Download File
     * Gets content of the specified File. Required Access Level: ViewFiles
     * @param {String} name Name of your file including extension.
     * @param {module:api/FilesApi~filesByNameGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */

  }, {
    key: "filesByNameGet",
    value: function filesByNameGet(name, callback) {
      var postBody = null; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling filesByNameGet");
      }

      var pathParams = {
        'name': name
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = [];
      var accepts = ['application/_*'];
      var returnType = File;
      return this.apiClient.callApi('/files/{name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the filesByNameInfoGet operation.
     * @callback module:api/FilesApi~filesByNameInfoGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FileInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Load File Details
     * Returns the specified File's details. Required Access Level: ViewFiles
     * @param {String} name Name of your file including extension.
     * @param {module:api/FilesApi~filesByNameInfoGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FileInfo}
     */

  }, {
    key: "filesByNameInfoGet",
    value: function filesByNameInfoGet(name, callback) {
      var postBody = null; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling filesByNameInfoGet");
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
      var returnType = _FileInfo["default"];
      return this.apiClient.callApi('/files/{name}/info', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the filesGet operation.
     * @callback module:api/FilesApi~filesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FileInfo>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Files
     * Returns a list of all your available files. Required Access Level: ViewFiles
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Maximum number of returned items.
     * @param {Number} opts.offset How many items should be returned ahead.
     * @param {module:api/FilesApi~filesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/FileInfo>}
     */

  }, {
    key: "filesGet",
    value: function filesGet(opts, callback) {
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
      var returnType = [_FileInfo["default"]];
      return this.apiClient.callApi('/files', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the filesPost operation.
     * @callback module:api/FilesApi~filesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FileInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload File
     * Uploads selected file to the server. Required Access Level: ModifyFiles
     * @param {module:model/FilePayload} filePayload 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.expiresAfterDays After how many days should the file be deleted.
     * @param {module:api/FilesApi~filesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FileInfo}
     */

  }, {
    key: "filesPost",
    value: function filesPost(filePayload, opts, callback) {
      opts = opts || {};
      var postBody = filePayload; // verify the required parameter 'filePayload' is set

      if (filePayload === undefined || filePayload === null) {
        throw new Error("Missing the required parameter 'filePayload' when calling filesPost");
      }

      var pathParams = {};
      var queryParams = {
        'expiresAfterDays': opts['expiresAfterDays']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _FileInfo["default"];
      return this.apiClient.callApi('/files', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return FilesApi;
}();

exports["default"] = FilesApi;