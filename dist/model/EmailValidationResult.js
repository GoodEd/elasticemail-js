"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EmailValidationStatus = _interopRequireDefault(require("./EmailValidationStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The EmailValidationResult model module.
 * @module model/EmailValidationResult
 * @version 4.0.20
 */
var EmailValidationResult = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailValidationResult</code>.
   * @alias module:model/EmailValidationResult
   */
  function EmailValidationResult() {
    _classCallCheck(this, EmailValidationResult);

    EmailValidationResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailValidationResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailValidationResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmailValidationResult} obj Optional instance to populate.
     * @return {module:model/EmailValidationResult} The populated <code>EmailValidationResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailValidationResult();

        if (data.hasOwnProperty('Account')) {
          obj['Account'] = _ApiClient["default"].convertToType(data['Account'], 'String');
        }

        if (data.hasOwnProperty('Domain')) {
          obj['Domain'] = _ApiClient["default"].convertToType(data['Domain'], 'String');
        }

        if (data.hasOwnProperty('Email')) {
          obj['Email'] = _ApiClient["default"].convertToType(data['Email'], 'String');
        }

        if (data.hasOwnProperty('SuggestedSpelling')) {
          obj['SuggestedSpelling'] = _ApiClient["default"].convertToType(data['SuggestedSpelling'], 'String');
        }

        if (data.hasOwnProperty('Disposable')) {
          obj['Disposable'] = _ApiClient["default"].convertToType(data['Disposable'], 'Boolean');
        }

        if (data.hasOwnProperty('Role')) {
          obj['Role'] = _ApiClient["default"].convertToType(data['Role'], 'Boolean');
        }

        if (data.hasOwnProperty('Reason')) {
          obj['Reason'] = _ApiClient["default"].convertToType(data['Reason'], 'String');
        }

        if (data.hasOwnProperty('DateAdded')) {
          obj['DateAdded'] = _ApiClient["default"].convertToType(data['DateAdded'], 'Date');
        }

        if (data.hasOwnProperty('Result')) {
          obj['Result'] = _EmailValidationStatus["default"].constructFromObject(data['Result']);
        }
      }

      return obj;
    }
  }]);

  return EmailValidationResult;
}();
/**
 * Local part of an email
 * @member {String} Account
 */


EmailValidationResult.prototype['Account'] = undefined;
/**
 * Name of selected domain.
 * @member {String} Domain
 */

EmailValidationResult.prototype['Domain'] = undefined;
/**
 * Full email address that was verified
 * @member {String} Email
 */

EmailValidationResult.prototype['Email'] = undefined;
/**
 * Suggested spelling if a possible mistake was found
 * @member {String} SuggestedSpelling
 */

EmailValidationResult.prototype['SuggestedSpelling'] = undefined;
/**
 * Does the email have a temporary domain
 * @member {Boolean} Disposable
 */

EmailValidationResult.prototype['Disposable'] = undefined;
/**
 * Is an email a role email (e.g. info@, noreply@ etc.)
 * @member {Boolean} Role
 */

EmailValidationResult.prototype['Role'] = undefined;
/**
 * All detected issues
 * @member {String} Reason
 */

EmailValidationResult.prototype['Reason'] = undefined;
/**
 * Date of creation in YYYY-MM-DDThh:ii:ss format
 * @member {Date} DateAdded
 */

EmailValidationResult.prototype['DateAdded'] = undefined;
/**
 * @member {module:model/EmailValidationStatus} Result
 */

EmailValidationResult.prototype['Result'] = undefined;
var _default = EmailValidationResult;
exports["default"] = _default;