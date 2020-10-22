let cos = require("./cos")
//查询存储桶列表
let getBucketsList = function (_callback) {
    cos.getService(function (err, data) {
        // console.log(data && data.Buckets)
        // console.log("******************")
        _callback(data)
    })
}

//检索存储桶及其权限
let checkBucket = function () {
    return new Promise(function (resolve, reject) {
        getBucketsList((data) => {
            resolve(data)
        })
    }).then((res) => {
        return new Promise((resolve, reject) => {
            cos.headBucket({
                Bucket: res.Buckets[0].Name,
                Region: res.Buckets[0].Location,
            }, function (err, data) {
                // console.log(data)
                if (data.statusCode == 200) {
                    resolve(true);
                } else {
                    reject(false);
                }
            });
        })
    })
}
module.exports.getBucketsList = getBucketsList;
module.exports.checkBucket = checkBucket;