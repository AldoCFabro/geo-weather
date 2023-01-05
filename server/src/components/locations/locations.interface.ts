export interface IIpApiResponse {
  error: boolean;
  status: number;
  message: string;
  data: {
    response: {
      status: string;
      country: string;
      countryCode: string;
      region: string;
      regionName: string;
      city: string;
      zip: string;
      lat: number;
      lon: number;
      timezone: string;
      isp: string;
      org: string;
      as: string;
      query: string;
    };
  };
}
