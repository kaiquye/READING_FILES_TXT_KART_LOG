import 'reflect-metadata';
import express from 'express';
import * as dotenv from 'dotenv';
import applicationRoutesRoutes from './shared/routes/applicationRoutes.routes';
const log = console.log;
const application = () => {
  dotenv.config();

  const app = express();
  app.use(express.json());
  app.use(applicationRoutesRoutes);
  app.listen(8080, () => log('start server...'));
};

application();
