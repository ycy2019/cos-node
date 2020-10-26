let {
    checkBucketPower
} = require("./bucket")
const cos = ("./cos.js")
const object = require("./object")

checkBucketPower().then(function (res) {
    console.log(res)
})

object.getObjectLsit()