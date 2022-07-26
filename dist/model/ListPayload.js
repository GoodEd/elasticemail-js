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
 * The ListPayload model module.
 * @module model/ListPayload
 * @version 4.0.20
 */
var ListPayload = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListPayload</code>.
   * @alias module:model/ListPayload
   * @param listName {String} Name of your list.
   */
  function ListPayload(listName) {
    _classCallCheck(this, ListPayload);

    ListPayload.initialize(this, listName);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListPayload, null, [{
    key: "initialize",
    value: function initialize(obj, listName) {
      obj['ListName'] = listName;
    }
    /**
     * Constructs a <code>ListPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListPayload} obj Optional instance to populate.
     * @return {module:model/ListPayload} The populated <code>ListPayload</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListPayload();

        if (data.hasOwnProperty('ListName')) {
          obj['ListName'] = _ApiClient["default"].convertToType(data['ListName'], 'String');
        }

        if (data.hasOwnProperty('AllowUnsubscribe')) {
          obj['AllowUnsubscribe'] = _ApiClient["default"].convertToType(data['AllowUnsubscribe'], 'Boolean');
        }

        if (data.hasOwnProperty('Emails')) {
          obj['Emails'] = _ApiClient["default"].convertToType(data['Emails'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return ListPayload;
}();
/**
 * Name of your list.
 * @member {String} ListName
 */


ListPayload.prototype['ListName'] = undefined;
/**
 * True: Allow unsubscribing from this list. Otherwise, false
 * @member {Boolean} AllowUnsubscribe
 */

ListPayload.prototype['AllowUnsubscribe'] = undefined;
/**
 * Comma delimited list of existing contact emails that should be added to this list. Leave empty for all contacts
 * @member {Array.<String>} Emails
 */

ListPayload.prototype['Emails'] = undefined;
var _default = ListPayload;
exports["default"] = _default;