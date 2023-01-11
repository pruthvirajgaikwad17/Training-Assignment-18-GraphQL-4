import { RESTDataSource } from "apollo-datasource-rest";

export class getUsersData extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://jsonplaceholder.typicode.com/users";
  }
  async getAllUserData() {
    const data = await this.get("");
    return data;
  }
  async getSingleUserData(id) {
    const data = await this.get(`/${id}`);
    return data;
  }
}
