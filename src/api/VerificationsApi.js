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
import EmailValidationResult from '../model/EmailValidationResult';
import VerificationFileResult from '../model/VerificationFileResult';
import VerificationFileResultDetails from '../model/VerificationFileResultDetails';

/**
* Verifications service.
* @module api/VerificationsApi
* @version 4.0.16
*/
export default class VerificationsApi {

    /**
    * Constructs a new VerificationsApi. 
    * @alias module:api/VerificationsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the verificationsByEmailDelete operation.
     * @callback module:api/VerificationsApi~verificationsByEmailDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Email Verification Result
     * Delete a result with given email if exists. Required Access Level: VerifyEmails
     * @param {String} email Email address to verification
     * @param {module:api/VerificationsApi~verificationsByEmailDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    verificationsByEmailDelete(email, callback) {
      let postBody = null;
      // verify the required parameter 'email' is set
      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling verificationsByEmailDelete");
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
        '/verifications/{email}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the verificationsByEmailGet operation.
     * @callback module:api/VerificationsApi~verificationsByEmailGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmailValidationResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Email Verification Result
     * Returns a result of verified email. Required Access Level: ViewEmailVerifications
     * @param {String} email Email address to view verification result of
     * @param {module:api/VerificationsApi~verificationsByEmailGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmailValidationResult}
     */
    verificationsByEmailGet(email, callback) {
      let postBody = null;
      // verify the required parameter 'email' is set
      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling verificationsByEmailGet");
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
      let returnType = EmailValidationResult;
      return this.apiClient.callApi(
        '/verifications/{email}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the verificationsByEmailPost operation.
     * @callback module:api/VerificationsApi~verificationsByEmailPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmailValidationResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Verify Email
     * Verify single email address and returns result of verification. Required Access Level: VerifyEmails
     * @param {String} email Email address to verify
     * @param {module:api/VerificationsApi~verificationsByEmailPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmailValidationResult}
     */
    verificationsByEmailPost(email, callback) {
      let postBody = null;
      // verify the required parameter 'email' is set
      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling verificationsByEmailPost");
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
      let returnType = EmailValidationResult;
      return this.apiClient.callApi(
        '/verifications/{email}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the verificationsFilesByIdDelete operation.
     * @callback module:api/VerificationsApi~verificationsFilesByIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete File Verification Result
     * Delete Verification Results if they exist. Required Access Level: VerifyEmails
     * @param {String} id ID of the exported file
     * @param {module:api/VerificationsApi~verificationsFilesByIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    verificationsFilesByIdDelete(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling verificationsFilesByIdDelete");
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
        '/verifications/files/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the verificationsFilesByIdResultDownloadGet operation.
     * @callback module:api/VerificationsApi~verificationsFilesByIdResultDownloadGetCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Download File Verification Result
     * Download verification results as a ZIP file. Required Access Level: VerifyEmails
     * @param {String} id Verification ID to download
     * @param {module:api/VerificationsApi~verificationsFilesByIdResultDownloadGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    verificationsFilesByIdResultDownloadGet(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling verificationsFilesByIdResultDownloadGet");
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
      let accepts = ['application/_*'];
      let returnType = File;
      return this.apiClient.callApi(
        '/verifications/files/{id}/result/download', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the verificationsFilesByIdResultGet operation.
     * @callback module:api/VerificationsApi~verificationsFilesByIdResultGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VerificationFileResultDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Detailed File Verification Result
     * Returns status and results (if verified) of file with given ID. Required Access Level: ViewEmailVerifications
     * @param {String} id ID of the Verification to display status of
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Maximum number of returned email verification results
     * @param {Number} opts.offset How many result items should be returned ahead
     * @param {module:api/VerificationsApi~verificationsFilesByIdResultGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VerificationFileResultDetails}
     */
    verificationsFilesByIdResultGet(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling verificationsFilesByIdResultGet");
      }

      let pathParams = {
        'id': id
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
      let returnType = VerificationFileResultDetails;
      return this.apiClient.callApi(
        '/verifications/files/{id}/result', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the verificationsFilesByIdVerificationPost operation.
     * @callback module:api/VerificationsApi~verificationsFilesByIdVerificationPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start verification
     * Start a verification of the previously uploaded file with emails. Required Access Level: VerifyEmails
     * @param {String} id File ID to start verification
     * @param {module:api/VerificationsApi~verificationsFilesByIdVerificationPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    verificationsFilesByIdVerificationPost(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling verificationsFilesByIdVerificationPost");
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
        '/verifications/files/{id}/verification', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the verificationsFilesPost operation.
     * @callback module:api/VerificationsApi~verificationsFilesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VerificationFileResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload File with Emails
     * Uploads a CSV file with list of emails that can then be triggered for verification. An 'email' column is required. Required Access Level: VerifyEmails
     * @param {Object} opts Optional parameters
     * @param {File} opts.file 
     * @param {module:api/VerificationsApi~verificationsFilesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VerificationFileResult}
     */
    verificationsFilesPost(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'file': opts['file']
      };

      let authNames = ['apikey'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = VerificationFileResult;
      return this.apiClient.callApi(
        '/verifications/files', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the verificationsFilesResultGet operation.
     * @callback module:api/VerificationsApi~verificationsFilesResultGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/VerificationFileResult>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Files Verification Results
     * Returns a list of uploaded files, their statuses and results. Required Access Level: ViewEmailVerifications
     * @param {module:api/VerificationsApi~verificationsFilesResultGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/VerificationFileResult>}
     */
    verificationsFilesResultGet(callback) {
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
      let returnType = [VerificationFileResult];
      return this.apiClient.callApi(
        '/verifications/files/result', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the verificationsGet operation.
     * @callback module:api/VerificationsApi~verificationsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/EmailValidationResult>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Emails Verification Results
     * Returns a results of all verified single emails. Required Access Level: ViewEmailVerifications
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Maximum number of returned items.
     * @param {Number} opts.offset How many items should be returned ahead.
     * @param {module:api/VerificationsApi~verificationsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/EmailValidationResult>}
     */
    verificationsGet(opts, callback) {
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
      let returnType = [EmailValidationResult];
      return this.apiClient.callApi(
        '/verifications', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
