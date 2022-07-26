"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SplitOptimizationType = _interopRequireDefault(require("./SplitOptimizationType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The SplitOptions model module.
 * @module model/SplitOptions
 * @version 4.0.20
 */
var SplitOptions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SplitOptions</code>.
   * Optional A/X split campaign options
   * @alias module:model/SplitOptions
   */
  function SplitOptions() {
    _classCallCheck(this, SplitOptions);

    SplitOptions.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SplitOptions, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SplitOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SplitOptions} obj Optional instance to populate.
     * @return {module:model/SplitOptions} The populated <code>SplitOptions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SplitOptions();

        if (data.hasOwnProperty('OptimizeFor')) {
          obj['OptimizeFor'] = _SplitOptimizationType["default"].constructFromObject(data['OptimizeFor']);
        }

        if (data.hasOwnProperty('OptimizePeriodMinutes')) {
          obj['OptimizePeriodMinutes'] = _ApiClient["default"].convertToType(data['OptimizePeriodMinutes'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return SplitOptions;
}();
/**
 * @member {module:model/SplitOptimizationType} OptimizeFor
 */


SplitOptions.prototype['OptimizeFor'] = undefined;
/**
 * For how long should the results be measured until determining the winner template (content)
 * @member {Number} OptimizePeriodMinutes
 */

SplitOptions.prototype['OptimizePeriodMinutes'] = undefined;
var _default = SplitOptions;
exports["default"] = _default;