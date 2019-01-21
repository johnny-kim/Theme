const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    inline: true,
    hot: true,
    // contentBase: './dist',
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            }
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [{
         loader: 'file-loader',
        }],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: [{
          loader: 'file-loader',
        }],
      },
      {
        test: /\.(html)$/,
        use: [{
          loader: 'html-loader',
        }],
      },
    ],
  },
  entry: {
    application: './src/index.js'
  },
  // entry: join(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: devMode ? '[name]-[hash].js' : '[name]-[hash].js',
    chunkFilename: devMode ? '[name]-[chunkhash].js' : '[name]-[chunkhash].js',
    publicPath: './',
  },
  plugins: [
    new UglifyJSPlugin(),
    new HtmlWebpackPlugin({
      // template: './src/index.html',
      // filename: join(__dirname, 'dist', 'index.html'),
      filename: 'index.html',
      template: './src/assets/index.html',
    }),
    new CleanWebpackPlugin(['dist']),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? '[name]-[hash].css' : '[name]-[hash].css',
      chunkFilename: devMode ? '[id]-[hash].css' : '[id]-[hash].css',
    }),
  ],
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/,
        },
      },
      chunks: 'async',
      minChunks: 1,
      minSize: 30000,
      name: true,
    },
  },
};
