import { Router } from 'express';
import { getLocationsByIpApiController } from './locations.controller';

const router = Router();

router.get('/locations', getLocationsByIpApiController);

export default router;
