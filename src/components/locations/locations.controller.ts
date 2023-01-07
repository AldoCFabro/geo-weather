import { Request, Response } from 'express';
import { successResponse, errorResponse } from '../../network/response';
import logger from 'jet-logger';
import { getLocationsByIpApiBusiness } from './locations.business';
import { RequestLocations } from './locations.interface';
import { handlerError } from '../../helpers/handler-errors';

export async function getLocationsByIpApiController(req: Request, res: Response) {
  try {
    logger.info(`locations.controller.getLocationsByIpApiController()`);
    const customReq = req as RequestLocations;
    const { ip } = customReq.query;
    const response = await getLocationsByIpApiBusiness(ip);
    successResponse({ req, res, data: response });
  } catch (error: any) {
    logger.err(`[ERROR] locations.controller.getLocationsByIpApiController() -> ${error}`);
    const { message, status } = handlerError(error);
    errorResponse({ req, res, message, status });
  }
}
