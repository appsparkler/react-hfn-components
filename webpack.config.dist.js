const {resolve} = require('path')
console.log('building...')
module.exports = ({mode, minimize}) => ({
  mode,
  entry: './src/index',
  optimization: {
    minimize,
  },
  output: {
    path: resolve('dist'),
    filename: `react-hfn-components${minimize ? '.min' : ''}.js`,
    library: 'ReactHFNComponents',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            cacheDirectory: true,
            envName: mode,
          },
        },
      },
    ],
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
  },
})
