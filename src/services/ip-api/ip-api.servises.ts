import axios from 'axios';
import logger from 'jet-logger';
import { configApp } from '../../config/app.config';

export const getLocation = async () => {
  try {
    logger.info(`services.ip-api.getLocation()`);
    const { url: urlIpApi } = configApp.ipApi;
    const { data: location } = await axios.get(urlIpApi);
    if (!location) {
      logger.info(`services.ip-api.locations-not-found`);
      throw new Error('locations.not-found');
    }
    return location;
  } catch (error) {
    logger.err(`[Error] services.ip-api.getLocation() -> ${error}`);
    throw error;
  }
};
