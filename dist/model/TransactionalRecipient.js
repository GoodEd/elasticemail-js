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
 * The TransactionalRecipient model module.
 * @module model/TransactionalRecipient
 * @version 4.0.20
 */
var TransactionalRecipient = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TransactionalRecipient</code>.
   * List of transactional recipients
   * @alias module:model/TransactionalRecipient
   * @param to {Array.<String>} List of recipients (visible to others)
   */
  function TransactionalRecipient(to) {
    _classCallCheck(this, TransactionalRecipient);

    TransactionalRecipient.initialize(this, to);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TransactionalRecipient, null, [{
    key: "initialize",
    value: function initialize(obj, to) {
      obj['To'] = to;
    }
    /**
     * Constructs a <code>TransactionalRecipient</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionalRecipient} obj Optional instance to populate.
     * @return {module:model/TransactionalRecipient} The populated <code>TransactionalRecipient</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TransactionalRecipient();

        if (data.hasOwnProperty('To')) {
          obj['To'] = _ApiClient["default"].convertToType(data['To'], ['String']);
        }

        if (data.hasOwnProperty('CC')) {
          obj['CC'] = _ApiClient["default"].convertToType(data['CC'], ['String']);
        }

        if (data.hasOwnProperty('BCC')) {
          obj['BCC'] = _ApiClient["default"].convertToType(data['BCC'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return TransactionalRecipient;
}();
/**
 * List of recipients (visible to others)
 * @member {Array.<String>} To
 */


TransactionalRecipient.prototype['To'] = undefined;
/**
 * List of Carbon Copy recipients (visible to others)
 * @member {Array.<String>} CC
 */

TransactionalRecipient.prototype['CC'] = undefined;
/**
 * List of Blind Carbon Copy recipients (hidden from other recipients)
 * @member {Array.<String>} BCC
 */

TransactionalRecipient.prototype['BCC'] = undefined;
var _default = TransactionalRecipient;
exports["default"] = _default;