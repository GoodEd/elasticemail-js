"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EmailContent = _interopRequireDefault(require("./EmailContent"));

var _EmailRecipient = _interopRequireDefault(require("./EmailRecipient"));

var _Options = _interopRequireDefault(require("./Options"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The EmailMessageData model module.
 * @module model/EmailMessageData
 * @version 4.0.20
 */
var EmailMessageData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailMessageData</code>.
   * Email data
   * @alias module:model/EmailMessageData
   * @param recipients {Array.<module:model/EmailRecipient>} List of recipients
   */
  function EmailMessageData(recipients) {
    _classCallCheck(this, EmailMessageData);

    EmailMessageData.initialize(this, recipients);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailMessageData, null, [{
    key: "initialize",
    value: function initialize(obj, recipients) {
      obj['Recipients'] = recipients;
    }
    /**
     * Constructs a <code>EmailMessageData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmailMessageData} obj Optional instance to populate.
     * @return {module:model/EmailMessageData} The populated <code>EmailMessageData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailMessageData();

        if (data.hasOwnProperty('Recipients')) {
          obj['Recipients'] = _ApiClient["default"].convertToType(data['Recipients'], [_EmailRecipient["default"]]);
        }

        if (data.hasOwnProperty('Content')) {
          obj['Content'] = _EmailContent["default"].constructFromObject(data['Content']);
        }

        if (data.hasOwnProperty('Options')) {
          obj['Options'] = _Options["default"].constructFromObject(data['Options']);
        }
      }

      return obj;
    }
  }]);

  return EmailMessageData;
}();
/**
 * List of recipients
 * @member {Array.<module:model/EmailRecipient>} Recipients
 */


EmailMessageData.prototype['Recipients'] = undefined;
/**
 * @member {module:model/EmailContent} Content
 */

EmailMessageData.prototype['Content'] = undefined;
/**
 * @member {module:model/Options} Options
 */

EmailMessageData.prototype['Options'] = undefined;
var _default = EmailMessageData;
exports["default"] = _default;