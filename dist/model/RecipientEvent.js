"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EventType = _interopRequireDefault(require("./EventType"));

var _MessageCategory = _interopRequireDefault(require("./MessageCategory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The RecipientEvent model module.
 * @module model/RecipientEvent
 * @version 4.0.20
 */
var RecipientEvent = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RecipientEvent</code>.
   * Detailed information about message recipient
   * @alias module:model/RecipientEvent
   */
  function RecipientEvent() {
    _classCallCheck(this, RecipientEvent);

    RecipientEvent.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RecipientEvent, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RecipientEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RecipientEvent} obj Optional instance to populate.
     * @return {module:model/RecipientEvent} The populated <code>RecipientEvent</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RecipientEvent();

        if (data.hasOwnProperty('TransactionID')) {
          obj['TransactionID'] = _ApiClient["default"].convertToType(data['TransactionID'], 'String');
        }

        if (data.hasOwnProperty('MsgID')) {
          obj['MsgID'] = _ApiClient["default"].convertToType(data['MsgID'], 'String');
        }

        if (data.hasOwnProperty('FromEmail')) {
          obj['FromEmail'] = _ApiClient["default"].convertToType(data['FromEmail'], 'String');
        }

        if (data.hasOwnProperty('To')) {
          obj['To'] = _ApiClient["default"].convertToType(data['To'], 'String');
        }

        if (data.hasOwnProperty('Subject')) {
          obj['Subject'] = _ApiClient["default"].convertToType(data['Subject'], 'String');
        }

        if (data.hasOwnProperty('EventType')) {
          obj['EventType'] = _EventType["default"].constructFromObject(data['EventType']);
        }

        if (data.hasOwnProperty('EventDate')) {
          obj['EventDate'] = _ApiClient["default"].convertToType(data['EventDate'], 'Date');
        }

        if (data.hasOwnProperty('ChannelName')) {
          obj['ChannelName'] = _ApiClient["default"].convertToType(data['ChannelName'], 'String');
        }

        if (data.hasOwnProperty('MessageCategory')) {
          obj['MessageCategory'] = _MessageCategory["default"].constructFromObject(data['MessageCategory']);
        }

        if (data.hasOwnProperty('NextTryOn')) {
          obj['NextTryOn'] = _ApiClient["default"].convertToType(data['NextTryOn'], 'Date');
        }

        if (data.hasOwnProperty('Message')) {
          obj['Message'] = _ApiClient["default"].convertToType(data['Message'], 'String');
        }

        if (data.hasOwnProperty('IPAddress')) {
          obj['IPAddress'] = _ApiClient["default"].convertToType(data['IPAddress'], 'String');
        }

        if (data.hasOwnProperty('PoolName')) {
          obj['PoolName'] = _ApiClient["default"].convertToType(data['PoolName'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RecipientEvent;
}();
/**
 * ID number of transaction
 * @member {String} TransactionID
 */


RecipientEvent.prototype['TransactionID'] = undefined;
/**
 * ID number of selected message.
 * @member {String} MsgID
 */

RecipientEvent.prototype['MsgID'] = undefined;
/**
 * Default From: email address.
 * @member {String} FromEmail
 */

RecipientEvent.prototype['FromEmail'] = undefined;
/**
 * Ending date for search in YYYY-MM-DDThh:mm:ss format.
 * @member {String} To
 */

RecipientEvent.prototype['To'] = undefined;
/**
 * Default subject of email.
 * @member {String} Subject
 */

RecipientEvent.prototype['Subject'] = undefined;
/**
 * @member {module:model/EventType} EventType
 */

RecipientEvent.prototype['EventType'] = undefined;
/**
 * Creation date
 * @member {Date} EventDate
 */

RecipientEvent.prototype['EventDate'] = undefined;
/**
 * Name of selected channel.
 * @member {String} ChannelName
 */

RecipientEvent.prototype['ChannelName'] = undefined;
/**
 * @member {module:model/MessageCategory} MessageCategory
 */

RecipientEvent.prototype['MessageCategory'] = undefined;
/**
 * Date of next try
 * @member {Date} NextTryOn
 */

RecipientEvent.prototype['NextTryOn'] = undefined;
/**
 * Content of message, HTML encoded
 * @member {String} Message
 */

RecipientEvent.prototype['Message'] = undefined;
/**
 * IP which this email was sent through
 * @member {String} IPAddress
 */

RecipientEvent.prototype['IPAddress'] = undefined;
/**
 * Name of an IP pool this email was sent through
 * @member {String} PoolName
 */

RecipientEvent.prototype['PoolName'] = undefined;
var _default = RecipientEvent;
exports["default"] = _default;