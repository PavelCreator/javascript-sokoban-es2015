module.exports = {
  es6: {
    options: {
      mangle: true
    },
    files: {
      'dist/script.min.js': ['temp/script_browserify.js']
    }
  }
};
