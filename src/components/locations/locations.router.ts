import { Router } from 'express';
import { requestInputValidation } from '../../middleware/request-input-validation';
import { getLocationsByIpApiController } from './locations.controller';
import { locationsValidator } from './locations.scheme';

const router = Router();

router.get('/locations', locationsValidator, requestInputValidation, getLocationsByIpApiController);

export default router;
