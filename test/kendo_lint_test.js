'use strict';

var grunt = require('grunt');
var kendoLint = require('kendo-lint');

exports['kendo-lint'] = {
  goodjs: function(test) {
    test.expect(1);
    kendoLint.lintJSFile('test/fixtures/goodKendo.js', function(error, results) {
      test.equal(results.length, 0, 'result object should be empty for clean file');
      test.done();
    });
  },
  goodhtml: function(test) {
    test.expect(1);
    kendoLint.lintHTMLFile('test/fixtures/goodKendo.html', function(error, results) {
      test.equal(results.length, 0, 'result object should be empty for clean file');
      test.done();
    });
  },
  badjs: function(test) {
    test.expect(1);
    kendoLint.lintJSFile('test/fixtures/badKendo.js', function(error, results) {
      test.equal(results[0].message, 'Option stepUp2TheStreets not found', 'result should contain error for bad js file');
      test.done();
    });
  },
  badhtml: function(test) {
    test.expect(1);
    kendoLint.lintHTMLFile('test/fixtures/badKendo.html', function(error, results) {
      test.equal(results[0].message, 'Could not find component specified in data-role: spiinnnnerrr', 'result should contain error for bad html file');
      test.done();
    });
  }
};