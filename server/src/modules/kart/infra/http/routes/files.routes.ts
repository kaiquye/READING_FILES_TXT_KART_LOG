import { Router } from 'express';
import multer from 'multer';
import { storage } from '../middleware/saveFile.middleware';
import cartController from '../controller/cart.controller';
import { ExpressAdapter } from '../../../../../common/adapter/express.adapter';
import { ValidateTransferObject } from '../../../../../common/adapter/class-validador.adapter';
import { UploadLogKartDto } from '../../../dto/upload-log-kart.dto';

const kartRoutes = Router();
const upload = multer({ storage });

kartRoutes.post(
  '/upload-file',
  upload.single('tabela'),
  ValidateTransferObject(UploadLogKartDto, 'BODY'),
  ExpressAdapter(cartController.uploadFIle),
);

export default kartRoutes;
