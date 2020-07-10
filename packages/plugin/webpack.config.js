"use strict";
exports.__esModule = true;
var path = require("path");
var webpack_1 = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var config = {
    target: 'web',
    entry: ['./src/index.ts'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                // loaders come from right to left css-loader => style-loader
                use: ['style-loader', 'css-loader']
            },
        ]
    },
    plugins: [
        new webpack_1["default"].ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve('./public', 'index.html')
        }),
    ],
    resolve: {
        extensions: ['.ts', '.js']
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        hot: true,
        port: 5000
    }
};
exports["default"] = config;
