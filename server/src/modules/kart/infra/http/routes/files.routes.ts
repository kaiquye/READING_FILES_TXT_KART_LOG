import { Router } from 'express';
import multer from 'multer';
import { storage } from '../middleware/saveFile.middleware';
import cartController from '../controller/cart.controller';
import { ExpressAdapter } from '../../../../../common/adapter/express.adapter';

const kartRoutes = Router();
const upload = multer({ storage });

kartRoutes.post('/upload-file', upload.single('tabela'), ExpressAdapter(cartController.uploadFIle));

export default kartRoutes;
