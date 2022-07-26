"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EncodingType = _interopRequireDefault(require("./EncodingType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Options model module.
 * @module model/Options
 * @version 4.0.20
 */
var Options = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Options</code>.
   * E-mail configuration
   * @alias module:model/Options
   */
  function Options() {
    _classCallCheck(this, Options);

    Options.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Options, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Options</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Options} obj Optional instance to populate.
     * @return {module:model/Options} The populated <code>Options</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Options();

        if (data.hasOwnProperty('TimeOffset')) {
          obj['TimeOffset'] = _ApiClient["default"].convertToType(data['TimeOffset'], 'Number');
        }

        if (data.hasOwnProperty('PoolName')) {
          obj['PoolName'] = _ApiClient["default"].convertToType(data['PoolName'], 'String');
        }

        if (data.hasOwnProperty('ChannelName')) {
          obj['ChannelName'] = _ApiClient["default"].convertToType(data['ChannelName'], 'String');
        }

        if (data.hasOwnProperty('Encoding')) {
          obj['Encoding'] = _EncodingType["default"].constructFromObject(data['Encoding']);
        }

        if (data.hasOwnProperty('TrackOpens')) {
          obj['TrackOpens'] = _ApiClient["default"].convertToType(data['TrackOpens'], 'Boolean');
        }

        if (data.hasOwnProperty('TrackClicks')) {
          obj['TrackClicks'] = _ApiClient["default"].convertToType(data['TrackClicks'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return Options;
}();
/**
 * By how long should an e-mail be delayed (in minutes). Maximum is 35 days.
 * @member {Number} TimeOffset
 */


Options.prototype['TimeOffset'] = undefined;
/**
 * Name of your custom IP Pool to be used in the sending process
 * @member {String} PoolName
 */

Options.prototype['PoolName'] = undefined;
/**
 * Name of selected channel.
 * @member {String} ChannelName
 */

Options.prototype['ChannelName'] = undefined;
/**
 * @member {module:model/EncodingType} Encoding
 */

Options.prototype['Encoding'] = undefined;
/**
 * Should the opens be tracked? If no value has been provided, Account's default setting will be used.
 * @member {Boolean} TrackOpens
 */

Options.prototype['TrackOpens'] = undefined;
/**
 * Should the clicks be tracked? If no value has been provided, Account's default setting will be used.
 * @member {Boolean} TrackClicks
 */

Options.prototype['TrackClicks'] = undefined;
var _default = Options;
exports["default"] = _default;