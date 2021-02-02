const QueryResolver = require('./query-resolvers');
const MutationResolver = require('./mutation-resolvers');


module.exports = {

    Query:{

        fetchBuckets:() => new QueryResolver().fetchBuckets(),

        fetchObjects:(_,{bucketName}) => new QueryResolver().fetchObjects(bucketName)

    },
    Mutation:{

        createBucket:(_,{bucketName}) => new MutationResolver().createBucket(bucketName),

        uploadObject:(_,{file,bucketName}) => new MutationResolver().uploadObject(file,bucketName),

        uploadObjects:(_,{files,bucketName}) => new MutationResolver().uploadObjects(files,bucketName),

        deleteObject:(_,{bucketName,key}) => new MutationResolver().deleteObject(bucketName,key),

        deleteObjects:(_,{bucketName,objectKeys}) => new MutationResolver().deleteObjects(bucketName,objectKeys),

        deleteBucket:(_,{bucketName}) => new MutationResolver().deleteBucket(bucketName)

    }
}