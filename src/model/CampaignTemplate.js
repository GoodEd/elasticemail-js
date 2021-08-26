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
import Utm from './Utm';

/**
 * The CampaignTemplate model module.
 * @module model/CampaignTemplate
 * @version 4.0.14
 */
class CampaignTemplate {
    /**
     * Constructs a new <code>CampaignTemplate</code>.
     * Content of a Campaign
     * @alias module:model/CampaignTemplate
     */
    constructor() { 
        
        CampaignTemplate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CampaignTemplate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CampaignTemplate} obj Optional instance to populate.
     * @return {module:model/CampaignTemplate} The populated <code>CampaignTemplate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CampaignTemplate();

            if (data.hasOwnProperty('Poolname')) {
                obj['Poolname'] = ApiClient.convertToType(data['Poolname'], 'String');
            }
            if (data.hasOwnProperty('From')) {
                obj['From'] = ApiClient.convertToType(data['From'], 'String');
            }
            if (data.hasOwnProperty('ReplyTo')) {
                obj['ReplyTo'] = ApiClient.convertToType(data['ReplyTo'], 'String');
            }
            if (data.hasOwnProperty('Subject')) {
                obj['Subject'] = ApiClient.convertToType(data['Subject'], 'String');
            }
            if (data.hasOwnProperty('TemplateName')) {
                obj['TemplateName'] = ApiClient.convertToType(data['TemplateName'], 'String');
            }
            if (data.hasOwnProperty('AttachFiles')) {
                obj['AttachFiles'] = ApiClient.convertToType(data['AttachFiles'], ['String']);
            }
            if (data.hasOwnProperty('Utm')) {
                obj['Utm'] = ApiClient.convertToType(data['Utm'], Utm);
            }
        }
        return obj;
    }


}

/**
 * Name of your custom IP Pool to be used in the sending process
 * @member {String} Poolname
 */
CampaignTemplate.prototype['Poolname'] = undefined;

/**
 * Your e-mail with an optional name (e.g.: John Doe <email@domain.com>)
 * @member {String} From
 */
CampaignTemplate.prototype['From'] = undefined;

/**
 * To what address should the recipients reply to (e.g. John Doe <email@domain.com>)
 * @member {String} ReplyTo
 */
CampaignTemplate.prototype['ReplyTo'] = undefined;

/**
 * Default subject of email.
 * @member {String} Subject
 */
CampaignTemplate.prototype['Subject'] = undefined;

/**
 * Name of template.
 * @member {String} TemplateName
 */
CampaignTemplate.prototype['TemplateName'] = undefined;

/**
 * Names of previously uploaded files that should be sent as downloadable attachments
 * @member {Array.<String>} AttachFiles
 */
CampaignTemplate.prototype['AttachFiles'] = undefined;

/**
 * Utm marketing data to be attached to every link in this e-mail.
 * @member {module:model/Utm} Utm
 */
CampaignTemplate.prototype['Utm'] = undefined;






export default CampaignTemplate;

