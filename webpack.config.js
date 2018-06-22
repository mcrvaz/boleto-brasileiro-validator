const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'boleto-validator.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};
