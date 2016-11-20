const WebpackValidator =  require('webpack-validator');
const webpack = require('./config/webpack.dev.js');
module.exports = WebpackValidator(webpack);
