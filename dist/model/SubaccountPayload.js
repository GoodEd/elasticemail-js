"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SubaccountSettingsInfoPayload = _interopRequireDefault(require("./SubaccountSettingsInfoPayload"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The SubaccountPayload model module.
 * @module model/SubaccountPayload
 * @version 4.0.20
 */
var SubaccountPayload = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SubaccountPayload</code>.
   * New SubAccount payload
   * @alias module:model/SubaccountPayload
   * @param email {String} Proper email address.
   * @param password {String} Current password.
   */
  function SubaccountPayload(email, password) {
    _classCallCheck(this, SubaccountPayload);

    SubaccountPayload.initialize(this, email, password);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SubaccountPayload, null, [{
    key: "initialize",
    value: function initialize(obj, email, password) {
      obj['Email'] = email;
      obj['Password'] = password;
    }
    /**
     * Constructs a <code>SubaccountPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubaccountPayload} obj Optional instance to populate.
     * @return {module:model/SubaccountPayload} The populated <code>SubaccountPayload</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SubaccountPayload();

        if (data.hasOwnProperty('Email')) {
          obj['Email'] = _ApiClient["default"].convertToType(data['Email'], 'String');
        }

        if (data.hasOwnProperty('Password')) {
          obj['Password'] = _ApiClient["default"].convertToType(data['Password'], 'String');
        }

        if (data.hasOwnProperty('SendActivation')) {
          obj['SendActivation'] = _ApiClient["default"].convertToType(data['SendActivation'], 'Boolean');
        }

        if (data.hasOwnProperty('Settings')) {
          obj['Settings'] = _SubaccountSettingsInfoPayload["default"].constructFromObject(data['Settings']);
        }
      }

      return obj;
    }
  }]);

  return SubaccountPayload;
}();
/**
 * Proper email address.
 * @member {String} Email
 */


SubaccountPayload.prototype['Email'] = undefined;
/**
 * Current password.
 * @member {String} Password
 */

SubaccountPayload.prototype['Password'] = undefined;
/**
 * True, if you want to send activation email to this Account to confirm the creation of a new SubAccount. Otherwise, false (SubAccount will immediately be Active).
 * @member {Boolean} SendActivation
 */

SubaccountPayload.prototype['SendActivation'] = undefined;
/**
 * @member {module:model/SubaccountSettingsInfoPayload} Settings
 */

SubaccountPayload.prototype['Settings'] = undefined;
var _default = SubaccountPayload;
exports["default"] = _default;