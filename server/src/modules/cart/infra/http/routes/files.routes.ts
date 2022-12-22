import { Router } from 'express';
import multer from 'multer';
import { storage } from '../middleware/saveFile.middleware';
import cartController from '../controller/cart.controller';

const cartRoutes = Router();
const upload = multer({ storage });

cartRoutes.post(
  '/upload-file',
  upload.single('tabela'),
  cartController.uploadFIle,
);

export default cartRoutes;
