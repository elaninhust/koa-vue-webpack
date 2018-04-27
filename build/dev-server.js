const path = require('path')
const opn = require('opn')
const convert = require('koa-convert')

function start(app){
	const webpack = require('webpack')
	const webpackConfig = require('./webpack.dev.conf.js')
	const devMiddleware = require('koa-webpack-dev-middleware')
	const hotMiddleware = require('koa-webpack-hot-middleware')
	const config = require('../config/index.js')

	const env = process.env.NODE_ENV === 'development'
	const PORT = process.env.PORT || config.dev.port
	const autoOpenBrowser = !!config.dev.autoOpenBrowser
	const compiler = webpack(webpackConfig)


	if(env){
		app.use(convert(devMiddleware(compiler, {
			publicPath: config.dev.assetPublicPath,
			quite: true
		})))
		app.use(convert(hotMiddleware(compiler, {
			log: () => {}
		})))
	}

	const url = `localhost:${PORT}`

	// var _resolve
	// var readyPromise = new Promise(resolve => {
	// 	_resolve = resolve
	// })

	// console.log('> starting dev server...')
	// devMiddleware.waitUntilValid(() => {
	// 	console.log(`> listening at ${url}`)
	// 	if(autoOpenBrowser && env){
	// 		opn(url)
	// 	}
	// 	_resolve()
	// })

	app.listen(PORT)
}

module.exports = start