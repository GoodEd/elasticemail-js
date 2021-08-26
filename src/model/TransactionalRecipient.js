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
 * The TransactionalRecipient model module.
 * @module model/TransactionalRecipient
 * @version 4.0.14
 */
class TransactionalRecipient {
    /**
     * Constructs a new <code>TransactionalRecipient</code>.
     * List of transactional recipients
     * @alias module:model/TransactionalRecipient
     * @param to {Array.<String>} List of recipients (visible to others)
     */
    constructor(to) { 
        
        TransactionalRecipient.initialize(this, to);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, to) { 
        obj['To'] = to;
    }

    /**
     * Constructs a <code>TransactionalRecipient</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionalRecipient} obj Optional instance to populate.
     * @return {module:model/TransactionalRecipient} The populated <code>TransactionalRecipient</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionalRecipient();

            if (data.hasOwnProperty('To')) {
                obj['To'] = ApiClient.convertToType(data['To'], ['String']);
            }
            if (data.hasOwnProperty('CC')) {
                obj['CC'] = ApiClient.convertToType(data['CC'], ['String']);
            }
            if (data.hasOwnProperty('BCC')) {
                obj['BCC'] = ApiClient.convertToType(data['BCC'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * List of recipients (visible to others)
 * @member {Array.<String>} To
 */
TransactionalRecipient.prototype['To'] = undefined;

/**
 * List of Carbon Copy recipients (visible to others)
 * @member {Array.<String>} CC
 */
TransactionalRecipient.prototype['CC'] = undefined;

/**
 * List of Blind Carbon Copy recipients (hidden from other recipients)
 * @member {Array.<String>} BCC
 */
TransactionalRecipient.prototype['BCC'] = undefined;






export default TransactionalRecipient;

