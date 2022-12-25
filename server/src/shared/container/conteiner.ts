import { container } from 'tsyringe';
import { UploadFileUseCase } from '../../modules/cart/useCases/upload-file.useCase';
import { UseCaseStructure } from '../../modules/cart/interfaces/useCase.interfaces';
import { CalculateResultUseCases } from '../../modules/cart/useCases/calculateResult.useCases';

container.registerSingleton<UseCaseStructure<any, any>>('UploadFileUseCase', UploadFileUseCase);

container.registerSingleton<UseCaseStructure<any, any>>('CalculateResultUseCases', CalculateResultUseCases);
