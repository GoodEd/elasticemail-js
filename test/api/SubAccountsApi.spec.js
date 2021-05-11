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
    instance = new ElasticEmail.SubAccountsApi();
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

  describe('SubAccountsApi', function() {
    describe('subaccountsByEmailCreditsPatch', function() {
      it('should call subaccountsByEmailCreditsPatch successfully', function(done) {
        //uncomment below and update the code to test subaccountsByEmailCreditsPatch
        //instance.subaccountsByEmailCreditsPatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('subaccountsByEmailDelete', function() {
      it('should call subaccountsByEmailDelete successfully', function(done) {
        //uncomment below and update the code to test subaccountsByEmailDelete
        //instance.subaccountsByEmailDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('subaccountsByEmailGet', function() {
      it('should call subaccountsByEmailGet successfully', function(done) {
        //uncomment below and update the code to test subaccountsByEmailGet
        //instance.subaccountsByEmailGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('subaccountsByEmailSettingsEmailPut', function() {
      it('should call subaccountsByEmailSettingsEmailPut successfully', function(done) {
        //uncomment below and update the code to test subaccountsByEmailSettingsEmailPut
        //instance.subaccountsByEmailSettingsEmailPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('subaccountsGet', function() {
      it('should call subaccountsGet successfully', function(done) {
        //uncomment below and update the code to test subaccountsGet
        //instance.subaccountsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('subaccountsPost', function() {
      it('should call subaccountsPost successfully', function(done) {
        //uncomment below and update the code to test subaccountsPost
        //instance.subaccountsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
