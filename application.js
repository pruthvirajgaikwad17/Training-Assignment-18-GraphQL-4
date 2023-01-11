import { createApplication } from "graphql-modules";
import { firstModule } from "./first-module.js";
import { secondModule } from "./second-module.js";

export const application = createApplication({
  modules: [firstModule, secondModule],
});
