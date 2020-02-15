const {resolve} = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
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
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    alias: {
      '@appsparkler/react-hfn-components': resolve('src'),
      '@react-hfn-components': resolve('src/components'),
      '@react-hfn-hooks': resolve('src/hooks'),
      '@react-hfn-contexts': resolve('src/contexts'),
      '@react-hfn-hooks': resolve('src/hooks'),
      '@react-hfn-contexts': resolve('src/contexts'),
      '@react-hfn-singletons': resolve('src/singletons'),
    },
    extensions: ['.sass', '.js', '.jsx', '.json'],
    modules: [
      resolve('node_modules'),
      resolve('./'),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ],
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
  },
}
