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
 * The LogStatusSummary model module.
 * @module model/LogStatusSummary
 * @version 4.0.20
 */
var LogStatusSummary = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LogStatusSummary</code>.
   * Summary of log status
   * @alias module:model/LogStatusSummary
   */
  function LogStatusSummary() {
    _classCallCheck(this, LogStatusSummary);

    LogStatusSummary.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LogStatusSummary, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LogStatusSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LogStatusSummary} obj Optional instance to populate.
     * @return {module:model/LogStatusSummary} The populated <code>LogStatusSummary</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LogStatusSummary();

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

  return LogStatusSummary;
}();
/**
 * Number of recipients
 * @member {Number} Recipients
 */


LogStatusSummary.prototype['Recipients'] = undefined;
/**
 * Number of emails
 * @member {Number} EmailTotal
 */

LogStatusSummary.prototype['EmailTotal'] = undefined;
/**
 * Number of SMS
 * @member {Number} SmsTotal
 */

LogStatusSummary.prototype['SmsTotal'] = undefined;
/**
 * Number of delivered messages
 * @member {Number} Delivered
 */

LogStatusSummary.prototype['Delivered'] = undefined;
/**
 * Number of bounced messages
 * @member {Number} Bounced
 */

LogStatusSummary.prototype['Bounced'] = undefined;
/**
 * Number of messages in progress
 * @member {Number} InProgress
 */

LogStatusSummary.prototype['InProgress'] = undefined;
/**
 * Number of opened messages
 * @member {Number} Opened
 */

LogStatusSummary.prototype['Opened'] = undefined;
/**
 * Number of clicked messages
 * @member {Number} Clicked
 */

LogStatusSummary.prototype['Clicked'] = undefined;
/**
 * Number of unsubscribed messages
 * @member {Number} Unsubscribed
 */

LogStatusSummary.prototype['Unsubscribed'] = undefined;
/**
 * Number of complaint messages
 * @member {Number} Complaints
 */

LogStatusSummary.prototype['Complaints'] = undefined;
/**
 * Number of inbound messages
 * @member {Number} Inbound
 */

LogStatusSummary.prototype['Inbound'] = undefined;
/**
 * Number of manually cancelled messages
 * @member {Number} ManualCancel
 */

LogStatusSummary.prototype['ManualCancel'] = undefined;
/**
 * Number of messages flagged with 'Not Delivered'
 * @member {Number} NotDelivered
 */

LogStatusSummary.prototype['NotDelivered'] = undefined;
var _default = LogStatusSummary;
exports["default"] = _default;