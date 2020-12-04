const router = require('koa-router')()
const object = require("../public/javascripts/object.js") //对象操作

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/getObjectLsit', async (ctx, next) => {
  ctx.body = await object.getObjectLsit()
})
module.exports = router