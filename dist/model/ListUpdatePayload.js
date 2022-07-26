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
 * The ListUpdatePayload model module.
 * @module model/ListUpdatePayload
 * @version 4.0.20
 */
var ListUpdatePayload = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListUpdatePayload</code>.
   * @alias module:model/ListUpdatePayload
   */
  function ListUpdatePayload() {
    _classCallCheck(this, ListUpdatePayload);

    ListUpdatePayload.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListUpdatePayload, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ListUpdatePayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListUpdatePayload} obj Optional instance to populate.
     * @return {module:model/ListUpdatePayload} The populated <code>ListUpdatePayload</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListUpdatePayload();

        if (data.hasOwnProperty('NewListName')) {
          obj['NewListName'] = _ApiClient["default"].convertToType(data['NewListName'], 'String');
        }

        if (data.hasOwnProperty('AllowUnsubscribe')) {
          obj['AllowUnsubscribe'] = _ApiClient["default"].convertToType(data['AllowUnsubscribe'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return ListUpdatePayload;
}();
/**
 * Name of your list if you want to change it.
 * @member {String} NewListName
 */


ListUpdatePayload.prototype['NewListName'] = undefined;
/**
 * True: Allow unsubscribing from this list. Otherwise, false
 * @member {Boolean} AllowUnsubscribe
 */

ListUpdatePayload.prototype['AllowUnsubscribe'] = undefined;
var _default = ListUpdatePayload;
exports["default"] = _default;