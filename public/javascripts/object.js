// let {
//     getBucketsList
// } = require("./bucket")
const cos = require("./cos")
const fs = require("fs")
const {
    checkFileType
} = require("../tools/index.js")

// let bucketData = undefined
// getBucket()

// function getBucket() {
//     try {
//         fs.accessSync(path.join(__dirname, "../data/bucket.json"));
//         bucketData = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/bucket.json")).toString());
//     } catch (err) {
//         console.log(2)
//         getBucketsList((data) => {
//             bucketData = {
//                 Bucket: data.Buckets[0].Name,
//                 Region: data.Buckets[0].Location,
//             }
//         })
//     }
// }
module.exports = {
    getObjectList: async function (path) {
        try {
            return await cos.getObjectList(path)
        } catch (error) {
            console.error(error)
            throw error
        }
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
            Sign: false
        }, function (err, data) {
            console.log(err || data.Body);
        });
    }
}