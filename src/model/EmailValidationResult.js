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
import EmailValidationStatus from './EmailValidationStatus';

/**
 * The EmailValidationResult model module.
 * @module model/EmailValidationResult
 * @version 4.0.0
 */
class EmailValidationResult {
    /**
     * Constructs a new <code>EmailValidationResult</code>.
     * @alias module:model/EmailValidationResult
     */
    constructor() { 
        
        EmailValidationResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailValidationResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmailValidationResult} obj Optional instance to populate.
     * @return {module:model/EmailValidationResult} The populated <code>EmailValidationResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailValidationResult();

            if (data.hasOwnProperty('Account')) {
                obj['Account'] = ApiClient.convertToType(data['Account'], 'String');
            }
            if (data.hasOwnProperty('Domain')) {
                obj['Domain'] = ApiClient.convertToType(data['Domain'], 'String');
            }
            if (data.hasOwnProperty('Email')) {
                obj['Email'] = ApiClient.convertToType(data['Email'], 'String');
            }
            if (data.hasOwnProperty('SuggestedSpelling')) {
                obj['SuggestedSpelling'] = ApiClient.convertToType(data['SuggestedSpelling'], 'String');
            }
            if (data.hasOwnProperty('Disposable')) {
                obj['Disposable'] = ApiClient.convertToType(data['Disposable'], 'Boolean');
            }
            if (data.hasOwnProperty('Role')) {
                obj['Role'] = ApiClient.convertToType(data['Role'], 'Boolean');
            }
            if (data.hasOwnProperty('Reason')) {
                obj['Reason'] = ApiClient.convertToType(data['Reason'], 'String');
            }
            if (data.hasOwnProperty('DateAdded')) {
                obj['DateAdded'] = ApiClient.convertToType(data['DateAdded'], 'Date');
            }
            if (data.hasOwnProperty('Result')) {
                obj['Result'] = EmailValidationStatus.constructFromObject(data['Result']);
            }
        }
        return obj;
    }


}

/**
 * Local part of an email
 * @member {String} Account
 */
EmailValidationResult.prototype['Account'] = undefined;

/**
 * Name of selected domain.
 * @member {String} Domain
 */
EmailValidationResult.prototype['Domain'] = undefined;

/**
 * Full email address that was verified
 * @member {String} Email
 */
EmailValidationResult.prototype['Email'] = undefined;

/**
 * Suggested spelling if a possible mistake was found
 * @member {String} SuggestedSpelling
 */
EmailValidationResult.prototype['SuggestedSpelling'] = undefined;

/**
 * Does the email have a temporary domain
 * @member {Boolean} Disposable
 */
EmailValidationResult.prototype['Disposable'] = undefined;

/**
 * Is an email a role email (e.g. info@, noreply@ etc.)
 * @member {Boolean} Role
 */
EmailValidationResult.prototype['Role'] = undefined;

/**
 * All detected issues
 * @member {String} Reason
 */
EmailValidationResult.prototype['Reason'] = undefined;

/**
 * Date of creation in YYYY-MM-DDThh:ii:ss format
 * @member {Date} DateAdded
 */
EmailValidationResult.prototype['DateAdded'] = undefined;

/**
 * @member {module:model/EmailValidationStatus} Result
 */
EmailValidationResult.prototype['Result'] = undefined;






export default EmailValidationResult;

