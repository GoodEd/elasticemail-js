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
 * The NewApiKey model module.
 * @module model/NewApiKey
 * @version 4.0.20
 */
var NewApiKey = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewApiKey</code>.
   * Newly generated ApiKey with Token
   * @alias module:model/NewApiKey
   */
  function NewApiKey() {
    _classCallCheck(this, NewApiKey);

    NewApiKey.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewApiKey, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NewApiKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewApiKey} obj Optional instance to populate.
     * @return {module:model/NewApiKey} The populated <code>NewApiKey</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewApiKey();

        if (data.hasOwnProperty('Token')) {
          obj['Token'] = _ApiClient["default"].convertToType(data['Token'], 'String');
        }

        if (data.hasOwnProperty('AccessLevel')) {
          obj['AccessLevel'] = _ApiClient["default"].convertToType(data['AccessLevel'], [_AccessLevel["default"]]);
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

  return NewApiKey;
}();
/**
 * Unique token to be used in the system
 * @member {String} Token
 */


NewApiKey.prototype['Token'] = undefined;
/**
 * Access level or permission to be assigned to this ApiKey.
 * @member {Array.<module:model/AccessLevel>} AccessLevel
 */

NewApiKey.prototype['AccessLevel'] = undefined;
/**
 * Name of the ApiKey.
 * @member {String} Name
 */

NewApiKey.prototype['Name'] = undefined;
/**
 * Date this ApiKey was created.
 * @member {Date} DateCreated
 */

NewApiKey.prototype['DateCreated'] = undefined;
/**
 * Date this ApiKey was last used.
 * @member {Date} LastUse
 */

NewApiKey.prototype['LastUse'] = undefined;
/**
 * Date this ApiKey expires.
 * @member {Date} Expires
 */

NewApiKey.prototype['Expires'] = undefined;
/**
 * Which IPs can use this ApiKey
 * @member {Array.<String>} RestrictAccessToIPRange
 */

NewApiKey.prototype['RestrictAccessToIPRange'] = undefined;
var _default = NewApiKey;
exports["default"] = _default;