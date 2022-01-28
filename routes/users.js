const router = require('koa-router')()

router.prefix('/users')

router.get('/', function (ctx, next) {
  console.log(3333)
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
