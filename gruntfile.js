module.exports = function(grunt) {
    
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
        ,uglify: {
            my_target: {
                files: {
                    'lib/localizereader.min.js': ['lib/localizereader.js']
                }
            }
        }
    });
        
    // Default task(s).
    grunt.registerTask('default', []);

    // Default task(s).
    grunt.registerTask('min', ['uglify']);

};