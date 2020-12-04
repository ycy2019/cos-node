let {
    getBucketsList
} = require("./bucket")
const cos = require("./cos")
const fs = require("fs")
let bucketData = undefined
getBucket()

function getBucket() {
    try {
        fs.accessSync("../data/bucket.json");
        bucketData = JSON.parse(fs.readFileSync("../data/bucket.json").toString());
    } catch (err) {
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
        cos.getBucket({
            Bucket: bucketData.Bucket,
            Region: bucketData.Region,
            Prefix: path || "",
            Delimiter: "/"
        }, function (err, data) {
            console.log(err || data);
        });
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
    deleteObject: function (key) {
        cos.deleteMultipleObject({
            Bucket: bucketData.Bucket,
            Region: bucketData.Region,
            Key: key
        }, function (err, data) {
            console.log(err || data);
        });
    },
    getObjectUrl: function (key) {
        cos.getObjectUrl({
            Bucket: bucketData.Bucket,
            Region: bucketData.Region,
            Key: key,
        }, function (err, data) {
            console.log(err || data.Url);
        });
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