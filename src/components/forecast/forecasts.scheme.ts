import { query } from 'express-validator';
import { isIp, isString } from '../../helpers/common';
import { ERROR_INPUT_API } from './error-api';

export const forecastsValidator = [
  query('city')
    .optional()
    .trim()
    .custom((city: any) => {
      return isString(city);
    })
    .withMessage(ERROR_INPUT_API.forecast.isString)
    .bail(),
  query('ip')
    .optional()
    .isString()
    .trim()
    .custom((ip: string) => {
      return isIp(ip);
    })
    .withMessage(ERROR_INPUT_API.forecast.isIp)
    .bail(),
];
