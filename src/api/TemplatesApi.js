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
import Template from '../model/Template';
import TemplatePayload from '../model/TemplatePayload';
import TemplateScope from '../model/TemplateScope';
import TemplateType from '../model/TemplateType';

/**
* Templates service.
* @module api/TemplatesApi
* @version 4.0.11
*/
export default class TemplatesApi {

    /**
    * Constructs a new TemplatesApi. 
    * @alias module:api/TemplatesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
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
    templatesByNameDelete(name, callback) {
      let postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling templatesByNameDelete");
      }

      let pathParams = {
        'name': name
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
        '/templates/{name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    templatesByNameGet(name, callback) {
      let postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling templatesByNameGet");
      }

      let pathParams = {
        'name': name
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
      let returnType = Template;
      return this.apiClient.callApi(
        '/templates/{name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    templatesByNamePut(name, templatePayload, callback) {
      let postBody = templatePayload;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling templatesByNamePut");
      }
      // verify the required parameter 'templatePayload' is set
      if (templatePayload === undefined || templatePayload === null) {
        throw new Error("Missing the required parameter 'templatePayload' when calling templatesByNamePut");
      }

      let pathParams = {
        'name': name
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
      let returnType = Template;
      return this.apiClient.callApi(
        '/templates/{name}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    templatesGet(scopeType, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'scopeType' is set
      if (scopeType === undefined || scopeType === null) {
        throw new Error("Missing the required parameter 'scopeType' when calling templatesGet");
      }

      let pathParams = {
      };
      let queryParams = {
        'scopeType': this.apiClient.buildCollectionParam(scopeType, 'multi'),
        'templateTypes': this.apiClient.buildCollectionParam(opts['templateTypes'], 'multi'),
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
      let returnType = [Template];
      return this.apiClient.callApi(
        '/templates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    templatesPost(templatePayload, callback) {
      let postBody = templatePayload;
      // verify the required parameter 'templatePayload' is set
      if (templatePayload === undefined || templatePayload === null) {
        throw new Error("Missing the required parameter 'templatePayload' when calling templatesPost");
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
      let returnType = Template;
      return this.apiClient.callApi(
        '/templates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
