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
 * The ContactActivity model module.
 * @module model/ContactActivity
 * @version 4.0.20
 */
var ContactActivity = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ContactActivity</code>.
   * @alias module:model/ContactActivity
   */
  function ContactActivity() {
    _classCallCheck(this, ContactActivity);

    ContactActivity.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ContactActivity, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ContactActivity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContactActivity} obj Optional instance to populate.
     * @return {module:model/ContactActivity} The populated <code>ContactActivity</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ContactActivity();

        if (data.hasOwnProperty('TotalSent')) {
          obj['TotalSent'] = _ApiClient["default"].convertToType(data['TotalSent'], 'Number');
        }

        if (data.hasOwnProperty('TotalOpened')) {
          obj['TotalOpened'] = _ApiClient["default"].convertToType(data['TotalOpened'], 'Number');
        }

        if (data.hasOwnProperty('TotalClicked')) {
          obj['TotalClicked'] = _ApiClient["default"].convertToType(data['TotalClicked'], 'Number');
        }

        if (data.hasOwnProperty('TotalFailed')) {
          obj['TotalFailed'] = _ApiClient["default"].convertToType(data['TotalFailed'], 'Number');
        }

        if (data.hasOwnProperty('LastSent')) {
          obj['LastSent'] = _ApiClient["default"].convertToType(data['LastSent'], 'Date');
        }

        if (data.hasOwnProperty('LastOpened')) {
          obj['LastOpened'] = _ApiClient["default"].convertToType(data['LastOpened'], 'Date');
        }

        if (data.hasOwnProperty('LastClicked')) {
          obj['LastClicked'] = _ApiClient["default"].convertToType(data['LastClicked'], 'Date');
        }

        if (data.hasOwnProperty('LastFailed')) {
          obj['LastFailed'] = _ApiClient["default"].convertToType(data['LastFailed'], 'Date');
        }

        if (data.hasOwnProperty('LastIP')) {
          obj['LastIP'] = _ApiClient["default"].convertToType(data['LastIP'], 'String');
        }

        if (data.hasOwnProperty('ErrorCode')) {
          obj['ErrorCode'] = _ApiClient["default"].convertToType(data['ErrorCode'], 'Number');
        }

        if (data.hasOwnProperty('FriendlyErrorMessage')) {
          obj['FriendlyErrorMessage'] = _ApiClient["default"].convertToType(data['FriendlyErrorMessage'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ContactActivity;
}();
/**
 * Total emails sent.
 * @member {Number} TotalSent
 */


ContactActivity.prototype['TotalSent'] = undefined;
/**
 * Total emails opened.
 * @member {Number} TotalOpened
 */

ContactActivity.prototype['TotalOpened'] = undefined;
/**
 * Total emails clicked
 * @member {Number} TotalClicked
 */

ContactActivity.prototype['TotalClicked'] = undefined;
/**
 * Total emails failed.
 * @member {Number} TotalFailed
 */

ContactActivity.prototype['TotalFailed'] = undefined;
/**
 * Last date when an email was sent to this contact
 * @member {Date} LastSent
 */

ContactActivity.prototype['LastSent'] = undefined;
/**
 * Date this contact last opened an email
 * @member {Date} LastOpened
 */

ContactActivity.prototype['LastOpened'] = undefined;
/**
 * Date this contact last clicked an email
 * @member {Date} LastClicked
 */

ContactActivity.prototype['LastClicked'] = undefined;
/**
 * Last date when an email sent to this contact bounced
 * @member {Date} LastFailed
 */

ContactActivity.prototype['LastFailed'] = undefined;
/**
 * IP from which this contact opened or clicked their email last time
 * @member {String} LastIP
 */

ContactActivity.prototype['LastIP'] = undefined;
/**
 * Last RFC Error code if any occurred
 * @member {Number} ErrorCode
 */

ContactActivity.prototype['ErrorCode'] = undefined;
/**
 * Last RFC error message if any occurred
 * @member {String} FriendlyErrorMessage
 */

ContactActivity.prototype['FriendlyErrorMessage'] = undefined;
var _default = ContactActivity;
exports["default"] = _default;