"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CampaignOptions = _interopRequireDefault(require("./CampaignOptions"));

var _CampaignRecipient = _interopRequireDefault(require("./CampaignRecipient"));

var _CampaignStatus = _interopRequireDefault(require("./CampaignStatus"));

var _CampaignTemplate = _interopRequireDefault(require("./CampaignTemplate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Campaign model module.
 * @module model/Campaign
 * @version 4.0.20
 */
var Campaign = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Campaign</code>.
   * @alias module:model/Campaign
   * @param name {String} Campaign name
   * @param recipients {module:model/CampaignRecipient} 
   */
  function Campaign(name, recipients) {
    _classCallCheck(this, Campaign);

    Campaign.initialize(this, name, recipients);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Campaign, null, [{
    key: "initialize",
    value: function initialize(obj, name, recipients) {
      obj['Name'] = name;
      obj['Recipients'] = recipients;
    }
    /**
     * Constructs a <code>Campaign</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Campaign} obj Optional instance to populate.
     * @return {module:model/Campaign} The populated <code>Campaign</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Campaign();

        if (data.hasOwnProperty('Content')) {
          obj['Content'] = _ApiClient["default"].convertToType(data['Content'], [_CampaignTemplate["default"]]);
        }

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('Status')) {
          obj['Status'] = _CampaignStatus["default"].constructFromObject(data['Status']);
        }

        if (data.hasOwnProperty('Recipients')) {
          obj['Recipients'] = _CampaignRecipient["default"].constructFromObject(data['Recipients']);
        }

        if (data.hasOwnProperty('Options')) {
          obj['Options'] = _CampaignOptions["default"].constructFromObject(data['Options']);
        }
      }

      return obj;
    }
  }]);

  return Campaign;
}();
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
 * @member {module:model/CampaignStatus} Status
 */

Campaign.prototype['Status'] = undefined;
/**
 * @member {module:model/CampaignRecipient} Recipients
 */

Campaign.prototype['Recipients'] = undefined;
/**
 * @member {module:model/CampaignOptions} Options
 */

Campaign.prototype['Options'] = undefined;
var _default = Campaign;
exports["default"] = _default;