let {
    checkBucket
} = require("./bucket")
checkBucket().then(function (res) {
    console.log(res)
})