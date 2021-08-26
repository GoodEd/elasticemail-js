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
import BodyPart from './BodyPart';
import TemplateScope from './TemplateScope';

/**
 * The TemplatePayload model module.
 * @module model/TemplatePayload
 * @version 4.0.13
 */
class TemplatePayload {
    /**
     * Constructs a new <code>TemplatePayload</code>.
     * New template object
     * @alias module:model/TemplatePayload
     * @param name {String} Template name
     */
    constructor(name) { 
        
        TemplatePayload.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['Name'] = name;
    }

    /**
     * Constructs a <code>TemplatePayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TemplatePayload} obj Optional instance to populate.
     * @return {module:model/TemplatePayload} The populated <code>TemplatePayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TemplatePayload();

            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('Subject')) {
                obj['Subject'] = ApiClient.convertToType(data['Subject'], 'String');
            }
            if (data.hasOwnProperty('Body')) {
                obj['Body'] = ApiClient.convertToType(data['Body'], [BodyPart]);
            }
            if (data.hasOwnProperty('TemplateScope')) {
                obj['TemplateScope'] = ApiClient.convertToType(data['TemplateScope'], TemplateScope);
            }
        }
        return obj;
    }


}

/**
 * Template name
 * @member {String} Name
 */
TemplatePayload.prototype['Name'] = undefined;

/**
 * Default subject of email.
 * @member {String} Subject
 */
TemplatePayload.prototype['Subject'] = undefined;

/**
 * Email content of this template
 * @member {Array.<module:model/BodyPart>} Body
 */
TemplatePayload.prototype['Body'] = undefined;

/**
 * Visibility of a template
 * @member {module:model/TemplateScope} TemplateScope
 */
TemplatePayload.prototype['TemplateScope'] = undefined;






export default TemplatePayload;

