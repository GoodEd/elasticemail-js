"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Segment = _interopRequireDefault(require("../model/Segment"));

var _SegmentPayload = _interopRequireDefault(require("../model/SegmentPayload"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Segments service.
* @module api/SegmentsApi
* @version 4.0.20
*/
var SegmentsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new SegmentsApi. 
  * @alias module:api/SegmentsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SegmentsApi(apiClient) {
    _classCallCheck(this, SegmentsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the segmentsByNameDelete operation.
   * @callback module:api/SegmentsApi~segmentsByNameDeleteCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete Segment
   * Delete an existing segment. Required Access Level: ModifyContacts
   * @param {String} name Name of your segment.
   * @param {module:api/SegmentsApi~segmentsByNameDeleteCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(SegmentsApi, [{
    key: "segmentsByNameDelete",
    value: function segmentsByNameDelete(name, callback) {
      var postBody = null; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling segmentsByNameDelete");
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
      return this.apiClient.callApi('/segments/{name}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the segmentsByNameGet operation.
     * @callback module:api/SegmentsApi~segmentsByNameGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Segment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Load Segment
     * Returns details for the specified segment. Required Access Level: ViewContacts
     * @param {String} name Name of the segment you want to load. Will load all contacts if the 'All Contacts' name has been provided
     * @param {module:api/SegmentsApi~segmentsByNameGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Segment}
     */

  }, {
    key: "segmentsByNameGet",
    value: function segmentsByNameGet(name, callback) {
      var postBody = null; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling segmentsByNameGet");
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
      var returnType = _Segment["default"];
      return this.apiClient.callApi('/segments/{name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the segmentsByNamePut operation.
     * @callback module:api/SegmentsApi~segmentsByNamePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Segment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Segment
     * Rename or change RULE for your segment. Required Access Level: ModifyContacts
     * @param {String} name Name of your segment.
     * @param {module:model/SegmentPayload} segmentPayload 
     * @param {module:api/SegmentsApi~segmentsByNamePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Segment}
     */

  }, {
    key: "segmentsByNamePut",
    value: function segmentsByNamePut(name, segmentPayload, callback) {
      var postBody = segmentPayload; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling segmentsByNamePut");
      } // verify the required parameter 'segmentPayload' is set


      if (segmentPayload === undefined || segmentPayload === null) {
        throw new Error("Missing the required parameter 'segmentPayload' when calling segmentsByNamePut");
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
      var returnType = _Segment["default"];
      return this.apiClient.callApi('/segments/{name}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the segmentsGet operation.
     * @callback module:api/SegmentsApi~segmentsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Segment>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Load Segments
     * Returns a list of all your available Segments. Required Access Level: ViewContacts
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Maximum number of returned items.
     * @param {Number} opts.offset How many items should be returned ahead.
     * @param {module:api/SegmentsApi~segmentsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Segment>}
     */

  }, {
    key: "segmentsGet",
    value: function segmentsGet(opts, callback) {
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
      var returnType = [_Segment["default"]];
      return this.apiClient.callApi('/segments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the segmentsPost operation.
     * @callback module:api/SegmentsApi~segmentsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Segment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add Segment
     * Add a new segment, based on specified RULE. Required Access Level: ModifyContacts
     * @param {module:model/SegmentPayload} segmentPayload 
     * @param {module:api/SegmentsApi~segmentsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Segment}
     */

  }, {
    key: "segmentsPost",
    value: function segmentsPost(segmentPayload, callback) {
      var postBody = segmentPayload; // verify the required parameter 'segmentPayload' is set

      if (segmentPayload === undefined || segmentPayload === null) {
        throw new Error("Missing the required parameter 'segmentPayload' when calling segmentsPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Segment["default"];
      return this.apiClient.callApi('/segments', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return SegmentsApi;
}();

exports["default"] = SegmentsApi;