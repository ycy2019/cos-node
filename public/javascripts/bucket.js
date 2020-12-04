let cos = require("./cos")
const path = require("path")
let fs = require("fs")
let Bucket = undefined;
let Region = undefined;
// console.log(path.resolve(__dirname, "bucket.json"))
//查询存储桶列表
let getBucketsList = function (_callback) {
    return cos.getService(function (err, data) {
        try {
            console.log("bucket准备好了")
            fs.accessSync(path.join(__dirname, "../data/bucket.json"), fs.constants.R_OK | fs.constants.W_OK);
        } catch (err) {
            console.log(err)
            let info = {
                Bucket: data.Buckets[0].Name,
                Region: data.Buckets[0].Location,
            }
            fs.writeFileSync(path.join(__dirname, "../data/bucket.json"), JSON.stringify(info))
        }

        if (_callback) {
            _callback(data)
        }
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
                console.log(data)
                if (data.statusCode == 200) {
                    resolve(true);
                } else {
                    reject(false);
                }
            });
        })
    })
}

let checkBucketPower = async function () {
    if (await checkBucket()) {

    }
}
module.exports.getBucketsList = getBucketsList;
module.exports.checkBucketPower = checkBucketPower;