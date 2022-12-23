export abstract class UseCaseStructure<IRequest, IResponse> {
  abstract execute(data: IRequest, params?: any): IResponse;
}

export type orderLaps = 'last_laps' | 'every_lap';
export interface IUploadFileReq {
  fileName: string;
  typeFile: string;

  orderLaps: orderLaps;
}

export interface ILogKart {
  data?: string;
  number?: string;
  name?: string;
  laps?: string;
  lap_time?: string;
  average_speed?: string;
  best_lap: string;
}

export interface ICalculateResultRes {
  duration_of_run_in_minutes?: number | string;
  best_race_lap: string | number;
  classification?: Partial<ILogKart>[] | any;
}
