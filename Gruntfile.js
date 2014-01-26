'use strict';
module.exports = function(grunt){

	grunt.initConfig({
		//pkg = grunt.file.readJSON('package.json'),
		
		uglify: {
			options: {

			},
			build: {
				src: 'js/main.js',
				dest: 'js/main.min.js'
			}
		},

		cssmin: {
			add_banner: {
				options: {
					banner: '/* For cnc2014.com */'
				},
				files: {
					'css/style.css': ['css/normalize.css','css/gridism.css','css/main.css']
				}
			}
		}
	});

	// Load uglify plugin
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	// default task registration
	grunt.registerTask('default', ['uglify','cssmin']);

}