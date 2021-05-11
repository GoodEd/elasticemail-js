/**
 * Elastic Email REST API
 * This API is based on the REST API architecture, allowing the user to easily manage their data with this resource-based approach.    Every API call is established on which specific request type (GET, POST, PUT, DELETE) will be used.    To start using this API, you will need your Access Token (available <a target=\"_blank\" href=\"https://elasticemail.com/account#/settings/new/manage-api\">here</a>). Remember to keep it safe. Required access levels are listed in the given request’s description.    This is the documentation for REST API. If you’d like to read our legacy documentation regarding Web API v2 click <a target=\"_blank\" href=\"https://api.elasticemail.com/public/help\">here</a>.    Downloadable library clients can be found in our Github repository <a target=\"_blank\" href=\"https://github.com/ElasticEmail?tab=repositories&q=%22rest+api%22+in%3Areadme\">here</a>
 *
 * The version of the OpenAPI document: 4.0.0
 * Contact: support@elasticemail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import InboundPayload from '../model/InboundPayload';
import InboundRoute from '../model/InboundRoute';
import SortOrderItem from '../model/SortOrderItem';

/**
* InboundRoute service.
* @module api/InboundRouteApi
* @version 4.0.0
*/
export default class InboundRouteApi {

    /**
    * Constructs a new InboundRouteApi. 
    * @alias module:api/InboundRouteApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the inboundrouteByIdDelete operation.
     * @callback module:api/InboundRouteApi~inboundrouteByIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Route
     * Deletes the Inbound Route. Required Access Level: ModifySettings
     * @param {String} id 
     * @param {module:api/InboundRouteApi~inboundrouteByIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    inboundrouteByIdDelete(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling inboundrouteByIdDelete");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apikey'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/inboundroute/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the inboundrouteByIdGet operation.
     * @callback module:api/InboundRouteApi~inboundrouteByIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InboundRoute} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Route
     * Load an Inbound Route. Required Access Level: ViewSettings
     * @param {String} id ID number of your attachment
     * @param {module:api/InboundRouteApi~inboundrouteByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InboundRoute}
     */
    inboundrouteByIdGet(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling inboundrouteByIdGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apikey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InboundRoute;
      return this.apiClient.callApi(
        '/inboundroute/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the inboundrouteByIdPut operation.
     * @callback module:api/InboundRouteApi~inboundrouteByIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InboundRoute} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Route
     * Update the Inbound Route. Required Access Level: ModifySettings
     * @param {String} id 
     * @param {module:model/InboundPayload} inboundPayload 
     * @param {module:api/InboundRouteApi~inboundrouteByIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InboundRoute}
     */
    inboundrouteByIdPut(id, inboundPayload, callback) {
      let postBody = inboundPayload;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling inboundrouteByIdPut");
      }
      // verify the required parameter 'inboundPayload' is set
      if (inboundPayload === undefined || inboundPayload === null) {
        throw new Error("Missing the required parameter 'inboundPayload' when calling inboundrouteByIdPut");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apikey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InboundRoute;
      return this.apiClient.callApi(
        '/inboundroute/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the inboundrouteGet operation.
     * @callback module:api/InboundRouteApi~inboundrouteGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InboundRoute>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Routes
     * Get all your Inbound Routes. Required Access Level: ViewSettings
     * @param {module:api/InboundRouteApi~inboundrouteGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InboundRoute>}
     */
    inboundrouteGet(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apikey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [InboundRoute];
      return this.apiClient.callApi(
        '/inboundroute', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the inboundrouteOrderPut operation.
     * @callback module:api/InboundRouteApi~inboundrouteOrderPutCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InboundRoute>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Sorting
     * Required Access Level: ViewSettings
     * @param {Array.<module:model/SortOrderItem>} sortOrderItem Change the ordering of inbound routes for when matching the inbound
     * @param {module:api/InboundRouteApi~inboundrouteOrderPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InboundRoute>}
     */
    inboundrouteOrderPut(sortOrderItem, callback) {
      let postBody = sortOrderItem;
      // verify the required parameter 'sortOrderItem' is set
      if (sortOrderItem === undefined || sortOrderItem === null) {
        throw new Error("Missing the required parameter 'sortOrderItem' when calling inboundrouteOrderPut");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apikey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [InboundRoute];
      return this.apiClient.callApi(
        '/inboundroute/order', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the inboundroutePost operation.
     * @callback module:api/InboundRouteApi~inboundroutePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InboundRoute} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Route
     * Create new Inbound Route. Required Access Level: ModifySettings
     * @param {module:model/InboundPayload} inboundPayload 
     * @param {module:api/InboundRouteApi~inboundroutePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InboundRoute}
     */
    inboundroutePost(inboundPayload, callback) {
      let postBody = inboundPayload;
      // verify the required parameter 'inboundPayload' is set
      if (inboundPayload === undefined || inboundPayload === null) {
        throw new Error("Missing the required parameter 'inboundPayload' when calling inboundroutePost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apikey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InboundRoute;
      return this.apiClient.callApi(
        '/inboundroute', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
