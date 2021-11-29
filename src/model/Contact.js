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
import ConsentData from './ConsentData';
import ContactActivity from './ContactActivity';
import ContactSource from './ContactSource';
import ContactStatus from './ContactStatus';

/**
 * The Contact model module.
 * @module model/Contact
 * @version 4.0.17
 */
class Contact {
    /**
     * Constructs a new <code>Contact</code>.
     * Contact
     * @alias module:model/Contact
     */
    constructor() { 
        
        Contact.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Contact</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Contact} obj Optional instance to populate.
     * @return {module:model/Contact} The populated <code>Contact</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Contact();

            if (data.hasOwnProperty('Email')) {
                obj['Email'] = ApiClient.convertToType(data['Email'], 'String');
            }
            if (data.hasOwnProperty('Status')) {
                obj['Status'] = ContactStatus.constructFromObject(data['Status']);
            }
            if (data.hasOwnProperty('FirstName')) {
                obj['FirstName'] = ApiClient.convertToType(data['FirstName'], 'String');
            }
            if (data.hasOwnProperty('LastName')) {
                obj['LastName'] = ApiClient.convertToType(data['LastName'], 'String');
            }
            if (data.hasOwnProperty('CustomFields')) {
                obj['CustomFields'] = ApiClient.convertToType(data['CustomFields'], {'String': 'String'});
            }
            if (data.hasOwnProperty('Consent')) {
                obj['Consent'] = ConsentData.constructFromObject(data['Consent']);
            }
            if (data.hasOwnProperty('Source')) {
                obj['Source'] = ContactSource.constructFromObject(data['Source']);
            }
            if (data.hasOwnProperty('DateAdded')) {
                obj['DateAdded'] = ApiClient.convertToType(data['DateAdded'], 'Date');
            }
            if (data.hasOwnProperty('DateUpdated')) {
                obj['DateUpdated'] = ApiClient.convertToType(data['DateUpdated'], 'Date');
            }
            if (data.hasOwnProperty('StatusChangeDate')) {
                obj['StatusChangeDate'] = ApiClient.convertToType(data['StatusChangeDate'], 'Date');
            }
            if (data.hasOwnProperty('Activity')) {
                obj['Activity'] = ContactActivity.constructFromObject(data['Activity']);
            }
        }
        return obj;
    }


}

/**
 * Proper email address.
 * @member {String} Email
 */
Contact.prototype['Email'] = undefined;

/**
 * @member {module:model/ContactStatus} Status
 */
Contact.prototype['Status'] = undefined;

/**
 * First name.
 * @member {String} FirstName
 */
Contact.prototype['FirstName'] = undefined;

/**
 * Last name.
 * @member {String} LastName
 */
Contact.prototype['LastName'] = undefined;

/**
 * A key-value collection of custom contact fields which can be used in the system.
 * @member {Object.<String, String>} CustomFields
 */
Contact.prototype['CustomFields'] = undefined;

/**
 * @member {module:model/ConsentData} Consent
 */
Contact.prototype['Consent'] = undefined;

/**
 * @member {module:model/ContactSource} Source
 */
Contact.prototype['Source'] = undefined;

/**
 * Date of creation in YYYY-MM-DDThh:ii:ss format
 * @member {Date} DateAdded
 */
Contact.prototype['DateAdded'] = undefined;

/**
 * Last change date
 * @member {Date} DateUpdated
 */
Contact.prototype['DateUpdated'] = undefined;

/**
 * Date of last status change.
 * @member {Date} StatusChangeDate
 */
Contact.prototype['StatusChangeDate'] = undefined;

/**
 * @member {module:model/ContactActivity} Activity
 */
Contact.prototype['Activity'] = undefined;






export default Contact;

