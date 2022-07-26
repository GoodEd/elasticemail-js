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
 * The FileInfo model module.
 * @module model/FileInfo
 * @version 4.0.20
 */
var FileInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FileInfo</code>.
   * File information
   * @alias module:model/FileInfo
   */
  function FileInfo() {
    _classCallCheck(this, FileInfo);

    FileInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FileInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FileInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FileInfo} obj Optional instance to populate.
     * @return {module:model/FileInfo} The populated <code>FileInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FileInfo();

        if (data.hasOwnProperty('FileName')) {
          obj['FileName'] = _ApiClient["default"].convertToType(data['FileName'], 'String');
        }

        if (data.hasOwnProperty('Size')) {
          obj['Size'] = _ApiClient["default"].convertToType(data['Size'], 'Number');
        }

        if (data.hasOwnProperty('DateAdded')) {
          obj['DateAdded'] = _ApiClient["default"].convertToType(data['DateAdded'], 'Date');
        }

        if (data.hasOwnProperty('ExpirationDate')) {
          obj['ExpirationDate'] = _ApiClient["default"].convertToType(data['ExpirationDate'], 'Date');
        }

        if (data.hasOwnProperty('ContentType')) {
          obj['ContentType'] = _ApiClient["default"].convertToType(data['ContentType'], 'String');
        }
      }

      return obj;
    }
  }]);

  return FileInfo;
}();
/**
 * Name of your file including extension.
 * @member {String} FileName
 */


FileInfo.prototype['FileName'] = undefined;
/**
 * Size of your attachment (in bytes).
 * @member {Number} Size
 */

FileInfo.prototype['Size'] = undefined;
/**
 * Date of creation in YYYY-MM-DDThh:ii:ss format
 * @member {Date} DateAdded
 */

FileInfo.prototype['DateAdded'] = undefined;
/**
 * Date when the file will be deleted from your Account.
 * @member {Date} ExpirationDate
 */

FileInfo.prototype['ExpirationDate'] = undefined;
/**
 * Content type of the file.
 * @member {String} ContentType
 */

FileInfo.prototype['ContentType'] = undefined;
var _default = FileInfo;
exports["default"] = _default;