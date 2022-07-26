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
 * The ContactsList model module.
 * @module model/ContactsList
 * @version 4.0.20
 */
var ContactsList = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ContactsList</code>.
   * List of Lists, with detailed data about its contents.
   * @alias module:model/ContactsList
   */
  function ContactsList() {
    _classCallCheck(this, ContactsList);

    ContactsList.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ContactsList, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ContactsList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContactsList} obj Optional instance to populate.
     * @return {module:model/ContactsList} The populated <code>ContactsList</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ContactsList();

        if (data.hasOwnProperty('ListName')) {
          obj['ListName'] = _ApiClient["default"].convertToType(data['ListName'], 'String');
        }

        if (data.hasOwnProperty('PublicListID')) {
          obj['PublicListID'] = _ApiClient["default"].convertToType(data['PublicListID'], 'String');
        }

        if (data.hasOwnProperty('DateAdded')) {
          obj['DateAdded'] = _ApiClient["default"].convertToType(data['DateAdded'], 'Date');
        }

        if (data.hasOwnProperty('AllowUnsubscribe')) {
          obj['AllowUnsubscribe'] = _ApiClient["default"].convertToType(data['AllowUnsubscribe'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return ContactsList;
}();
/**
 * Name of your list.
 * @member {String} ListName
 */


ContactsList.prototype['ListName'] = undefined;
/**
 * ID code of list. Please note that this is different from the listid field.
 * @member {String} PublicListID
 */

ContactsList.prototype['PublicListID'] = undefined;
/**
 * Date of creation in YYYY-MM-DDThh:ii:ss format
 * @member {Date} DateAdded
 */

ContactsList.prototype['DateAdded'] = undefined;
/**
 * True: Allow unsubscribing from this list. Otherwise, false
 * @member {Boolean} AllowUnsubscribe
 */

ContactsList.prototype['AllowUnsubscribe'] = undefined;
var _default = ContactsList;
exports["default"] = _default;