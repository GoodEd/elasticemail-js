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
import ConsentTracking from './ConsentTracking';

/**
 * The ConsentData model module.
 * @module model/ConsentData
 * @version 4.0.13
 */
class ConsentData {
    /**
     * Constructs a new <code>ConsentData</code>.
     * @alias module:model/ConsentData
     */
    constructor() { 
        
        ConsentData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConsentData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConsentData} obj Optional instance to populate.
     * @return {module:model/ConsentData} The populated <code>ConsentData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConsentData();

            if (data.hasOwnProperty('ConsentIP')) {
                obj['ConsentIP'] = ApiClient.convertToType(data['ConsentIP'], 'String');
            }
            if (data.hasOwnProperty('ConsentDate')) {
                obj['ConsentDate'] = ApiClient.convertToType(data['ConsentDate'], 'Date');
            }
            if (data.hasOwnProperty('ConsentTracking')) {
                obj['ConsentTracking'] = ApiClient.convertToType(data['ConsentTracking'], ConsentTracking);
            }
        }
        return obj;
    }


}

/**
 * IP address of consent to send this contact(s) your email. If not provided your current public IP address is used for consent.
 * @member {String} ConsentIP
 */
ConsentData.prototype['ConsentIP'] = undefined;

/**
 * Date of consent to send this contact(s) your email. If not provided current date is used for consent.
 * @member {Date} ConsentDate
 */
ConsentData.prototype['ConsentDate'] = undefined;

/**
 * Does the contant consent to have their tracking data stored.
 * @member {module:model/ConsentTracking} ConsentTracking
 */
ConsentData.prototype['ConsentTracking'] = undefined;






export default ConsentData;

