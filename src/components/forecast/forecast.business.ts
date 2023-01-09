import logger from 'jet-logger';
import { getLatLonFromLocation } from '../../helpers/common';
import { ILocationDTO } from '../../helpers/interfaces';
import { getLocationByIp } from '../../services/ip-api/ip-api.services';
import { IOpenWeatherForecast } from '../../services/openweather/forecast/forecast.interfaces';
import { getForecast } from '../../services/openweather/forecast/forecast.service';
import { getGeolocationByCity } from '../../services/openweather/geo/openweather-geo.service';
import { IOpenWeatherWeather } from '../../services/openweather/weather/weather.interfaces';
import { getWeather } from '../../services/openweather/weather/weather.service';
import { fromILocationsToLocationDTO } from '../locations/locations.dto';
import { ERROR_INPUT_API, ERROR_RESPONSE_API } from './error-api';
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
    const location = await getLocation(city, ip, country);
    const { lat, lon } = getLatLonFromLocation(location);
    const weather = await getWeather(lat, lon);
    return { weather, location };
  } catch (error: any) {
    logger.err(`[Error] forecast.business.getWeatherAndLocation(${city}) -> ${error}`);
    throw error;
  }
}

export async function getForecastAndLocation(
  city = '',
  ip = '',
  country?: string,
): Promise<{ forecast: IOpenWeatherForecast; location: ILocationDTO }> {
  try {
    logger.info(
      `forecast.business.getForecastAndLocation(city=${city}),ip=${ip},country=${country}`,
    );
    checkInputParams(city, ip);
    const location = await getLocation(city, ip, country);
    const { lat, lon } = getLatLonFromLocation(location);
    const forecast = await getForecast(lat, lon);
    return { forecast, location };
  } catch (error: any) {
    logger.err(`[Error] forecast.business.getForecastAndLocation(${city}) -> ${error}`);
    throw error;
  }
}

async function getLocation(city: string, ip: string, country?: string): Promise<ILocationDTO> {
  try {
    logger.info(`forecast.business.getLocation(city=${city},ip=${ip},country)${country})`);
    let location;
    if (city) {
      const res = await getGeolocationByCity(city, country);
      checkLocation(res);
      location = fromIOpenWeatherGeoFromLocationDTO(res);
    } else {
      const res = await getLocationByIp(ip);
      checkLocation(res);
      location = fromILocationsToLocationDTO(res);
    }

    return location;
  } catch (error: any) {
    logger.err(`[Error] forecast.business.getLocation() -> ${error}`);
    throw error;
  }
}

function checkLocation(location: any): void {
  if (!location) {
    throw ERROR_RESPONSE_API.forecast.cityNotFound;
  }
}

function checkInputParams(city: string, ip: string): boolean {
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
