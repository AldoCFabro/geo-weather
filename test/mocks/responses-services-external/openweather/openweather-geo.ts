import {
  IOpenWeatherGeo,
  IOpenWeatherGeoError,
} from '../../../../src/services/openweather/geo/openweather-geo.interfaces';

export const completeSuccessOpenWeatherGeoResponse: IOpenWeatherGeo = {
  name: 'Municipio de Goya',
  local_names: {
    es: 'Municipio de Goya',
  },
  lat: -29.1444046,
  lon: -59.2649825,
  country: 'AR',
  state: 'Corrientes',
};

export const completeError400OpenWeatherGeoResponse: IOpenWeatherGeoError = {
  cod: '400',
  message: 'Nothing to geocode',
};
