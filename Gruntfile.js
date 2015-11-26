module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'), // the package file to load

		qunit: {
			all: ['tests/*.html']
		},
		watch: {
			files: ['tests/*.js', 'tests/*.html', 'src/*.html'],
			tasks: ['qunit']
		}
	});
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['qunit']);
}

