"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ContactHistEventType = _interopRequireDefault(require("./ContactHistEventType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ContactHistory model module.
 * @module model/ContactHistory
 * @version 4.0.20
 */
var ContactHistory = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ContactHistory</code>.
   * @alias module:model/ContactHistory
   */
  function ContactHistory() {
    _classCallCheck(this, ContactHistory);

    ContactHistory.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ContactHistory, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ContactHistory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContactHistory} obj Optional instance to populate.
     * @return {module:model/ContactHistory} The populated <code>ContactHistory</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ContactHistory();

        if (data.hasOwnProperty('EventType')) {
          obj['EventType'] = _ContactHistEventType["default"].constructFromObject(data['EventType']);
        }

        if (data.hasOwnProperty('EventDate')) {
          obj['EventDate'] = _ApiClient["default"].convertToType(data['EventDate'], 'Date');
        }

        if (data.hasOwnProperty('ChannelName')) {
          obj['ChannelName'] = _ApiClient["default"].convertToType(data['ChannelName'], 'String');
        }

        if (data.hasOwnProperty('TemplateName')) {
          obj['TemplateName'] = _ApiClient["default"].convertToType(data['TemplateName'], 'String');
        }

        if (data.hasOwnProperty('IPAddress')) {
          obj['IPAddress'] = _ApiClient["default"].convertToType(data['IPAddress'], 'String');
        }

        if (data.hasOwnProperty('Country')) {
          obj['Country'] = _ApiClient["default"].convertToType(data['Country'], 'String');
        }

        if (data.hasOwnProperty('Data')) {
          obj['Data'] = _ApiClient["default"].convertToType(data['Data'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ContactHistory;
}();
/**
 * @member {module:model/ContactHistEventType} EventType
 */


ContactHistory.prototype['EventType'] = undefined;
/**
 * Formatted date of event.
 * @member {Date} EventDate
 */

ContactHistory.prototype['EventDate'] = undefined;
/**
 * Name of channel this event occured on
 * @member {String} ChannelName
 */

ContactHistory.prototype['ChannelName'] = undefined;
/**
 * Name of template this event occured on
 * @member {String} TemplateName
 */

ContactHistory.prototype['TemplateName'] = undefined;
/**
 * IP Address of the event.
 * @member {String} IPAddress
 */

ContactHistory.prototype['IPAddress'] = undefined;
/**
 * Country of the event.
 * @member {String} Country
 */

ContactHistory.prototype['Country'] = undefined;
/**
 * Additional information about the event
 * @member {String} Data
 */

ContactHistory.prototype['Data'] = undefined;
var _default = ContactHistory;
exports["default"] = _default;