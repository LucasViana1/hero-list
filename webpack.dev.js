// const HtmlWebPackPlugin = require('html-webpack-plugin');
// const Dotenv = require('dotenv-webpack');
// const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

// const alias = (url) => path.resolve(__dirname, './', url);

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
});
