const {ApolloServer} = require('apollo-server');

const PORT = process.env.PORT || 4000;

//schema.
const schema = require('./schema');

//resolver.
const resolvers = require('./resolvers');

const server = new ApolloServer({
    typeDefs:schema,
    resolvers
});

async function initializeApp(){

    let result = await server.listen(PORT).catch(console.log);

    return console.log(`server started on ${result.url}`)

};

initializeApp();