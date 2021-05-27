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
import BodyPart from './BodyPart';
import TemplateScope from './TemplateScope';
import TemplateType from './TemplateType';

/**
 * The Template model module.
 * @module model/Template
 * @version 4.0.12
 */
class Template {
    /**
     * Constructs a new <code>Template</code>.
     * Template info
     * @alias module:model/Template
     */
    constructor() { 
        
        Template.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Template</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Template} obj Optional instance to populate.
     * @return {module:model/Template} The populated <code>Template</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Template();

            if (data.hasOwnProperty('TemplateType')) {
                obj['TemplateType'] = ApiClient.convertToType(data['TemplateType'], TemplateType);
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('DateAdded')) {
                obj['DateAdded'] = ApiClient.convertToType(data['DateAdded'], 'Date');
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
 * How the template should be edited
 * @member {module:model/TemplateType} TemplateType
 */
Template.prototype['TemplateType'] = undefined;

/**
 * Template name
 * @member {String} Name
 */
Template.prototype['Name'] = undefined;

/**
 * Date of creation in YYYY-MM-DDThh:ii:ss format
 * @member {Date} DateAdded
 */
Template.prototype['DateAdded'] = undefined;

/**
 * Default subject of email.
 * @member {String} Subject
 */
Template.prototype['Subject'] = undefined;

/**
 * Email content of this template
 * @member {Array.<module:model/BodyPart>} Body
 */
Template.prototype['Body'] = undefined;

/**
 * Visibility of a template
 * @member {module:model/TemplateScope} TemplateScope
 */
Template.prototype['TemplateScope'] = undefined;






export default Template;

