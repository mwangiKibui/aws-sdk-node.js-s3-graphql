const s3 = require('./config');

const {promisify} = require('util');

async function getUrl(bucketName,key){

    const params = {
        Bucket:bucketName,
        Key:key
    };

    let getObject = promisify(s3.getSignedUrl.bind(s3));

    let result = await getObject('getObject',params).catch(console.log);

    result = result.split('?')[0];

    return result;
    
};

module.exports = {
    getUrl
}