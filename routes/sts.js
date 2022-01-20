const router = require('koa-router')()
const sts = require("../public/javascripts/sts.js")
router.post('/getCredential', async (ctx, next) => {
    ctx.body = await sts.getCredential()
    console.log("sts")
    next()
})
module.exports = router