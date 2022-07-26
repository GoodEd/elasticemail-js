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
 * The FilePayload model module.
 * @module model/FilePayload
 * @version 4.0.20
 */
var FilePayload = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FilePayload</code>.
   * @alias module:model/FilePayload
   * @param binaryContent {Blob} Content of the file sent as binary data
   */
  function FilePayload(binaryContent) {
    _classCallCheck(this, FilePayload);

    FilePayload.initialize(this, binaryContent);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FilePayload, null, [{
    key: "initialize",
    value: function initialize(obj, binaryContent) {
      obj['BinaryContent'] = binaryContent;
    }
    /**
     * Constructs a <code>FilePayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FilePayload} obj Optional instance to populate.
     * @return {module:model/FilePayload} The populated <code>FilePayload</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FilePayload();

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

  return FilePayload;
}();
/**
 * Content of the file sent as binary data
 * @member {Blob} BinaryContent
 */


FilePayload.prototype['BinaryContent'] = undefined;
/**
 * Filename
 * @member {String} Name
 */

FilePayload.prototype['Name'] = undefined;
/**
 * Type of file's content (e.g. image/jpeg)
 * @member {String} ContentType
 */

FilePayload.prototype['ContentType'] = undefined;
var _default = FilePayload;
exports["default"] = _default;