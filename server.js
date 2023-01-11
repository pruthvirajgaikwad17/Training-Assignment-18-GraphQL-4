import { application } from "./application.js";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { ApolloServer } from "apollo-server";
import { getUsersData } from "./usersData.js";
import { getPostData } from "./postData.js";

const executor = application.createApolloExecutor();
const schema = application.schema;

const server = new ApolloServer({
  schema,
  executor,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
  dataSources: () => {
    return {
      allUserDataAPI: new getUsersData(),
      singleUserDataAPI: new getUsersData(),
      allPostDataAPI: new getPostData(),
    };
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
