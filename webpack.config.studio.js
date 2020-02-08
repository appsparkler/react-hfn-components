const {resolve} = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
process.env.NODE_ENV = 'development'
const dotenv = require('dotenv')

module.exports = {
  mode: 'development',
  entry: './studio/index.js',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          resolve('src'),
          resolve('studio'),
        ],
      },
    ],
  },
  resolve: {
    alias: {
      '@appsparkler/react-hfn-components': resolve('src'),
    },
    extensions: ['.sass', '.js', '.jsx', '.json'],
    modules: [
      resolve('node_modules'),
      resolve('./'),
    ],
  },
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
    hot: true,
  },
}
