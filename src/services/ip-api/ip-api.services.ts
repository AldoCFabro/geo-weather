import axios from 'axios';
import logger from 'jet-logger';
import { ILocations } from '../../components/locations/locations.interface';
import { configApp } from '../../config/app.config';

export const getLocationByIp = async (ip: string): Promise<ILocations> => {
  try {
    logger.info(`services.ip-api.getLocation(${ip})`);
    const { urlBase } = configApp.ipApi;
    const urlIpApi = `${urlBase}/${ip}?fields=country,countryCode,regionName,city,zip,lat,lon,timezone`;
    const { data: location } = await axios.get(urlIpApi);
    return location;
  } catch (error) {
    logger.err(`[Error] services.ip-api.getLocation() -> ${error}`);
    throw error;
  }
};
