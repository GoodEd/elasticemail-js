"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SubaccountEmailSettings = _interopRequireDefault(require("./SubaccountEmailSettings"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The SubaccountSettingsInfo model module.
 * @module model/SubaccountSettingsInfo
 * @version 4.0.20
 */
var SubaccountSettingsInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SubaccountSettingsInfo</code>.
   * SubAccount settings
   * @alias module:model/SubaccountSettingsInfo
   */
  function SubaccountSettingsInfo() {
    _classCallCheck(this, SubaccountSettingsInfo);

    SubaccountSettingsInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SubaccountSettingsInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SubaccountSettingsInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubaccountSettingsInfo} obj Optional instance to populate.
     * @return {module:model/SubaccountSettingsInfo} The populated <code>SubaccountSettingsInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SubaccountSettingsInfo();

        if (data.hasOwnProperty('Email')) {
          obj['Email'] = _SubaccountEmailSettings["default"].constructFromObject(data['Email']);
        }
      }

      return obj;
    }
  }]);

  return SubaccountSettingsInfo;
}();
/**
 * @member {module:model/SubaccountEmailSettings} Email
 */


SubaccountSettingsInfo.prototype['Email'] = undefined;
var _default = SubaccountSettingsInfo;
exports["default"] = _default;