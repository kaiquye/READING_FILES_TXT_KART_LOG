import axios from "axios";

export class IServices {
  baseUrl = "";
  instance;

  constructor(baseUrl) {
    if (!baseUrl) {
      throw new Error("url was not specified");
    }

    this.baseUrl = baseUrl;
    this.instance = axios.create({});
  }

  async Post(url, data = undefined, params = undefined, headers = undefined) {
    return this.instance({
      method: "POST",
      data: data ? data : null,
      url: `${this.baseUrl}${url}`,
      params: params ? params : null,
      headers: headers ? headers : null,
      withCredentials: true,
    });
  }

  Get(url, data, params = undefined, headers = undefined) {
    return this.instance({
      method: "GET",
      url: `${this.baseUrl}${url}`,
      params: params ? params : null,
      headers: headers ? headers : null,
      withCredentials: true,
    });
  }
}
