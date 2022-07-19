"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EmailValidationResult = _interopRequireDefault(require("./EmailValidationResult"));

var _FileUploadResult = _interopRequireDefault(require("./FileUploadResult"));

var _VerificationStatus = _interopRequireDefault(require("./VerificationStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The VerificationFileResultDetails model module.
 * @module model/VerificationFileResultDetails
 * @version 4.0.20
 */
var VerificationFileResultDetails = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VerificationFileResultDetails</code>.
   * Detailed verification file result info
   * @alias module:model/VerificationFileResultDetails
   */
  function VerificationFileResultDetails() {
    _classCallCheck(this, VerificationFileResultDetails);

    VerificationFileResultDetails.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(VerificationFileResultDetails, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>VerificationFileResultDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VerificationFileResultDetails} obj Optional instance to populate.
     * @return {module:model/VerificationFileResultDetails} The populated <code>VerificationFileResultDetails</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VerificationFileResultDetails();

        if (data.hasOwnProperty('VerificationResult')) {
          obj['VerificationResult'] = _ApiClient["default"].convertToType(data['VerificationResult'], [_EmailValidationResult["default"]]);
        }

        if (data.hasOwnProperty('VerificationID')) {
          obj['VerificationID'] = _ApiClient["default"].convertToType(data['VerificationID'], 'String');
        }

        if (data.hasOwnProperty('Filename')) {
          obj['Filename'] = _ApiClient["default"].convertToType(data['Filename'], 'String');
        }

        if (data.hasOwnProperty('VerificationStatus')) {
          obj['VerificationStatus'] = _VerificationStatus["default"].constructFromObject(data['VerificationStatus']);
        }

        if (data.hasOwnProperty('FileUploadResult')) {
          obj['FileUploadResult'] = _FileUploadResult["default"].constructFromObject(data['FileUploadResult']);
        }

        if (data.hasOwnProperty('DateAdded')) {
          obj['DateAdded'] = _ApiClient["default"].convertToType(data['DateAdded'], 'Date');
        }

        if (data.hasOwnProperty('Source')) {
          obj['Source'] = _ApiClient["default"].convertToType(data['Source'], 'String');
        }
      }

      return obj;
    }
  }]);

  return VerificationFileResultDetails;
}();
/**
 * Verification result's details
 * @member {Array.<module:model/EmailValidationResult>} VerificationResult
 */


VerificationFileResultDetails.prototype['VerificationResult'] = undefined;
/**
 * Identifier of this verification result
 * @member {String} VerificationID
 */

VerificationFileResultDetails.prototype['VerificationID'] = undefined;
/**
 * Origin file name
 * @member {String} Filename
 */

VerificationFileResultDetails.prototype['Filename'] = undefined;
/**
 * @member {module:model/VerificationStatus} VerificationStatus
 */

VerificationFileResultDetails.prototype['VerificationStatus'] = undefined;
/**
 * @member {module:model/FileUploadResult} FileUploadResult
 */

VerificationFileResultDetails.prototype['FileUploadResult'] = undefined;
/**
 * Date of creation in YYYY-MM-DDThh:ii:ss format
 * @member {Date} DateAdded
 */

VerificationFileResultDetails.prototype['DateAdded'] = undefined;
/**
 * Origin file extension
 * @member {String} Source
 */

VerificationFileResultDetails.prototype['Source'] = undefined;
var _default = VerificationFileResultDetails;
exports["default"] = _default;