const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app/index.js',

    output: {
        path: path.join(__dirname, 'docs'),
        filename: 'bundle.js'
    },

    devServer: {
        port: 3000
    },

    module: {
        rules: [
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ]

};