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
 * The SegmentPayload model module.
 * @module model/SegmentPayload
 * @version 4.0.20
 */
var SegmentPayload = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SegmentPayload</code>.
   * @alias module:model/SegmentPayload
   * @param name {String} Segment name
   * @param rule {String} SQL-like rule to determine which Contacts belong to this Segment. Help for building a segment rule can be found here: https://help.elasticemail.com/en/articles/5162182-segment-rules
   */
  function SegmentPayload(name, rule) {
    _classCallCheck(this, SegmentPayload);

    SegmentPayload.initialize(this, name, rule);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SegmentPayload, null, [{
    key: "initialize",
    value: function initialize(obj, name, rule) {
      obj['Name'] = name;
      obj['Rule'] = rule;
    }
    /**
     * Constructs a <code>SegmentPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SegmentPayload} obj Optional instance to populate.
     * @return {module:model/SegmentPayload} The populated <code>SegmentPayload</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SegmentPayload();

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('Rule')) {
          obj['Rule'] = _ApiClient["default"].convertToType(data['Rule'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SegmentPayload;
}();
/**
 * Segment name
 * @member {String} Name
 */


SegmentPayload.prototype['Name'] = undefined;
/**
 * SQL-like rule to determine which Contacts belong to this Segment. Help for building a segment rule can be found here: https://help.elasticemail.com/en/articles/5162182-segment-rules
 * @member {String} Rule
 */

SegmentPayload.prototype['Rule'] = undefined;
var _default = SegmentPayload;
exports["default"] = _default;