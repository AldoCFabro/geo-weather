import request from 'supertest';
import { Msw } from '../mocks/msw/mocks-server';
import { successResponseMocks } from '../mocks/services-responses/ip-api/get-ip-api';
import app from '../../src/app';
import { prefix } from '../../src/app';
import { ipApiServicesResponseMocks } from '../mocks/events/locations-responses.mock';
import { IP_PARAMS } from '../mocks/events/ip-api-params';

describe(`[GET] ${prefix}/locations get geolocation from ip-api`, () => {
  const api = request(app);
  beforeAll(() => {
    Msw.listen();
  });

  afterAll(() => {
    Msw.close();
  });
  afterEach(() => Msw.resetHandlers());

  test('it should return a 400 error for not sending the ip', async () => {
    const { ipRequired: subjectExpect } = ipApiServicesResponseMocks.errorBadRequest;
    const response = await api.get(`${prefix}/locations`).send();
    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual(subjectExpect);
  });

  test('should return a 400 error for not sending invalid format ip', async () => {
    const { ipInvalidFormat: subjectExpect } = ipApiServicesResponseMocks.errorBadRequest;
    const response = await api.get(`${prefix}/locations`).query(IP_PARAMS.INVALID).send();
    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual(subjectExpect);
  });

  test('should return a 404 error for location not found', async () => {
    const { ipLocationsNotFound: subjectExpect } = ipApiServicesResponseMocks.errorResponseApi;
    const response = await api.get(`${prefix}/locations`).query(IP_PARAMS.NOT_FOUND).send();
    expect(response.statusCode).toBe(404);
    expect(response.body).toEqual(subjectExpect);
  });

  test('should return a 429 error because the query limit per minute was exceeded', async () => {
    const response = await api.get(`${prefix}/locations`).query(IP_PARAMS.EXCEEDED_LIMIT).send();
    expect(response.statusCode).toBe(429);
  });

  test('should get geolocation from server', async () => {
    const response = await api.get(`${prefix}/locations`).query(IP_PARAMS.VALID).send();
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('error', false);
    expect(response.body).toHaveProperty('message', 'OK');
    expect(response.body).toHaveProperty('data');
    expect(response.body.data).toEqual(successResponseMocks);
  });
});
