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
 * The Utm model module.
 * @module model/Utm
 * @version 4.0.20
 */
var Utm = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Utm</code>.
   * Utm marketing data to be attached to every link in this e-mail.
   * @alias module:model/Utm
   */
  function Utm() {
    _classCallCheck(this, Utm);

    Utm.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Utm, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Utm</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Utm} obj Optional instance to populate.
     * @return {module:model/Utm} The populated <code>Utm</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Utm();

        if (data.hasOwnProperty('Source')) {
          obj['Source'] = _ApiClient["default"].convertToType(data['Source'], 'String');
        }

        if (data.hasOwnProperty('Medium')) {
          obj['Medium'] = _ApiClient["default"].convertToType(data['Medium'], 'String');
        }

        if (data.hasOwnProperty('Campaign')) {
          obj['Campaign'] = _ApiClient["default"].convertToType(data['Campaign'], 'String');
        }

        if (data.hasOwnProperty('Content')) {
          obj['Content'] = _ApiClient["default"].convertToType(data['Content'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Utm;
}();
/**
 * utmsource value
 * @member {String} Source
 */


Utm.prototype['Source'] = undefined;
/**
 * utmmedium value
 * @member {String} Medium
 */

Utm.prototype['Medium'] = undefined;
/**
 * utmcampaign value
 * @member {String} Campaign
 */

Utm.prototype['Campaign'] = undefined;
/**
 * utmcontent value
 * @member {String} Content
 */

Utm.prototype['Content'] = undefined;
var _default = Utm;
exports["default"] = _default;