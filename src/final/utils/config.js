require('dotenv').config();

const aws = require('aws-sdk');

aws.config.update({
    secretAccessKey:process.env.SECRETACCESSKEY,
    accessKeyId:process.env.ACCESSKEYID,
    region:process.env.REGION
});

const s3 = new aws.S3();

module.exports = s3;