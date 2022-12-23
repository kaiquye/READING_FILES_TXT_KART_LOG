import {
  ICalculateResultRes,
  ILogKart,
  IUploadFileReq,
  UseCaseStructure,
} from '../structure/useCase.structure';
import fs from 'fs';
import path from 'path';
import { injectable } from 'tsyringe';
import DifferenceBetweenMinutesDateFormart from '../../../common/date-formart/difference-between-minutes.date-formart';
import * as timers from 'timers';
import { isLowercase } from 'class-validator';

@injectable()
export class CalculateResultUseCases extends UseCaseStructure<IUploadFileReq, ICalculateResultRes> {
  public execute(data: IUploadFileReq): ICalculateResultRes | any {
    try {
      const file_path = path.join(__dirname + `../../../../../files/${data.fileName}`);
      const log_file = fs.readFileSync(file_path, 'utf-8');

      const result = this.formartValues(log_file.split(/\r?\n/));

      const start_date = result[1];
      const end_date = result[result.length - 1];

      const { minutes } = DifferenceBetweenMinutesDateFormart.execute({
        start_date: start_date.data || '',
        end_date: end_date.data || '',
      });

      let laps: Partial<ILogKart>[];

      switch (data.orderLaps) {
        case 'every_lap':
          laps = this.sortAllList(result);
          break;
        case 'last_laps':
          laps = this.sortFinalists(result);
          break;
      }

      return {
        classification: laps,
        best_race_lap: '',
        duration_of_run_in_minutes: minutes,
      };
    } catch (e) {
      console.log(e);
    }
  }

  private sortFinalists(values: Partial<ILogKart>[]): Partial<ILogKart>[] {
    const pilots = values.filter((pilot) => pilot.laps === '4');
    return pilots.sort((a, b) => {
      const time_a = a.lap_time?.split(':').join('') || 0;
      const time_b = b.lap_time?.split(':').join('') || 0;

      if (time_a < time_b) {
        return -1;
      }

      return 0;
    });
  }

  private sortAllList(values: Partial<ILogKart>[]): Partial<ILogKart>[] {
    values.sort((a, b) => Number(b.laps) - Number(a.laps));
    return values.sort((a, b) => {
      const time_a = a.lap_time?.split(':').join('') || 0;
      const time_b = b.lap_time?.split(':').join('') || 0;
      const lap_a = Number(a.laps);
      const lap_b = Number(b.laps);

      if (lap_a === 4 && time_a < time_b) {
        return -1;
      }

      if (lap_b !== 4) {
        if (lap_a === 3 && time_a < time_b) {
          return -1;
        }
      }

      if (lap_b !== 3 && lap_b !== 4) {
        if (lap_a === 2 && time_a < time_b) {
          return -1;
        }
      }

      if (lap_b !== 2 && lap_b !== 3 && lap_b !== 4) {
        if (lap_a === 1 && time_a < time_b) {
          return -1;
        }
      }

      return 0;
    });
  }
  private formartValues(values: string[]): Partial<ILogKart>[] {
    const formatted_log: Partial<ILogKart>[] = [];

    values.forEach((value: string) => {
      let result: Partial<ILogKart> = {};

      let formatted_file_line = value.split(/\s+/).join(`|`);
      let size_file_line = formatted_file_line.length;
      let new_line = formatted_file_line.substring(13, size_file_line);

      result.data = formatted_file_line.slice(0, 12);

      let indexOf_number = new_line.indexOf('|');
      result.number = new_line.slice(0, indexOf_number);

      let new_line_2 = new_line.substring(indexOf_number + 3, size_file_line);

      let indexOf_name = new_line_2.indexOf('|');
      result.name = new_line_2.slice(0, indexOf_name);

      let new_line_3 = new_line_2.substring(indexOf_name + 1, size_file_line);

      let indexOf_voltas = new_line_3.indexOf('|');
      result.laps = new_line_3.slice(0, indexOf_voltas);

      let new_line_4 = new_line_3.substring(indexOf_voltas + 1, size_file_line);

      let index_lap_temp = new_line_4.indexOf('|');
      result.lap_time = new_line_4.slice(0, index_lap_temp);

      if (result.name) {
        formatted_log.push(result);
      }
    });

    return formatted_log;
  }
}
