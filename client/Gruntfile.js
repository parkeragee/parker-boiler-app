module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            sass: {
                files: ['styles/**/*.{scss,sass}'],
                tasks: ['sass:dist']
            },
            livereload: {
                files: ['*.html', 'js/**/*.{js,json}', 'css/*.css','img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
                options: {
                    livereload: true
                }
            }
        },
        sass: {
            options: {
                sourceMap: true,
                outputStyle: 'compressed'
            },
            dist: {
                files: {
                    'public/styles/styles.css': 'styles/styles.scss'
                }
            }
        },
        copy: {
            main: {
                expand: true,
                src: 'styles/**/*',
                dest: 'build/'
            }
        }
    });
    grunt.registerTask('default', ['sass:dist', 'watch']);
    grunt.registerTask('build', ['sass:dist', 'copy']);
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
};