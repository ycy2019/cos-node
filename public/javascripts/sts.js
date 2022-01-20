let STS = require("qcloud-cos-sts");
const policy = {
    'version': '2.0',
    'statement': [{
        'action': [
            // 简单上传
            'name/cos:PutObject',
            'name/cos:PostObject',
            // 分片上传
            'name/cos:InitiateMultipartUpload',
            'name/cos:ListMultipartUploads',
            'name/cos:ListParts',
            'name/cos:UploadPart',
            'name/cos:CompleteMultipartUpload',
        ],
        'effect': 'allow',
        'principal': { 'qcs': ['*'] },
        'resource': [
            '*',
        ],
    }],
}
module.exports = {
    getCredential: function () {
        return new Promise(function (resolve, reject) {
            STS.getCredential({
                secretId: `${process.env.SECRETID}`,
                secretKey: `${process.env.SECRETKEY}`,
                // proxy: config.proxy,
                durationSeconds: 3600,
                region: "ap-shanghai",
                policy: policy,
            }, function (err, credential) {
                console.log(err || credential);
                if (err) {
                    reject(err)
                } else {
                    resolve(credential)
                }
            })
        })
    }
}