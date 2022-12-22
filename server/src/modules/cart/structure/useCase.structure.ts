export abstract class UseCaseStructure<IRequest, IResponse> {
  abstract execute(data: IRequest, params?: any): Promise<IResponse>;
}

export interface IUploadFileReq {
  fileName: string;
  typeFile: string;
}
