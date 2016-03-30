module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-concat');
  require('time-grunt')(grunt);

  require('load-grunt-config')(grunt, {
    jitGrunt: true
  });
};

