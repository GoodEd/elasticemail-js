"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Template = _interopRequireDefault(require("../model/Template"));

var _TemplatePayload = _interopRequireDefault(require("../model/TemplatePayload"));

var _TemplateScope = _interopRequireDefault(require("../model/TemplateScope"));

var _TemplateType = _interopRequireDefault(require("../model/TemplateType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Templates service.
* @module api/TemplatesApi
* @version 4.0.20
*/
var TemplatesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TemplatesApi. 
  * @alias module:api/TemplatesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TemplatesApi(apiClient) {
    _classCallCheck(this, TemplatesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the templatesByNameDelete operation.
   * @callback module:api/TemplatesApi~templatesByNameDeleteCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete Template
   * Delete template with the specified name. Required Access Level: ModifyTemplates
   * @param {String} name Name of template.
   * @param {module:api/TemplatesApi~templatesByNameDeleteCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(TemplatesApi, [{
    key: "templatesByNameDelete",
    value: function templatesByNameDelete(name, callback) {
      var postBody = null; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling templatesByNameDelete");
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
      return this.apiClient.callApi('/templates/{name}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the templatesByNameGet operation.
     * @callback module:api/TemplatesApi~templatesByNameGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Template} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Load Template
     * Load detailed information of the specified template. Required Access Level: ViewTemplates
     * @param {String} name Name of template.
     * @param {module:api/TemplatesApi~templatesByNameGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Template}
     */

  }, {
    key: "templatesByNameGet",
    value: function templatesByNameGet(name, callback) {
      var postBody = null; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling templatesByNameGet");
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
      var returnType = _Template["default"];
      return this.apiClient.callApi('/templates/{name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the templatesByNamePut operation.
     * @callback module:api/TemplatesApi~templatesByNamePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Template} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Template
     * Update existing template, overwriting existing data. Required Access Level: ModifyTemplates
     * @param {String} name Name of template.
     * @param {module:model/TemplatePayload} templatePayload 
     * @param {module:api/TemplatesApi~templatesByNamePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Template}
     */

  }, {
    key: "templatesByNamePut",
    value: function templatesByNamePut(name, templatePayload, callback) {
      var postBody = templatePayload; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling templatesByNamePut");
      } // verify the required parameter 'templatePayload' is set


      if (templatePayload === undefined || templatePayload === null) {
        throw new Error("Missing the required parameter 'templatePayload' when calling templatesByNamePut");
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
      var returnType = _Template["default"];
      return this.apiClient.callApi('/templates/{name}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the templatesGet operation.
     * @callback module:api/TemplatesApi~templatesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Template>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Load Templates
     * Returns a list of templates for the specified type. Required Access Level: ViewTemplates
     * @param {Array.<module:model/TemplateScope>} scopeType Return templates with specified scope only
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/TemplateType>} opts.templateTypes Return templates with specified type only
     * @param {Number} opts.limit Maximum number of returned items.
     * @param {Number} opts.offset How many items should be returned ahead.
     * @param {module:api/TemplatesApi~templatesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Template>}
     */

  }, {
    key: "templatesGet",
    value: function templatesGet(scopeType, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'scopeType' is set

      if (scopeType === undefined || scopeType === null) {
        throw new Error("Missing the required parameter 'scopeType' when calling templatesGet");
      }

      var pathParams = {};
      var queryParams = {
        'scopeType': this.apiClient.buildCollectionParam(scopeType, 'multi'),
        'templateTypes': this.apiClient.buildCollectionParam(opts['templateTypes'], 'multi'),
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Template["default"]];
      return this.apiClient.callApi('/templates', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the templatesPost operation.
     * @callback module:api/TemplatesApi~templatesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Template} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add Template
     * Add a new Template. Required Access Level: ModifyTemplates
     * @param {module:model/TemplatePayload} templatePayload 
     * @param {module:api/TemplatesApi~templatesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Template}
     */

  }, {
    key: "templatesPost",
    value: function templatesPost(templatePayload, callback) {
      var postBody = templatePayload; // verify the required parameter 'templatePayload' is set

      if (templatePayload === undefined || templatePayload === null) {
        throw new Error("Missing the required parameter 'templatePayload' when calling templatesPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Template["default"];
      return this.apiClient.callApi('/templates', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return TemplatesApi;
}();

exports["default"] = TemplatesApi;