
const s3 = require('../utils/config');
const {promisify} = require('util');
const {extname} = require('path');

class MutationResolver {

    constructor(){
        this.s3 = s3;
    };

    //create a bucket.
    async createBucket(bucketName){
        
        

    };
    

    //upload object.
    async uploadObject(file,bucketName){

    };

    //upload objects.
    async uploadObjects(files,bucketName){

        

    };

    //delete object.
    async deleteObject(bucketName,key){


    };

    //delete objects.
    async deleteObjects(bucketName,objectKeys){


    };

    //delete bucket.
    async deleteBucket(bucketName){


    };

};

module.exports = MutationResolver;