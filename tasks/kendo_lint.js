/*
 * grunt-kendo-lint
 * https://github.com/brandon/grunt-kendo-lint
 *
 * Copyright (c) 2013 Brandon Satrom
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
 var path = require('path');
  var kendoLint = require('kendo-lint');

  grunt.registerMultiTask('kendo_lint', 'Validate Kendo UI configuration with kendo-lint.', function() {
    var done = this.async();

    var files = this.filesSrc,
      errorCount = 0,
      curr = 0;

    files.forEach(function(filepath) {
      var extArr = path.extname(filepath||'').split('.');
      var ext = extArr[1];

      if (ext === 'js') {
        kendoLint.lintJSFile(filepath, function(error, results) {
          if (results.length > 0) {
            results.forEach(function (result) {
              grunt.log.error(result.filename + " [L" + result.line + ",C" + result.col + "]: " + result.message);
              errorCount++;
            });             
          }

          pending();
        });
      } else {
        kendoLint.lintHTMLFile(filepath, function(error, results) {
          if (results.length > 0) {
            results.forEach(function (result) {
              grunt.log.error(result.filename + ": " + result.message);
              errorCount++;
            });             
          }

          pending();
        });
      }

      function pending() {
        curr++;
        if (curr === files.length) {
          // Fail task if errors were logged.
          if (errorCount) { return false; }

          // Otherwise, print a success message.
          grunt.log.ok(files.length + ' file' + (files.length === 1 ? '' : 's') + ' lint free.');
          done();
        }
      }  
    });
  });

};
