const env = process.env.NODE_ENV;
const commit = process.env.COMMIT;

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = () => {
    let entry = './src/index.js',
        base = {
            entry,
            //devtool: 'inline-source-map',
            module: {
                rules: [
                    {
                        test: /\.(css|less)$/,
                        exclude: /src/,
                        use: ExtractTextPlugin.extract({fallback: "style-loader", use: ["css-loader"]})
                    }, {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        use: ['babel-loader']
                    },
                ]
            },
            externals: ['react','moment','react-dom','react-router','moment/locale/zh-cn'],
            output:{
                filename: 'index.js',
                path:path.resolve(__dirname, 'lib'),
                publicPath: ""
            }

        };
    return base;
}
