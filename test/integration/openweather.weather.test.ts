import request from 'supertest';
import { Msw } from '../mocks/msw/mocks-server';
import app from '../../src/app';
import { prefix } from '../../src/app';
import { ERROR_INPUT_API, ERROR_RESPONSE_API } from '../../src/components/forecast/error-api';
import { INPUT_QUERY_PARAMS } from '../mocks/events/openweathermap-params';
import { ReasonPhrases } from 'http-status-codes';

describe(`[GET] ${prefix}/forecast/current get Weather And Location with city`, () => {
  const api = request(app);
  beforeAll(() => {
    Msw.listen();
  });

  afterAll(() => {
    Msw.close();
  });
  afterEach(() => Msw.resetHandlers());

  test('1 - It should return a 400 error for not sending the city or the ip ', async () => {
    const response = await api.get(`${prefix}/forecast/current`).send();
    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error', true);
    expect(response.body).toHaveProperty('message', ERROR_INPUT_API.forecast.CityOrIpIsRequired);
    expect(response.body).toHaveProperty('data', {});
  });

  test('2 - It should return a 400 error for sending an invalid city ', async () => {
    const response = await api
      .get(`${prefix}/forecast/current`)
      .query(INPUT_QUERY_PARAMS.INVALID_CITY)
      .send();
    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error', true);
    expect(response.body).toHaveProperty('message', ReasonPhrases.BAD_REQUEST);
    expect(response.body).toHaveProperty('data', [ERROR_INPUT_API.forecast.isString]);
  });

  test('3 - it should return a 400 error for sending an invalid ip', async () => {
    const response = await api
      .get(`${prefix}/forecast/current`)
      .query(INPUT_QUERY_PARAMS.INVALID_IP)
      .send();
    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error', true);
    expect(response.body).toHaveProperty('message', ReasonPhrases.BAD_REQUEST);
    expect(response.body).toHaveProperty('data', [ERROR_INPUT_API.forecast.isIp]);
  });

  test('4 - should return a 404 error for not finding the city', async () => {
    const response = await api
      .get(`${prefix}/forecast/current`)
      .query(INPUT_QUERY_PARAMS.NOT_FOUND_CITY)
      .send();
    expect(response.statusCode).toBe(404);
    expect(response.body).toHaveProperty('error', true);
    expect(response.body).toHaveProperty('message', ERROR_RESPONSE_API.forecast.cityNotFound);
    expect(response.body).toHaveProperty('data', {});
  });

  test('5 - should return the current weather of a city and its geolocation by city', async () => {
    const response = await api
      .get(`${prefix}/forecast/current`)
      .query(INPUT_QUERY_PARAMS.VALID_CITY)
      .send();
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('error', false);
    expect(response.body).toHaveProperty('message');
    expect(response.body).toHaveProperty('data');
    expect(response.body.data).toHaveProperty('weather');
    expect(response.body.data).toHaveProperty('location');
  });

  test('6 - should return the current weather of a city and its geolocation by ip', async () => {
    const response = await api
      .get(`${prefix}/forecast/current`)
      .query(INPUT_QUERY_PARAMS.VALID_IP)
      .send();
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('error', false);
    expect(response.body).toHaveProperty('message');
    expect(response.body).toHaveProperty('data');
    expect(response.body.data).toHaveProperty('weather');
    expect(response.body.data).toHaveProperty('location');
  });
});
