module.exports = {
  options: {
    spawn: false,
    livereload: true
  },
  html: {
    files: [
      'src/view/*.html'
    ],
    tasks: [
      'htmlmin'
    ]
  },
  css: {
    files: [
      'src/styles/*.scss'
    ],
    tasks: [
      'sass:dev'
    ]
  },
  es2015: {
    files: [
      'src/es6/**/*.js',
      'src/es6/*.js'
    ],
    tasks: [
      'concat:es6',
      'browserify',
      'copy:es6',
      'uglify:es6'
    ]
  },
  img: {
    files: [
      'src/images/*.*'
    ],
    tasks: [
      'imagemin'
    ]
  }
};