const {resolve} = require('path')
module.exports = {
  entry: './src/index',
  output: {
    path: resolve('dist'),
    filename: `react-hfn-components${process.env.NODE_ENV === 'production' ? '.min' : ''}.js`,
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
            envName: process.env.NODE_ENV,
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
}
