import logger from 'jet-logger';
import { isObjectEmpty } from '../../helpers/common';
import { getLocation } from '../../services/ip-api/ip-api.servises';

export async function getForecastByCity(city = ''): Promise<any> {
  try {
    logger.info(`forecast.business.getForecastByCity(${city})`);
    // llamar al servicio del clima
    return '';
  } catch (error: any) {
    logger.err(`[Error] forecast.business.getForecastByCity(${city}) -> ${error}`);
    throw error;
  }
}

export async function getForecastByIpApi(ip: string): Promise<any> {
  try {
    logger.info(`forecast.business.getForecastByIpApi()`);
    // llamar al servicio del clima
    const locations = await getLocation('');
    if (isObjectEmpty(location)) {
      logger.info(`services.ip-api.locations-not-found`);
      throw 'locations.not-found';
    }
    // llamar al servicio del clima
    return locations;
  } catch (error: any) {
    if (error?.response?.status === 429) {
      logger.info(`services.ip-api.too-many-requests`);
      throw 'locations.too-many-requests';
    }
    logger.err(`[Error] forecast.business.getForecastBusiness() -> ${error}`);
    throw error;
  }
}
