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

/**
 * The ContactUpdatePayload model module.
 * @module model/ContactUpdatePayload
 * @version 4.0.17
 */
class ContactUpdatePayload {
    /**
     * Constructs a new <code>ContactUpdatePayload</code>.
     * @alias module:model/ContactUpdatePayload
     */
    constructor() { 
        
        ContactUpdatePayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContactUpdatePayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContactUpdatePayload} obj Optional instance to populate.
     * @return {module:model/ContactUpdatePayload} The populated <code>ContactUpdatePayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContactUpdatePayload();

            if (data.hasOwnProperty('FirstName')) {
                obj['FirstName'] = ApiClient.convertToType(data['FirstName'], 'String');
            }
            if (data.hasOwnProperty('LastName')) {
                obj['LastName'] = ApiClient.convertToType(data['LastName'], 'String');
            }
            if (data.hasOwnProperty('CustomFields')) {
                obj['CustomFields'] = ApiClient.convertToType(data['CustomFields'], {'String': 'String'});
            }
        }
        return obj;
    }


}

/**
 * First name.
 * @member {String} FirstName
 */
ContactUpdatePayload.prototype['FirstName'] = undefined;

/**
 * Last name.
 * @member {String} LastName
 */
ContactUpdatePayload.prototype['LastName'] = undefined;

/**
 * A key-value collection of custom contact fields which can be used in the system.
 * @member {Object.<String, String>} CustomFields
 */
ContactUpdatePayload.prototype['CustomFields'] = undefined;






export default ContactUpdatePayload;

