const router = require('koa-router')()
const object = require("../public/javascripts/object.js") //对象操作
const jwt = require("jsonwebtoken");
const tokenConfig = global.config.token;
const sequelize = require("../public/sqlite/sqlite");

router.get('/', async (ctx, next) => {
  console.log(2222)
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/logon', async (ctx, next) => {
  console.log(13)
  sequelize.models.user.create({
    account: "test",
    password: "test"
  })
})

router.post('/login', async (ctx, next) => {
  console.log(ctx.request.body)
  let { account, password } = ctx.request.body;
  if (account == "test" && password == "test") {
    console.log("/login")
    let token = jwt.sign({
      name: "test",
      id: 1
    }, tokenConfig.salt, { expiresIn: "1h" })
    // console.log(token)
    ctx.body = {
      code: 200,
      token,
      message: "success"
    }
  } else {
    ctx.status = 592
    ctx.body = "登录失败"
  }
  next()
})

router.get('/getObjectList', async (ctx, next) => {
  ctx.body = await object.getObjectList(ctx.request.query.path)
  next()
})

router.post('/getObjectUrl', async (ctx, next) => {
  console.log(ctx.request.body)
  ctx.body = await object.getObjectUrl(ctx.request.body.key)
})
module.exports = router