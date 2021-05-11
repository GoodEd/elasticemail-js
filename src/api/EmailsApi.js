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
import EmailData from '../model/EmailData';
import EmailMessageData from '../model/EmailMessageData';
import EmailSend from '../model/EmailSend';
import EmailTransactionalMessageData from '../model/EmailTransactionalMessageData';
import MergeEmailPayload from '../model/MergeEmailPayload';

/**
* Emails service.
* @module api/EmailsApi
* @version 4.0.0
*/
export default class EmailsApi {

    /**
    * Constructs a new EmailsApi. 
    * @alias module:api/EmailsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the emailsByMsgidViewGet operation.
     * @callback module:api/EmailsApi~emailsByMsgidViewGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmailData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View Email
     * Returns email details for viewing or rendering. Required Access Level: None
     * @param {String} msgid Message identifier
     * @param {module:api/EmailsApi~emailsByMsgidViewGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmailData}
     */
    emailsByMsgidViewGet(msgid, callback) {
      let postBody = null;
      // verify the required parameter 'msgid' is set
      if (msgid === undefined || msgid === null) {
        throw new Error("Missing the required parameter 'msgid' when calling emailsByMsgidViewGet");
      }

      let pathParams = {
        'msgid': msgid
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
      let returnType = EmailData;
      return this.apiClient.callApi(
        '/emails/{msgid}/view', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the emailsMergefilePost operation.
     * @callback module:api/EmailsApi~emailsMergefilePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmailSend} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send Bulk Emails CSV
     * Send bulk merge email. Required Access Level: SendHttp
     * @param {module:model/MergeEmailPayload} mergeEmailPayload Email data
     * @param {module:api/EmailsApi~emailsMergefilePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmailSend}
     */
    emailsMergefilePost(mergeEmailPayload, callback) {
      let postBody = mergeEmailPayload;
      // verify the required parameter 'mergeEmailPayload' is set
      if (mergeEmailPayload === undefined || mergeEmailPayload === null) {
        throw new Error("Missing the required parameter 'mergeEmailPayload' when calling emailsMergefilePost");
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
      let returnType = EmailSend;
      return this.apiClient.callApi(
        '/emails/mergefile', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the emailsPost operation.
     * @callback module:api/EmailsApi~emailsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmailSend} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send Bulk Emails
     * Send bulk merge email. Required Access Level: SendHttp
     * @param {module:model/EmailMessageData} emailMessageData Email data
     * @param {module:api/EmailsApi~emailsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmailSend}
     */
    emailsPost(emailMessageData, callback) {
      let postBody = emailMessageData;
      // verify the required parameter 'emailMessageData' is set
      if (emailMessageData === undefined || emailMessageData === null) {
        throw new Error("Missing the required parameter 'emailMessageData' when calling emailsPost");
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
      let returnType = EmailSend;
      return this.apiClient.callApi(
        '/emails', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the emailsTransactionalPost operation.
     * @callback module:api/EmailsApi~emailsTransactionalPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmailSend} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send Transactional Email
     * Send transactional emails (recipients will be known to each other). Required Access Level: SendHttp
     * @param {module:model/EmailTransactionalMessageData} emailTransactionalMessageData Email data
     * @param {module:api/EmailsApi~emailsTransactionalPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmailSend}
     */
    emailsTransactionalPost(emailTransactionalMessageData, callback) {
      let postBody = emailTransactionalMessageData;
      // verify the required parameter 'emailTransactionalMessageData' is set
      if (emailTransactionalMessageData === undefined || emailTransactionalMessageData === null) {
        throw new Error("Missing the required parameter 'emailTransactionalMessageData' when calling emailsTransactionalPost");
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
      let returnType = EmailSend;
      return this.apiClient.callApi(
        '/emails/transactional', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
