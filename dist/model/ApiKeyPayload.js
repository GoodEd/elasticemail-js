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
 * The ApiKeyPayload model module.
 * @module model/ApiKeyPayload
 * @version 4.0.20
 */
var ApiKeyPayload = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ApiKeyPayload</code>.
   * Create a new ApiKey
   * @alias module:model/ApiKeyPayload
   * @param name {String} Name of the ApiKey for ease of reference.
   * @param accessLevel {Array.<module:model/AccessLevel>} Access level or permission to be assigned to this ApiKey.
   */
  function ApiKeyPayload(name, accessLevel) {
    _classCallCheck(this, ApiKeyPayload);

    ApiKeyPayload.initialize(this, name, accessLevel);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ApiKeyPayload, null, [{
    key: "initialize",
    value: function initialize(obj, name, accessLevel) {
      obj['Name'] = name;
      obj['AccessLevel'] = accessLevel;
    }
    /**
     * Constructs a <code>ApiKeyPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiKeyPayload} obj Optional instance to populate.
     * @return {module:model/ApiKeyPayload} The populated <code>ApiKeyPayload</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ApiKeyPayload();

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('AccessLevel')) {
          obj['AccessLevel'] = _ApiClient["default"].convertToType(data['AccessLevel'], [_AccessLevel["default"]]);
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

  return ApiKeyPayload;
}();
/**
 * Name of the ApiKey for ease of reference.
 * @member {String} Name
 */


ApiKeyPayload.prototype['Name'] = undefined;
/**
 * Access level or permission to be assigned to this ApiKey.
 * @member {Array.<module:model/AccessLevel>} AccessLevel
 */

ApiKeyPayload.prototype['AccessLevel'] = undefined;
/**
 * Date this ApiKey expires.
 * @member {Date} Expires
 */

ApiKeyPayload.prototype['Expires'] = undefined;
/**
 * Which IPs can use this ApiKey
 * @member {Array.<String>} RestrictAccessToIPRange
 */

ApiKeyPayload.prototype['RestrictAccessToIPRange'] = undefined;
/**
 * Email of the subaccount for which this ApiKey should be created
 * @member {String} Subaccount
 */

ApiKeyPayload.prototype['Subaccount'] = undefined;
var _default = ApiKeyPayload;
exports["default"] = _default;