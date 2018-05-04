const Router = require('koa-router')
const router = new Router()

router.all('/list', async (ctx, next) => {
	ctx.body = {
		code: 0,
		data: {
			name: 'elan',
			age: 18
		}
	}
	console.log(ctx.request,ctx.query,ctx.querystring,ctx.request.body)
	console.log(ctx.cookie.get('PHPSESSION'))
})

module.exports = router