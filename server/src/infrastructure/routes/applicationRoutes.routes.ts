import { Router } from 'express';
import raceRoutes from '../../modules/cart/infra/http/routes/files.routes';

const applicationRoutesRoutes = Router();

applicationRoutesRoutes.use('/cart', raceRoutes);
export default applicationRoutesRoutes;
