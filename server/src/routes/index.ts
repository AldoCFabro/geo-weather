import { Router } from 'express';
import statusRouter from '../components/status/status.router';

const apiRouter = Router();

apiRouter.use('/', statusRouter);

export default apiRouter;
