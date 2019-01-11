var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
const rootDir = path.resolve(__dirname);

module.exports = {
    entry: {
        'polyfills':'./polyfills.ts',
        'vendor':'./vendor.ts',
        'app': './src/main.ts',
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    module:{
        rules:[
            {
                test:/\.ts$/,
                loaders: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: { configFileName: './tsconfig.json' }
                    }, 'angular2-template-loader'
                ]
            },
            {
                test:/\.ts$/,
                loaders: [
                   'angular-router-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.css$/,
                exclude: path.resolve(__dirname, 'src'),
                loader: "style-loader!css-loader?root=."
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'raw-loader'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=public/fonts/[name].[ext]'
            }
        ]
    },

    plugins:[
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core/,
            path.resolve(__dirname)
        ),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            "window.jQuery": 'jquery'
        })
    ]
};
