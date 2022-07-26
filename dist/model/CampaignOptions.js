"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DeliveryOptimizationType = _interopRequireDefault(require("./DeliveryOptimizationType"));

var _SplitOptions = _interopRequireDefault(require("./SplitOptions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CampaignOptions model module.
 * @module model/CampaignOptions
 * @version 4.0.20
 */
var CampaignOptions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CampaignOptions</code>.
   * Different send options for a Campaign
   * @alias module:model/CampaignOptions
   */
  function CampaignOptions() {
    _classCallCheck(this, CampaignOptions);

    CampaignOptions.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CampaignOptions, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CampaignOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CampaignOptions} obj Optional instance to populate.
     * @return {module:model/CampaignOptions} The populated <code>CampaignOptions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CampaignOptions();

        if (data.hasOwnProperty('DeliveryOptimization')) {
          obj['DeliveryOptimization'] = _DeliveryOptimizationType["default"].constructFromObject(data['DeliveryOptimization']);
        }

        if (data.hasOwnProperty('TrackOpens')) {
          obj['TrackOpens'] = _ApiClient["default"].convertToType(data['TrackOpens'], 'Boolean');
        }

        if (data.hasOwnProperty('TrackClicks')) {
          obj['TrackClicks'] = _ApiClient["default"].convertToType(data['TrackClicks'], 'Boolean');
        }

        if (data.hasOwnProperty('ScheduleFor')) {
          obj['ScheduleFor'] = _ApiClient["default"].convertToType(data['ScheduleFor'], 'Date');
        }

        if (data.hasOwnProperty('SplitOptions')) {
          obj['SplitOptions'] = _SplitOptions["default"].constructFromObject(data['SplitOptions']);
        }
      }

      return obj;
    }
  }]);

  return CampaignOptions;
}();
/**
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
 * @member {module:model/SplitOptions} SplitOptions
 */

CampaignOptions.prototype['SplitOptions'] = undefined;
var _default = CampaignOptions;
exports["default"] = _default;