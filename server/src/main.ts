import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import applicationRoutesRoutes from './shared/routes/applicationRoutes.routes';
const log = console.log;
const application = () => {
  dotenv.config();

  const app = express();
  app.use(
    cors({
      origin: ['http://localhost:3000', 'http://127.0.0.1', 'http://104.142.122.231'],
      credentials: true,
      exposedHeaders: ['set-cookie'],
    }),
  );
  app.use(express.json());
  app.use(applicationRoutesRoutes);
  app.listen(8080, () => log('start server...'));
};

application();
