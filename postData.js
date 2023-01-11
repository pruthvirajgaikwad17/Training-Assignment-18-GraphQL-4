import { RESTDataSource } from "apollo-datasource-rest";

export class getPostData extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://jsonplaceholder.typicode.com/posts/1/comments";
  }

  async getAllPostData() {
    const data = await this.get("");
    return data;
  }
}
