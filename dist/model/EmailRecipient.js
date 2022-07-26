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
 * The EmailRecipient model module.
 * @module model/EmailRecipient
 * @version 4.0.20
 */
var EmailRecipient = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailRecipient</code>.
   * List of recipients
   * @alias module:model/EmailRecipient
   * @param email {String} Proper email address.
   */
  function EmailRecipient(email) {
    _classCallCheck(this, EmailRecipient);

    EmailRecipient.initialize(this, email);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailRecipient, null, [{
    key: "initialize",
    value: function initialize(obj, email) {
      obj['Email'] = email;
    }
    /**
     * Constructs a <code>EmailRecipient</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmailRecipient} obj Optional instance to populate.
     * @return {module:model/EmailRecipient} The populated <code>EmailRecipient</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailRecipient();

        if (data.hasOwnProperty('Email')) {
          obj['Email'] = _ApiClient["default"].convertToType(data['Email'], 'String');
        }

        if (data.hasOwnProperty('Fields')) {
          obj['Fields'] = _ApiClient["default"].convertToType(data['Fields'], {
            'String': 'String'
          });
        }
      }

      return obj;
    }
  }]);

  return EmailRecipient;
}();
/**
 * Proper email address.
 * @member {String} Email
 */


EmailRecipient.prototype['Email'] = undefined;
/**
 * A key-value collection of merge fields which can be used in e-mail body.
 * @member {Object.<String, String>} Fields
 */

EmailRecipient.prototype['Fields'] = undefined;
var _default = EmailRecipient;
exports["default"] = _default;