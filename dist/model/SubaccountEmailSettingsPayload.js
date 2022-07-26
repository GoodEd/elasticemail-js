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
 * The SubaccountEmailSettingsPayload model module.
 * @module model/SubaccountEmailSettingsPayload
 * @version 4.0.20
 */
var SubaccountEmailSettingsPayload = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SubaccountEmailSettingsPayload</code>.
   * Settings related to sending emails
   * @alias module:model/SubaccountEmailSettingsPayload
   */
  function SubaccountEmailSettingsPayload() {
    _classCallCheck(this, SubaccountEmailSettingsPayload);

    SubaccountEmailSettingsPayload.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SubaccountEmailSettingsPayload, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SubaccountEmailSettingsPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubaccountEmailSettingsPayload} obj Optional instance to populate.
     * @return {module:model/SubaccountEmailSettingsPayload} The populated <code>SubaccountEmailSettingsPayload</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SubaccountEmailSettingsPayload();

        if (data.hasOwnProperty('RequiresEmailCredits')) {
          obj['RequiresEmailCredits'] = _ApiClient["default"].convertToType(data['RequiresEmailCredits'], 'Boolean');
        }

        if (data.hasOwnProperty('EmailSizeLimit')) {
          obj['EmailSizeLimit'] = _ApiClient["default"].convertToType(data['EmailSizeLimit'], 'Number');
        }

        if (data.hasOwnProperty('DailySendLimit')) {
          obj['DailySendLimit'] = _ApiClient["default"].convertToType(data['DailySendLimit'], 'Number');
        }

        if (data.hasOwnProperty('MaxContacts')) {
          obj['MaxContacts'] = _ApiClient["default"].convertToType(data['MaxContacts'], 'Number');
        }

        if (data.hasOwnProperty('EnablePrivateIPPurchase')) {
          obj['EnablePrivateIPPurchase'] = _ApiClient["default"].convertToType(data['EnablePrivateIPPurchase'], 'Boolean');
        }

        if (data.hasOwnProperty('PoolName')) {
          obj['PoolName'] = _ApiClient["default"].convertToType(data['PoolName'], 'String');
        }

        if (data.hasOwnProperty('ValidSenderDomainOnly')) {
          obj['ValidSenderDomainOnly'] = _ApiClient["default"].convertToType(data['ValidSenderDomainOnly'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return SubaccountEmailSettingsPayload;
}();
/**
 * True, if Account needs credits to send emails. Otherwise, false
 * @member {Boolean} RequiresEmailCredits
 */


SubaccountEmailSettingsPayload.prototype['RequiresEmailCredits'] = undefined;
/**
 * Maximum size of email including attachments in MB's
 * @member {Number} EmailSizeLimit
 */

SubaccountEmailSettingsPayload.prototype['EmailSizeLimit'] = undefined;
/**
 * Amount of emails Account can send daily
 * @member {Number} DailySendLimit
 */

SubaccountEmailSettingsPayload.prototype['DailySendLimit'] = undefined;
/**
 * Maximum number of contacts the Account can have. 0 means that parent account's limit is used.
 * @member {Number} MaxContacts
 */

SubaccountEmailSettingsPayload.prototype['MaxContacts'] = undefined;
/**
 * Can the SubAccount purchase Private IP for themselves
 * @member {Boolean} EnablePrivateIPPurchase
 */

SubaccountEmailSettingsPayload.prototype['EnablePrivateIPPurchase'] = undefined;
/**
 * Name of your custom IP Pool to be used in the sending process
 * @member {String} PoolName
 */

SubaccountEmailSettingsPayload.prototype['PoolName'] = undefined;
/**
 * @member {Boolean} ValidSenderDomainOnly
 */

SubaccountEmailSettingsPayload.prototype['ValidSenderDomainOnly'] = undefined;
var _default = SubaccountEmailSettingsPayload;
exports["default"] = _default;