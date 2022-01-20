// var COS = require('cos-nodejs-sdk-v5');
// var cos = new COS({
//     SecretId: process.env.SECRETID || 'AKIDs3fBbrL42aXRL3iarOhjeNrl6BVZLl23',
//     SecretKey: process.env.SECRETKEY || 'DrE4TcUAtNa5a9UaQH6sA7i4A4by4461'
// })
const cos = require("cos-yc")
const cosClient = new cos({
    "SecretId": 'AKIDs3fBbrL42aXRL3iarOhjeNrl6BVZLl23',
    "SecretKey": 'DrE4TcUAtNa5a9UaQH6sA7i4A4by4461',
    "Bucket": "yc-1302181823",
    "Region": "ap-shanghai"
})
module.exports = cosClient;