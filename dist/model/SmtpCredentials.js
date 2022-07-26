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
 * The SmtpCredentials model module.
 * @module model/SmtpCredentials
 * @version 4.0.20
 */
var SmtpCredentials = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SmtpCredentials</code>.
   * SMTP Credentials info
   * @alias module:model/SmtpCredentials
   */
  function SmtpCredentials() {
    _classCallCheck(this, SmtpCredentials);

    SmtpCredentials.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SmtpCredentials, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SmtpCredentials</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SmtpCredentials} obj Optional instance to populate.
     * @return {module:model/SmtpCredentials} The populated <code>SmtpCredentials</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SmtpCredentials();

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

  return SmtpCredentials;
}();
/**
 * @member {module:model/AccessLevel} AccessLevel
 */


SmtpCredentials.prototype['AccessLevel'] = undefined;
/**
 * Name of the key.
 * @member {String} Name
 */

SmtpCredentials.prototype['Name'] = undefined;
/**
 * Date this SmtpCredential was created.
 * @member {Date} DateCreated
 */

SmtpCredentials.prototype['DateCreated'] = undefined;
/**
 * Date this SmtpCredential was last used.
 * @member {Date} LastUse
 */

SmtpCredentials.prototype['LastUse'] = undefined;
/**
 * Date this SmtpCredential expires.
 * @member {Date} Expires
 */

SmtpCredentials.prototype['Expires'] = undefined;
/**
 * Which IPs can use this SmtpCredential
 * @member {Array.<String>} RestrictAccessToIPRange
 */

SmtpCredentials.prototype['RestrictAccessToIPRange'] = undefined;
var _default = SmtpCredentials;
exports["default"] = _default;