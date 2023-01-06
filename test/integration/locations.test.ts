import app from '../../src/app';
import request from 'supertest';
import { prefix } from '../../src/app';
import server from '../../src';
import { ipApiResponseServicesMocks } from '../mocks/locations.mock';
import { ILocations, ILocationsResponse } from '../../src/components/locations/locations.interface';

describe(`[GET] ${prefix}/locations get geolocation from ip-api`, () => {
  const api = request(app);
  afterEach(() => {
    server.close();
  });
  test('should get geolocation from server', async () => {
    const data: ILocations = ipApiResponseServicesMocks.success;
    const subjectExpect: ILocationsResponse = {
      error: false,
      status: 200,
      message: 'OK',
      data,
    };
    const response = await api.get(`${prefix}/locations`).send();
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(subjectExpect);
  });
});

// error de servicio de api ip-api

// localidad no encontrada
// devuelve una localidad
