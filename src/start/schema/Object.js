const {gql} = require('apollo-server');

const Object = gql`
    type Object {
        url:String!
        key:String!
    }
`;

module.exports = Object;