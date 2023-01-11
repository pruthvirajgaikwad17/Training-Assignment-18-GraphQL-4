import { createModule, gql } from "graphql-modules";

export const secondModule = createModule({
  typeDefs: [
    gql`
      extend type Query {
        allPosts: [Post]
      }

      type Post {
        id: ID!
        name: String
        email: String
        body: String
      }
    `,
  ],
  resolvers: {
    Query: {
      allPosts: (_, __, { dataSources }) => {
        return dataSources.allPostDataAPI.getAllPostData();
      },
    },
  },
});
