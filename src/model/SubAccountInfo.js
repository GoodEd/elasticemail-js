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
import AccountStatusEnum from './AccountStatusEnum';
import SubaccountSettingsInfo from './SubaccountSettingsInfo';

/**
 * The SubAccountInfo model module.
 * @module model/SubAccountInfo
 * @version 4.0.12
 */
class SubAccountInfo {
    /**
     * Constructs a new <code>SubAccountInfo</code>.
     * Detailed information about SubAccount.
     * @alias module:model/SubAccountInfo
     */
    constructor() { 
        
        SubAccountInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SubAccountInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubAccountInfo} obj Optional instance to populate.
     * @return {module:model/SubAccountInfo} The populated <code>SubAccountInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubAccountInfo();

            if (data.hasOwnProperty('PublicAccountID')) {
                obj['PublicAccountID'] = ApiClient.convertToType(data['PublicAccountID'], 'String');
            }
            if (data.hasOwnProperty('Email')) {
                obj['Email'] = ApiClient.convertToType(data['Email'], 'String');
            }
            if (data.hasOwnProperty('Settings')) {
                obj['Settings'] = ApiClient.convertToType(data['Settings'], SubaccountSettingsInfo);
            }
            if (data.hasOwnProperty('LastActivity')) {
                obj['LastActivity'] = ApiClient.convertToType(data['LastActivity'], 'Date');
            }
            if (data.hasOwnProperty('EmailCredits')) {
                obj['EmailCredits'] = ApiClient.convertToType(data['EmailCredits'], 'Number');
            }
            if (data.hasOwnProperty('TotalEmailsSent')) {
                obj['TotalEmailsSent'] = ApiClient.convertToType(data['TotalEmailsSent'], 'Number');
            }
            if (data.hasOwnProperty('Reputation')) {
                obj['Reputation'] = ApiClient.convertToType(data['Reputation'], 'Number');
            }
            if (data.hasOwnProperty('Status')) {
                obj['Status'] = ApiClient.convertToType(data['Status'], AccountStatusEnum);
            }
            if (data.hasOwnProperty('ContactsCount')) {
                obj['ContactsCount'] = ApiClient.convertToType(data['ContactsCount'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Public key for limited access to your Account such as contact/add so you can use it safely on public websites.
 * @member {String} PublicAccountID
 */
SubAccountInfo.prototype['PublicAccountID'] = undefined;

/**
 * Proper email address.
 * @member {String} Email
 */
SubAccountInfo.prototype['Email'] = undefined;

/**
 * SubAccount settings
 * @member {module:model/SubaccountSettingsInfo} Settings
 */
SubAccountInfo.prototype['Settings'] = undefined;

/**
 * Date of last activity on Account
 * @member {Date} LastActivity
 */
SubAccountInfo.prototype['LastActivity'] = undefined;

/**
 * Amount of email credits
 * @member {Number} EmailCredits
 */
SubAccountInfo.prototype['EmailCredits'] = undefined;

/**
 * Amount of emails sent from this Account
 * @member {Number} TotalEmailsSent
 */
SubAccountInfo.prototype['TotalEmailsSent'] = undefined;

/**
 * Numeric reputation
 * @member {Number} Reputation
 */
SubAccountInfo.prototype['Reputation'] = undefined;

/**
 * Account's current status.
 * @member {module:model/AccountStatusEnum} Status
 */
SubAccountInfo.prototype['Status'] = undefined;

/**
 * How many contacts this SubAccount has stored
 * @member {Number} ContactsCount
 */
SubAccountInfo.prototype['ContactsCount'] = undefined;






export default SubAccountInfo;

