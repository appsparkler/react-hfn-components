const {resolve} = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
process.env.NODE_ENV = 'production'
module.exports = {
  entry: './src/index',
  mode: 'production',
  output: {
    path: resolve('dist'),
    filename: `react-hfn-components.min.js`,
    library: 'ReactHFNComponents',
    libraryTarget: 'umd',
  },
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
      {
        test: /\.(scss|sass)$/,
        include: [resolve('src'), resolve('studio')],
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        include: [resolve('src'), resolve('node_modules')],
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },
  resolve: {
    alias: {
      '@appsparkler/react-hfn-components': resolve('src'),
      '@react-hfn-components': resolve('src/components'),
      '@react-hfn-hooks': resolve('src/hooks'),
      '@react-hfn-utils': resolve('src/utils'),
      // '@react-hfn-contexts': resolve('src/contexts'),
      // '@react-hfn-hooks': resolve('src/hooks'),
      // '@react-hfn-contexts': resolve('src/contexts'),
      // '@react-hfn-singletons': resolve('src/singletons'),
    },
    extensions: ['.sass', '.js', '.jsx', '.json'],
    modules: [
      resolve('node_modules'),
      resolve('./'),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ],
  externals: {
    'react': 'React',
    'props-types': 'PropTypes',
    'croppie': 'Croppie',
  },
}
