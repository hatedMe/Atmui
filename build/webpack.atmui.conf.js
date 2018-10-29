'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const env = process.env.NODE_ENV === 'testing' ?
    require('../config/test.env') :
    require('../config/prod.env')

const webpackConfig = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders({
            sourceMap: config.build.productionSourceMap,
            extract: true,
            usePostCSS: true
        })
    },
    devtool: config.build.productionSourceMap ? config.build.devtool : false,
    entry: './lib/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        filename: 'index.js',
        library: 'Atmui', // 模块名称
        libraryTarget: 'umd', // 输出格式
        umdNamedDefine: false, // 是否将模块名称作为 AMD 输出的命名空间,
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': env
        }),
        new UglifyJsPlugin({
            uglifyOptions: {
                compress: {
                    warnings: false
                }
            },
            sourceMap: false,
            parallel: true
        }),
        new ExtractTextPlugin({
            filename: utils.assetsPath('css/[name].css'),
            allChunks: true,
        }),
        new OptimizeCSSPlugin({
            cssProcessorOptions: config.build.productionSourceMap ?
                { safe: true, map: { inline: false } } :
                { safe: true }
        }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, '../static'),
            to: config.build.assetsSubDirectory,
            ignore: ['.*']
        }])
    ],
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
})


module.exports = webpackConfig