"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EmailStatus = _interopRequireDefault(require("./EmailStatus"));

var _EmailView = _interopRequireDefault(require("./EmailView"));

var _FileInfo = _interopRequireDefault(require("./FileInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The EmailData model module.
 * @module model/EmailData
 * @version 4.0.20
 */
var EmailData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailData</code>.
   * @alias module:model/EmailData
   */
  function EmailData() {
    _classCallCheck(this, EmailData);

    EmailData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmailData} obj Optional instance to populate.
     * @return {module:model/EmailData} The populated <code>EmailData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailData();

        if (data.hasOwnProperty('Preview')) {
          obj['Preview'] = _EmailView["default"].constructFromObject(data['Preview']);
        }

        if (data.hasOwnProperty('Attachments')) {
          obj['Attachments'] = _ApiClient["default"].convertToType(data['Attachments'], [_FileInfo["default"]]);
        }

        if (data.hasOwnProperty('Status')) {
          obj['Status'] = _EmailStatus["default"].constructFromObject(data['Status']);
        }
      }

      return obj;
    }
  }]);

  return EmailData;
}();
/**
 * @member {module:model/EmailView} Preview
 */


EmailData.prototype['Preview'] = undefined;
/**
 * Attachments sent with the email
 * @member {Array.<module:model/FileInfo>} Attachments
 */

EmailData.prototype['Attachments'] = undefined;
/**
 * @member {module:model/EmailStatus} Status
 */

EmailData.prototype['Status'] = undefined;
var _default = EmailData;
exports["default"] = _default;