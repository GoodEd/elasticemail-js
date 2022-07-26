"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ConsentData = _interopRequireDefault(require("./ConsentData"));

var _ContactActivity = _interopRequireDefault(require("./ContactActivity"));

var _ContactSource = _interopRequireDefault(require("./ContactSource"));

var _ContactStatus = _interopRequireDefault(require("./ContactStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Contact model module.
 * @module model/Contact
 * @version 4.0.20
 */
var Contact = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Contact</code>.
   * Contact
   * @alias module:model/Contact
   */
  function Contact() {
    _classCallCheck(this, Contact);

    Contact.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Contact, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Contact</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Contact} obj Optional instance to populate.
     * @return {module:model/Contact} The populated <code>Contact</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Contact();

        if (data.hasOwnProperty('Email')) {
          obj['Email'] = _ApiClient["default"].convertToType(data['Email'], 'String');
        }

        if (data.hasOwnProperty('Status')) {
          obj['Status'] = _ContactStatus["default"].constructFromObject(data['Status']);
        }

        if (data.hasOwnProperty('FirstName')) {
          obj['FirstName'] = _ApiClient["default"].convertToType(data['FirstName'], 'String');
        }

        if (data.hasOwnProperty('LastName')) {
          obj['LastName'] = _ApiClient["default"].convertToType(data['LastName'], 'String');
        }

        if (data.hasOwnProperty('CustomFields')) {
          obj['CustomFields'] = _ApiClient["default"].convertToType(data['CustomFields'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('Consent')) {
          obj['Consent'] = _ConsentData["default"].constructFromObject(data['Consent']);
        }

        if (data.hasOwnProperty('Source')) {
          obj['Source'] = _ContactSource["default"].constructFromObject(data['Source']);
        }

        if (data.hasOwnProperty('DateAdded')) {
          obj['DateAdded'] = _ApiClient["default"].convertToType(data['DateAdded'], 'Date');
        }

        if (data.hasOwnProperty('DateUpdated')) {
          obj['DateUpdated'] = _ApiClient["default"].convertToType(data['DateUpdated'], 'Date');
        }

        if (data.hasOwnProperty('StatusChangeDate')) {
          obj['StatusChangeDate'] = _ApiClient["default"].convertToType(data['StatusChangeDate'], 'Date');
        }

        if (data.hasOwnProperty('Activity')) {
          obj['Activity'] = _ContactActivity["default"].constructFromObject(data['Activity']);
        }
      }

      return obj;
    }
  }]);

  return Contact;
}();
/**
 * Proper email address.
 * @member {String} Email
 */


Contact.prototype['Email'] = undefined;
/**
 * @member {module:model/ContactStatus} Status
 */

Contact.prototype['Status'] = undefined;
/**
 * First name.
 * @member {String} FirstName
 */

Contact.prototype['FirstName'] = undefined;
/**
 * Last name.
 * @member {String} LastName
 */

Contact.prototype['LastName'] = undefined;
/**
 * A key-value collection of custom contact fields which can be used in the system.
 * @member {Object.<String, String>} CustomFields
 */

Contact.prototype['CustomFields'] = undefined;
/**
 * @member {module:model/ConsentData} Consent
 */

Contact.prototype['Consent'] = undefined;
/**
 * @member {module:model/ContactSource} Source
 */

Contact.prototype['Source'] = undefined;
/**
 * Date of creation in YYYY-MM-DDThh:ii:ss format
 * @member {Date} DateAdded
 */

Contact.prototype['DateAdded'] = undefined;
/**
 * Last change date
 * @member {Date} DateUpdated
 */

Contact.prototype['DateUpdated'] = undefined;
/**
 * Date of last status change.
 * @member {Date} StatusChangeDate
 */

Contact.prototype['StatusChangeDate'] = undefined;
/**
 * @member {module:model/ContactActivity} Activity
 */

Contact.prototype['Activity'] = undefined;
var _default = Contact;
exports["default"] = _default;