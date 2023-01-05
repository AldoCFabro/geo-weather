import { Request, Response } from 'express';
import { successResponse, errorResponse } from '../../network/response';
import logger from 'jet-logger';
import { RequestForecasts } from './forecasts.interface';

export async function getForecasts(req: Request, res: Response) {
  try {
    logger.info(`forecasts.controller.getForecasts()`);
    const customReq = req as RequestForecasts;
    const { city } = customReq.query;

    successResponse({ req, res, data: { res: city } });
  } catch (error: any) {
    logger.err(`[ERROR] forecasts.controller.getForecasts() -> ${error}`);
    errorResponse({ req, res, data: { server: 'fail' } });
  }
}
