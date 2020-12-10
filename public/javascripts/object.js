let {
    getBucketsList
} = require("./bucket")
const cos = require("./cos")
const fs = require("fs")
const {
    checkFileType
} = require("../tools/index.js")

let bucketData = undefined
getBucket()

function getBucket() {
    try {
        fs.accessSync(path.join(__dirname, "../data/bucket.json"));
        bucketData = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/bucket.json")).toString());
    } catch (err) {
        console.log(2)
        getBucketsList((data) => {
            bucketData = {
                Bucket: data.Buckets[0].Name,
                Region: data.Buckets[0].Location,
            }
        })
    }
}
module.exports = {
    getObjectLsit: function (path) {
        return new Promise(function (resolve, reject) {
            cos.getBucket({
                Bucket: bucketData.Bucket,
                Region: bucketData.Region,
                Prefix: path || "",
                Delimiter: "/"
            }, function (err, data) {
                // console.log(err || data);
                console.log(1)
                if (err) {
                    reject(err)
                } else {
                    data.Contents.forEach(function (item) {
                        item.type = checkFileType(item.Key)
                    })
                    // console.log(data)
                    resolve(data)
                }
            });
        })
    },
    deleteObject: function (key) {
        cos.deleteObject({
            Bucket: bucketData.Bucket,
            Region: bucketData.Region,
            Key: key
        }, function (err, data) {
            console.log(err || data);
        });
    },
    //删除多个对象
    deleteMultipleObject: function (key) {
        cos.deleteMultipleObject({
            Bucket: bucketData.Bucket,
            Region: bucketData.Region,
            Key: key
        }, function (err, data) {
            console.log(err || data);
        });
    },
    getObjectUrl: function (key) {
        return new Promise(function (resolve, reject) {
            cos.getObjectUrl({
                Bucket: bucketData.Bucket,
                Region: bucketData.Region,
                Key: key,
            }, function (err, data) {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            });
        })
    },
    downloadObject: function (key, output) {
        cos.getObject({
            Bucket: bucketData.Bucket,
            Region: bucketData.Region,
            Key: key,
        }, function (err, data) {
            console.log(err || data.Body);
        });
    }
}