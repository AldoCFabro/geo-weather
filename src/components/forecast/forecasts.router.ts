import { Router } from 'express';
import { requestInputValidation } from '../../middleware/request-input-validation';
import {
  getCurrentForecastController,
  getExtendedForecastsController,
} from './forecasts.controller';
import { forecastsValidator } from './forecasts.scheme';

const router = Router();

router.get('/forecast', forecastsValidator, requestInputValidation, getExtendedForecastsController);
router.get(
  '/forecast/current',
  forecastsValidator,
  requestInputValidation,
  getCurrentForecastController,
);

export default router;
