module.exports = {
  es5: {
    options: {
      separator: ';',
    },
    src: [
      'src/es5/hoisting.js',
      'src/es5/storage/**.js',
      'src/es5/services/**.js',
      'src/es5/controllers/**.js',
      'src/es5/start.js'
    ],
    dest: 'dist/script.js',
  },
};