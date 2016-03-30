module.exports = {
    all: {
        files: [{
            expand: true,
            cwd: 'src/es5',
            src: '**/*.js',
            dest: 'dist/es5',
            ext: '.min.js'
        }]
    }
};
