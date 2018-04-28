const Router = require('koa-router')
const router = new Router()

router.get('/index', async (ctx, next) => {
	ctx.body = '/index'
})

router.get('/home', async (ctx, next) =>{
	ctx.body = '/home'
})

module.exports = router