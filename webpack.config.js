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
            plugins: [
                new ExtractTextPlugin('style.css')
                //if you want to pass in options, you can do so:
                //new ExtractTextPlugin({
                //  filename: 'style.css'
                //})
            ],
            module: {
                rules: [
                    {
                        test: /\.(css|less)$/,
                        exclude: /src/,
                        use: ExtractTextPlugin.extract({fallback: "style-loader", use: ["css-loader"]})
                    }, {
                        test: /\.(css|less)$/,
                        include: /src/,
                        use: ExtractTextPlugin.extract({
                            fallback: "style-loader",
                            use: ["css-loader?modules&localIdentName=[local]-[hash:base64:5]", "less-loader"]
                        })
                    },  {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        use: ['babel-loader']
                    },
                ]
            },
            output: {
                filename: 'index.js',
                path: path.resolve(__dirname, 'lib'),
                publicPath: "",
                libraryTarget : 'umd'
            }

        };
    return base;
}
