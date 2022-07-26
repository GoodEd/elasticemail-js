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
 * The EmailsPayload model module.
 * @module model/EmailsPayload
 * @version 4.0.20
 */
var EmailsPayload = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailsPayload</code>.
   * Provide either rule or a list of emails, not both.
   * @alias module:model/EmailsPayload
   */
  function EmailsPayload() {
    _classCallCheck(this, EmailsPayload);

    EmailsPayload.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailsPayload, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailsPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmailsPayload} obj Optional instance to populate.
     * @return {module:model/EmailsPayload} The populated <code>EmailsPayload</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailsPayload();

        if (data.hasOwnProperty('Rule')) {
          obj['Rule'] = _ApiClient["default"].convertToType(data['Rule'], 'String');
        }

        if (data.hasOwnProperty('Emails')) {
          obj['Emails'] = _ApiClient["default"].convertToType(data['Emails'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return EmailsPayload;
}();
/**
 * SQL-like rule. Sending 'All' as a value loads all resources of the given type. Help for building a segment rule can be found here: https://help.elasticemail.com/en/articles/5162182-segment-rules
 * @member {String} Rule
 */


EmailsPayload.prototype['Rule'] = undefined;
/**
 * Comma delimited list of contact emails
 * @member {Array.<String>} Emails
 */

EmailsPayload.prototype['Emails'] = undefined;
var _default = EmailsPayload;
exports["default"] = _default;