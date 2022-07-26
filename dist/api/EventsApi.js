"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CompressionFormat = _interopRequireDefault(require("../model/CompressionFormat"));

var _EventType = _interopRequireDefault(require("../model/EventType"));

var _EventsOrderBy = _interopRequireDefault(require("../model/EventsOrderBy"));

var _ExportFileFormats = _interopRequireDefault(require("../model/ExportFileFormats"));

var _ExportLink = _interopRequireDefault(require("../model/ExportLink"));

var _ExportStatus = _interopRequireDefault(require("../model/ExportStatus"));

var _RecipientEvent = _interopRequireDefault(require("../model/RecipientEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Events service.
* @module api/EventsApi
* @version 4.0.20
*/
var EventsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new EventsApi. 
  * @alias module:api/EventsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function EventsApi(apiClient) {
    _classCallCheck(this, EventsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the eventsByTransactionidGet operation.
   * @callback module:api/EventsApi~eventsByTransactionidGetCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:model/RecipientEvent>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Load Email Events
   * Returns a log of delivery events for the specific transaction ID. Required Access Level: ViewReports
   * @param {String} transactionid ID number of transaction
   * @param {Object} opts Optional parameters
   * @param {Date} opts.from Starting date for search in YYYY-MM-DDThh:mm:ss format.
   * @param {Date} opts.to Ending date for search in YYYY-MM-DDThh:mm:ss format.
   * @param {module:model/EventsOrderBy} opts.orderBy 
   * @param {Number} opts.limit Maximum number of returned items.
   * @param {Number} opts.offset How many items should be returned ahead.
   * @param {module:api/EventsApi~eventsByTransactionidGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<module:model/RecipientEvent>}
   */


  _createClass(EventsApi, [{
    key: "eventsByTransactionidGet",
    value: function eventsByTransactionidGet(transactionid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'transactionid' is set

      if (transactionid === undefined || transactionid === null) {
        throw new Error("Missing the required parameter 'transactionid' when calling eventsByTransactionidGet");
      }

      var pathParams = {
        'transactionid': transactionid
      };
      var queryParams = {
        'from': opts['from'],
        'to': opts['to'],
        'orderBy': opts['orderBy'],
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_RecipientEvent["default"]];
      return this.apiClient.callApi('/events/{transactionid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the eventsChannelsByNameExportPost operation.
     * @callback module:api/EventsApi~eventsChannelsByNameExportPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExportLink} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Export Channel Events
     * Export delivery events log information to the specified file format. Required Access Level: Export
     * @param {String} name Name of selected channel.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/EventType>} opts.eventTypes Types of Events to return
     * @param {Date} opts.from Starting date for search in YYYY-MM-DDThh:mm:ss format.
     * @param {Date} opts.to Ending date for search in YYYY-MM-DDThh:mm:ss format.
     * @param {module:model/ExportFileFormats} opts.fileFormat Format of the exported file
     * @param {module:model/CompressionFormat} opts.compressionFormat FileResponse compression format. None or Zip.
     * @param {String} opts.fileName Name of your file including extension.
     * @param {module:api/EventsApi~eventsChannelsByNameExportPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExportLink}
     */

  }, {
    key: "eventsChannelsByNameExportPost",
    value: function eventsChannelsByNameExportPost(name, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling eventsChannelsByNameExportPost");
      }

      var pathParams = {
        'name': name
      };
      var queryParams = {
        'eventTypes': this.apiClient.buildCollectionParam(opts['eventTypes'], 'multi'),
        'from': opts['from'],
        'to': opts['to'],
        'fileFormat': opts['fileFormat'],
        'compressionFormat': opts['compressionFormat'],
        'fileName': opts['fileName']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ExportLink["default"];
      return this.apiClient.callApi('/events/channels/{name}/export', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the eventsChannelsByNameGet operation.
     * @callback module:api/EventsApi~eventsChannelsByNameGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/RecipientEvent>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Load Channel Events
     * Returns a log of delivery events filtered by specified parameters. Required Access Level: ViewReports
     * @param {String} name Name of selected channel.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/EventType>} opts.eventTypes Types of Events to return
     * @param {Date} opts.from Starting date for search in YYYY-MM-DDThh:mm:ss format.
     * @param {Date} opts.to Ending date for search in YYYY-MM-DDThh:mm:ss format.
     * @param {module:model/EventsOrderBy} opts.orderBy 
     * @param {Number} opts.limit How many items to load. Maximum for this request is 1000 items
     * @param {Number} opts.offset How many items should be returned ahead.
     * @param {module:api/EventsApi~eventsChannelsByNameGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/RecipientEvent>}
     */

  }, {
    key: "eventsChannelsByNameGet",
    value: function eventsChannelsByNameGet(name, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling eventsChannelsByNameGet");
      }

      var pathParams = {
        'name': name
      };
      var queryParams = {
        'eventTypes': this.apiClient.buildCollectionParam(opts['eventTypes'], 'multi'),
        'from': opts['from'],
        'to': opts['to'],
        'orderBy': opts['orderBy'],
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_RecipientEvent["default"]];
      return this.apiClient.callApi('/events/channels/{name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the eventsChannelsExportByIdStatusGet operation.
     * @callback module:api/EventsApi~eventsChannelsExportByIdStatusGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExportStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check Channel Export Status
     * Check the current status of the channel export. Required Access Level: Export
     * @param {String} id ID of the exported file
     * @param {module:api/EventsApi~eventsChannelsExportByIdStatusGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExportStatus}
     */

  }, {
    key: "eventsChannelsExportByIdStatusGet",
    value: function eventsChannelsExportByIdStatusGet(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling eventsChannelsExportByIdStatusGet");
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
      return this.apiClient.callApi('/events/channels/export/{id}/status', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the eventsExportByIdStatusGet operation.
     * @callback module:api/EventsApi~eventsExportByIdStatusGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExportStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check Export Status
     * Check the current status of the export. Required Access Level: Export
     * @param {String} id ID of the exported file
     * @param {module:api/EventsApi~eventsExportByIdStatusGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExportStatus}
     */

  }, {
    key: "eventsExportByIdStatusGet",
    value: function eventsExportByIdStatusGet(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling eventsExportByIdStatusGet");
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
      return this.apiClient.callApi('/events/export/{id}/status', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the eventsExportPost operation.
     * @callback module:api/EventsApi~eventsExportPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExportLink} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Export Events
     * Export delivery events log information to the specified file format. Required Access Level: Export
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/EventType>} opts.eventTypes Types of Events to return
     * @param {Date} opts.from Starting date for search in YYYY-MM-DDThh:mm:ss format.
     * @param {Date} opts.to Ending date for search in YYYY-MM-DDThh:mm:ss format.
     * @param {module:model/ExportFileFormats} opts.fileFormat Format of the exported file
     * @param {module:model/CompressionFormat} opts.compressionFormat FileResponse compression format. None or Zip.
     * @param {String} opts.fileName Name of your file including extension.
     * @param {module:api/EventsApi~eventsExportPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExportLink}
     */

  }, {
    key: "eventsExportPost",
    value: function eventsExportPost(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'eventTypes': this.apiClient.buildCollectionParam(opts['eventTypes'], 'multi'),
        'from': opts['from'],
        'to': opts['to'],
        'fileFormat': opts['fileFormat'],
        'compressionFormat': opts['compressionFormat'],
        'fileName': opts['fileName']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ExportLink["default"];
      return this.apiClient.callApi('/events/export', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the eventsGet operation.
     * @callback module:api/EventsApi~eventsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/RecipientEvent>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Load Events
     * Returns a log of delivery events filtered by specified parameters. Required Access Level: ViewReports
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/EventType>} opts.eventTypes Types of Events to return
     * @param {Date} opts.from Starting date for search in YYYY-MM-DDThh:mm:ss format.
     * @param {Date} opts.to Ending date for search in YYYY-MM-DDThh:mm:ss format.
     * @param {module:model/EventsOrderBy} opts.orderBy 
     * @param {Number} opts.limit How many items to load. Maximum for this request is 1000 items
     * @param {Number} opts.offset How many items should be returned ahead.
     * @param {module:api/EventsApi~eventsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/RecipientEvent>}
     */

  }, {
    key: "eventsGet",
    value: function eventsGet(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'eventTypes': this.apiClient.buildCollectionParam(opts['eventTypes'], 'multi'),
        'from': opts['from'],
        'to': opts['to'],
        'orderBy': opts['orderBy'],
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_RecipientEvent["default"]];
      return this.apiClient.callApi('/events', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return EventsApi;
}();

exports["default"] = EventsApi;