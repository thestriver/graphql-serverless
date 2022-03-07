import { ApolloServer, gql } from "apollo-server-lambda";
 
const typeDefs = gql`
  type Query {
    hello: String
  }
`;
 
const resolvers = {
  Query: {
    hello: () => "Hello there!",
  },
};
 
const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
});

const graphql = server.createHandler({
  cors: {
    origin: "*",
    credentials: true,
  },
});
 
export { graphql };

