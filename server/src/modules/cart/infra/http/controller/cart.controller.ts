import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UploadFileUseCase } from '../../../useCases/upload-file.useCase';

class cartController {
  async uploadFIle(req: Request, res: Response) {
    const useCase = container.resolve(UploadFileUseCase);
    const data = {
      fileName: req.file?.filename || '',
      typeFile: req.file?.fieldname || '',
    };

    const file = await useCase.execute(data);

    return res.status(201).json(file);
  }
}

export default new cartController();
