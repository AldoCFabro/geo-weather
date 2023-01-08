import { StatusCodes, ReasonPhrases } from 'http-status-codes';

const knownBugs: any = {
  'locations.not-found': { message: 'locations.not-found', status: 404 },
  'locations.too-many-requests': { message: 'locations.too-many-requests', status: 429 },
  'locations.it-is-required-to-send-city-or-ip': {
    message: 'locations.it-is-required-to-send-city-or-ip',
    status: 400,
  },
};

export const handlerError = (errs: string): { message: string; status: number } => {
  const message = knownBugs[errs]?.message || ReasonPhrases.SERVICE_UNAVAILABLE;
  const status = knownBugs[errs]?.status || StatusCodes.SERVICE_UNAVAILABLE;
  return { message, status };
};
