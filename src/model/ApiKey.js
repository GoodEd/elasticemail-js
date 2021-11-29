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
 * The ApiKey model module.
 * @module model/ApiKey
 * @version 4.0.17
 */
class ApiKey {
    /**
     * Constructs a new <code>ApiKey</code>.
     * ApiKey info
     * @alias module:model/ApiKey
     */
    constructor() { 
        
        ApiKey.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApiKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiKey} obj Optional instance to populate.
     * @return {module:model/ApiKey} The populated <code>ApiKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiKey();

            if (data.hasOwnProperty('AccessLevel')) {
                obj['AccessLevel'] = ApiClient.convertToType(data['AccessLevel'], [AccessLevel]);
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('DateCreated')) {
                obj['DateCreated'] = ApiClient.convertToType(data['DateCreated'], 'Date');
            }
            if (data.hasOwnProperty('LastUse')) {
                obj['LastUse'] = ApiClient.convertToType(data['LastUse'], 'Date');
            }
            if (data.hasOwnProperty('Expires')) {
                obj['Expires'] = ApiClient.convertToType(data['Expires'], 'Date');
            }
            if (data.hasOwnProperty('RestrictAccessToIPRange')) {
                obj['RestrictAccessToIPRange'] = ApiClient.convertToType(data['RestrictAccessToIPRange'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Access level or permission to be assigned to this ApiKey.
 * @member {Array.<module:model/AccessLevel>} AccessLevel
 */
ApiKey.prototype['AccessLevel'] = undefined;

/**
 * Name of the ApiKey.
 * @member {String} Name
 */
ApiKey.prototype['Name'] = undefined;

/**
 * Date this ApiKey was created.
 * @member {Date} DateCreated
 */
ApiKey.prototype['DateCreated'] = undefined;

/**
 * Date this ApiKey was last used.
 * @member {Date} LastUse
 */
ApiKey.prototype['LastUse'] = undefined;

/**
 * Date this ApiKey expires.
 * @member {Date} Expires
 */
ApiKey.prototype['Expires'] = undefined;

/**
 * Which IPs can use this ApiKey
 * @member {Array.<String>} RestrictAccessToIPRange
 */
ApiKey.prototype['RestrictAccessToIPRange'] = undefined;






export default ApiKey;

