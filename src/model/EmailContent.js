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
import MessageAttachment from './MessageAttachment';
import Utm from './Utm';

/**
 * The EmailContent model module.
 * @module model/EmailContent
 * @version 4.0.1
 */
class EmailContent {
    /**
     * Constructs a new <code>EmailContent</code>.
     * Proper e-mail content
     * @alias module:model/EmailContent
     */
    constructor() { 
        
        EmailContent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailContent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmailContent} obj Optional instance to populate.
     * @return {module:model/EmailContent} The populated <code>EmailContent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailContent();

            if (data.hasOwnProperty('Body')) {
                obj['Body'] = ApiClient.convertToType(data['Body'], [BodyPart]);
            }
            if (data.hasOwnProperty('Merge')) {
                obj['Merge'] = ApiClient.convertToType(data['Merge'], {'String': 'String'});
            }
            if (data.hasOwnProperty('Attachments')) {
                obj['Attachments'] = ApiClient.convertToType(data['Attachments'], [MessageAttachment]);
            }
            if (data.hasOwnProperty('Headers')) {
                obj['Headers'] = ApiClient.convertToType(data['Headers'], {'String': 'String'});
            }
            if (data.hasOwnProperty('Postback')) {
                obj['Postback'] = ApiClient.convertToType(data['Postback'], 'String');
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
 * List of e-mail body parts, with user-provided MIME types (text/html, text/plain etc)
 * @member {Array.<module:model/BodyPart>} Body
 */
EmailContent.prototype['Body'] = undefined;

/**
 * A key-value collection of custom merge fields, shared between recipients. Should be used in e-mail body like so: {firstname}, {lastname} etc.
 * @member {Object.<String, String>} Merge
 */
EmailContent.prototype['Merge'] = undefined;

/**
 * Attachments provided by sending binary data
 * @member {Array.<module:model/MessageAttachment>} Attachments
 */
EmailContent.prototype['Attachments'] = undefined;

/**
 * A key-value collection of custom e-mail headers.
 * @member {Object.<String, String>} Headers
 */
EmailContent.prototype['Headers'] = undefined;

/**
 * Postback header.
 * @member {String} Postback
 */
EmailContent.prototype['Postback'] = undefined;

/**
 * Your e-mail with an optional name (e.g.: John Doe <email@domain.com>)
 * @member {String} From
 */
EmailContent.prototype['From'] = undefined;

/**
 * To what address should the recipients reply to (e.g. John Doe <email@domain.com>)
 * @member {String} ReplyTo
 */
EmailContent.prototype['ReplyTo'] = undefined;

/**
 * Default subject of email.
 * @member {String} Subject
 */
EmailContent.prototype['Subject'] = undefined;

/**
 * Name of template.
 * @member {String} TemplateName
 */
EmailContent.prototype['TemplateName'] = undefined;

/**
 * Names of previously uploaded files that should be sent as downloadable attachments
 * @member {Array.<String>} AttachFiles
 */
EmailContent.prototype['AttachFiles'] = undefined;

/**
 * Utm marketing data to be attached to every link in this e-mail.
 * @member {module:model/Utm} Utm
 */
EmailContent.prototype['Utm'] = undefined;






export default EmailContent;
