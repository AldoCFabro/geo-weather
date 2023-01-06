import { IIpApiResponse } from '../../services/ip-api/ip-api.interfaces';
import { ILocations } from './locations.interface';

export const locationDTO = (locationApiRes: IIpApiResponse): ILocations => {
  const { country, countryCode, regionName, zip, city, lat, lon, timezone } = locationApiRes;

  return {
    country,
    countryCode,
    regionName,
    city,
    zip,
    lat,
    lon,
    timezone,
  };
};
