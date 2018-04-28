const Router = require('koa-router')
const home = require('./home.js')

const router = new Router()

router.get('*', async (ctx) => {
	router.redirect('/')
})

router.use('/vue', home.routes(), home.allowedMethods())

module.exports =  router