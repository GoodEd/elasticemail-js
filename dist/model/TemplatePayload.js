"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BodyPart = _interopRequireDefault(require("./BodyPart"));

var _TemplateScope = _interopRequireDefault(require("./TemplateScope"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The TemplatePayload model module.
 * @module model/TemplatePayload
 * @version 4.0.20
 */
var TemplatePayload = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TemplatePayload</code>.
   * New template object
   * @alias module:model/TemplatePayload
   * @param name {String} Template name
   */
  function TemplatePayload(name) {
    _classCallCheck(this, TemplatePayload);

    TemplatePayload.initialize(this, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TemplatePayload, null, [{
    key: "initialize",
    value: function initialize(obj, name) {
      obj['Name'] = name;
    }
    /**
     * Constructs a <code>TemplatePayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TemplatePayload} obj Optional instance to populate.
     * @return {module:model/TemplatePayload} The populated <code>TemplatePayload</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TemplatePayload();

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('Subject')) {
          obj['Subject'] = _ApiClient["default"].convertToType(data['Subject'], 'String');
        }

        if (data.hasOwnProperty('Body')) {
          obj['Body'] = _ApiClient["default"].convertToType(data['Body'], [_BodyPart["default"]]);
        }

        if (data.hasOwnProperty('TemplateScope')) {
          obj['TemplateScope'] = _TemplateScope["default"].constructFromObject(data['TemplateScope']);
        }
      }

      return obj;
    }
  }]);

  return TemplatePayload;
}();
/**
 * Template name
 * @member {String} Name
 */


TemplatePayload.prototype['Name'] = undefined;
/**
 * Default subject of email.
 * @member {String} Subject
 */

TemplatePayload.prototype['Subject'] = undefined;
/**
 * Email content of this template
 * @member {Array.<module:model/BodyPart>} Body
 */

TemplatePayload.prototype['Body'] = undefined;
/**
 * @member {module:model/TemplateScope} TemplateScope
 */

TemplatePayload.prototype['TemplateScope'] = undefined;
var _default = TemplatePayload;
exports["default"] = _default;