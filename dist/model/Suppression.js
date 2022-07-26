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
 * The Suppression model module.
 * @module model/Suppression
 * @version 4.0.20
 */
var Suppression = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Suppression</code>.
   * Suppression - Email returning Hard Bounces
   * @alias module:model/Suppression
   */
  function Suppression() {
    _classCallCheck(this, Suppression);

    Suppression.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Suppression, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Suppression</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Suppression} obj Optional instance to populate.
     * @return {module:model/Suppression} The populated <code>Suppression</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Suppression();

        if (data.hasOwnProperty('Email')) {
          obj['Email'] = _ApiClient["default"].convertToType(data['Email'], 'String');
        }

        if (data.hasOwnProperty('FriendlyErrorMessage')) {
          obj['FriendlyErrorMessage'] = _ApiClient["default"].convertToType(data['FriendlyErrorMessage'], 'String');
        }

        if (data.hasOwnProperty('ErrorCode')) {
          obj['ErrorCode'] = _ApiClient["default"].convertToType(data['ErrorCode'], 'Number');
        }

        if (data.hasOwnProperty('DateUpdated')) {
          obj['DateUpdated'] = _ApiClient["default"].convertToType(data['DateUpdated'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return Suppression;
}();
/**
 * Proper email address.
 * @member {String} Email
 */


Suppression.prototype['Email'] = undefined;
/**
 * RFC error message
 * @member {String} FriendlyErrorMessage
 */

Suppression.prototype['FriendlyErrorMessage'] = undefined;
/**
 * SMTP Error code
 * @member {Number} ErrorCode
 */

Suppression.prototype['ErrorCode'] = undefined;
/**
 * Last change date
 * @member {Date} DateUpdated
 */

Suppression.prototype['DateUpdated'] = undefined;
var _default = Suppression;
exports["default"] = _default;