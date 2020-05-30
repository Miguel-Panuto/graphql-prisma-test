import { makeExecutableSchema } from 'graphql-tools';
import { importSchema } from 'graphql-import'
import path from 'path';

import resolvers from './resolvers';

const typeDefs = importSchema(path.resolve(__dirname, 'schema.graphql'));

export default makeExecutableSchema({ typeDefs, resolvers });