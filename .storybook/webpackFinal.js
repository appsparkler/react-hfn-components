module.exports = async(config) => {
  const customWebpackConfig = require('../webpack.config.storybook')
  return {
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        ...customWebpackConfig.resolve.alias
      },
      modules: [
        ...config.resolve.modules,
        ...customWebpackConfig.resolve.modules
      ]
    },
  }
}
