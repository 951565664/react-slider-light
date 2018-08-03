const env = process.env.NODE_ENV;

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = () => {
    let base = {
            // entry:'./example/index.js',
            entry:env=='buildPublish'?'./src/index.js':'./example/index.js',
            //devtool: 'inline-source-map',
            plugins: [
                // new ExtractTextPlugin('style.css'),
                new ExtractTextPlugin('index.css'),
                new webpack.NamedModulesPlugin(),
                new webpack.HotModuleReplacementPlugin()
            ],
            devServer: {
                contentBase: './docs',
                hot: true
            },
            module: {
                rules: [
                    {
                        test: /\.(css|less)$/,
                        exclude: [/src/,/example/],
                        use: ExtractTextPlugin.extract({ fallback: "style-loader", use: ["css-loader"] })
                    }, {
                        test: /\.(css|less)$/,
                        include: [/src/,/example/],
                        use: ExtractTextPlugin.extract({
                            fallback: "style-loader",
                            use: ["css-loader?modules&localIdentName=[local]-[hash:base64:5]", "less-loader"]
                        })
                    }, {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        use: ['babel-loader']
                    },
                ]
            },
            output: {
                filename: 'index.js',
                path: env=='buildPublish'?path.resolve(__dirname, 'lib'):path.resolve(__dirname, 'docs'),
                // path: path.resolve(__dirname, 'docs'),
                publicPath: "",
                libraryTarget: 'umd'
            }

        };
    return base;
}
