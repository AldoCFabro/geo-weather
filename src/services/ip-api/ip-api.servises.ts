import axios from 'axios';
import logger from 'jet-logger';
import { ILocations } from '../../components/locations/locations.interface';
import { configApp } from '../../config/app.config';

export const getLocation = async (ip: string): Promise<ILocations> => {
  try {
    logger.info(`services.ip-api.getLocation(${ip})`);
    const { url } = configApp.ipApi;
    const urlIpApi = `${url}/${ip}?fields=country,countryCode,regionName,city,zip,lat,lon,timezone`;
    const { data: location } = await axios.get(urlIpApi);
    return location;
  } catch (error) {
    logger.err(`[Error] services.ip-api.getLocation() -> ${error}`);
    throw error;
  }
};
