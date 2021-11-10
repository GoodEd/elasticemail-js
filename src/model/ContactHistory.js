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
import ContactHistEventType from './ContactHistEventType';

/**
 * The ContactHistory model module.
 * @module model/ContactHistory
 * @version 4.0.15
 */
class ContactHistory {
    /**
     * Constructs a new <code>ContactHistory</code>.
     * @alias module:model/ContactHistory
     */
    constructor() { 
        
        ContactHistory.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContactHistory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContactHistory} obj Optional instance to populate.
     * @return {module:model/ContactHistory} The populated <code>ContactHistory</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContactHistory();

            if (data.hasOwnProperty('EventType')) {
                obj['EventType'] = ContactHistEventType.constructFromObject(data['EventType']);
            }
            if (data.hasOwnProperty('EventDate')) {
                obj['EventDate'] = ApiClient.convertToType(data['EventDate'], 'Date');
            }
            if (data.hasOwnProperty('ChannelName')) {
                obj['ChannelName'] = ApiClient.convertToType(data['ChannelName'], 'String');
            }
            if (data.hasOwnProperty('TemplateName')) {
                obj['TemplateName'] = ApiClient.convertToType(data['TemplateName'], 'String');
            }
            if (data.hasOwnProperty('IPAddress')) {
                obj['IPAddress'] = ApiClient.convertToType(data['IPAddress'], 'String');
            }
            if (data.hasOwnProperty('Country')) {
                obj['Country'] = ApiClient.convertToType(data['Country'], 'String');
            }
            if (data.hasOwnProperty('Data')) {
                obj['Data'] = ApiClient.convertToType(data['Data'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ContactHistEventType} EventType
 */
ContactHistory.prototype['EventType'] = undefined;

/**
 * Formatted date of event.
 * @member {Date} EventDate
 */
ContactHistory.prototype['EventDate'] = undefined;

/**
 * Name of channel this event occured on
 * @member {String} ChannelName
 */
ContactHistory.prototype['ChannelName'] = undefined;

/**
 * Name of template this event occured on
 * @member {String} TemplateName
 */
ContactHistory.prototype['TemplateName'] = undefined;

/**
 * IP Address of the event.
 * @member {String} IPAddress
 */
ContactHistory.prototype['IPAddress'] = undefined;

/**
 * Country of the event.
 * @member {String} Country
 */
ContactHistory.prototype['Country'] = undefined;

/**
 * Additional information about the event
 * @member {String} Data
 */
ContactHistory.prototype['Data'] = undefined;






export default ContactHistory;

