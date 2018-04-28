const path = require('path')
const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser') // bodyParser
const static = require('koa-static') //静态文件托管
const convert = require('koa-convert') //中间件转换
const logger = require('koa-logger') //请求日志打印
const onerror = require('koa-onerror') //错误收集
const router = require('./router/index.js')
const isDev = process.env.NODE_ENV === 'development'
const PORT = 8888

onerror(app)
app.use(logger())
app.use(bodyParser())
app.use(static(path.resolve(__dirname, '../dist/')))
app.use(router.routes(), router.allowedMethods())

if(isDev){
	require('../build/dev-server.js')(app)
}else{
	app.listen(PORT)
}