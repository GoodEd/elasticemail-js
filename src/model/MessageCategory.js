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
* Enum class MessageCategory.
* @enum {}
* @readonly
*/
export default class MessageCategory {
    
        /**
         * value: "Unknown"
         * @const
         */
        "Unknown" = "Unknown";

    
        /**
         * value: "Ignore"
         * @const
         */
        "Ignore" = "Ignore";

    
        /**
         * value: "Spam"
         * @const
         */
        "Spam" = "Spam";

    
        /**
         * value: "BlackListed"
         * @const
         */
        "BlackListed" = "BlackListed";

    
        /**
         * value: "NoMailbox"
         * @const
         */
        "NoMailbox" = "NoMailbox";

    
        /**
         * value: "GreyListed"
         * @const
         */
        "GreyListed" = "GreyListed";

    
        /**
         * value: "Throttled"
         * @const
         */
        "Throttled" = "Throttled";

    
        /**
         * value: "Timeout"
         * @const
         */
        "Timeout" = "Timeout";

    
        /**
         * value: "ConnectionProblem"
         * @const
         */
        "ConnectionProblem" = "ConnectionProblem";

    
        /**
         * value: "SPFProblem"
         * @const
         */
        "SPFProblem" = "SPFProblem";

    
        /**
         * value: "AccountProblem"
         * @const
         */
        "AccountProblem" = "AccountProblem";

    
        /**
         * value: "DNSProblem"
         * @const
         */
        "DNSProblem" = "DNSProblem";

    
        /**
         * value: "NotDeliveredCancelled"
         * @const
         */
        "NotDeliveredCancelled" = "NotDeliveredCancelled";

    
        /**
         * value: "CodeError"
         * @const
         */
        "CodeError" = "CodeError";

    
        /**
         * value: "ManualCancel"
         * @const
         */
        "ManualCancel" = "ManualCancel";

    
        /**
         * value: "ConnectionTerminated"
         * @const
         */
        "ConnectionTerminated" = "ConnectionTerminated";

    
        /**
         * value: "NotDelivered"
         * @const
         */
        "NotDelivered" = "NotDelivered";

    

    /**
    * Returns a <code>MessageCategory</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/MessageCategory} The enum <code>MessageCategory</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

