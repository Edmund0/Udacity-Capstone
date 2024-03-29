const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: './src/client/index.js',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },

            {
                test: /.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
            },

            {
                type: 'javascript/auto',
                test: /\.json$/,
                exclude: /node_modules/,
                use: [ 
                    {
                        loader: 'json-loader'
                    },
                 ]
            },

            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader'
                  },
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        
        new WorkboxPlugin.GenerateSW(),
        new MiniCssExtractPlugin()
    ],
    output:{
        libraryTarget: 'var',
        library: 'Client',
    },
    optimization: {
        minimizer: [
          new CssMinimizerPlugin(),
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'), // Output path for your built files
        publicPath: '/', // Public path used by your assets (e.g., CSS, JS, images)
        // ...
    },
}
