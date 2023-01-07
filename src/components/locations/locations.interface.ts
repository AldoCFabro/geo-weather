import { Request } from 'express';

export interface RequestLocations extends Request {
  query: {
    ip: string;
  };
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

export interface ILocationsResponse {
  error: boolean;
  status: number;
  message: string;
  data: ILocations | string[];
}
