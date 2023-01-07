import logger from 'jet-logger';
import { isObjectEmpty } from '../../helpers/common';
import { getLocation } from '../../services/ip-api/ip-api.services';

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
    // llamar al servicio del clima
    return locations;
  } catch (error: any) {
    logger.err(`[Error] forecast.business.getForecastBusiness() -> ${error}`);
    throw error;
  }
}
