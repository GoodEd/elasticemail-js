"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ChannelLogStatusSummary = _interopRequireDefault(require("../model/ChannelLogStatusSummary"));

var _LogStatusSummary = _interopRequireDefault(require("../model/LogStatusSummary"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Statistics service.
* @module api/StatisticsApi
* @version 4.0.20
*/
var StatisticsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new StatisticsApi. 
  * @alias module:api/StatisticsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function StatisticsApi(apiClient) {
    _classCallCheck(this, StatisticsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the statisticsCampaignsByNameGet operation.
   * @callback module:api/StatisticsApi~statisticsCampaignsByNameGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ChannelLogStatusSummary} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Load Campaign Stats
   * Retrieve stats of an existing campaign. Required Access Level: ViewChannels
   * @param {String} name The name of the campaign to get.
   * @param {module:api/StatisticsApi~statisticsCampaignsByNameGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/ChannelLogStatusSummary}
   */


  _createClass(StatisticsApi, [{
    key: "statisticsCampaignsByNameGet",
    value: function statisticsCampaignsByNameGet(name, callback) {
      var postBody = null; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling statisticsCampaignsByNameGet");
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
      var returnType = _ChannelLogStatusSummary["default"];
      return this.apiClient.callApi('/statistics/campaigns/{name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the statisticsCampaignsGet operation.
     * @callback module:api/StatisticsApi~statisticsCampaignsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ChannelLogStatusSummary>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Load Campaigns Stats
     * Returns a list of your Campaigns' stats. Required Access Level: ViewChannels
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Maximum number of returned items.
     * @param {Number} opts.offset How many items should be returned ahead.
     * @param {module:api/StatisticsApi~statisticsCampaignsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ChannelLogStatusSummary>}
     */

  }, {
    key: "statisticsCampaignsGet",
    value: function statisticsCampaignsGet(opts, callback) {
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
      var returnType = [_ChannelLogStatusSummary["default"]];
      return this.apiClient.callApi('/statistics/campaigns', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the statisticsChannelsByNameGet operation.
     * @callback module:api/StatisticsApi~statisticsChannelsByNameGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ChannelLogStatusSummary} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Load Channel Stats
     * Retrieve an existing channel stats. Required Access Level: ViewChannels
     * @param {String} name The name of the channel to get.
     * @param {module:api/StatisticsApi~statisticsChannelsByNameGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ChannelLogStatusSummary}
     */

  }, {
    key: "statisticsChannelsByNameGet",
    value: function statisticsChannelsByNameGet(name, callback) {
      var postBody = null; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling statisticsChannelsByNameGet");
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
      var returnType = _ChannelLogStatusSummary["default"];
      return this.apiClient.callApi('/statistics/channels/{name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the statisticsChannelsGet operation.
     * @callback module:api/StatisticsApi~statisticsChannelsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ChannelLogStatusSummary>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Load Channels Stats
     * Returns a list of your Channels' stats. Required Access Level: ViewChannels
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Maximum number of returned items.
     * @param {Number} opts.offset How many items should be returned ahead.
     * @param {module:api/StatisticsApi~statisticsChannelsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ChannelLogStatusSummary>}
     */

  }, {
    key: "statisticsChannelsGet",
    value: function statisticsChannelsGet(opts, callback) {
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
      var returnType = [_ChannelLogStatusSummary["default"]];
      return this.apiClient.callApi('/statistics/channels', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the statisticsGet operation.
     * @callback module:api/StatisticsApi~statisticsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LogStatusSummary} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Load Statistics
     * Returns basic statistics. Required Access Level: ViewReports
     * @param {Date} from Starting date for search in YYYY-MM-DDThh:mm:ss format.
     * @param {Object} opts Optional parameters
     * @param {Date} opts.to Ending date for search in YYYY-MM-DDThh:mm:ss format.
     * @param {module:api/StatisticsApi~statisticsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LogStatusSummary}
     */

  }, {
    key: "statisticsGet",
    value: function statisticsGet(from, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'from' is set

      if (from === undefined || from === null) {
        throw new Error("Missing the required parameter 'from' when calling statisticsGet");
      }

      var pathParams = {};
      var queryParams = {
        'from': from,
        'to': opts['to']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LogStatusSummary["default"];
      return this.apiClient.callApi('/statistics', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return StatisticsApi;
}();

exports["default"] = StatisticsApi;