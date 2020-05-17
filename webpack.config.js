let path = require('path');
let webpack = require('webpack');

let MODE = 'development';
let VUE_SRC = path.resolve(__dirname, 'vue');
let VUE_DIST = path.resolve(__dirname, 'static/vue-dist');

const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    mode: MODE,
    entry: {
        app: VUE_SRC + '/app.js'
    },
    output: {
        path: VUE_DIST,
        publicPath: '/static/vue-dist/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: VUE_SRC,
                exclude: '/node_modules/',
                options: {
                    presets: [
                        ['@babel/preset-env', {
                            'modules': false,
                        }],
                    ],
                    plugins: [
                        // dynamic importing vue routes (lazy load)
                        '@babel/plugin-syntax-dynamic-import',
                        ['@babel/plugin-transform-runtime', {
                            'regenerator': true
                        }],
                    ],
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {}
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.sass$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader?indentedSyntax'
                ],
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve('vue'),
            '@static': path.resolve('static'),
        },
        extensions: ['.js', '.vue', '.json']
    },
};