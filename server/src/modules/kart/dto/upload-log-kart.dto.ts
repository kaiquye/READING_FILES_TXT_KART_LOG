import { IDto } from '../../../common/adapter/class-validador.adapter';
import { IsIn, IsNotEmpty, validateOrReject } from 'class-validator';
import { orderLaps } from '../interfaces/useCase.structure';

export class UploadLogKartDto implements IDto {
  file: object | any;

  @IsIn(['last_laps', 'every_lap'])
  orderLaps: orderLaps = 'last_laps';

  public validate() {
    return validateOrReject(this);
  }
}
