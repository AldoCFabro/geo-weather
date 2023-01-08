import axios from 'axios';
import logger from 'jet-logger';
import { configApp } from '../../../config/app.config';
import { IOpenWeatherGeo } from './openweather-geo.interfaces';

export const getGeolocationByCity = async (
  city: string,
  country = 'AR',
): Promise<IOpenWeatherGeo> => {
  try {
    logger.info(`services.openweather-geo.getGeolocation(${city})`);
    const { urlBase, pathGeo, appid } = configApp.openWeather;
    const urlIpApi = `${urlBase}/${pathGeo}?appid=${appid}&q=${city},${country}`;
    const { data: location } = await axios.get(urlIpApi);
    return location[0];
  } catch (error) {
    logger.err(`[Error] services.openweather.getGeolocation() -> ${error}`);
    throw error;
  }
};
