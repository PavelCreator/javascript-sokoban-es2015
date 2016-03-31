module.exports = {
  all: {
    options: {
      removeComments: true,
      collapseWhitespace: true
    },
    files: [{
      "expand": true,
      "cwd": "src/view",
      "src": ["**/*.html"],
      "dest": "./",
      "ext": ".html"
    }]
  },
};