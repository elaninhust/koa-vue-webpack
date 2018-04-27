const webpack = require('webpack')
const merge = require('webpack-merge')
const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf.js')
const env = process.env.NODE_ENV

console.log(path.join(__dirname,'../src'))

const devWebpackConfig = merge(baseWebpackConfig, {
	entry:{
		app: ["webpack-hot-middleware/client",path.join(__dirname,'../client/main.js')]
	},
	output:{
		publicPath: '/',
		filename: '[name].[hash:8].js'
	},
	plugins:[
    new webpack.HotModuleReplacementPlugin(),
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