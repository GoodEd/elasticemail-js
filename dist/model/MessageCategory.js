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
* Enum class MessageCategory.
* @enum {}
* @readonly
*/
var MessageCategory = /*#__PURE__*/function () {
  function MessageCategory() {
    _classCallCheck(this, MessageCategory);

    _defineProperty(this, "Unknown", "Unknown");

    _defineProperty(this, "Ignore", "Ignore");

    _defineProperty(this, "Spam", "Spam");

    _defineProperty(this, "BlackListed", "BlackListed");

    _defineProperty(this, "NoMailbox", "NoMailbox");

    _defineProperty(this, "GreyListed", "GreyListed");

    _defineProperty(this, "Throttled", "Throttled");

    _defineProperty(this, "Timeout", "Timeout");

    _defineProperty(this, "ConnectionProblem", "ConnectionProblem");

    _defineProperty(this, "SPFProblem", "SPFProblem");

    _defineProperty(this, "AccountProblem", "AccountProblem");

    _defineProperty(this, "DNSProblem", "DNSProblem");

    _defineProperty(this, "NotDeliveredCancelled", "NotDeliveredCancelled");

    _defineProperty(this, "CodeError", "CodeError");

    _defineProperty(this, "ManualCancel", "ManualCancel");

    _defineProperty(this, "ConnectionTerminated", "ConnectionTerminated");

    _defineProperty(this, "NotDelivered", "NotDelivered");
  }

  _createClass(MessageCategory, null, [{
    key: "constructFromObject",
    value:
    /**
    * Returns a <code>MessageCategory</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/MessageCategory} The enum <code>MessageCategory</code> value.
    */
    function constructFromObject(object) {
      return object;
    }
  }]);

  return MessageCategory;
}();

exports["default"] = MessageCategory;