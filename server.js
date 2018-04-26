const path = require('path')
const Koa = require('koa')
const koaStatic = require('koa-static')
const webpack = require('webpack')
const convert = require('koa-convert')
const webpackConfig = require('./build/webpack.dev.conf.js')
const devMiddleware = require('koa-webpack-dev-middleware')
const hotMiddleware = require('koa-webpack-hot-middleware')
const env = process.env.NODE_ENV === 'development'
const app = new Koa()
const compiler = webpack(webpackConfig)

if(env){
	app.use(convert(devMiddleware(compiler, {
		publicPath: webpackConfig.output.publicPath
	})))
	app.use(convert(hotMiddleware(compiler, {
		log: () => {}
	})))
}

app.use(async function(ctx, next){
	const filename = path.join(path.join(__dirname, '.'), 'index.html')
  // complier.outputFileSystem 可以获得内存中的编译结果
  let res = await new Promise(function(resolve, reject){
  	compiler.outputFileSystem.readFile(filename, (err, result) => {
	    if (err) {
	      return reject(err)
	    }
	    resolve(result)
	  })
  })
  ctx.status = 200
  ctx.url = '/index'
  // ctx.type = 'text/html'
  ctx.body = res
})

app.listen(2019)
console.log('start at localhost:2019')