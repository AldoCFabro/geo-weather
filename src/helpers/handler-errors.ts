import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import { ERROR_RESPONSE_API } from '../components/forecast/error-api';

const knownBugs: any = {
  'locations.not-found': { message: 'locations.not-found', status: StatusCodes.NOT_FOUND },
  'locations.too-many-requests': {
    message: 'locations.too-many-requests',
    status: StatusCodes.TOO_MANY_REQUESTS,
  },
  'locations.it-is-required-to-send-city-or-ip': {
    message: 'locations.it-is-required-to-send-city-or-ip',
    status: StatusCodes.BAD_REQUEST,
  },
  'forecast.city.not-found': {
    message: ERROR_RESPONSE_API.forecast.cityNotFound,
    status: StatusCodes.NOT_FOUND,
  },
};

export const handlerError = (errs: string): { message: string; status: number } => {
  const message = knownBugs[errs]?.message || ReasonPhrases.SERVICE_UNAVAILABLE;
  const status = knownBugs[errs]?.status || StatusCodes.SERVICE_UNAVAILABLE;
  return { message, status };
};
