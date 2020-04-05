const {DefinePlugin} = require('webpack')
const dotenv = require('dotenv')

module.exports = {
  plugins: [
    new DefinePlugin({
      ...dotenv.config().parse,
    }),
  ],
  resolve: require('./.webpack-config/resolve/storybook'),
}
