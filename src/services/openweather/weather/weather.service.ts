import axios from 'axios';
import logger from 'jet-logger';
import { configApp } from '../../../config/app.config';
import { IOpenWeatherWeather } from './weather.interfaces';

export const getWeather = async (lat: number, lon: number): Promise<IOpenWeatherWeather> => {
  try {
    logger.info(`services.weather.getWeather(lat=${lat},lon=${lon})`);
    const { urlBase, appid, pathWeather } = configApp.openWeather;
    const urlIpApi = `${urlBase}/${pathWeather}?appid=${appid}&lat=${lat}&lon=${lon}`;
    const { data: weather } = await axios.get(urlIpApi);
    return weather;
  } catch (error) {
    logger.err(`[Error] services.weather.getWeather() -> ${error}`);
    throw error;
  }
};
