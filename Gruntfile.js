/* eslint-env node */

module.exports = function(grunt) {

	"use strict";

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		eslint: {
			target: ["src/*.js"]
		},
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: "src/",
					src: ['*.css', '!*.min.css'],
					dest: "src",
					ext: ".min.css"
				}]
			}
		},
		watch: {
			grunt: {
				files: ["Gruntfile.js"],
				tasks: ["default"]
			},
			src: {
				files: ["src/*"],
				tasks: ["default"]
			}
		},
		replace: {
			js: {
				options: {
					patterns: [{
						match: "CSS",
						replacement: function() {
							return JSON.stringify(grunt.file.read("src/wikipedia-linkify-headers.min.css"));
						}
					}],
					prefix: "RP."
				},
				files: [{
					expand: true,
					cwd: "src",
					src: ["*.js"],
					dest: "dist"
				}]
			}
		}
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-replace');
	grunt.loadNpmTasks('grunt-eslint');

	// Tasks
	grunt.registerTask("default", ["eslint", "cssmin", "replace"]);
};
