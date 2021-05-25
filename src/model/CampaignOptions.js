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
import DeliveryOptimizationType from './DeliveryOptimizationType';
import SplitOptions from './SplitOptions';

/**
 * The CampaignOptions model module.
 * @module model/CampaignOptions
 * @version 4.0.11
 */
class CampaignOptions {
    /**
     * Constructs a new <code>CampaignOptions</code>.
     * Different send options for a Campaign
     * @alias module:model/CampaignOptions
     */
    constructor() { 
        
        CampaignOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CampaignOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CampaignOptions} obj Optional instance to populate.
     * @return {module:model/CampaignOptions} The populated <code>CampaignOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CampaignOptions();

            if (data.hasOwnProperty('DeliveryOptimization')) {
                obj['DeliveryOptimization'] = ApiClient.convertToType(data['DeliveryOptimization'], DeliveryOptimizationType);
            }
            if (data.hasOwnProperty('TrackOpens')) {
                obj['TrackOpens'] = ApiClient.convertToType(data['TrackOpens'], 'Boolean');
            }
            if (data.hasOwnProperty('TrackClicks')) {
                obj['TrackClicks'] = ApiClient.convertToType(data['TrackClicks'], 'Boolean');
            }
            if (data.hasOwnProperty('ScheduleFor')) {
                obj['ScheduleFor'] = ApiClient.convertToType(data['ScheduleFor'], 'Date');
            }
            if (data.hasOwnProperty('SplitOptions')) {
                obj['SplitOptions'] = ApiClient.convertToType(data['SplitOptions'], SplitOptions);
            }
        }
        return obj;
    }


}

/**
 * How to order email delivery - by recipients' engagement score or by the time they open the most of the emails that were sent to them
 * @member {module:model/DeliveryOptimizationType} DeliveryOptimization
 */
CampaignOptions.prototype['DeliveryOptimization'] = undefined;

/**
 * Should the opens be tracked? If no value has been provided, Account's default setting will be used.
 * @member {Boolean} TrackOpens
 */
CampaignOptions.prototype['TrackOpens'] = undefined;

/**
 * Should the clicks be tracked? If no value has been provided, Account's default setting will be used.
 * @member {Boolean} TrackClicks
 */
CampaignOptions.prototype['TrackClicks'] = undefined;

/**
 * Date when this Campaign is scheduled to be sent on
 * @member {Date} ScheduleFor
 */
CampaignOptions.prototype['ScheduleFor'] = undefined;

/**
 * Optional options for A/X split campaigns. Will be ignored if only one template content was provided
 * @member {module:model/SplitOptions} SplitOptions
 */
CampaignOptions.prototype['SplitOptions'] = undefined;






export default CampaignOptions;

