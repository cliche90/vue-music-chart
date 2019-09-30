const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: {
        bundle: path.join(__dirname, 'main.js')
    },
    module: {
        rules: [
            { test: /\.vue$/, use: 'vue-loader' },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/dist/',
    },
};