"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EmailContent = _interopRequireDefault(require("./EmailContent"));

var _MessageAttachment = _interopRequireDefault(require("./MessageAttachment"));

var _Options = _interopRequireDefault(require("./Options"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The MergeEmailPayload model module.
 * @module model/MergeEmailPayload
 * @version 4.0.20
 */
var MergeEmailPayload = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MergeEmailPayload</code>.
   * @alias module:model/MergeEmailPayload
   * @param mergeFile {module:model/MessageAttachment} 
   */
  function MergeEmailPayload(mergeFile) {
    _classCallCheck(this, MergeEmailPayload);

    MergeEmailPayload.initialize(this, mergeFile);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MergeEmailPayload, null, [{
    key: "initialize",
    value: function initialize(obj, mergeFile) {
      obj['MergeFile'] = mergeFile;
    }
    /**
     * Constructs a <code>MergeEmailPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MergeEmailPayload} obj Optional instance to populate.
     * @return {module:model/MergeEmailPayload} The populated <code>MergeEmailPayload</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MergeEmailPayload();

        if (data.hasOwnProperty('MergeFile')) {
          obj['MergeFile'] = _MessageAttachment["default"].constructFromObject(data['MergeFile']);
        }

        if (data.hasOwnProperty('Content')) {
          obj['Content'] = _EmailContent["default"].constructFromObject(data['Content']);
        }

        if (data.hasOwnProperty('Options')) {
          obj['Options'] = _Options["default"].constructFromObject(data['Options']);
        }
      }

      return obj;
    }
  }]);

  return MergeEmailPayload;
}();
/**
 * @member {module:model/MessageAttachment} MergeFile
 */


MergeEmailPayload.prototype['MergeFile'] = undefined;
/**
 * @member {module:model/EmailContent} Content
 */

MergeEmailPayload.prototype['Content'] = undefined;
/**
 * @member {module:model/Options} Options
 */

MergeEmailPayload.prototype['Options'] = undefined;
var _default = MergeEmailPayload;
exports["default"] = _default;