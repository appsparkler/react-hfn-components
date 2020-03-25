const {resolve} = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
process.env.NODE_ENV = 'development'
const dotenv = require('dotenv')

module.exports = {
  mode: 'development',
  entry: './studio/index.js',
  devtool: 'inline-source-map',
  module: require('./.webpack-config/module/dist-studio'),
  resolve: require('./.webpack-config/resolve/diststudio'),
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed),
    }),
    new HTMLPlugin({
      template: resolve('studio/index.ejs'),
    }),
  ],
  devServer: {
    stats: 'minimal',
    watchContentBase: true,
    hot: true,
    writeToDisk: true,
  },
}
