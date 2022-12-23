import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CalculateResultUseCases } from '../../../useCases/calculateResult.useCases';

class cartController {
  async uploadFIle(req: Request, res: Response) {
    const useCase = container.resolve(CalculateResultUseCases);

    const data = {
      fileName: req.file?.filename || '',
      typeFile: req.file?.fieldname || '',
      orderLaps: req.body.orderLaps,
    };

    const file = await useCase.execute(data);
    return res.status(201).json(file);
  }
}

export default new cartController();
