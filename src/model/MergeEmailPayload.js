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
import EmailContent from './EmailContent';
import MessageAttachment from './MessageAttachment';
import Options from './Options';

/**
 * The MergeEmailPayload model module.
 * @module model/MergeEmailPayload
 * @version 4.0.12
 */
class MergeEmailPayload {
    /**
     * Constructs a new <code>MergeEmailPayload</code>.
     * @alias module:model/MergeEmailPayload
     */
    constructor() { 
        
        MergeEmailPayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MergeEmailPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MergeEmailPayload} obj Optional instance to populate.
     * @return {module:model/MergeEmailPayload} The populated <code>MergeEmailPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MergeEmailPayload();

            if (data.hasOwnProperty('MergeFile')) {
                obj['MergeFile'] = ApiClient.convertToType(data['MergeFile'], MessageAttachment);
            }
            if (data.hasOwnProperty('Content')) {
                obj['Content'] = ApiClient.convertToType(data['Content'], EmailContent);
            }
            if (data.hasOwnProperty('Options')) {
                obj['Options'] = ApiClient.convertToType(data['Options'], Options);
            }
        }
        return obj;
    }


}

/**
 * CSV file containing recipients with optional merge fields
 * @member {module:model/MessageAttachment} MergeFile
 */
MergeEmailPayload.prototype['MergeFile'] = undefined;

/**
 * Proper e-mail content
 * @member {module:model/EmailContent} Content
 */
MergeEmailPayload.prototype['Content'] = undefined;

/**
 * E-mail configuration
 * @member {module:model/Options} Options
 */
MergeEmailPayload.prototype['Options'] = undefined;






export default MergeEmailPayload;

