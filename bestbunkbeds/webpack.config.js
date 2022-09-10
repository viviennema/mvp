const webpack = require('webpack');
const path = require('path');
const DIST_DIR = path.join(__dirname, "/public");
const SRC_DIR = path.join(__dirname, "/src");


module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localsConvention: 'camelCase',
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
};