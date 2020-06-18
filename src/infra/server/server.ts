import {importSchema} from 'graphql-import';
import {ApolloServer} from 'apollo-server-express';
import {resolvers} from '@/controller/resolvers';
import express from 'express';
import {UserDBModel, UserSequelizeModel, sequelize} from '../database';
import {Context} from './Context';

const context: Context = {
  dbModels: {
    user: new UserDBModel(UserSequelizeModel),
  },
};
sequelize
  .authenticate()
  .then(() => console.info('connected to db'))
  .catch((err) => {
    throw err;
  });

const server = new ApolloServer({
  typeDefs: importSchema('schema.graphql'),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  resolvers: resolvers as any,
  context: context,
  introspection: true,
  playground: true,
});

const app = express();
server.applyMiddleware({app});

app.listen({port: 4000}, () => {
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
});
