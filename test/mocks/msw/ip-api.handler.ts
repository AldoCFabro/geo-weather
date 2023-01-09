import { rest } from 'msw';
import { IP_PARAMS } from '../events/ip-api-params';
import { successResponseMocks } from '../responses-services-external/ip-api/get-ip-api';
export const handlers = [
  rest.get(`http://ip-api.com/json/${IP_PARAMS.VALID.ip}`, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(successResponseMocks));
  }),
  rest.get(`http://ip-api.com/json/${IP_PARAMS.NOT_FOUND.ip}`, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({}));
  }),
  rest.get(`http://ip-api.com/json/${IP_PARAMS.EXCEEDED_LIMIT.ip}`, async (req, res, ctx) => {
    return res(ctx.status(429), ctx.json({ message: 'exceeded limit' }));
  }),
];
