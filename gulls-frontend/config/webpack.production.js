const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: "production",
  output: {
      assetModuleFilename: "images/[name].[contenthash:5].bundle.[ext]",
      filename: "scripts/[name].[contenthash:5].bundle.js",
      publicPath: "/assets"
  },
  optimization: {
      minimize: true,
      runtimeChunk:{
          name:"runtime"
      },
      splitChunks:{
          chunks:"async", 
          minChunks:1,
          maxAsyncRequests:5,
          maxInitialRequests:3,
          name:false,
          cacheGroups:{
              commons:{
                  chunks:"initial",
                  minChunks:2,
                  name:"commons"
              }
          },
          minSize:{
              javascript:100000,
              style:100000,
          },

      }
  },
  plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
          title: "蓝鸥学习平台",
          filename: "index.html",
          template: resolve(__dirname, "../src/index-prod.html"),
          minify: {
              removeComments: true,
              collapseWhitespace: true,
              removeAttributeQuotes: true,
          }
      }),
      new OptimizeCSSAssetsPlugin({
          assetNameRegExp: /\.css$/g,
          cssProcessor: require('cssnano'),
          cssProcessorOptions: {
              preset: [
                  "default",
                  {
                      discardComments: {
                          removeAll: true
                      }
                  }
              ]
          }
      })
  ]
}