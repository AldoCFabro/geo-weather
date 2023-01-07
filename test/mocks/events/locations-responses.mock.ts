const errorBadRequest = {
  ipRequired: {
    error: true,
    status: 400,
    message: 'Bad Request',
    data: ['locations.ip.is-required'],
  },
  ipInvalidFormat: {
    error: true,
    status: 400,
    message: 'Bad Request',
    data: ['locations.ip.must-be-an-ipv4'],
  },
};

const errorResponseApi = {
  ipLocationsNotFound: {
    error: true,
    status: 404,
    message: 'locations.not-found',
    data: {},
  },
};

export const ipApiServicesResponseMocks = {
  errorBadRequest,
  errorResponseApi,
};
