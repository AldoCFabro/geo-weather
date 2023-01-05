import { Router } from 'express';
import statusRouter from '../components/status/status.router';
import locationsRouter from '../components/locations/locations.router';
import forecastRouter from '../components/forecast/forecasts.router';

const apiRouter = Router();

apiRouter.use('/', [statusRouter, locationsRouter, forecastRouter]);

export default apiRouter;
