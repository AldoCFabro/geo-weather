import express, { Application } from 'express';
import path from 'path';
import cors from 'cors';
const helmet = require('helmet');
import morgan from 'morgan';
import logger from 'jet-logger';

// Rutes
import BaseRouter from './routes';

// Api documentation
import * as swaggerUI from 'swagger-ui-express';
import * as YAML from 'yamljs';
const swaggerJsDoc = YAML.load('src/doc/api.yaml');

import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();
const version = 'v1';
export const prefix = `/api/${version}`;

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(`${prefix}/doc`, swaggerUI.serve, swaggerUI.setup(swaggerJsDoc));

logger.info(`server running in environment ${process.env.NODE_ENV}`);
if (process.env.NODE_ENV === 'local') {
  app.use(morgan('dev'));
}

app.use(prefix, BaseRouter);

export default app;
