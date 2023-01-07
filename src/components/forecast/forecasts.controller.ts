import { Request, Response } from 'express';
import { successResponse, errorResponse } from '../../network/response';
import logger from 'jet-logger';
import { RequestForecasts } from './forecasts.interface';

export async function getForecasts(req: Request, res: Response) {
  try {
    logger.info(`forecasts.controller.getForecasts()`);
    const customReq = req as RequestForecasts;
    const { city = '', ip = '' } = customReq.query;
    // TODO: verificar si armo un controlador para el current y otro para los de 5 días en adelante
    if (!city) {
      // llamar al llamar al servicio de ip-api y oBTENER LA CITY
    }
    // llamar al servicio del clima con la city
    successResponse({ req, res, data: { res: city } });
  } catch (error: any) {
    logger.err(`[ERROR] forecasts.controller.getForecasts() -> ${error}`);
    errorResponse({ req, res, data: { server: 'fail' } });
  }
}
