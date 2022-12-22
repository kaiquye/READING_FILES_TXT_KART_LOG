import { container } from 'tsyringe';
import { UploadFileUseCase } from '../../modules/cart/useCases/upload-file.useCase';
import { UseCaseStructure } from '../../modules/cart/structure/useCase.structure';

container.registerSingleton<UseCaseStructure<any, any>>(
  'UploadFileUseCase',
  UploadFileUseCase,
);
