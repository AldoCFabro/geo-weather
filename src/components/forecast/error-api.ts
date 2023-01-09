export const ERROR_INPUT_API = {
  forecast: {
    isString: 'forecast.city.must-be-a-string',
    isIp: 'locations.ip.must-be-an-ipv4',
    CityOrIpIsRequired: 'locations.it-is-required-to-send-city-or-ip',
  },
};

export const ERROR_RESPONSE_API = {
  forecast: {
    cityNotFound: 'forecast.city.not-found',
  },
};
