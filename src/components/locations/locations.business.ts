import logger from 'jet-logger';
import { isObjectEmpty } from '../../helpers/common';
import { getLocation } from '../../services/ip-api/ip-api.services';
import { ILocations } from './locations.interface';

export async function getLocationsByIpApiBusiness(ip: string): Promise<ILocations> {
  try {
    logger.info(`locations.business.getLocationsByIpApiBusiness(${ip})`);
    const location = await getLocation(ip);
    if (isObjectEmpty(location)) {
      logger.info(`services.ip-api.locations-not-found`);
      throw 'locations.not-found';
    }
    return location;
  } catch (error: any) {
    if (error?.response?.status === 429) {
      logger.info(`services.ip-api.too-many-requests`);
      throw 'locations.too-many-requests';
    }
    logger.err(`[Error] locations.business.getLocationsByIpApiBusiness() -> ${error}`);
    throw error;
  }
}
