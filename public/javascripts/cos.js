const COS = require("cos-yc");
const cosClient = new COS({
    "SecretId": process.env.SECRETID || 'AKIDs3fBbrL42aXRL3iarOhjeNrl6BVZLl23',
    "SecretKey": process.env.SECRETKEY || 'DrE4TcUAtNa5a9UaQH6sA7i4A4by4461',
    "Bucket": "yc-1302181823",
    "Region": "ap-shanghai"
})
module.exports = cosClient;