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
 * The ContactUpdatePayload model module.
 * @module model/ContactUpdatePayload
 * @version 4.0.20
 */
var ContactUpdatePayload = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ContactUpdatePayload</code>.
   * @alias module:model/ContactUpdatePayload
   */
  function ContactUpdatePayload() {
    _classCallCheck(this, ContactUpdatePayload);

    ContactUpdatePayload.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ContactUpdatePayload, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ContactUpdatePayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContactUpdatePayload} obj Optional instance to populate.
     * @return {module:model/ContactUpdatePayload} The populated <code>ContactUpdatePayload</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ContactUpdatePayload();

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
      }

      return obj;
    }
  }]);

  return ContactUpdatePayload;
}();
/**
 * First name.
 * @member {String} FirstName
 */


ContactUpdatePayload.prototype['FirstName'] = undefined;
/**
 * Last name.
 * @member {String} LastName
 */

ContactUpdatePayload.prototype['LastName'] = undefined;
/**
 * A key-value collection of custom contact fields which can be used in the system.
 * @member {Object.<String, String>} CustomFields
 */

ContactUpdatePayload.prototype['CustomFields'] = undefined;
var _default = ContactUpdatePayload;
exports["default"] = _default;