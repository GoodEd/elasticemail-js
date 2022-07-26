"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Utm = _interopRequireDefault(require("./Utm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CampaignTemplate model module.
 * @module model/CampaignTemplate
 * @version 4.0.20
 */
var CampaignTemplate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CampaignTemplate</code>.
   * Content of a Campaign
   * @alias module:model/CampaignTemplate
   */
  function CampaignTemplate() {
    _classCallCheck(this, CampaignTemplate);

    CampaignTemplate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CampaignTemplate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CampaignTemplate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CampaignTemplate} obj Optional instance to populate.
     * @return {module:model/CampaignTemplate} The populated <code>CampaignTemplate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CampaignTemplate();

        if (data.hasOwnProperty('Poolname')) {
          obj['Poolname'] = _ApiClient["default"].convertToType(data['Poolname'], 'String');
        }

        if (data.hasOwnProperty('From')) {
          obj['From'] = _ApiClient["default"].convertToType(data['From'], 'String');
        }

        if (data.hasOwnProperty('ReplyTo')) {
          obj['ReplyTo'] = _ApiClient["default"].convertToType(data['ReplyTo'], 'String');
        }

        if (data.hasOwnProperty('Subject')) {
          obj['Subject'] = _ApiClient["default"].convertToType(data['Subject'], 'String');
        }

        if (data.hasOwnProperty('TemplateName')) {
          obj['TemplateName'] = _ApiClient["default"].convertToType(data['TemplateName'], 'String');
        }

        if (data.hasOwnProperty('AttachFiles')) {
          obj['AttachFiles'] = _ApiClient["default"].convertToType(data['AttachFiles'], ['String']);
        }

        if (data.hasOwnProperty('Utm')) {
          obj['Utm'] = _Utm["default"].constructFromObject(data['Utm']);
        }
      }

      return obj;
    }
  }]);

  return CampaignTemplate;
}();
/**
 * Name of your custom IP Pool to be used in the sending process
 * @member {String} Poolname
 */


CampaignTemplate.prototype['Poolname'] = undefined;
/**
 * Your e-mail with an optional name (e.g.: John Doe <email@domain.com>)
 * @member {String} From
 */

CampaignTemplate.prototype['From'] = undefined;
/**
 * To what address should the recipients reply to (e.g. John Doe <email@domain.com>)
 * @member {String} ReplyTo
 */

CampaignTemplate.prototype['ReplyTo'] = undefined;
/**
 * Default subject of email.
 * @member {String} Subject
 */

CampaignTemplate.prototype['Subject'] = undefined;
/**
 * Name of template.
 * @member {String} TemplateName
 */

CampaignTemplate.prototype['TemplateName'] = undefined;
/**
 * Names of previously uploaded files that should be sent as downloadable attachments
 * @member {Array.<String>} AttachFiles
 */

CampaignTemplate.prototype['AttachFiles'] = undefined;
/**
 * @member {module:model/Utm} Utm
 */

CampaignTemplate.prototype['Utm'] = undefined;
var _default = CampaignTemplate;
exports["default"] = _default;