const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path=require('path');
module.exports={
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        //new ExtractTextPlugin("index.css"),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../','public/','index.html'),
            inject:true,
            hash:true,
        })
    ],
};
