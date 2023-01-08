import { ILocationDTO } from '../../helpers/interfaces';
import { IOpenWeatherGeo } from '../../services/openweather/geo/openweather-geo.interfaces';

export const fromIOpenWeatherGeoFromLocationDTO = (params: IOpenWeatherGeo): ILocationDTO => {
  const { lat, lon, country: countryCode, state: regionName, name: city } = params;
  return { lat, lon, countryCode, regionName, city };
};
