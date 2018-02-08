const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const path = require('path');

module.exports = {
    plugins: [
        // new CopyWebpackPlugin([{
        //     from: path.resolve(__dirname, '../public'),
        //     to: path.resolve(__dirname, '../dist'),
        //     ignore: ['.html']
        // }]),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                dead_code: true,
            },
        }),
        // new CleanWebpackPlugin(
        //     [path.resolve('dist')], {
        //         "root": path.resolve(__dirname, '../'), // 一个根的绝对路径.
        //         "verbose": true, // 将log写到 console.
        //         "dry": false, //不要删除任何东西，主要用于测试.
        //         "exclude": [] //排除不删除的目录，主要用于避免删除公用的文件
        //     }
        // ),
    ],
};
