const {resolve} = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
process.env.NODE_ENV = 'development'
const dotenv = require('dotenv')

console.log(require('./.webpack-config/module/studio'))

module.exports = {
  mode: 'development',
  entry: './studio/index.js',
  devtool: 'inline-source-map',
  module: require('./.webpack-config/module/studio'),
  resolve: {
    alias: {
      '@appsparkler/react-hfn-components': resolve('src'),
      '@react-hfn-hooks': resolve('src/hooks'),
      '@react-hfn-utils': resolve('src/utils'),
      '@react-hfn-components': resolve('src/components'),
      '@react-hfn-hoc': resolve('src/hoc'),
      '@react-hfn-studio': resolve('studio'),
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
    watchContentBase: true,
    hot: true,
    writeToDisk: true,
  },
}
