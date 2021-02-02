const {gql} = require('apollo-server');

const Object = require('./Object');
const Response = require('./Response');

const Query = gql`

    type Query {
        fetchBuckets:[String!]!

        fetchObjects(bucketName:String):[Object!]!

    }
`;

const Mutation = gql`
    type Mutation {

        createBucket(bucketName:String!) : Response

        uploadObject(file:Upload!,bucketName:String!) : Object

        uploadObjects(files:[Upload!]!,bucketName:String!) : [Object!]!

        deleteObject(bucketName:String!,key:String!) : Response

        deleteObjects(bucketName:String!,objectKeys:[String!]!) : Response
        
        deleteBucket(bucketName:String!) : Response   

    }
`;

module.exports = [
    Object,
    Response,
    Query,
    Mutation
]