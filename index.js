import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './models/schema.js';
import resolvers from './resolvers/resolver.js';
import connectdb from './config/connectdb.js';
import dotenv from 'dotenv';

const server = new ApolloServer({
    typeDefs,
    resolvers
})

dotenv.config();

connectdb();

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
//muruga
