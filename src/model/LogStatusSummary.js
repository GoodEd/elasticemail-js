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
 * The LogStatusSummary model module.
 * @module model/LogStatusSummary
 * @version 4.0.15
 */
class LogStatusSummary {
    /**
     * Constructs a new <code>LogStatusSummary</code>.
     * Summary of log status
     * @alias module:model/LogStatusSummary
     */
    constructor() { 
        
        LogStatusSummary.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LogStatusSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LogStatusSummary} obj Optional instance to populate.
     * @return {module:model/LogStatusSummary} The populated <code>LogStatusSummary</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LogStatusSummary();

            if (data.hasOwnProperty('Recipients')) {
                obj['Recipients'] = ApiClient.convertToType(data['Recipients'], 'Number');
            }
            if (data.hasOwnProperty('EmailTotal')) {
                obj['EmailTotal'] = ApiClient.convertToType(data['EmailTotal'], 'Number');
            }
            if (data.hasOwnProperty('SmsTotal')) {
                obj['SmsTotal'] = ApiClient.convertToType(data['SmsTotal'], 'Number');
            }
            if (data.hasOwnProperty('Delivered')) {
                obj['Delivered'] = ApiClient.convertToType(data['Delivered'], 'Number');
            }
            if (data.hasOwnProperty('Bounced')) {
                obj['Bounced'] = ApiClient.convertToType(data['Bounced'], 'Number');
            }
            if (data.hasOwnProperty('InProgress')) {
                obj['InProgress'] = ApiClient.convertToType(data['InProgress'], 'Number');
            }
            if (data.hasOwnProperty('Opened')) {
                obj['Opened'] = ApiClient.convertToType(data['Opened'], 'Number');
            }
            if (data.hasOwnProperty('Clicked')) {
                obj['Clicked'] = ApiClient.convertToType(data['Clicked'], 'Number');
            }
            if (data.hasOwnProperty('Unsubscribed')) {
                obj['Unsubscribed'] = ApiClient.convertToType(data['Unsubscribed'], 'Number');
            }
            if (data.hasOwnProperty('Complaints')) {
                obj['Complaints'] = ApiClient.convertToType(data['Complaints'], 'Number');
            }
            if (data.hasOwnProperty('Inbound')) {
                obj['Inbound'] = ApiClient.convertToType(data['Inbound'], 'Number');
            }
            if (data.hasOwnProperty('ManualCancel')) {
                obj['ManualCancel'] = ApiClient.convertToType(data['ManualCancel'], 'Number');
            }
            if (data.hasOwnProperty('NotDelivered')) {
                obj['NotDelivered'] = ApiClient.convertToType(data['NotDelivered'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Number of recipients
 * @member {Number} Recipients
 */
LogStatusSummary.prototype['Recipients'] = undefined;

/**
 * Number of emails
 * @member {Number} EmailTotal
 */
LogStatusSummary.prototype['EmailTotal'] = undefined;

/**
 * Number of SMS
 * @member {Number} SmsTotal
 */
LogStatusSummary.prototype['SmsTotal'] = undefined;

/**
 * Number of delivered messages
 * @member {Number} Delivered
 */
LogStatusSummary.prototype['Delivered'] = undefined;

/**
 * Number of bounced messages
 * @member {Number} Bounced
 */
LogStatusSummary.prototype['Bounced'] = undefined;

/**
 * Number of messages in progress
 * @member {Number} InProgress
 */
LogStatusSummary.prototype['InProgress'] = undefined;

/**
 * Number of opened messages
 * @member {Number} Opened
 */
LogStatusSummary.prototype['Opened'] = undefined;

/**
 * Number of clicked messages
 * @member {Number} Clicked
 */
LogStatusSummary.prototype['Clicked'] = undefined;

/**
 * Number of unsubscribed messages
 * @member {Number} Unsubscribed
 */
LogStatusSummary.prototype['Unsubscribed'] = undefined;

/**
 * Number of complaint messages
 * @member {Number} Complaints
 */
LogStatusSummary.prototype['Complaints'] = undefined;

/**
 * Number of inbound messages
 * @member {Number} Inbound
 */
LogStatusSummary.prototype['Inbound'] = undefined;

/**
 * Number of manually cancelled messages
 * @member {Number} ManualCancel
 */
LogStatusSummary.prototype['ManualCancel'] = undefined;

/**
 * Number of messages flagged with 'Not Delivered'
 * @member {Number} NotDelivered
 */
LogStatusSummary.prototype['NotDelivered'] = undefined;






export default LogStatusSummary;

