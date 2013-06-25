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
  var kendo_lint = require('../node_modules/kendo-lint/bin/kendo-lint');

  grunt.registerMultiTask('kendo_lint', 'Validate Kendo UI configuration with kendo-lint.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      js: null,
      html: null,
      json: null,
      parse_docs: null
    });

    
  });

};
