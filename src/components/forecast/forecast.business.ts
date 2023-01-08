import logger from 'jet-logger';
import { getLocation } from '../../services/ip-api/ip-api.services';
import { ERROR_INPUT_API } from './error-api';

export async function getForecastAndLocation(city = '', ip = ''): Promise<any> {
  try {
    logger.info(`forecast.business.getForecastAndLocation(${city})`);
    checkInputParams(city, ip);
    let response;
    if (city) {
      response = await getForecastByCity(city);
    } else {
      response = await getForecastByIpApi(ip);
    }
    return response;
  } catch (error: any) {
    logger.err(`[Error] forecast.business.getForecastAndLocation(${city}) -> ${error}`);
    throw error;
  }
}

export async function getForecastByCity(city = ''): Promise<any> {
  try {
    logger.info(`forecast.business.getForecastByCity(${city})`);
    // llamar al servicio del clima
    return city;
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

export function checkInputParams(city: string, ip: string): boolean {
  try {
    logger.info(`forecast.business.checkInputParams(${city},${ip})`);
    if (!city && !ip) {
      throw ERROR_INPUT_API.forecast.CityOrIpIsRequired;
    }
    return true;
  } catch (error: any) {
    logger.err(`[Error] forecast.business.checkInputParams() -> ${error}`);
    throw error;
  }
}
