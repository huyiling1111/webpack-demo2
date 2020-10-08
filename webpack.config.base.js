const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
module.exports = {
    devServer: {
        contentBase: './dist',
    },
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js'
    },
    plugins: [new HtmlWebpackPlugin(
        {
            title: 'My App',
            template: "src/assets/index.html"
        }
    )],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('dart-sass'),
                        }
                    }
                ],
            },
            {
                test: /\.less$/,
                loader: ['style-loader', 'css-loader', 'less-loader'] // compiles Less to CSS
            },
            {
                test: /\.styl$/,
                loader: ['style-loader', 'css-loader', 'stylus-loader'] // compiles stylus to CSS
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader',]
            }
        ]
    }
}
