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
 * The SubaccountEmailCreditsPayload model module.
 * @module model/SubaccountEmailCreditsPayload
 * @version 4.0.20
 */
var SubaccountEmailCreditsPayload = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SubaccountEmailCreditsPayload</code>.
   * A change to SubAccount email credits pool, with an additional note.
   * @alias module:model/SubaccountEmailCreditsPayload
   * @param credits {Number} Positive or negative value; this will be added or subtracted from Subaccount's current email Credits pool.
   */
  function SubaccountEmailCreditsPayload(credits) {
    _classCallCheck(this, SubaccountEmailCreditsPayload);

    SubaccountEmailCreditsPayload.initialize(this, credits);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SubaccountEmailCreditsPayload, null, [{
    key: "initialize",
    value: function initialize(obj, credits) {
      obj['Credits'] = credits;
    }
    /**
     * Constructs a <code>SubaccountEmailCreditsPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubaccountEmailCreditsPayload} obj Optional instance to populate.
     * @return {module:model/SubaccountEmailCreditsPayload} The populated <code>SubaccountEmailCreditsPayload</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SubaccountEmailCreditsPayload();

        if (data.hasOwnProperty('Credits')) {
          obj['Credits'] = _ApiClient["default"].convertToType(data['Credits'], 'Number');
        }

        if (data.hasOwnProperty('Notes')) {
          obj['Notes'] = _ApiClient["default"].convertToType(data['Notes'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SubaccountEmailCreditsPayload;
}();
/**
 * Positive or negative value; this will be added or subtracted from Subaccount's current email Credits pool.
 * @member {Number} Credits
 */


SubaccountEmailCreditsPayload.prototype['Credits'] = undefined;
/**
 * Note to append to this credits change, for history.
 * @member {String} Notes
 */

SubaccountEmailCreditsPayload.prototype['Notes'] = undefined;
var _default = SubaccountEmailCreditsPayload;
exports["default"] = _default;