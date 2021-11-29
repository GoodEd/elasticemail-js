/**
 * Elastic Email REST API
 * This API is based on the REST API architecture, allowing the user to easily manage their data with this resource-based approach.    Every API call is established on which specific request type (GET, POST, PUT, DELETE) will be used.    The API has a limit of 20 concurrent connections and a hard timeout of 600 seconds per request.    To start using this API, you will need your Access Token (available <a target=\"_blank\" href=\"https://elasticemail.com/account#/settings/new/manage-api\">here</a>). Remember to keep it safe. Required access levels are listed in the given request’s description.    This is the documentation for REST API. If you’d like to read our legacy documentation regarding Web API v2 click <a target=\"_blank\" href=\"https://api.elasticemail.com/public/help\">here</a>.    Downloadable library clients can be found in our Github repository <a target=\"_blank\" href=\"https://github.com/ElasticEmail?tab=repositories&q=%22rest+api%22+in%3Areadme\">here</a>
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
import SubAccountInfo from '../model/SubAccountInfo';
import SubaccountEmailCreditsPayload from '../model/SubaccountEmailCreditsPayload';
import SubaccountEmailSettings from '../model/SubaccountEmailSettings';
import SubaccountPayload from '../model/SubaccountPayload';

/**
* SubAccounts service.
* @module api/SubAccountsApi
* @version 4.0.17
*/
export default class SubAccountsApi {

    /**
    * Constructs a new SubAccountsApi. 
    * @alias module:api/SubAccountsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the subaccountsByEmailCreditsPatch operation.
     * @callback module:api/SubAccountsApi~subaccountsByEmailCreditsPatchCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add, Subtract Email Credits
     * Update email credits of a subaccount by the given amount. Required Access Level: ModifySubAccounts
     * @param {String} email Email address of Sub-Account
     * @param {module:model/SubaccountEmailCreditsPayload} subaccountEmailCreditsPayload Amount of email credits to add or subtract from the current SubAccount email credits pool (positive or negative value)
     * @param {module:api/SubAccountsApi~subaccountsByEmailCreditsPatchCallback} callback The callback function, accepting three arguments: error, data, response
     */
    subaccountsByEmailCreditsPatch(email, subaccountEmailCreditsPayload, callback) {
      let postBody = subaccountEmailCreditsPayload;
      // verify the required parameter 'email' is set
      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling subaccountsByEmailCreditsPatch");
      }
      // verify the required parameter 'subaccountEmailCreditsPayload' is set
      if (subaccountEmailCreditsPayload === undefined || subaccountEmailCreditsPayload === null) {
        throw new Error("Missing the required parameter 'subaccountEmailCreditsPayload' when calling subaccountsByEmailCreditsPatch");
      }

      let pathParams = {
        'email': email
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apikey'];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/subaccounts/{email}/credits', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the subaccountsByEmailDelete operation.
     * @callback module:api/SubAccountsApi~subaccountsByEmailDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete SubAccount
     * Deletes specified SubAccount. An email will be sent to confirm this change. Required Access Level: ModifySubAccounts
     * @param {String} email Email address of Sub-Account
     * @param {module:api/SubAccountsApi~subaccountsByEmailDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    subaccountsByEmailDelete(email, callback) {
      let postBody = null;
      // verify the required parameter 'email' is set
      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling subaccountsByEmailDelete");
      }

      let pathParams = {
        'email': email
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
        '/subaccounts/{email}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the subaccountsByEmailGet operation.
     * @callback module:api/SubAccountsApi~subaccountsByEmailGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SubAccountInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Load SubAccount
     * Returns details for the specified SubAccount. Required Access Level: ViewSubAccounts
     * @param {String} email Email address of Sub-Account
     * @param {module:api/SubAccountsApi~subaccountsByEmailGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SubAccountInfo}
     */
    subaccountsByEmailGet(email, callback) {
      let postBody = null;
      // verify the required parameter 'email' is set
      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling subaccountsByEmailGet");
      }

      let pathParams = {
        'email': email
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
      let returnType = SubAccountInfo;
      return this.apiClient.callApi(
        '/subaccounts/{email}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the subaccountsByEmailSettingsEmailPut operation.
     * @callback module:api/SubAccountsApi~subaccountsByEmailSettingsEmailPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SubaccountEmailSettings} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update SubAccount Email Settings
     * Update SubAccount email settings. Required Access Level: ModifySubAccounts
     * @param {String} email 
     * @param {module:model/SubaccountEmailSettings} subaccountEmailSettings Updated Email Settings
     * @param {module:api/SubAccountsApi~subaccountsByEmailSettingsEmailPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SubaccountEmailSettings}
     */
    subaccountsByEmailSettingsEmailPut(email, subaccountEmailSettings, callback) {
      let postBody = subaccountEmailSettings;
      // verify the required parameter 'email' is set
      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling subaccountsByEmailSettingsEmailPut");
      }
      // verify the required parameter 'subaccountEmailSettings' is set
      if (subaccountEmailSettings === undefined || subaccountEmailSettings === null) {
        throw new Error("Missing the required parameter 'subaccountEmailSettings' when calling subaccountsByEmailSettingsEmailPut");
      }

      let pathParams = {
        'email': email
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
      let returnType = SubaccountEmailSettings;
      return this.apiClient.callApi(
        '/subaccounts/{email}/settings/email', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the subaccountsGet operation.
     * @callback module:api/SubAccountsApi~subaccountsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SubAccountInfo>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Load SubAccounts
     * Returns a list of all your SubAccounts. Required Access Level: ViewSubAccounts
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Maximum number of returned items.
     * @param {Number} opts.offset How many items should be returned ahead.
     * @param {module:api/SubAccountsApi~subaccountsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SubAccountInfo>}
     */
    subaccountsGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apikey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [SubAccountInfo];
      return this.apiClient.callApi(
        '/subaccounts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the subaccountsPost operation.
     * @callback module:api/SubAccountsApi~subaccountsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SubAccountInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add SubAccount
     * Add a new SubAccount to your Account. To receive an access token for this SubAccount, make a POST security/apikeys request using the 'subaccount' parameter. Required Access Level: ModifySubAccounts
     * @param {module:model/SubaccountPayload} subaccountPayload 
     * @param {module:api/SubAccountsApi~subaccountsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SubAccountInfo}
     */
    subaccountsPost(subaccountPayload, callback) {
      let postBody = subaccountPayload;
      // verify the required parameter 'subaccountPayload' is set
      if (subaccountPayload === undefined || subaccountPayload === null) {
        throw new Error("Missing the required parameter 'subaccountPayload' when calling subaccountsPost");
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
      let returnType = SubAccountInfo;
      return this.apiClient.callApi(
        '/subaccounts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
