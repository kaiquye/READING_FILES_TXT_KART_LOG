import { IServices } from "./interface/services.interfaces";

export class UploadFIlesServices extends IServices {
  constructor() {
    super("http://localhost:8080/kart");
  }

  async upload(data) {
    return this.Post("/upload-file", data, undefined, {
      "Content-Type": "multipart/form-data",
    });
  }
}
