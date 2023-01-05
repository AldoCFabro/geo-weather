import { Router } from 'express';
import { requestInputValidation } from '../../middleware/request-input-validation';
import { getForecasts } from './forecasts.controller';
import { forecastsValidator } from './forecasts.scheme';

const router = Router();

router.get('/forecast', forecastsValidator, requestInputValidation, getForecasts);
router.get('/forecast/current', forecastsValidator, requestInputValidation, getForecasts);

export default router;
