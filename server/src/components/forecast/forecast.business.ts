import logger from 'jet-logger';
import { getLocation } from '../../services/ip-api.servises';

export async function getForecastBusiness(city = ''): Promise<any> {
  try {
    logger.info(`forecast.business.getForecastBusiness()`);
    let locations = city;
    if (!locations) {
      locations = await getLocation();
    }
    // llamar al servicio del clima
    return locations;
  } catch (error: any) {
    logger.err(`[Error] forecast.business.getForecastBusiness() -> ${error}`);
    throw error;
  }
}
