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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* Enum class AccessLevel.
* @enum {}
* @readonly
*/
var AccessLevel = /*#__PURE__*/function () {
  function AccessLevel() {
    _classCallCheck(this, AccessLevel);

    _defineProperty(this, "None", "None");

    _defineProperty(this, "ViewAccount", "ViewAccount");

    _defineProperty(this, "ViewContacts", "ViewContacts");

    _defineProperty(this, "ViewForms", "ViewForms");

    _defineProperty(this, "ViewTemplates", "ViewTemplates");

    _defineProperty(this, "ViewCampaigns", "ViewCampaigns");

    _defineProperty(this, "ViewChannels", "ViewChannels");

    _defineProperty(this, "ViewAutomations", "ViewAutomations");

    _defineProperty(this, "ViewSurveys", "ViewSurveys");

    _defineProperty(this, "ViewSettings", "ViewSettings");

    _defineProperty(this, "ViewBilling", "ViewBilling");

    _defineProperty(this, "ViewSubAccounts", "ViewSubAccounts");

    _defineProperty(this, "ViewUsers", "ViewUsers");

    _defineProperty(this, "ViewFiles", "ViewFiles");

    _defineProperty(this, "ViewReports", "ViewReports");

    _defineProperty(this, "ModifyAccount", "ModifyAccount");

    _defineProperty(this, "ModifyContacts", "ModifyContacts");

    _defineProperty(this, "ModifyForms", "ModifyForms");

    _defineProperty(this, "ModifyTemplates", "ModifyTemplates");

    _defineProperty(this, "ModifyCampaigns", "ModifyCampaigns");

    _defineProperty(this, "ModifyChannels", "ModifyChannels");

    _defineProperty(this, "ModifyAutomations", "ModifyAutomations");

    _defineProperty(this, "ModifySurveys", "ModifySurveys");

    _defineProperty(this, "ModifyFiles", "ModifyFiles");

    _defineProperty(this, "Export", "Export");

    _defineProperty(this, "SendSmtp", "SendSmtp");

    _defineProperty(this, "SendSMS", "SendSMS");

    _defineProperty(this, "ModifySettings", "ModifySettings");

    _defineProperty(this, "ModifyBilling", "ModifyBilling");

    _defineProperty(this, "ModifyProfile", "ModifyProfile");

    _defineProperty(this, "ModifySubAccounts", "ModifySubAccounts");

    _defineProperty(this, "ModifyUsers", "ModifyUsers");

    _defineProperty(this, "Security", "Security");

    _defineProperty(this, "ModifyLanguage", "ModifyLanguage");

    _defineProperty(this, "ViewSupport", "ViewSupport");

    _defineProperty(this, "SendHttp", "SendHttp");

    _defineProperty(this, "Modify2FA", "Modify2FA");

    _defineProperty(this, "ModifySupport", "ModifySupport");

    _defineProperty(this, "ViewCustomFields", "ViewCustomFields");

    _defineProperty(this, "ModifyCustomFields", "ModifyCustomFields");

    _defineProperty(this, "ModifyWebNotifications", "ModifyWebNotifications");

    _defineProperty(this, "ExtendedLogs", "ExtendedLogs");

    _defineProperty(this, "VerifyEmails", "VerifyEmails");

    _defineProperty(this, "ViewEmailVerifications", "ViewEmailVerifications");

    _defineProperty(this, "ViewMarketing", "ViewMarketing");

    _defineProperty(this, "ViewEmailApi", "ViewEmailApi");

    _defineProperty(this, "ViewInbound", "ViewInbound");

    _defineProperty(this, "ModifyLandingPages", "ModifyLandingPages");

    _defineProperty(this, "ViewLandingPages", "ViewLandingPages");

    _defineProperty(this, "ModifySuppressions", "ModifySuppressions");

    _defineProperty(this, "ViewSuppressions", "ViewSuppressions");
  }

  _createClass(AccessLevel, null, [{
    key: "constructFromObject",
    value:
    /**
    * Returns a <code>AccessLevel</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/AccessLevel} The enum <code>AccessLevel</code> value.
    */
    function constructFromObject(object) {
      return object;
    }
  }]);

  return AccessLevel;
}();

exports["default"] = AccessLevel;