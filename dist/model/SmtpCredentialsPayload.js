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
 * The SmtpCredentialsPayload model module.
 * @module model/SmtpCredentialsPayload
 * @version 4.0.20
 */
var SmtpCredentialsPayload = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SmtpCredentialsPayload</code>.
   * Create new SMTP Credentials
   * @alias module:model/SmtpCredentialsPayload
   * @param name {String} Name of the Credential for ease of reference. It must be a valid email address.
   */
  function SmtpCredentialsPayload(name) {
    _classCallCheck(this, SmtpCredentialsPayload);

    SmtpCredentialsPayload.initialize(this, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SmtpCredentialsPayload, null, [{
    key: "initialize",
    value: function initialize(obj, name) {
      obj['Name'] = name;
    }
    /**
     * Constructs a <code>SmtpCredentialsPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SmtpCredentialsPayload} obj Optional instance to populate.
     * @return {module:model/SmtpCredentialsPayload} The populated <code>SmtpCredentialsPayload</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SmtpCredentialsPayload();

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('Expires')) {
          obj['Expires'] = _ApiClient["default"].convertToType(data['Expires'], 'Date');
        }

        if (data.hasOwnProperty('RestrictAccessToIPRange')) {
          obj['RestrictAccessToIPRange'] = _ApiClient["default"].convertToType(data['RestrictAccessToIPRange'], ['String']);
        }

        if (data.hasOwnProperty('Subaccount')) {
          obj['Subaccount'] = _ApiClient["default"].convertToType(data['Subaccount'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SmtpCredentialsPayload;
}();
/**
 * Name of the Credential for ease of reference. It must be a valid email address.
 * @member {String} Name
 */


SmtpCredentialsPayload.prototype['Name'] = undefined;
/**
 * Date this SmtpCredential expires.
 * @member {Date} Expires
 */

SmtpCredentialsPayload.prototype['Expires'] = undefined;
/**
 * Which IPs can use this SmtpCredential
 * @member {Array.<String>} RestrictAccessToIPRange
 */

SmtpCredentialsPayload.prototype['RestrictAccessToIPRange'] = undefined;
/**
 * Email of the subaccount for which this SmtpCredential should be created
 * @member {String} Subaccount
 */

SmtpCredentialsPayload.prototype['Subaccount'] = undefined;
var _default = SmtpCredentialsPayload;
exports["default"] = _default;