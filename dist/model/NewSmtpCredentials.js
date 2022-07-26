"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AccessLevel = _interopRequireDefault(require("./AccessLevel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The NewSmtpCredentials model module.
 * @module model/NewSmtpCredentials
 * @version 4.0.20
 */
var NewSmtpCredentials = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewSmtpCredentials</code>.
   * Newly generated SMTP Credentials with Token
   * @alias module:model/NewSmtpCredentials
   */
  function NewSmtpCredentials() {
    _classCallCheck(this, NewSmtpCredentials);

    NewSmtpCredentials.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewSmtpCredentials, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NewSmtpCredentials</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewSmtpCredentials} obj Optional instance to populate.
     * @return {module:model/NewSmtpCredentials} The populated <code>NewSmtpCredentials</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewSmtpCredentials();

        if (data.hasOwnProperty('Token')) {
          obj['Token'] = _ApiClient["default"].convertToType(data['Token'], 'String');
        }

        if (data.hasOwnProperty('AccessLevel')) {
          obj['AccessLevel'] = _AccessLevel["default"].constructFromObject(data['AccessLevel']);
        }

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('DateCreated')) {
          obj['DateCreated'] = _ApiClient["default"].convertToType(data['DateCreated'], 'Date');
        }

        if (data.hasOwnProperty('LastUse')) {
          obj['LastUse'] = _ApiClient["default"].convertToType(data['LastUse'], 'Date');
        }

        if (data.hasOwnProperty('Expires')) {
          obj['Expires'] = _ApiClient["default"].convertToType(data['Expires'], 'Date');
        }

        if (data.hasOwnProperty('RestrictAccessToIPRange')) {
          obj['RestrictAccessToIPRange'] = _ApiClient["default"].convertToType(data['RestrictAccessToIPRange'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return NewSmtpCredentials;
}();
/**
 * Unique token to be used in the system
 * @member {String} Token
 */


NewSmtpCredentials.prototype['Token'] = undefined;
/**
 * @member {module:model/AccessLevel} AccessLevel
 */

NewSmtpCredentials.prototype['AccessLevel'] = undefined;
/**
 * Name of the key.
 * @member {String} Name
 */

NewSmtpCredentials.prototype['Name'] = undefined;
/**
 * Date this SmtpCredential was created.
 * @member {Date} DateCreated
 */

NewSmtpCredentials.prototype['DateCreated'] = undefined;
/**
 * Date this SmtpCredential was last used.
 * @member {Date} LastUse
 */

NewSmtpCredentials.prototype['LastUse'] = undefined;
/**
 * Date this SmtpCredential expires.
 * @member {Date} Expires
 */

NewSmtpCredentials.prototype['Expires'] = undefined;
/**
 * Which IPs can use this SmtpCredential
 * @member {Array.<String>} RestrictAccessToIPRange
 */

NewSmtpCredentials.prototype['RestrictAccessToIPRange'] = undefined;
var _default = NewSmtpCredentials;
exports["default"] = _default;