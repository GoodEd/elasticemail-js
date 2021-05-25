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

import ApiClient from '../ApiClient';

/**
 * The Utm model module.
 * @module model/Utm
 * @version 4.0.11
 */
class Utm {
    /**
     * Constructs a new <code>Utm</code>.
     * Utm marketing data to be attached to every link in this e-mail.
     * @alias module:model/Utm
     */
    constructor() { 
        
        Utm.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Utm</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Utm} obj Optional instance to populate.
     * @return {module:model/Utm} The populated <code>Utm</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Utm();

            if (data.hasOwnProperty('Source')) {
                obj['Source'] = ApiClient.convertToType(data['Source'], 'String');
            }
            if (data.hasOwnProperty('Medium')) {
                obj['Medium'] = ApiClient.convertToType(data['Medium'], 'String');
            }
            if (data.hasOwnProperty('Campaign')) {
                obj['Campaign'] = ApiClient.convertToType(data['Campaign'], 'String');
            }
            if (data.hasOwnProperty('Content')) {
                obj['Content'] = ApiClient.convertToType(data['Content'], 'String');
            }
        }
        return obj;
    }


}

/**
 * utmsource value
 * @member {String} Source
 */
Utm.prototype['Source'] = undefined;

/**
 * utmmedium value
 * @member {String} Medium
 */
Utm.prototype['Medium'] = undefined;

/**
 * utmcampaign value
 * @member {String} Campaign
 */
Utm.prototype['Campaign'] = undefined;

/**
 * utmcontent value
 * @member {String} Content
 */
Utm.prototype['Content'] = undefined;






export default Utm;

