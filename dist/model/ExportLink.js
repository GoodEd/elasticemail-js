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
 * The ExportLink model module.
 * @module model/ExportLink
 * @version 4.0.20
 */
var ExportLink = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ExportLink</code>.
   * @alias module:model/ExportLink
   */
  function ExportLink() {
    _classCallCheck(this, ExportLink);

    ExportLink.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ExportLink, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ExportLink</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExportLink} obj Optional instance to populate.
     * @return {module:model/ExportLink} The populated <code>ExportLink</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ExportLink();

        if (data.hasOwnProperty('Link')) {
          obj['Link'] = _ApiClient["default"].convertToType(data['Link'], 'String');
        }

        if (data.hasOwnProperty('PublicExportID')) {
          obj['PublicExportID'] = _ApiClient["default"].convertToType(data['PublicExportID'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ExportLink;
}();
/**
 * Direct URL to the exported file
 * @member {String} Link
 */


ExportLink.prototype['Link'] = undefined;
/**
 * ID of the exported file
 * @member {String} PublicExportID
 */

ExportLink.prototype['PublicExportID'] = undefined;
var _default = ExportLink;
exports["default"] = _default;