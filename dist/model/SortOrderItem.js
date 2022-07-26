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
 * The SortOrderItem model module.
 * @module model/SortOrderItem
 * @version 4.0.20
 */
var SortOrderItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SortOrderItem</code>.
   * Change the ordering of this inbound route for when matching the inbound
   * @alias module:model/SortOrderItem
   * @param publicInboundId {String} ID of the route to change the order of
   * @param sortOrder {Number} 1 - route will be used first
   */
  function SortOrderItem(publicInboundId, sortOrder) {
    _classCallCheck(this, SortOrderItem);

    SortOrderItem.initialize(this, publicInboundId, sortOrder);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SortOrderItem, null, [{
    key: "initialize",
    value: function initialize(obj, publicInboundId, sortOrder) {
      obj['PublicInboundId'] = publicInboundId;
      obj['SortOrder'] = sortOrder;
    }
    /**
     * Constructs a <code>SortOrderItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SortOrderItem} obj Optional instance to populate.
     * @return {module:model/SortOrderItem} The populated <code>SortOrderItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SortOrderItem();

        if (data.hasOwnProperty('PublicInboundId')) {
          obj['PublicInboundId'] = _ApiClient["default"].convertToType(data['PublicInboundId'], 'String');
        }

        if (data.hasOwnProperty('SortOrder')) {
          obj['SortOrder'] = _ApiClient["default"].convertToType(data['SortOrder'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return SortOrderItem;
}();
/**
 * ID of the route to change the order of
 * @member {String} PublicInboundId
 */


SortOrderItem.prototype['PublicInboundId'] = undefined;
/**
 * 1 - route will be used first
 * @member {Number} SortOrder
 */

SortOrderItem.prototype['SortOrder'] = undefined;
var _default = SortOrderItem;
exports["default"] = _default;