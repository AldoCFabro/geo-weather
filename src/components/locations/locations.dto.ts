import { ILocationDTO } from '../../helpers/interfaces';
import { ILocations } from './locations.interface';

export const fromILocationsToLocationDTO = (params: ILocations): ILocationDTO => {
  const { lat, lon, countryCode, regionName, city } = params;
  return { lat, lon, countryCode, regionName, city };
};
