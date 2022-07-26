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
 * The MessageAttachment model module.
 * @module model/MessageAttachment
 * @version 4.0.20
 */
var MessageAttachment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MessageAttachment</code>.
   * @alias module:model/MessageAttachment
   * @param binaryContent {Blob} File's content as byte array (or a Base64 string)
   */
  function MessageAttachment(binaryContent) {
    _classCallCheck(this, MessageAttachment);

    MessageAttachment.initialize(this, binaryContent);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MessageAttachment, null, [{
    key: "initialize",
    value: function initialize(obj, binaryContent) {
      obj['BinaryContent'] = binaryContent;
    }
    /**
     * Constructs a <code>MessageAttachment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MessageAttachment} obj Optional instance to populate.
     * @return {module:model/MessageAttachment} The populated <code>MessageAttachment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MessageAttachment();

        if (data.hasOwnProperty('BinaryContent')) {
          obj['BinaryContent'] = _ApiClient["default"].convertToType(data['BinaryContent'], 'Blob');
        }

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('ContentType')) {
          obj['ContentType'] = _ApiClient["default"].convertToType(data['ContentType'], 'String');
        }
      }

      return obj;
    }
  }]);

  return MessageAttachment;
}();
/**
 * File's content as byte array (or a Base64 string)
 * @member {Blob} BinaryContent
 */


MessageAttachment.prototype['BinaryContent'] = undefined;
/**
 * Display name of the file
 * @member {String} Name
 */

MessageAttachment.prototype['Name'] = undefined;
/**
 * MIME content type
 * @member {String} ContentType
 */

MessageAttachment.prototype['ContentType'] = undefined;
var _default = MessageAttachment;
exports["default"] = _default;