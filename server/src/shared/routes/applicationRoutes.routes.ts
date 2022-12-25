import { Router } from 'express';
import kartRoutes from '../../modules/kart/infra/http/routes/files.routes';

const applicationRoutesRoutes = Router();

applicationRoutesRoutes.use('/kart', kartRoutes);
export default applicationRoutesRoutes;
