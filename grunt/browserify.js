module.exports = {
  all: {
    options: {
      transform: [['babelify', {presets: ['es2015']}]]
    },
    files: {
      "temp/script_browserify.js": "temp/script_concat.js"
    }
  }
};