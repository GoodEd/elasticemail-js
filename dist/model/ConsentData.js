"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ConsentTracking = _interopRequireDefault(require("./ConsentTracking"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ConsentData model module.
 * @module model/ConsentData
 * @version 4.0.20
 */
var ConsentData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConsentData</code>.
   * @alias module:model/ConsentData
   */
  function ConsentData() {
    _classCallCheck(this, ConsentData);

    ConsentData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConsentData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ConsentData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConsentData} obj Optional instance to populate.
     * @return {module:model/ConsentData} The populated <code>ConsentData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConsentData();

        if (data.hasOwnProperty('ConsentIP')) {
          obj['ConsentIP'] = _ApiClient["default"].convertToType(data['ConsentIP'], 'String');
        }

        if (data.hasOwnProperty('ConsentDate')) {
          obj['ConsentDate'] = _ApiClient["default"].convertToType(data['ConsentDate'], 'Date');
        }

        if (data.hasOwnProperty('ConsentTracking')) {
          obj['ConsentTracking'] = _ConsentTracking["default"].constructFromObject(data['ConsentTracking']);
        }
      }

      return obj;
    }
  }]);

  return ConsentData;
}();
/**
 * IP address of consent to send this contact(s) your email. If not provided your current public IP address is used for consent.
 * @member {String} ConsentIP
 */


ConsentData.prototype['ConsentIP'] = undefined;
/**
 * Date of consent to send this contact(s) your email. If not provided current date is used for consent.
 * @member {Date} ConsentDate
 */

ConsentData.prototype['ConsentDate'] = undefined;
/**
 * @member {module:model/ConsentTracking} ConsentTracking
 */

ConsentData.prototype['ConsentTracking'] = undefined;
var _default = ConsentData;
exports["default"] = _default;