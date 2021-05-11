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
 * The EmailRecipient model module.
 * @module model/EmailRecipient
 * @version 4.0.1
 */
class EmailRecipient {
    /**
     * Constructs a new <code>EmailRecipient</code>.
     * List of recipients (visible to others)
     * @alias module:model/EmailRecipient
     */
    constructor() { 
        
        EmailRecipient.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailRecipient</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmailRecipient} obj Optional instance to populate.
     * @return {module:model/EmailRecipient} The populated <code>EmailRecipient</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailRecipient();

            if (data.hasOwnProperty('Email')) {
                obj['Email'] = ApiClient.convertToType(data['Email'], 'String');
            }
            if (data.hasOwnProperty('Fields')) {
                obj['Fields'] = ApiClient.convertToType(data['Fields'], {'String': 'String'});
            }
        }
        return obj;
    }


}

/**
 * Proper email address.
 * @member {String} Email
 */
EmailRecipient.prototype['Email'] = undefined;

/**
 * A key-value collection of merge fields which can be used in e-mail body.
 * @member {Object.<String, String>} Fields
 */
EmailRecipient.prototype['Fields'] = undefined;






export default EmailRecipient;
