"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BodyPart = _interopRequireDefault(require("./BodyPart"));

var _MessageAttachment = _interopRequireDefault(require("./MessageAttachment"));

var _Utm = _interopRequireDefault(require("./Utm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The EmailContent model module.
 * @module model/EmailContent
 * @version 4.0.20
 */
var EmailContent = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailContent</code>.
   * Proper e-mail content
   * @alias module:model/EmailContent
   */
  function EmailContent() {
    _classCallCheck(this, EmailContent);

    EmailContent.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailContent, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailContent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmailContent} obj Optional instance to populate.
     * @return {module:model/EmailContent} The populated <code>EmailContent</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailContent();

        if (data.hasOwnProperty('Body')) {
          obj['Body'] = _ApiClient["default"].convertToType(data['Body'], [_BodyPart["default"]]);
        }

        if (data.hasOwnProperty('Merge')) {
          obj['Merge'] = _ApiClient["default"].convertToType(data['Merge'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('Attachments')) {
          obj['Attachments'] = _ApiClient["default"].convertToType(data['Attachments'], [_MessageAttachment["default"]]);
        }

        if (data.hasOwnProperty('Headers')) {
          obj['Headers'] = _ApiClient["default"].convertToType(data['Headers'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('Postback')) {
          obj['Postback'] = _ApiClient["default"].convertToType(data['Postback'], 'String');
        }

        if (data.hasOwnProperty('EnvelopeFrom')) {
          obj['EnvelopeFrom'] = _ApiClient["default"].convertToType(data['EnvelopeFrom'], 'String');
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

  return EmailContent;
}();
/**
 * List of e-mail body parts, with user-provided MIME types (text/html, text/plain etc)
 * @member {Array.<module:model/BodyPart>} Body
 */


EmailContent.prototype['Body'] = undefined;
/**
 * A key-value collection of custom merge fields, shared between recipients. Should be used in e-mail body like so: {firstname}, {lastname} etc.
 * @member {Object.<String, String>} Merge
 */

EmailContent.prototype['Merge'] = undefined;
/**
 * Attachments provided by sending binary data
 * @member {Array.<module:model/MessageAttachment>} Attachments
 */

EmailContent.prototype['Attachments'] = undefined;
/**
 * A key-value collection of custom e-mail headers.
 * @member {Object.<String, String>} Headers
 */

EmailContent.prototype['Headers'] = undefined;
/**
 * Postback header.
 * @member {String} Postback
 */

EmailContent.prototype['Postback'] = undefined;
/**
 * E-mail with an optional name to be used as the envelope from address (e.g.: John Doe <email@domain.com>)
 * @member {String} EnvelopeFrom
 */

EmailContent.prototype['EnvelopeFrom'] = undefined;
/**
 * Your e-mail with an optional name (e.g.: John Doe <email@domain.com>)
 * @member {String} From
 */

EmailContent.prototype['From'] = undefined;
/**
 * To what address should the recipients reply to (e.g. John Doe <email@domain.com>)
 * @member {String} ReplyTo
 */

EmailContent.prototype['ReplyTo'] = undefined;
/**
 * Default subject of email.
 * @member {String} Subject
 */

EmailContent.prototype['Subject'] = undefined;
/**
 * Name of template.
 * @member {String} TemplateName
 */

EmailContent.prototype['TemplateName'] = undefined;
/**
 * Names of previously uploaded files that should be sent as downloadable attachments
 * @member {Array.<String>} AttachFiles
 */

EmailContent.prototype['AttachFiles'] = undefined;
/**
 * @member {module:model/Utm} Utm
 */

EmailContent.prototype['Utm'] = undefined;
var _default = EmailContent;
exports["default"] = _default;