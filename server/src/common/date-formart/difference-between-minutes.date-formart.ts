import { CalculateDiff, IDiffMinutesReq, IDiffMinutosRes } from './structure/date-formart.structure';

class DifferenceBetweenMinutesDateFormart extends CalculateDiff<IDiffMinutesReq, IDiffMinutosRes> {
  execute(data: IDiffMinutesReq): IDiffMinutosRes {
    console.log(data);
    const a = new Date('2022-02-19T' + data.start_date).getTime();
    const b = new Date('2022-02-19T' + data.end_date).getTime();

    const mili = a - b;
    const seconds = mili / 1000;
    const minutes = seconds / 60;

    return {
      milissg: Math.abs(Math.trunc(mili)),
      seconds: Math.abs(Math.trunc(seconds)),
      minutes: Math.abs(Math.trunc(minutes)),
    };
  }
}

export default new DifferenceBetweenMinutesDateFormart();
