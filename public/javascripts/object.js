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

function getObjectLsit(path) {
    cos.getBucket({
        Bucket: bucketData.Bucket,
        Region: bucketData.Region,
        Prefix: path || "",
    }, function (err, data) {
        console.log(err || data);
    });
}

getObjectLsit()