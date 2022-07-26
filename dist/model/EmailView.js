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
 * The EmailView model module.
 * @module model/EmailView
 * @version 4.0.20
 */
var EmailView = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailView</code>.
   * Email details formatted in json
   * @alias module:model/EmailView
   */
  function EmailView() {
    _classCallCheck(this, EmailView);

    EmailView.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailView, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailView</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmailView} obj Optional instance to populate.
     * @return {module:model/EmailView} The populated <code>EmailView</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailView();

        if (data.hasOwnProperty('Body')) {
          obj['Body'] = _ApiClient["default"].convertToType(data['Body'], 'String');
        }

        if (data.hasOwnProperty('Subject')) {
          obj['Subject'] = _ApiClient["default"].convertToType(data['Subject'], 'String');
        }

        if (data.hasOwnProperty('From')) {
          obj['From'] = _ApiClient["default"].convertToType(data['From'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EmailView;
}();
/**
 * Body (HTML, otherwise plain text) of email
 * @member {String} Body
 */


EmailView.prototype['Body'] = undefined;
/**
 * Default subject of email.
 * @member {String} Subject
 */

EmailView.prototype['Subject'] = undefined;
/**
 * From email address
 * @member {String} From
 */

EmailView.prototype['From'] = undefined;
var _default = EmailView;
exports["default"] = _default;