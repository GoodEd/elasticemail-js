"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CampaignRecipient model module.
 * @module model/CampaignRecipient
 * @version 4.0.20
 */
var CampaignRecipient = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CampaignRecipient</code>.
   * A set of lists and segments names to read recipients from
   * @alias module:model/CampaignRecipient
   */
  function CampaignRecipient() {
    _classCallCheck(this, CampaignRecipient);

    CampaignRecipient.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CampaignRecipient, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CampaignRecipient</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CampaignRecipient} obj Optional instance to populate.
     * @return {module:model/CampaignRecipient} The populated <code>CampaignRecipient</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CampaignRecipient();

        if (data.hasOwnProperty('ListNames')) {
          obj['ListNames'] = _ApiClient["default"].convertToType(data['ListNames'], ['String']);
        }

        if (data.hasOwnProperty('SegmentNames')) {
          obj['SegmentNames'] = _ApiClient["default"].convertToType(data['SegmentNames'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return CampaignRecipient;
}();
/**
 * Names of lists from your Account to read recipients from
 * @member {Array.<String>} ListNames
 */


CampaignRecipient.prototype['ListNames'] = undefined;
/**
 * Names of segments from your Account to read recipients from
 * @member {Array.<String>} SegmentNames
 */

CampaignRecipient.prototype['SegmentNames'] = undefined;
var _default = CampaignRecipient;
exports["default"] = _default;