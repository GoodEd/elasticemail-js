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
import EventType from './EventType';
import MessageCategory from './MessageCategory';

/**
 * The RecipientEvent model module.
 * @module model/RecipientEvent
 * @version 4.0.1
 */
class RecipientEvent {
    /**
     * Constructs a new <code>RecipientEvent</code>.
     * Detailed information about message recipient
     * @alias module:model/RecipientEvent
     */
    constructor() { 
        
        RecipientEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RecipientEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RecipientEvent} obj Optional instance to populate.
     * @return {module:model/RecipientEvent} The populated <code>RecipientEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RecipientEvent();

            if (data.hasOwnProperty('TransactionID')) {
                obj['TransactionID'] = ApiClient.convertToType(data['TransactionID'], 'String');
            }
            if (data.hasOwnProperty('MsgID')) {
                obj['MsgID'] = ApiClient.convertToType(data['MsgID'], 'String');
            }
            if (data.hasOwnProperty('FromEmail')) {
                obj['FromEmail'] = ApiClient.convertToType(data['FromEmail'], 'String');
            }
            if (data.hasOwnProperty('To')) {
                obj['To'] = ApiClient.convertToType(data['To'], 'String');
            }
            if (data.hasOwnProperty('Subject')) {
                obj['Subject'] = ApiClient.convertToType(data['Subject'], 'String');
            }
            if (data.hasOwnProperty('EventType')) {
                obj['EventType'] = ApiClient.convertToType(data['EventType'], EventType);
            }
            if (data.hasOwnProperty('EventDate')) {
                obj['EventDate'] = ApiClient.convertToType(data['EventDate'], 'Date');
            }
            if (data.hasOwnProperty('ChannelName')) {
                obj['ChannelName'] = ApiClient.convertToType(data['ChannelName'], 'String');
            }
            if (data.hasOwnProperty('MessageCategory')) {
                obj['MessageCategory'] = ApiClient.convertToType(data['MessageCategory'], MessageCategory);
            }
            if (data.hasOwnProperty('NextTryOn')) {
                obj['NextTryOn'] = ApiClient.convertToType(data['NextTryOn'], 'Date');
            }
            if (data.hasOwnProperty('Message')) {
                obj['Message'] = ApiClient.convertToType(data['Message'], 'String');
            }
            if (data.hasOwnProperty('IPAddress')) {
                obj['IPAddress'] = ApiClient.convertToType(data['IPAddress'], 'String');
            }
            if (data.hasOwnProperty('PoolName')) {
                obj['PoolName'] = ApiClient.convertToType(data['PoolName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * ID number of transaction
 * @member {String} TransactionID
 */
RecipientEvent.prototype['TransactionID'] = undefined;

/**
 * ID number of selected message.
 * @member {String} MsgID
 */
RecipientEvent.prototype['MsgID'] = undefined;

/**
 * Default From: email address.
 * @member {String} FromEmail
 */
RecipientEvent.prototype['FromEmail'] = undefined;

/**
 * Ending date for search in YYYY-MM-DDThh:mm:ss format.
 * @member {String} To
 */
RecipientEvent.prototype['To'] = undefined;

/**
 * Default subject of email.
 * @member {String} Subject
 */
RecipientEvent.prototype['Subject'] = undefined;

/**
 * Type of an Event
 * @member {module:model/EventType} EventType
 */
RecipientEvent.prototype['EventType'] = undefined;

/**
 * Creation date
 * @member {Date} EventDate
 */
RecipientEvent.prototype['EventDate'] = undefined;

/**
 * Name of selected channel.
 * @member {String} ChannelName
 */
RecipientEvent.prototype['ChannelName'] = undefined;

/**
 * Message category
 * @member {module:model/MessageCategory} MessageCategory
 */
RecipientEvent.prototype['MessageCategory'] = undefined;

/**
 * Date of next try
 * @member {Date} NextTryOn
 */
RecipientEvent.prototype['NextTryOn'] = undefined;

/**
 * Content of message, HTML encoded
 * @member {String} Message
 */
RecipientEvent.prototype['Message'] = undefined;

/**
 * IP which this email was sent through
 * @member {String} IPAddress
 */
RecipientEvent.prototype['IPAddress'] = undefined;

/**
 * Name of an IP pool this email was sent through
 * @member {String} PoolName
 */
RecipientEvent.prototype['PoolName'] = undefined;






export default RecipientEvent;
