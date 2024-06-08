const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/main.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'), // Use path.resolve to get an absolute path
        filename: '[name].bundle.js',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            chunks: ['main'], 
        }),
    ],
    module: {
        rules: [
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        },
        ],
    },
};