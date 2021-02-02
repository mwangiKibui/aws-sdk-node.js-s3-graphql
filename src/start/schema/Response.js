const {gql} = require('apollo-server');

const Response = gql`
    type Response {
        success:Boolean!
        message:String!
    }
`;

module.exports = Response;