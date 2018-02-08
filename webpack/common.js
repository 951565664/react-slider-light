const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports={
    plugins: [
        new webpack.ProvidePlugin({
            Promise: 'es6-promise-promise'
        }),
        new ExtractTextPlugin("index.css"),
    ],
};
