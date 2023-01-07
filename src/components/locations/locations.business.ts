import logger from 'jet-logger';
import { getLocation } from '../../services/ip-api/ip-api.servises';
import { ILocations } from './locations.interface';

export async function getLocationsByIpApiBusiness(ip: string): Promise<ILocations> {
  try {
    logger.info(`locations.business.getLocationsByIpApiBusiness(${ip})`);
    const locations = await getLocation(ip);
    return locations;
  } catch (error: any) {
    logger.err(`[Error] locations.business.getLocationsByIpApiBusiness() -> ${error}`);
    throw error;
  }
}
