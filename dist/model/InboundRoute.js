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
 * The InboundRoute model module.
 * @module model/InboundRoute
 * @version 4.0.20
 */
var InboundRoute = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InboundRoute</code>.
   * @alias module:model/InboundRoute
   */
  function InboundRoute() {
    _classCallCheck(this, InboundRoute);

    InboundRoute.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InboundRoute, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InboundRoute</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InboundRoute} obj Optional instance to populate.
     * @return {module:model/InboundRoute} The populated <code>InboundRoute</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InboundRoute();

        if (data.hasOwnProperty('PublicId')) {
          obj['PublicId'] = _ApiClient["default"].convertToType(data['PublicId'], 'String');
        }

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('FilterType')) {
          obj['FilterType'] = _InboundRouteFilterType["default"].constructFromObject(data['FilterType']);
        }

        if (data.hasOwnProperty('Filter')) {
          obj['Filter'] = _ApiClient["default"].convertToType(data['Filter'], 'String');
        }

        if (data.hasOwnProperty('ActionType')) {
          obj['ActionType'] = _InboundRouteActionType["default"].constructFromObject(data['ActionType']);
        }

        if (data.hasOwnProperty('ActionParameter')) {
          obj['ActionParameter'] = _ApiClient["default"].convertToType(data['ActionParameter'], 'String');
        }

        if (data.hasOwnProperty('SortOrder')) {
          obj['SortOrder'] = _ApiClient["default"].convertToType(data['SortOrder'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return InboundRoute;
}();
/**
 * @member {String} PublicId
 */


InboundRoute.prototype['PublicId'] = undefined;
/**
 * Name of this route
 * @member {String} Name
 */

InboundRoute.prototype['Name'] = undefined;
/**
 * @member {module:model/InboundRouteFilterType} FilterType
 */

InboundRoute.prototype['FilterType'] = undefined;
/**
 * Filter of the inbound data
 * @member {String} Filter
 */

InboundRoute.prototype['Filter'] = undefined;
/**
 * @member {module:model/InboundRouteActionType} ActionType
 */

InboundRoute.prototype['ActionType'] = undefined;
/**
 * URL address or Email to notify about the inbound
 * @member {String} ActionParameter
 */

InboundRoute.prototype['ActionParameter'] = undefined;
/**
 * Place of this route in your routes queue's order
 * @member {Number} SortOrder
 */

InboundRoute.prototype['SortOrder'] = undefined;
var _default = InboundRoute;
exports["default"] = _default;