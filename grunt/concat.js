module.exports = {
  es6: {
    options: {
      separator: ';',
    },
    src: [
      'src/es6/hoisting.js',
      'src/es6/storage/**.js',
      'src/es6/services/**.js',
      'src/es6/controllers/**.js',
      'src/es6/start.js'
    ],
    dest: 'temp/script_concat.js',
  }
};