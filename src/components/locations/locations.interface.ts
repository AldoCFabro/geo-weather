export interface ILocationsResponse {
  error: boolean;
  status: number;
  message: string;
  data: ILocations;
}

export interface ILocations {
  country: string;
  countryCode: string;
  regionName: string;
  city: string;
  zip: string;
  lat: number;
  lon: number;
  timezone: string;
}
