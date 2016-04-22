module.exports = {
  options: {
    limit: 3
  },
  html: [
    'htmlmin'
  ],
  css: [
    'sass:dev'
  ],
  es2015: [
    'concat:es6',
    'browserify',
    //'copy:es6',
    'uglify:es6'
  ],
  img: [
    'imagemin'
  ]
};