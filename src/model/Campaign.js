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
import CampaignOptions from './CampaignOptions';
import CampaignRecipient from './CampaignRecipient';
import CampaignStatus from './CampaignStatus';
import CampaignTemplate from './CampaignTemplate';

/**
 * The Campaign model module.
 * @module model/Campaign
 * @version 4.0.0
 */
class Campaign {
    /**
     * Constructs a new <code>Campaign</code>.
     * @alias module:model/Campaign
     */
    constructor() { 
        
        Campaign.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Campaign</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Campaign} obj Optional instance to populate.
     * @return {module:model/Campaign} The populated <code>Campaign</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Campaign();

            if (data.hasOwnProperty('Content')) {
                obj['Content'] = ApiClient.convertToType(data['Content'], [CampaignTemplate]);
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('Status')) {
                obj['Status'] = ApiClient.convertToType(data['Status'], CampaignStatus);
            }
            if (data.hasOwnProperty('Recipients')) {
                obj['Recipients'] = ApiClient.convertToType(data['Recipients'], CampaignRecipient);
            }
            if (data.hasOwnProperty('Options')) {
                obj['Options'] = ApiClient.convertToType(data['Options'], CampaignOptions);
            }
        }
        return obj;
    }


}

/**
 * Campaign's email content. Provide multiple items to send an A/X Split Campaign
 * @member {Array.<module:model/CampaignTemplate>} Content
 */
Campaign.prototype['Content'] = undefined;

/**
 * Campaign name
 * @member {String} Name
 */
Campaign.prototype['Name'] = undefined;

/**
 * Campaign status
 * @member {module:model/CampaignStatus} Status
 */
Campaign.prototype['Status'] = undefined;

/**
 * Recipients this campaign should be sent to
 * @member {module:model/CampaignRecipient} Recipients
 */
Campaign.prototype['Recipients'] = undefined;

/**
 * Campaign sending options
 * @member {module:model/CampaignOptions} Options
 */
Campaign.prototype['Options'] = undefined;






export default Campaign;

