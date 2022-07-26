"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Campaign = _interopRequireDefault(require("../model/Campaign"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Campaigns service.
* @module api/CampaignsApi
* @version 4.0.20
*/
var CampaignsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new CampaignsApi. 
  * @alias module:api/CampaignsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function CampaignsApi(apiClient) {
    _classCallCheck(this, CampaignsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the campaignsByNameDelete operation.
   * @callback module:api/CampaignsApi~campaignsByNameDeleteCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete Campaign
   * Delete the specific campaign.  This does not cancel in progress email, see Cancel In Progress. Required Access Level: ModifyCampaigns
   * @param {String} name Name of Campaign to delete
   * @param {module:api/CampaignsApi~campaignsByNameDeleteCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(CampaignsApi, [{
    key: "campaignsByNameDelete",
    value: function campaignsByNameDelete(name, callback) {
      var postBody = null; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling campaignsByNameDelete");
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
      return this.apiClient.callApi('/campaigns/{name}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the campaignsByNameGet operation.
     * @callback module:api/CampaignsApi~campaignsByNameGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Campaign} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Load Campaign
     * Returns the specified campaign details. Required Access Level: ViewCampaigns
     * @param {String} name Name of Campaign to get
     * @param {module:api/CampaignsApi~campaignsByNameGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Campaign}
     */

  }, {
    key: "campaignsByNameGet",
    value: function campaignsByNameGet(name, callback) {
      var postBody = null; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling campaignsByNameGet");
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
      var returnType = _Campaign["default"];
      return this.apiClient.callApi('/campaigns/{name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the campaignsByNamePut operation.
     * @callback module:api/CampaignsApi~campaignsByNamePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Campaign} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Campaign
     * Updates a previously added campaign.  Only Active and Paused campaigns can be updated. Required Access Level: ModifyCampaigns
     * @param {String} name Name of Campaign to update
     * @param {module:model/Campaign} campaign JSON representation of a campaign
     * @param {module:api/CampaignsApi~campaignsByNamePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Campaign}
     */

  }, {
    key: "campaignsByNamePut",
    value: function campaignsByNamePut(name, campaign, callback) {
      var postBody = campaign; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling campaignsByNamePut");
      } // verify the required parameter 'campaign' is set


      if (campaign === undefined || campaign === null) {
        throw new Error("Missing the required parameter 'campaign' when calling campaignsByNamePut");
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
      var returnType = _Campaign["default"];
      return this.apiClient.callApi('/campaigns/{name}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the campaignsGet operation.
     * @callback module:api/CampaignsApi~campaignsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Campaign>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Load Campaigns
     * Returns a list all of your campaigns. Limited to 1000 results. Required Access Level: ViewCampaigns
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Text fragment used for searching in Campaign name (using the 'contains' rule)
     * @param {Number} opts.offset How many items should be returned ahead.
     * @param {Number} opts.limit Maximum number of returned items.
     * @param {module:api/CampaignsApi~campaignsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Campaign>}
     */

  }, {
    key: "campaignsGet",
    value: function campaignsGet(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'search': opts['search'],
        'offset': opts['offset'],
        'limit': opts['limit']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Campaign["default"]];
      return this.apiClient.callApi('/campaigns', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the campaignsPost operation.
     * @callback module:api/CampaignsApi~campaignsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Campaign} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add Campaign
     * Add a campaign for processing. Required Access Level: ModifyCampaigns
     * @param {module:model/Campaign} campaign JSON representation of a campaign
     * @param {module:api/CampaignsApi~campaignsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Campaign}
     */

  }, {
    key: "campaignsPost",
    value: function campaignsPost(campaign, callback) {
      var postBody = campaign; // verify the required parameter 'campaign' is set

      if (campaign === undefined || campaign === null) {
        throw new Error("Missing the required parameter 'campaign' when calling campaignsPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apikey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Campaign["default"];
      return this.apiClient.callApi('/campaigns', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return CampaignsApi;
}();

exports["default"] = CampaignsApi;