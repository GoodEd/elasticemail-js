"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ConsentData = _interopRequireDefault(require("./ConsentData"));

var _ContactStatus = _interopRequireDefault(require("./ContactStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ContactPayload model module.
 * @module model/ContactPayload
 * @version 4.0.20
 */
var ContactPayload = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ContactPayload</code>.
   * @alias module:model/ContactPayload
   * @param email {String} Proper email address.
   */
  function ContactPayload(email) {
    _classCallCheck(this, ContactPayload);

    ContactPayload.initialize(this, email);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ContactPayload, null, [{
    key: "initialize",
    value: function initialize(obj, email) {
      obj['Email'] = email;
    }
    /**
     * Constructs a <code>ContactPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContactPayload} obj Optional instance to populate.
     * @return {module:model/ContactPayload} The populated <code>ContactPayload</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ContactPayload();

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
      }

      return obj;
    }
  }]);

  return ContactPayload;
}();
/**
 * Proper email address.
 * @member {String} Email
 */


ContactPayload.prototype['Email'] = undefined;
/**
 * @member {module:model/ContactStatus} Status
 */

ContactPayload.prototype['Status'] = undefined;
/**
 * First name.
 * @member {String} FirstName
 */

ContactPayload.prototype['FirstName'] = undefined;
/**
 * Last name.
 * @member {String} LastName
 */

ContactPayload.prototype['LastName'] = undefined;
/**
 * A key-value collection of custom contact fields which can be used in the system. Only already existing custom fields will be saved.
 * @member {Object.<String, String>} CustomFields
 */

ContactPayload.prototype['CustomFields'] = undefined;
/**
 * @member {module:model/ConsentData} Consent
 */

ContactPayload.prototype['Consent'] = undefined;
var _default = ContactPayload;
exports["default"] = _default;