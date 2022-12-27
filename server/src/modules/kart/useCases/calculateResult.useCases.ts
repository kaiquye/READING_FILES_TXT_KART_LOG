import fs from 'fs';
import path from 'path';
import { injectable } from 'tsyringe';
import DifferenceBetweenMinutesDateFormart from '../../../common/date-formart/difference-between-minutes.date-formart';
import {
  ICalculateResultRes,
  ILogKart,
  IUploadFileReq,
  UseCaseStructure,
} from '../interfaces/useCase.structure';

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

      console.log(data.orderLaps);

      switch (data.orderLaps) {
        case 'every_lap':
          laps = this.sortAllList(result);
          break;
        case 'last_laps':
          laps = this.sortFinalists(result);
          break;
      }

      const best_laps_by_pilot = this.calculateBestLap(result);

      return {
        classification: laps,
        best_laps_by_pilot: best_laps_by_pilot,
        duration_of_run_in_minutes: minutes,
        best_race_lap: best_laps_by_pilot[0],
      };
    } catch (e) {
      console.log(e);
    }
  }

  /**
   * @description This function returns the best lap for each driver.
   * @return returns an array with the best lap time of each driver.
   */
  private calculateBestLap(values: Partial<ILogKart>[]): Partial<ILogKart>[] {
    let pilot_name: Partial<ILogKart>[] = [];

    /**
     * First sort the array in INCREASING order by lap time. 
     * So the fastest laps will be first.
     */
    const a = values.sort((a, b) => {
      const time_a = a.lap_time?.split(':').join('') || 0;
      const time_b = b.lap_time?.split(':').join('') || 0;

      if (time_a < time_b) {
        return -1;
      }

      return 0;
    });

    /**
     *  Now let's iterate array by adding
     * the name of the pilots with his lap in a new array.
     *
     *  @description Because the array is already sorted by the best laps, we don't need to keep looking around each driver,
     *  because the best laps go first.
     */
    for (let i = 0; a.length > i; ++i) {
      const nameExists = pilot_name.find((name) => name.name === values[i].name);

      if (!nameExists) {
        pilot_name.push({ name: values[i].name, lap_time: a[i].lap_time });
      }
    }

    return pilot_name;
  }

  /**
   * @param values
   * @private
   * @description Essa funcão retorna o grid de chegada dos pilotos, em ordem de quem chegou primeiro.
   */
  private sortFinalists(values: Partial<ILogKart>[]): Partial<ILogKart>[] {
    /**
     * primeiros pegamos todos os pilotos que completou as 4 voltas.
     */
    const pilots = values.filter((pilot) => pilot.laps === '4');
    /**
     * Agora ordernamos o array de pilotos por tempo de volta, assim conseguimos ver quem completou a quarta volta no
     * menor tempo.
     */
    return pilots.sort((a, b) => {
      const time_a = a.lap_time?.split(':').join('') || 0;
      const time_b = b.lap_time?.split(':').join('') || 0;

      if (time_a < time_b) {
        return -1;
      }

      return 0;
    });
  }

  /**
   * @param values
   * @private
   * @description Essa função ordena todo o arquivo sem ignora os valores repeditos. Ela ordena todas as voltas dos piltos pelo menor tempo de volta é
   * também por numero de voltas.
   */
  private sortAllList(values: Partial<ILogKart>[]): Partial<ILogKart>[] {
    /**
     * Ordenando pelo numero de voltas
     */
    values.sort((a, b) => Number(b.laps) - Number(a.laps));
    // ordenando pelo numero de voltas é tbm por tempo de volta.
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

  /**
   * @param values
   * @private
   * @description Transformando todos os registros do ARQUIVO .TXT para um array em memoria.
   */
  private formartValues(values: string[]): Partial<ILogKart>[] {
    const formatted_log: Partial<ILogKart>[] = [];

    /**
     * Iterando linha por linha do arquivo .TXT
     */
    values.forEach((linha: string) => {
      let result: Partial<ILogKart> = {};

      let formatted_file_line = linha.split(/\s+/).join(`|`);
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
