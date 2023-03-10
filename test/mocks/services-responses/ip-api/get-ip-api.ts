import { IIpApiResponse } from '../../../../src/services/ip-api/ip-api.interfaces';

const completeSuccessIpApiResponse: IIpApiResponse = {
  status: 'success',
  country: 'Argentina primero',
  countryCode: 'AR',
  region: 'W',
  regionName: 'Corrientes',
  city: 'Goya',
  zip: '3450',
  lat: -29.2409,
  lon: -59.095,
  timezone: 'America/Argentina/Cordoba',
  isp: 'Gigared S.A.',
  org: 'Gigared S.A',
  as: 'AS20207 Gigared S.A.',
  query: '190.183.62.118',
};

const { status, region, isp, org, as, query, ...successResponse } = completeSuccessIpApiResponse;
const successResponseMocks = successResponse;

export { successResponseMocks };
