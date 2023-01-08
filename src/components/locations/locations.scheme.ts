const { query } = require('express-validator');
import { isIp } from '../../helpers/common';
import { ERROR_INPUT_API } from './error-api';

export const locationsValidator = [
  query('ip')
    .not()
    .isEmpty()
    .trim()
    .bail()
    .withMessage(ERROR_INPUT_API.locations.isRequired)
    .custom((ip: string) => {
      return isIp(ip);
    })
    .withMessage(ERROR_INPUT_API.locations.isIp)
    .bail(),
];
