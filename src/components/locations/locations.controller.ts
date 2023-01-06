import { Request, Response } from 'express';
import { successResponse, errorResponse } from '../../network/response';
import logger from 'jet-logger';
import { getLocationsByIpApiBusiness } from './locations.business';
import { ERROR_RESPONSE_API } from '../../utils/error-api';

export async function getLocationsByIpApiController(req: Request, res: Response) {
  try {
    logger.info(`locations.controller.getLocationsByIpApiController()`);
    const response = await getLocationsByIpApiBusiness();
    successResponse({ req, res, data: response });
  } catch (error: any) {
    logger.err(`[ERROR] locations.controller.getLocationsByIpApiController() -> ${error}`);
    errorResponse({ req, res, message: ERROR_RESPONSE_API.serviceError });
  }
}
