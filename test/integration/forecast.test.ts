import app from '../../src/app';
import request from 'supertest';
import { prefix } from '../../src/app';
import server from '../../src';

describe(`[GET] ${prefix}/ Verify that the server is up`, () => {
  const api = request(app);
  afterEach(() => {
    server.close();
  });
  test('should return a status code 200 and an ok server response', async () => {
    const subjectExpect = {
      error: false,
      status: 200,
      message: 'OK',
      data: { server: 'OK' },
    };
    const response = await api.get(`${prefix}/`).send();
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(subjectExpect);
  });
});
