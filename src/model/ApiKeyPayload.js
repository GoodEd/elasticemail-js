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

import ApiClient from '../ApiClient';
import AccessLevel from './AccessLevel';

/**
 * The ApiKeyPayload model module.
 * @module model/ApiKeyPayload
 * @version 4.0.14
 */
class ApiKeyPayload {
    /**
     * Constructs a new <code>ApiKeyPayload</code>.
     * Create a new ApiKey
     * @alias module:model/ApiKeyPayload
     * @param name {String} Name of the ApiKey for ease of reference.
     * @param accessLevel {Array.<module:model/AccessLevel>} Access level or permission to be assigned to this ApiKey.
     */
    constructor(name, accessLevel) { 
        
        ApiKeyPayload.initialize(this, name, accessLevel);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, accessLevel) { 
        obj['Name'] = name;
        obj['AccessLevel'] = accessLevel;
    }

    /**
     * Constructs a <code>ApiKeyPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiKeyPayload} obj Optional instance to populate.
     * @return {module:model/ApiKeyPayload} The populated <code>ApiKeyPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiKeyPayload();

            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('AccessLevel')) {
                obj['AccessLevel'] = ApiClient.convertToType(data['AccessLevel'], [AccessLevel]);
            }
            if (data.hasOwnProperty('Expires')) {
                obj['Expires'] = ApiClient.convertToType(data['Expires'], 'Date');
            }
            if (data.hasOwnProperty('RestrictAccessToIPRange')) {
                obj['RestrictAccessToIPRange'] = ApiClient.convertToType(data['RestrictAccessToIPRange'], ['String']);
            }
            if (data.hasOwnProperty('Subaccount')) {
                obj['Subaccount'] = ApiClient.convertToType(data['Subaccount'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Name of the ApiKey for ease of reference.
 * @member {String} Name
 */
ApiKeyPayload.prototype['Name'] = undefined;

/**
 * Access level or permission to be assigned to this ApiKey.
 * @member {Array.<module:model/AccessLevel>} AccessLevel
 */
ApiKeyPayload.prototype['AccessLevel'] = undefined;

/**
 * Date this ApiKey expires.
 * @member {Date} Expires
 */
ApiKeyPayload.prototype['Expires'] = undefined;

/**
 * Which IPs can use this ApiKey
 * @member {Array.<String>} RestrictAccessToIPRange
 */
ApiKeyPayload.prototype['RestrictAccessToIPRange'] = undefined;

/**
 * Email of the subaccount for which this ApiKey should be created
 * @member {String} Subaccount
 */
ApiKeyPayload.prototype['Subaccount'] = undefined;






export default ApiKeyPayload;

