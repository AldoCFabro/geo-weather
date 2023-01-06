import { Request, Response } from 'express';
import { successResponse, errorResponse } from '../../network/response';
import logger from 'jet-logger';

async function getStatus(req: Request, res: Response) {
  try {
    logger.info(`status.controller.getStatus()`);
    successResponse({ req, res, data: { server: 'OK' } });
  } catch (error: any) {
    logger.err(`[ERROR] status.controller.getStatus() -> ${error}`);
    errorResponse({ req, res, data: { server: 'fail' } });
  }
}

export default { getStatus };
