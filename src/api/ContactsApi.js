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
import CompressionFormat from '../model/CompressionFormat';
import Contact from '../model/Contact';
import ContactHistory from '../model/ContactHistory';
import ContactPayload from '../model/ContactPayload';
import ContactUpdatePayload from '../model/ContactUpdatePayload';
import EmailsPayload from '../model/EmailsPayload';
import ExportFileFormats from '../model/ExportFileFormats';
import ExportLink from '../model/ExportLink';
import ExportStatus from '../model/ExportStatus';

/**
* Contacts service.
* @module api/ContactsApi
* @version 4.0.12
*/
export default class ContactsApi {

    /**
    * Constructs a new ContactsApi. 
    * @alias module:api/ContactsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the contactsByEmailDelete operation.
     * @callback module:api/ContactsApi~contactsByEmailDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Contact
     * Deletes the provided contact. Required Access Level: ModifyContacts
     * @param {String} email Proper email address.
     * @param {module:api/ContactsApi~contactsByEmailDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    contactsByEmailDelete(email, callback) {
      let postBody = null;
      // verify the required parameter 'email' is set
      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling contactsByEmailDelete");
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
        '/contacts/{email}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the contactsByEmailGet operation.
     * @callback module:api/ContactsApi~contactsByEmailGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Contact} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Load Contact
     * Load detailed contact information for specified email. Required Access Level: ViewContacts
     * @param {String} email Proper email address.
     * @param {module:api/ContactsApi~contactsByEmailGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Contact}
     */
    contactsByEmailGet(email, callback) {
      let postBody = null;
      // verify the required parameter 'email' is set
      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling contactsByEmailGet");
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
      let returnType = Contact;
      return this.apiClient.callApi(
        '/contacts/{email}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the contactsByEmailHistoryGet operation.
     * @callback module:api/ContactsApi~contactsByEmailHistoryGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ContactHistory>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Load History
     * Returns detailed history of specified Contact. Required Access Level: ViewContacts
     * @param {String} email Proper email address.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Maximum number of returned items.
     * @param {Number} opts.offset How many items should be returned ahead.
     * @param {module:api/ContactsApi~contactsByEmailHistoryGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ContactHistory>}
     */
    contactsByEmailHistoryGet(email, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'email' is set
      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling contactsByEmailHistoryGet");
      }

      let pathParams = {
        'email': email
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
      let returnType = [ContactHistory];
      return this.apiClient.callApi(
        '/contacts/{email}/history', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the contactsByEmailPut operation.
     * @callback module:api/ContactsApi~contactsByEmailPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Contact} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Contact
     * Update selected contact. Omitted contact's fields will not be changed. Required Access Level: ModifyContacts
     * @param {String} email Proper email address.
     * @param {module:model/ContactUpdatePayload} contactUpdatePayload 
     * @param {module:api/ContactsApi~contactsByEmailPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Contact}
     */
    contactsByEmailPut(email, contactUpdatePayload, callback) {
      let postBody = contactUpdatePayload;
      // verify the required parameter 'email' is set
      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling contactsByEmailPut");
      }
      // verify the required parameter 'contactUpdatePayload' is set
      if (contactUpdatePayload === undefined || contactUpdatePayload === null) {
        throw new Error("Missing the required parameter 'contactUpdatePayload' when calling contactsByEmailPut");
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
      let returnType = Contact;
      return this.apiClient.callApi(
        '/contacts/{email}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the contactsDeletePost operation.
     * @callback module:api/ContactsApi~contactsDeletePostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Contacts Bulk
     * Deletes provided contacts in bulk. Required Access Level: ModifyContacts
     * @param {module:model/EmailsPayload} emailsPayload Provide either rule or a list of emails, not both.
     * @param {module:api/ContactsApi~contactsDeletePostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    contactsDeletePost(emailsPayload, callback) {
      let postBody = emailsPayload;
      // verify the required parameter 'emailsPayload' is set
      if (emailsPayload === undefined || emailsPayload === null) {
        throw new Error("Missing the required parameter 'emailsPayload' when calling contactsDeletePost");
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
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/contacts/delete', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the contactsExportByIdStatusGet operation.
     * @callback module:api/ContactsApi~contactsExportByIdStatusGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExportStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check Export Status
     * Check the current status of the export. Required Access Level: Export
     * @param {String} id ID of the exported file
     * @param {module:api/ContactsApi~contactsExportByIdStatusGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExportStatus}
     */
    contactsExportByIdStatusGet(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling contactsExportByIdStatusGet");
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
      let returnType = ExportStatus;
      return this.apiClient.callApi(
        '/contacts/export/{id}/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the contactsExportPost operation.
     * @callback module:api/ContactsApi~contactsExportPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExportLink} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Export Contacts
     * Request an Export of specified Contacts. Required Access Level: Export
     * @param {Object} opts Optional parameters
     * @param {module:model/ExportFileFormats} opts.fileFormat Format of the exported file
     * @param {String} opts.rule Query used for filtering.
     * @param {Array.<String>} opts.emails Comma delimited list of contact emails
     * @param {module:model/CompressionFormat} opts.compressionFormat FileResponse compression format. None or Zip.
     * @param {String} opts.fileName Name of your file including extension.
     * @param {module:api/ContactsApi~contactsExportPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExportLink}
     */
    contactsExportPost(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'fileFormat': opts['fileFormat'],
        'rule': opts['rule'],
        'emails': this.apiClient.buildCollectionParam(opts['emails'], 'multi'),
        'compressionFormat': opts['compressionFormat'],
        'fileName': opts['fileName']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apikey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ExportLink;
      return this.apiClient.callApi(
        '/contacts/export', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the contactsGet operation.
     * @callback module:api/ContactsApi~contactsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Contact>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Load Contacts
     * Returns a list of contacts. Required Access Level: ViewContacts
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Maximum number of returned items.
     * @param {Number} opts.offset How many items should be returned ahead.
     * @param {module:api/ContactsApi~contactsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Contact>}
     */
    contactsGet(opts, callback) {
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
      let returnType = [Contact];
      return this.apiClient.callApi(
        '/contacts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the contactsImportPost operation.
     * @callback module:api/ContactsApi~contactsImportPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload Contacts
     * Upload contacts from a file. Required Access Level: ModifyContacts
     * @param {Object} opts Optional parameters
     * @param {String} opts.listName Name of an existing list to add these contacts to
     * @param {String} opts.encodingName In what encoding the file is uploaded
     * @param {File} opts.file 
     * @param {module:api/ContactsApi~contactsImportPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    contactsImportPost(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'listName': opts['listName'],
        'encodingName': opts['encodingName']
      };
      let headerParams = {
      };
      let formParams = {
        'file': opts['file']
      };

      let authNames = ['apikey'];
      let contentTypes = ['multipart/form-data'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/contacts/import', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the contactsPost operation.
     * @callback module:api/ContactsApi~contactsPostCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Contact>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add Contact
     * Add new Contacts to your Lists. Up to 1000 can be added (for more please refer to the import request). Required Access Level: ModifyContacts
     * @param {Array.<module:model/ContactPayload>} contactPayload 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.listnames Names of lists to which the uploaded contacts should be added to
     * @param {module:api/ContactsApi~contactsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Contact>}
     */
    contactsPost(contactPayload, opts, callback) {
      opts = opts || {};
      let postBody = contactPayload;
      // verify the required parameter 'contactPayload' is set
      if (contactPayload === undefined || contactPayload === null) {
        throw new Error("Missing the required parameter 'contactPayload' when calling contactsPost");
      }

      let pathParams = {
      };
      let queryParams = {
        'listnames': this.apiClient.buildCollectionParam(opts['listnames'], 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apikey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [Contact];
      return this.apiClient.callApi(
        '/contacts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
