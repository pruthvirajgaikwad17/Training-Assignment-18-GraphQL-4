import { createModule, gql } from "graphql-modules";

export const firstModule = createModule({
  id: "firstModule",
  typeDefs: [
    gql`
      type Query {
        greet: String
        allUserData: [User]
        singleUser(id: ID!): User
      }

      type User {
        id: ID!
        name: String
        username: String
        email: String
      }
    `,
  ],
  resolvers: {
    Query: {
      greet: () => {
        return "Hello World";
      },
      allUserData: (_, __, { dataSources }) => {
        return dataSources.allUserDataAPI.getAllUserData();
      },
      singleUser: (_, { id }, { dataSources }) => {
        return dataSources.singleUserDataAPI.getSingleUserData(id);
      },
    },
  },
});
