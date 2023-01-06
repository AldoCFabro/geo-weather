import logger from 'jet-logger';
import { getLocation } from '../../services/ip-api/ip-api.servises';
import { locationDTO } from './locations.dto';
import { ILocations } from './locations.interface';

export async function getLocationsByIpApiBusiness(): Promise<ILocations> {
  try {
    logger.info(`locations.business.getLocationsByIpApiBusiness()`);
    const locations = await getLocation();
    return locationDTO(locations);
  } catch (error: any) {
    logger.err(`[Error] locations.business.getLocationsByIpApiBusiness() -> ${error}`);
    throw error;
  }
}
