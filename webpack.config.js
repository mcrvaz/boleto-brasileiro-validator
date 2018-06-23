const path = require('path');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    filename: 'boleto-brasileiro-validator.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs-module',
  },
  target: 'node',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules|app|dist/, loader: 'babel-loader' },
    ],
  },
};
