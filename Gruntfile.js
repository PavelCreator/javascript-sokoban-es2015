module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-concat');
  require('time-grunt')(grunt);

  require('load-grunt-config')(grunt, {
    jitGrunt: true
  });

  grunt.initConfig({
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: [
          'src/es5/hoisting.js',
          'src/es5/storage/**.js',
          'src/es5/services/**.js',
          'src/es5/controllers/**.js',
          'src/es5/start.js'
        ],
        dest: 'dist/built.js',
      },
    },
  });
};

