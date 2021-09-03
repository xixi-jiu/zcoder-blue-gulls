const {
    join,
    resolve
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    output: {
        publicPath: "/",
        assetModuleFilename: "images/[name][ext]",
        filename: "scripts/[name].bundle.js"
    },
    devServer: {
        historyApiFallback: true,
        contentBase: join(__dirname, '../dist'),
        port: 8082,
        watchContentBase: true,
        inline: true,
        proxy: { // 配置代理
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
            },
        }
    },
    devtool: "source-map",
    plugins: [
        new HtmlWebpackPlugin({
            title: "蓝鸥学习平台",
            filename: "index.html",
            template: resolve(__dirname, "../src/index-dev.html")
        })
    ]
}