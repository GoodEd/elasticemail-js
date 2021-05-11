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
import InboundRouteActionType from './InboundRouteActionType';
import InboundRouteFilterType from './InboundRouteFilterType';

/**
 * The InboundPayload model module.
 * @module model/InboundPayload
 * @version 4.0.0
 */
class InboundPayload {
    /**
     * Constructs a new <code>InboundPayload</code>.
     * @alias module:model/InboundPayload
     */
    constructor() { 
        
        InboundPayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InboundPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InboundPayload} obj Optional instance to populate.
     * @return {module:model/InboundPayload} The populated <code>InboundPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InboundPayload();

            if (data.hasOwnProperty('Filter')) {
                obj['Filter'] = ApiClient.convertToType(data['Filter'], 'String');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('FilterType')) {
                obj['FilterType'] = ApiClient.convertToType(data['FilterType'], InboundRouteFilterType);
            }
            if (data.hasOwnProperty('ActionType')) {
                obj['ActionType'] = ApiClient.convertToType(data['ActionType'], InboundRouteActionType);
            }
            if (data.hasOwnProperty('EmailAddress')) {
                obj['EmailAddress'] = ApiClient.convertToType(data['EmailAddress'], 'String');
            }
            if (data.hasOwnProperty('HttpAddress')) {
                obj['HttpAddress'] = ApiClient.convertToType(data['HttpAddress'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Filter of the inbound data
 * @member {String} Filter
 */
InboundPayload.prototype['Filter'] = undefined;

/**
 * Name of this route
 * @member {String} Name
 */
InboundPayload.prototype['Name'] = undefined;

/**
 * Type of the filter
 * @member {module:model/InboundRouteFilterType} FilterType
 */
InboundPayload.prototype['FilterType'] = undefined;

/**
 * Type of action to take
 * @member {module:model/InboundRouteActionType} ActionType
 */
InboundPayload.prototype['ActionType'] = undefined;

/**
 * Email to forward the inbound to
 * @member {String} EmailAddress
 */
InboundPayload.prototype['EmailAddress'] = undefined;

/**
 * Address to notify about the inbound
 * @member {String} HttpAddress
 */
InboundPayload.prototype['HttpAddress'] = undefined;






export default InboundPayload;

