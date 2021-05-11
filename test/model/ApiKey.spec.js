/**
 * Elastic Email REST API
 * This API is based on the REST API architecture, allowing the user to easily manage their data with this resource-based approach.    Every API call is established on which specific request type (GET, POST, PUT, DELETE) will be used.    To start using this API, you will need your Access Token (available <a target=\"_blank\" href=\"https://elasticemail.com/account#/settings/new/manage-api\">here</a>). Remember to keep it safe. Required access levels are listed in the given request’s description.    This is the documentation for REST API. If you’d like to read our legacy documentation regarding Web API v2 click <a target=\"_blank\" href=\"https://api.elasticemail.com/public/help\">here</a>.    Downloadable library clients can be found in our Github repository <a target=\"_blank\" href=\"https://github.com/ElasticEmail?tab=repositories&q=%22rest+api%22+in%3Areadme\">here</a>
 *
 * The version of the OpenAPI document: 4.0.0
 * Contact: support@elasticemail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ElasticEmail);
  }
}(this, function(expect, ElasticEmail) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ElasticEmail.ApiKey();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ApiKey', function() {
    it('should create an instance of ApiKey', function() {
      // uncomment below and update the code to test ApiKey
      //var instane = new ElasticEmail.ApiKey();
      //expect(instance).to.be.a(ElasticEmail.ApiKey);
    });

    it('should have the property accessLevel (base name: "AccessLevel")', function() {
      // uncomment below and update the code to test the property accessLevel
      //var instance = new ElasticEmail.ApiKey();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "Name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new ElasticEmail.ApiKey();
      //expect(instance).to.be();
    });

    it('should have the property dateCreated (base name: "DateCreated")', function() {
      // uncomment below and update the code to test the property dateCreated
      //var instance = new ElasticEmail.ApiKey();
      //expect(instance).to.be();
    });

    it('should have the property lastUse (base name: "LastUse")', function() {
      // uncomment below and update the code to test the property lastUse
      //var instance = new ElasticEmail.ApiKey();
      //expect(instance).to.be();
    });

    it('should have the property expires (base name: "Expires")', function() {
      // uncomment below and update the code to test the property expires
      //var instance = new ElasticEmail.ApiKey();
      //expect(instance).to.be();
    });

    it('should have the property restrictAccessToIPRange (base name: "RestrictAccessToIPRange")', function() {
      // uncomment below and update the code to test the property restrictAccessToIPRange
      //var instance = new ElasticEmail.ApiKey();
      //expect(instance).to.be();
    });

  });

}));
