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
 * The EmailSend model module.
 * @module model/EmailSend
 * @version 4.0.20
 */
var EmailSend = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailSend</code>.
   * @alias module:model/EmailSend
   */
  function EmailSend() {
    _classCallCheck(this, EmailSend);

    EmailSend.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailSend, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailSend</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmailSend} obj Optional instance to populate.
     * @return {module:model/EmailSend} The populated <code>EmailSend</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailSend();

        if (data.hasOwnProperty('TransactionID')) {
          obj['TransactionID'] = _ApiClient["default"].convertToType(data['TransactionID'], 'String');
        }

        if (data.hasOwnProperty('MessageID')) {
          obj['MessageID'] = _ApiClient["default"].convertToType(data['MessageID'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EmailSend;
}();
/**
 * ID number of transaction
 * @member {String} TransactionID
 */


EmailSend.prototype['TransactionID'] = undefined;
/**
 * Unique identifier for this email.
 * @member {String} MessageID
 */

EmailSend.prototype['MessageID'] = undefined;
var _default = EmailSend;
exports["default"] = _default;