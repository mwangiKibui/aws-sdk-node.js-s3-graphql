
const s3 = require('../utils/config');
const {promisify} = require('util');
const {extname} = require('path');

class MutationResolver {

    constructor(){
        this.s3 = s3;
    };

    //create a bucket.
    async createBucket(bucketName){
        
        const params = {
            Bucket:bucketName
        };

        let create_bucket = promisify(this.s3.createBucket.bind(this.s3));

        await create_bucket(params).catch(console.log);

        return {
            success:true,
            message:"Bucket created successfully."
        };

    };
    

    //upload object.
    async uploadObject(file,bucketName){

        const params = {
            Bucket:bucketName,
            Key:'',
            Body:'',
            ACL:'public-read'
        };

        let {createReadStream,filename} = await file;

        let fileStream = createReadStream();
        

        fileStream.on("error", (error) => console.error(error));

        params.Body = fileStream;

        let timestamp = new Date().getTime();

        let file_extension = extname(filename);

        params.Key = `images/${timestamp}${file_extension}`;

        let upload = promisify(this.s3.upload.bind(this.s3));

        let result = await upload(params).catch(console.log);

        let object = {
            key:params.Key,
            url:result.Location
        };

        return object;

    };

    //upload objects.
    async uploadObjects(files,bucketName){

        let params = {
            Bucket:bucketName,
            Key:'',
            Body:'',
            ACL:'public-read'
        };

        let objects = [];

        for(let i = 0; i < files.length; i++){

            let file = files[i];

            let {createReadStream,filename} = await file;

            let stream = createReadStream();

            stream.on("error", (error) => console.error(error));

            params.Body = stream;

            let timestamp = new Date().getTime();
            
            let file_extension = extname(filename);

            params.Key = `images/${timestamp}${file_extension}`;

            let upload = promisify(this.s3.upload.bind(this.s3));

            let result = await upload(params).catch(console.log);

            objects.push({
                key:params.Key,
                url:result.Location
            });
            
        };

        return objects;

    };

    //delete object.
    async deleteObject(bucketName,key){

        const params = {
            Bucket:bucketName,
            Key:key
        };

        let removeObject = promisify(this.s3.deleteObject.bind(this.s3));

        await removeObject(params).catch(console.log);
        
        return {
            success:true,
            message:"Object successfully deleted."
        };

    };

    //delete objects.
    async deleteObjects(bucketName,objectKeys){

        const params = {
            Bucket:bucketName,
            Delete:{
                Objects:[]
            }
        };

        objectKeys.forEach((objectKey) => params.Delete.Objects.push({
            Key:objectKey
        }));

        let removeObjects = promisify(this.s3.deleteObjects.bind(this.s3));

        await removeObjects(params).catch(console.log);

        return {
            success:true,
            message:"Successfully deleted objects"
        };

    };

    //delete bucket.
    async deleteBucket(bucketName){

        const params = {
            Bucket:bucketName
        };

        let removeBucket = promisify(this.s3.deleteBucket.bind(this.s3));

        await removeBucket(params).catch(console.log);

        return {
            success:true,
            message:"Successfully deleted bucket"
        }

    };

};

module.exports = MutationResolver;