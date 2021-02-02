
const s3 = require('../utils/config');
const {promisify} = require('util');
const {getUrl} = require('../utils/object');

class QueryResolver {

    constructor(){
        this.s3 = s3;
    };

    //fetching buckets.
    async fetchBuckets(){


    };

    //fetching objects.
    async fetchObjects(bucketName){


    };
    

};

module.exports = QueryResolver;