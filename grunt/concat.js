module.exports = {
  es6: {
    options: {
      separator: ';',
    },
    src: [
      'src/es6/hoisting.js',
      'src/es6/storage/**.js',

      'src/es6/entities/cell.js',

      'src/es6/entities/box.js',
      'src/es6/entities/filled_target.js',
      'src/es6/entities/floor.js',

      'src/es6/entities/wall.js',
      'src/es6/entities/concrete.js',

      'src/es6/entities/floor.js',
      'src/es6/entities/target.js',
      'src/es6/entities/user.js',
      'src/es6/entities/userOnTarget.js',

      'src/es6/services/**.js',
      'src/es6/controllers/**.js',
      'src/es6/start.js'
    ],
    dest: 'temp/script_concat.js',
  }
};