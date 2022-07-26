"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LogJobStatus = _interopRequireDefault(require("./LogJobStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The EmailStatus model module.
 * @module model/EmailStatus
 * @version 4.0.20
 */
var EmailStatus = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailStatus</code>.
   * Status information of the specified email
   * @alias module:model/EmailStatus
   */
  function EmailStatus() {
    _classCallCheck(this, EmailStatus);

    EmailStatus.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailStatus, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmailStatus} obj Optional instance to populate.
     * @return {module:model/EmailStatus} The populated <code>EmailStatus</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailStatus();

        if (data.hasOwnProperty('From')) {
          obj['From'] = _ApiClient["default"].convertToType(data['From'], 'String');
        }

        if (data.hasOwnProperty('To')) {
          obj['To'] = _ApiClient["default"].convertToType(data['To'], 'String');
        }

        if (data.hasOwnProperty('Date')) {
          obj['Date'] = _ApiClient["default"].convertToType(data['Date'], 'Date');
        }

        if (data.hasOwnProperty('Status')) {
          obj['Status'] = _LogJobStatus["default"].constructFromObject(data['Status']);
        }

        if (data.hasOwnProperty('StatusName')) {
          obj['StatusName'] = _ApiClient["default"].convertToType(data['StatusName'], 'String');
        }

        if (data.hasOwnProperty('StatusChangeDate')) {
          obj['StatusChangeDate'] = _ApiClient["default"].convertToType(data['StatusChangeDate'], 'Date');
        }

        if (data.hasOwnProperty('DateSent')) {
          obj['DateSent'] = _ApiClient["default"].convertToType(data['DateSent'], 'Date');
        }

        if (data.hasOwnProperty('DateOpened')) {
          obj['DateOpened'] = _ApiClient["default"].convertToType(data['DateOpened'], 'Date');
        }

        if (data.hasOwnProperty('DateClicked')) {
          obj['DateClicked'] = _ApiClient["default"].convertToType(data['DateClicked'], 'Date');
        }

        if (data.hasOwnProperty('ErrorMessage')) {
          obj['ErrorMessage'] = _ApiClient["default"].convertToType(data['ErrorMessage'], 'String');
        }

        if (data.hasOwnProperty('TransactionID')) {
          obj['TransactionID'] = _ApiClient["default"].convertToType(data['TransactionID'], 'String');
        }

        if (data.hasOwnProperty('EnvelopeFrom')) {
          obj['EnvelopeFrom'] = _ApiClient["default"].convertToType(data['EnvelopeFrom'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EmailStatus;
}();
/**
 * Email address this email was sent from.
 * @member {String} From
 */


EmailStatus.prototype['From'] = undefined;
/**
 * Email address this email was sent to.
 * @member {String} To
 */

EmailStatus.prototype['To'] = undefined;
/**
 * Date the email was submitted.
 * @member {Date} Date
 */

EmailStatus.prototype['Date'] = undefined;
/**
 * @member {module:model/LogJobStatus} Status
 */

EmailStatus.prototype['Status'] = undefined;
/**
 * Name of email's status
 * @member {String} StatusName
 */

EmailStatus.prototype['StatusName'] = undefined;
/**
 * Date of last status change.
 * @member {Date} StatusChangeDate
 */

EmailStatus.prototype['StatusChangeDate'] = undefined;
/**
 * Date when the email was sent
 * @member {Date} DateSent
 */

EmailStatus.prototype['DateSent'] = undefined;
/**
 * Date when the email changed the status to 'opened'
 * @member {Date} DateOpened
 */

EmailStatus.prototype['DateOpened'] = undefined;
/**
 * Date when the email changed the status to 'clicked'
 * @member {Date} DateClicked
 */

EmailStatus.prototype['DateClicked'] = undefined;
/**
 * Detailed error or bounced message.
 * @member {String} ErrorMessage
 */

EmailStatus.prototype['ErrorMessage'] = undefined;
/**
 * ID number of transaction
 * @member {String} TransactionID
 */

EmailStatus.prototype['TransactionID'] = undefined;
/**
 * Envelope from address
 * @member {String} EnvelopeFrom
 */

EmailStatus.prototype['EnvelopeFrom'] = undefined;
var _default = EmailStatus;
exports["default"] = _default;