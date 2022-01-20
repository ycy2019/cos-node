let {
    checkBucketPower
} = require("./bucket")
const cos = require("./cos.js")
// const object = require("./object") //对象操作
// const sts = require("./sts")

//检索存储桶及其权限
// console.log(cos)
// cos.checkBucket()
//获取对象列表
cos.getObjectList();

//删除单个对象
// object.deleteObject("333.html");

//删除多个对象
// object.deleteObject("333.html");

//获取对象的url
// object.getObjectUrl("video/1080P_4000K_247562661.mp4");

//下载对象
// object.downloadObject("video.html");

//获取sts
// sts.getCredential();