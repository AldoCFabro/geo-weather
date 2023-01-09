export interface IOpenWeatherGeo {
  name: string;
  local_names: {
    es: string;
  };
  lat: number;
  lon: number;
  country: string;
  state: string;
}
export interface IOpenWeatherGeoError {
  cod: string;
  message: string;
}
