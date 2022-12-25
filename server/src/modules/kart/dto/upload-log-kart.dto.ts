import { IDto } from '../../../common/adapter/class-validador.adapter';
import { IsIn, IsNotEmpty, validateOrReject } from 'class-validator';
import { orderLaps } from '../structure/useCase.structure';

export class UploadLogKartDto implements IDto {
  @IsNotEmpty()
  file: object | any;

  @IsIn(['last_laps', 'every_lap'])
  orderLaps: orderLaps;

  public validate() {
    return validateOrReject(this);
  }
}
