const jwt = require("jsonwebtoken");
const tokenConfig = global.config.token;
module.exports = async function (ctx, next) {
    if (ctx.request.url == '/logon') {
        next();
        return;
    }
    let token = ctx.request.headers["authorization"];
    console.log(token)
    // const tokenItem = "";
    try {
        const tokenItem = jwt.verify(token, tokenConfig.salt);
        console.log(tokenItem);
    } catch (error) {
        // console.log(error.message);
        ctx.status = 502;
        ctx.body = "登录失效!" + error.message
    }

}