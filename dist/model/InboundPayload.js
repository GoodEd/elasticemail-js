"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InboundRouteActionType = _interopRequireDefault(require("./InboundRouteActionType"));

var _InboundRouteFilterType = _interopRequireDefault(require("./InboundRouteFilterType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The InboundPayload model module.
 * @module model/InboundPayload
 * @version 4.0.20
 */
var InboundPayload = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InboundPayload</code>.
   * @alias module:model/InboundPayload
   * @param filter {String} Filter of the inbound data
   * @param name {String} Name of this route
   * @param filterType {module:model/InboundRouteFilterType} 
   * @param actionType {module:model/InboundRouteActionType} 
   */
  function InboundPayload(filter, name, filterType, actionType) {
    _classCallCheck(this, InboundPayload);

    InboundPayload.initialize(this, filter, name, filterType, actionType);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InboundPayload, null, [{
    key: "initialize",
    value: function initialize(obj, filter, name, filterType, actionType) {
      obj['Filter'] = filter;
      obj['Name'] = name;
      obj['FilterType'] = filterType;
      obj['ActionType'] = actionType;
    }
    /**
     * Constructs a <code>InboundPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InboundPayload} obj Optional instance to populate.
     * @return {module:model/InboundPayload} The populated <code>InboundPayload</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InboundPayload();

        if (data.hasOwnProperty('Filter')) {
          obj['Filter'] = _ApiClient["default"].convertToType(data['Filter'], 'String');
        }

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('FilterType')) {
          obj['FilterType'] = _InboundRouteFilterType["default"].constructFromObject(data['FilterType']);
        }

        if (data.hasOwnProperty('ActionType')) {
          obj['ActionType'] = _InboundRouteActionType["default"].constructFromObject(data['ActionType']);
        }

        if (data.hasOwnProperty('EmailAddress')) {
          obj['EmailAddress'] = _ApiClient["default"].convertToType(data['EmailAddress'], 'String');
        }

        if (data.hasOwnProperty('HttpAddress')) {
          obj['HttpAddress'] = _ApiClient["default"].convertToType(data['HttpAddress'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InboundPayload;
}();
/**
 * Filter of the inbound data
 * @member {String} Filter
 */


InboundPayload.prototype['Filter'] = undefined;
/**
 * Name of this route
 * @member {String} Name
 */

InboundPayload.prototype['Name'] = undefined;
/**
 * @member {module:model/InboundRouteFilterType} FilterType
 */

InboundPayload.prototype['FilterType'] = undefined;
/**
 * @member {module:model/InboundRouteActionType} ActionType
 */

InboundPayload.prototype['ActionType'] = undefined;
/**
 * Email to forward the inbound to
 * @member {String} EmailAddress
 */

InboundPayload.prototype['EmailAddress'] = undefined;
/**
 * Address to notify about the inbound
 * @member {String} HttpAddress
 */

InboundPayload.prototype['HttpAddress'] = undefined;
var _default = InboundPayload;
exports["default"] = _default;