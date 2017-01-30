'use strict';

const combineLoaders = require('webpack-combine-loaders');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: [
        './app/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: "index_bundle.js"
    },
    module : {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
              test: /\.css$/,
              loader: combineLoaders([
                {
                  loader: 'style-loader'
                }, {
                  loader: 'css-loader',
                  query: {
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                  }
                }
              ])
            }
        ]
    },
    plugins: [HTMLWebpackPluginConfig]
};
