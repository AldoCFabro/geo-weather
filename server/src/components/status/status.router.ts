import { Router } from 'express';
import statusController from './status.controller';

const router = Router();

router.get('/', statusController.getStatus);

export default router;
