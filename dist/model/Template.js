"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BodyPart = _interopRequireDefault(require("./BodyPart"));

var _TemplateScope = _interopRequireDefault(require("./TemplateScope"));

var _TemplateType = _interopRequireDefault(require("./TemplateType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Template model module.
 * @module model/Template
 * @version 4.0.20
 */
var Template = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Template</code>.
   * Template info
   * @alias module:model/Template
   */
  function Template() {
    _classCallCheck(this, Template);

    Template.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Template, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Template</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Template} obj Optional instance to populate.
     * @return {module:model/Template} The populated <code>Template</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Template();

        if (data.hasOwnProperty('TemplateType')) {
          obj['TemplateType'] = _TemplateType["default"].constructFromObject(data['TemplateType']);
        }

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('DateAdded')) {
          obj['DateAdded'] = _ApiClient["default"].convertToType(data['DateAdded'], 'Date');
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

  return Template;
}();
/**
 * @member {module:model/TemplateType} TemplateType
 */


Template.prototype['TemplateType'] = undefined;
/**
 * Template name
 * @member {String} Name
 */

Template.prototype['Name'] = undefined;
/**
 * Date of creation in YYYY-MM-DDThh:ii:ss format
 * @member {Date} DateAdded
 */

Template.prototype['DateAdded'] = undefined;
/**
 * Default subject of email.
 * @member {String} Subject
 */

Template.prototype['Subject'] = undefined;
/**
 * Email content of this template
 * @member {Array.<module:model/BodyPart>} Body
 */

Template.prototype['Body'] = undefined;
/**
 * @member {module:model/TemplateScope} TemplateScope
 */

Template.prototype['TemplateScope'] = undefined;
var _default = Template;
exports["default"] = _default;