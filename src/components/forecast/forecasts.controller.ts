import { Request, Response } from 'express';
import { successResponse, errorResponse } from '../../network/response';
import logger from 'jet-logger';
import { RequestForecasts } from './forecasts.interface';
import { getWeatherAndLocation } from './forecast.business';
import { handlerError } from '../../helpers/handler-errors';

export async function getCurrentForecastController(req: Request, res: Response) {
  try {
    logger.info(`forecasts.controller.getCurrentForecastsController()`);
    const customReq = req as RequestForecasts;
    const { city = '', ip = '', country } = customReq.query;
    const response = await getWeatherAndLocation(city, ip, country);
    successResponse({ req, res, data: response });
  } catch (error: any) {
    logger.err(`[ERROR] forecasts.controller.getCurrentForecastsController() -> ${error}`);
    const { message, status } = handlerError(error);
    errorResponse({ req, res, message, status });
  }
}

export async function getExtendedForecastsController(req: Request, res: Response) {
  try {
    logger.info(`forecasts.controller.getExtendedForecastsController()`);
    const customReq = req as RequestForecasts;
    const { city = '', ip = '' } = customReq.query;
    const response = await getWeatherAndLocation(city, ip);
    successResponse({ req, res, data: response });
  } catch (error: any) {
    logger.err(`[ERROR] forecasts.controller.getExtendedForecastsController() -> ${error}`);
    const { message, status } = handlerError(error);
    errorResponse({ req, res, message, status });
  }
}
