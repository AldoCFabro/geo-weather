import axios from 'axios';
import logger from 'jet-logger';
import { configApp } from '../../../config/app.config';
import { IOpenWeatherForecast } from './forecast.interfaces';

export const getForecast = async (lat: number, lon: number): Promise<IOpenWeatherForecast> => {
  try {
    logger.info(`services.weather.getWeather(lat=${lat},lon=${lon})`);
    const { urlBase, appid, pathForecast } = configApp.openWeather;
    const urlIpApi = `${urlBase}/${pathForecast}?appid=${appid}&lat=${lat}&lon=${lon}&cnt=5`;
    const { data: forecast } = await axios.get(urlIpApi);
    return forecast;
  } catch (error) {
    logger.err(`[Error] services.weather.getWeather() -> ${error}`);
    throw error;
  }
};
