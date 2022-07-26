"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BodyContentType = _interopRequireDefault(require("./BodyContentType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The BodyPart model module.
 * @module model/BodyPart
 * @version 4.0.20
 */
var BodyPart = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BodyPart</code>.
   * Email body part with user-provided MIME type (text/html, text/plain, etc)
   * @alias module:model/BodyPart
   * @param contentType {module:model/BodyContentType} 
   */
  function BodyPart(contentType) {
    _classCallCheck(this, BodyPart);

    BodyPart.initialize(this, contentType);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BodyPart, null, [{
    key: "initialize",
    value: function initialize(obj, contentType) {
      obj['ContentType'] = contentType;
    }
    /**
     * Constructs a <code>BodyPart</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BodyPart} obj Optional instance to populate.
     * @return {module:model/BodyPart} The populated <code>BodyPart</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BodyPart();

        if (data.hasOwnProperty('ContentType')) {
          obj['ContentType'] = _BodyContentType["default"].constructFromObject(data['ContentType']);
        }

        if (data.hasOwnProperty('Content')) {
          obj['Content'] = _ApiClient["default"].convertToType(data['Content'], 'String');
        }

        if (data.hasOwnProperty('Charset')) {
          obj['Charset'] = _ApiClient["default"].convertToType(data['Charset'], 'String');
        }
      }

      return obj;
    }
  }]);

  return BodyPart;
}();
/**
 * @member {module:model/BodyContentType} ContentType
 */


BodyPart.prototype['ContentType'] = undefined;
/**
 * Actual content of the body part
 * @member {String} Content
 */

BodyPart.prototype['Content'] = undefined;
/**
 * Text value of charset encoding for example: iso-8859-1, windows-1251, utf-8, us-ascii, windows-1250 and more…
 * @member {String} Charset
 */

BodyPart.prototype['Charset'] = undefined;
var _default = BodyPart;
exports["default"] = _default;