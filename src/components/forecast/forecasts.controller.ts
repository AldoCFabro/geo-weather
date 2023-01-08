import { Request, Response } from 'express';
import { successResponse, errorResponse } from '../../network/response';
import logger from 'jet-logger';
import { RequestForecasts } from './forecasts.interface';
import { getForecastAndLocation } from './forecast.business';
import { handlerError } from '../../helpers/handler-errors';

export async function getCurrentForecastsController(req: Request, res: Response) {
  try {
    logger.info(`forecasts.controller.getForecasts()`);
    const customReq = req as RequestForecasts;
    const { city = '' } = customReq.query;
    //const { city = '', ip = '' } = customReq.query;
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

export async function getExtendedForecastsController(req: Request, res: Response) {
  try {
    logger.info(`forecasts.controller.getForecasts()`);
    const customReq = req as RequestForecasts;
    const { city = '', ip } = customReq.query;
    const response = await getForecastAndLocation(city, ip);
    successResponse({ req, res, data: { response } });
  } catch (error: any) {
    logger.err(`[ERROR] forecasts.controller.getForecasts() -> ${error}`);
    const { message, status } = handlerError(error);
    errorResponse({ req, res, message, status });
  }
}
