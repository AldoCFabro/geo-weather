import logger from 'jet-logger';
import { getLocation } from '../../services/ip-api.servises';
import { IIpApiResponse } from './locations.interface';

export async function getLocationsByIpApiBusiness(): Promise<IIpApiResponse> {
  try {
    logger.info(`locations.business.getLocationsByIpApiBusiness()`);
    const locations = await getLocation();
    return locations;
  } catch (error: any) {
    logger.err(`[Error] locations.business.getLocationsByIpApiBusiness() -> ${error}`);
    throw error;
  }
}
