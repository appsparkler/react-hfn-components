const {resolve} = require('path')
const {DefinePlugin} = require('webpack')
const dotenv = require('dotenv')

module.exports = {
  plugins: [
    new DefinePlugin({
      ...dotenv.config().parse,
    }),
  ],
  resolve: {
    modules: [
      resolve('node_modules'),
    ],
    alias: {
      '@components': resolve('src/components'),
    },
  },
}
