"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AccountStatusEnum = _interopRequireDefault(require("./AccountStatusEnum"));

var _SubaccountSettingsInfo = _interopRequireDefault(require("./SubaccountSettingsInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The SubAccountInfo model module.
 * @module model/SubAccountInfo
 * @version 4.0.20
 */
var SubAccountInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SubAccountInfo</code>.
   * Detailed information about SubAccount.
   * @alias module:model/SubAccountInfo
   */
  function SubAccountInfo() {
    _classCallCheck(this, SubAccountInfo);

    SubAccountInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SubAccountInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SubAccountInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubAccountInfo} obj Optional instance to populate.
     * @return {module:model/SubAccountInfo} The populated <code>SubAccountInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SubAccountInfo();

        if (data.hasOwnProperty('PublicAccountID')) {
          obj['PublicAccountID'] = _ApiClient["default"].convertToType(data['PublicAccountID'], 'String');
        }

        if (data.hasOwnProperty('Email')) {
          obj['Email'] = _ApiClient["default"].convertToType(data['Email'], 'String');
        }

        if (data.hasOwnProperty('Settings')) {
          obj['Settings'] = _SubaccountSettingsInfo["default"].constructFromObject(data['Settings']);
        }

        if (data.hasOwnProperty('LastActivity')) {
          obj['LastActivity'] = _ApiClient["default"].convertToType(data['LastActivity'], 'Date');
        }

        if (data.hasOwnProperty('EmailCredits')) {
          obj['EmailCredits'] = _ApiClient["default"].convertToType(data['EmailCredits'], 'Number');
        }

        if (data.hasOwnProperty('TotalEmailsSent')) {
          obj['TotalEmailsSent'] = _ApiClient["default"].convertToType(data['TotalEmailsSent'], 'Number');
        }

        if (data.hasOwnProperty('Reputation')) {
          obj['Reputation'] = _ApiClient["default"].convertToType(data['Reputation'], 'Number');
        }

        if (data.hasOwnProperty('Status')) {
          obj['Status'] = _AccountStatusEnum["default"].constructFromObject(data['Status']);
        }

        if (data.hasOwnProperty('ContactsCount')) {
          obj['ContactsCount'] = _ApiClient["default"].convertToType(data['ContactsCount'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return SubAccountInfo;
}();
/**
 * Public key for limited access to your Account such as contact/add so you can use it safely on public websites.
 * @member {String} PublicAccountID
 */


SubAccountInfo.prototype['PublicAccountID'] = undefined;
/**
 * Proper email address.
 * @member {String} Email
 */

SubAccountInfo.prototype['Email'] = undefined;
/**
 * @member {module:model/SubaccountSettingsInfo} Settings
 */

SubAccountInfo.prototype['Settings'] = undefined;
/**
 * Date of last activity on Account
 * @member {Date} LastActivity
 */

SubAccountInfo.prototype['LastActivity'] = undefined;
/**
 * Amount of email credits
 * @member {Number} EmailCredits
 */

SubAccountInfo.prototype['EmailCredits'] = undefined;
/**
 * Amount of emails sent from this Account
 * @member {Number} TotalEmailsSent
 */

SubAccountInfo.prototype['TotalEmailsSent'] = undefined;
/**
 * Numeric reputation
 * @member {Number} Reputation
 */

SubAccountInfo.prototype['Reputation'] = undefined;
/**
 * @member {module:model/AccountStatusEnum} Status
 */

SubAccountInfo.prototype['Status'] = undefined;
/**
 * How many contacts this SubAccount has stored
 * @member {Number} ContactsCount
 */

SubAccountInfo.prototype['ContactsCount'] = undefined;
var _default = SubAccountInfo;
exports["default"] = _default;