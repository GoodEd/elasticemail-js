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
 * The ChannelLogStatusSummary model module.
 * @module model/ChannelLogStatusSummary
 * @version 4.0.20
 */
var ChannelLogStatusSummary = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelLogStatusSummary</code>.
   * Summary of channel log status
   * @alias module:model/ChannelLogStatusSummary
   */
  function ChannelLogStatusSummary() {
    _classCallCheck(this, ChannelLogStatusSummary);

    ChannelLogStatusSummary.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelLogStatusSummary, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChannelLogStatusSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelLogStatusSummary} obj Optional instance to populate.
     * @return {module:model/ChannelLogStatusSummary} The populated <code>ChannelLogStatusSummary</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelLogStatusSummary();

        if (data.hasOwnProperty('ChannelName')) {
          obj['ChannelName'] = _ApiClient["default"].convertToType(data['ChannelName'], 'String');
        }

        if (data.hasOwnProperty('Recipients')) {
          obj['Recipients'] = _ApiClient["default"].convertToType(data['Recipients'], 'Number');
        }

        if (data.hasOwnProperty('EmailTotal')) {
          obj['EmailTotal'] = _ApiClient["default"].convertToType(data['EmailTotal'], 'Number');
        }

        if (data.hasOwnProperty('SmsTotal')) {
          obj['SmsTotal'] = _ApiClient["default"].convertToType(data['SmsTotal'], 'Number');
        }

        if (data.hasOwnProperty('Delivered')) {
          obj['Delivered'] = _ApiClient["default"].convertToType(data['Delivered'], 'Number');
        }

        if (data.hasOwnProperty('Bounced')) {
          obj['Bounced'] = _ApiClient["default"].convertToType(data['Bounced'], 'Number');
        }

        if (data.hasOwnProperty('InProgress')) {
          obj['InProgress'] = _ApiClient["default"].convertToType(data['InProgress'], 'Number');
        }

        if (data.hasOwnProperty('Opened')) {
          obj['Opened'] = _ApiClient["default"].convertToType(data['Opened'], 'Number');
        }

        if (data.hasOwnProperty('Clicked')) {
          obj['Clicked'] = _ApiClient["default"].convertToType(data['Clicked'], 'Number');
        }

        if (data.hasOwnProperty('Unsubscribed')) {
          obj['Unsubscribed'] = _ApiClient["default"].convertToType(data['Unsubscribed'], 'Number');
        }

        if (data.hasOwnProperty('Complaints')) {
          obj['Complaints'] = _ApiClient["default"].convertToType(data['Complaints'], 'Number');
        }

        if (data.hasOwnProperty('Inbound')) {
          obj['Inbound'] = _ApiClient["default"].convertToType(data['Inbound'], 'Number');
        }

        if (data.hasOwnProperty('ManualCancel')) {
          obj['ManualCancel'] = _ApiClient["default"].convertToType(data['ManualCancel'], 'Number');
        }

        if (data.hasOwnProperty('NotDelivered')) {
          obj['NotDelivered'] = _ApiClient["default"].convertToType(data['NotDelivered'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ChannelLogStatusSummary;
}();
/**
 * Channel name
 * @member {String} ChannelName
 */


ChannelLogStatusSummary.prototype['ChannelName'] = undefined;
/**
 * Number of recipients
 * @member {Number} Recipients
 */

ChannelLogStatusSummary.prototype['Recipients'] = undefined;
/**
 * Number of emails
 * @member {Number} EmailTotal
 */

ChannelLogStatusSummary.prototype['EmailTotal'] = undefined;
/**
 * Number of SMS
 * @member {Number} SmsTotal
 */

ChannelLogStatusSummary.prototype['SmsTotal'] = undefined;
/**
 * Number of delivered messages
 * @member {Number} Delivered
 */

ChannelLogStatusSummary.prototype['Delivered'] = undefined;
/**
 * Number of bounced messages
 * @member {Number} Bounced
 */

ChannelLogStatusSummary.prototype['Bounced'] = undefined;
/**
 * Number of messages in progress
 * @member {Number} InProgress
 */

ChannelLogStatusSummary.prototype['InProgress'] = undefined;
/**
 * Number of opened messages
 * @member {Number} Opened
 */

ChannelLogStatusSummary.prototype['Opened'] = undefined;
/**
 * Number of clicked messages
 * @member {Number} Clicked
 */

ChannelLogStatusSummary.prototype['Clicked'] = undefined;
/**
 * Number of unsubscribed messages
 * @member {Number} Unsubscribed
 */

ChannelLogStatusSummary.prototype['Unsubscribed'] = undefined;
/**
 * Number of complaint messages
 * @member {Number} Complaints
 */

ChannelLogStatusSummary.prototype['Complaints'] = undefined;
/**
 * Number of inbound messages
 * @member {Number} Inbound
 */

ChannelLogStatusSummary.prototype['Inbound'] = undefined;
/**
 * Number of manually cancelled messages
 * @member {Number} ManualCancel
 */

ChannelLogStatusSummary.prototype['ManualCancel'] = undefined;
/**
 * Number of messages flagged with 'Not Delivered'
 * @member {Number} NotDelivered
 */

ChannelLogStatusSummary.prototype['NotDelivered'] = undefined;
var _default = ChannelLogStatusSummary;
exports["default"] = _default;