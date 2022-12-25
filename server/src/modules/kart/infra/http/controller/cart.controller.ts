import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CalculateResultUseCases } from '../../../useCases/calculateResult.useCases';
import { IController, IHttpResponse } from '../../../../../common/adapter/express.adapter';
import { UploadLogKartDto } from '../../../dto/upload-log-kart.dto';

class cartController {
  async uploadFIle(body: UploadLogKartDto): Promise<IHttpResponse> {
    const useCase = container.resolve(CalculateResultUseCases);
    console.log(body);
    const data = {
      fileName: body.file?.filename || '',
      typeFile: body.file?.fieldname || '',
      orderLaps: body.orderLaps,
    };

    const result = await useCase.execute(data);

    return {
      status: 200,
      body: result,
    };
  }
}

export default new cartController();
