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
 * The ContactsList model module.
 * @module model/ContactsList
 * @version 4.0.0
 */
class ContactsList {
    /**
     * Constructs a new <code>ContactsList</code>.
     * List of Lists, with detailed data about its contents.
     * @alias module:model/ContactsList
     */
    constructor() { 
        
        ContactsList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContactsList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContactsList} obj Optional instance to populate.
     * @return {module:model/ContactsList} The populated <code>ContactsList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContactsList();

            if (data.hasOwnProperty('ListName')) {
                obj['ListName'] = ApiClient.convertToType(data['ListName'], 'String');
            }
            if (data.hasOwnProperty('PublicListID')) {
                obj['PublicListID'] = ApiClient.convertToType(data['PublicListID'], 'String');
            }
            if (data.hasOwnProperty('DateAdded')) {
                obj['DateAdded'] = ApiClient.convertToType(data['DateAdded'], 'Date');
            }
            if (data.hasOwnProperty('AllowUnsubscribe')) {
                obj['AllowUnsubscribe'] = ApiClient.convertToType(data['AllowUnsubscribe'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Name of your list.
 * @member {String} ListName
 */
ContactsList.prototype['ListName'] = undefined;

/**
 * ID code of list. Please note that this is different from the listid field.
 * @member {String} PublicListID
 */
ContactsList.prototype['PublicListID'] = undefined;

/**
 * Date of creation in YYYY-MM-DDThh:ii:ss format
 * @member {Date} DateAdded
 */
ContactsList.prototype['DateAdded'] = undefined;

/**
 * True: Allow unsubscribing from this list. Otherwise, false
 * @member {Boolean} AllowUnsubscribe
 */
ContactsList.prototype['AllowUnsubscribe'] = undefined;






export default ContactsList;

