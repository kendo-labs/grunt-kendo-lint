/*
 * grunt-kendo-lint
 * https://github.com/brandon/grunt-kendo-lint
 *
 * Copyright (c) 2013 Brandon Satrom
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    kendo_lint: {
      options: {
        force: true
      },
      default_options: {
        options: {
        },
        files: {
          'tmp/default_options': [
            'test/fixtures/badKendo.js', 
            'test/fixtures/goodKendo.html'
          ]
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

    watch: {
      scripts: {
        files: ['test/*_test.js'],
        tasks: 'kendo-lint'
      }
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'kendo_lint', 'nodeunit', 'watch']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
