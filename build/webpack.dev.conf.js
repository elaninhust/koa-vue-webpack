const webpack = require('webpack')
const merge = require('webpack-merge')
const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf.js')
const config = require('../config/index.js')
const env = process.env.NODE_ENV

const devWebpackConfig = merge(baseWebpackConfig, {
	entry:{
		app: ["webpack-hot-middleware/client",path.join(__dirname,'../client/main.js')]
	},
	// cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,
	plugins:[
    new webpack.HotModuleReplacementPlugin(),//HMR
		new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
		new htmlWebpackPlugin({
			filename: 'index.html',
			template: path.join(__dirname,'../index.html'),
			inject: true
		})
	]
})

module.exports = devWebpackConfig