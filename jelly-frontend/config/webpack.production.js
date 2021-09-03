const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  output: {
    assetModuleFilename: "images/[name].[contenthash:5].bundle.[ext]",
    filename: "scripts/[name].[contenthash:5].bundle.js",
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: {
          include: /\.css$/g,
          preset: [
            "default",
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
    ],
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
      },
    }),
  ],
};
