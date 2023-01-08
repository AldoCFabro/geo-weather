import logger from 'jet-logger';
import { latLogDTO } from '../../common/dtos';
import { ILocationDTO } from '../../common/interfaces';
import { getLocationByIp } from '../../services/ip-api/ip-api.services';
import { getGeolocationByCity } from '../../services/openweather/geo/openweather-geo.service';
import { IOpenWeatherWeather } from '../../services/openweather/weather/weather.interfaces';
import { getWeather } from '../../services/openweather/weather/weather.service';
import { fromILocationsToLocationDTO } from '../locations/locations.dto';
import { ERROR_INPUT_API } from './error-api';
import { fromIOpenWeatherGeoFromLocationDTO } from './forecast.dto';

export async function getWeatherAndLocation(
  city = '',
  ip = '',
  country?: string,
): Promise<{ weather: IOpenWeatherWeather; location: ILocationDTO }> {
  try {
    logger.info(
      `forecast.business.getWeatherAndLocation(city=${city}),ip=${ip},country=${country}`,
    );
    checkInputParams(city, ip);
    let location;
    if (city) {
      const res = await getGeolocationByCity(city, country);
      location = fromIOpenWeatherGeoFromLocationDTO(res);
    } else {
      const res = await getLocationByIp(ip);
      location = fromILocationsToLocationDTO(res);
    }
    const { lat, lon } = latLogDTO(location);
    const weather = await getWeather(lat, lon);
    return { weather, location };
  } catch (error: any) {
    logger.err(`[Error] forecast.business.getWeatherAndLocation(${city}) -> ${error}`);
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
