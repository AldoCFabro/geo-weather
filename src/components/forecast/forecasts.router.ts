import { Router } from 'express';
import { requestInputValidation } from '../../middleware/request-input-validation';
import {
  getCurrentForecastsController,
  getExtendedForecastsController,
} from './forecasts.controller';
import { forecastsValidator } from './forecasts.scheme';

const router = Router();

router.get('/forecast', forecastsValidator, requestInputValidation, getCurrentForecastsController);
router.get(
  '/forecast/current',
  forecastsValidator,
  requestInputValidation,
  getExtendedForecastsController,
);

export default router;
