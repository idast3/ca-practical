module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        files: {
          'dist/css/style.css' : 'sass/style.scss'
        }
      }
    },

    watch: {
      options: {
        spawn: false,
        livereload: true
      },
      css: {
        files:'sass/style.scss',
        tasks: ['sass', 'cssmin']
      },

      cssmin: {
        minify: {
          src: 'dist/css/style.css',
          dest: 'dist/css/minified/style.min.css'
        }
      },

      connect: {
        server: {
          options: {
            hostname: 'localhost',
            port: 3000,
            base: 'dist',
            livereload: true
          }
        }
      }

    }

  });

  
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default',['connect','watch']);

}
