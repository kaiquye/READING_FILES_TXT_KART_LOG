export abstract class CalculateDiff<IRequest, IResponse> {
  abstract execute(data: IRequest): IResponse;
}

export interface IDiffMinutesReq {
  start_date: string;
  end_date: string;
}

export interface IDiffMinutosRes {
  milissg?: string | number;
  seconds?: string | number;
  minutes?: string | number;
}
