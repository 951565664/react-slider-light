const ftpPlugin = require('ftp-webpack-plugin');
const ftpOptions = require('./ftp.config');

module.exports = {
    plugins: [
        new ftpPlugin(ftpOptions),
    ],
}