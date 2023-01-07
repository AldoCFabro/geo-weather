const { query } = require('express-validator');
import { ERROR_INPUT_API } from './error-api';

export const locationsValidator = [
  query('ip')
    .not()
    .isEmpty()
    .bail()
    .withMessage(ERROR_INPUT_API.locations.isRequired)
    .custom((ip: any) => {
      const pattern = new RegExp('^(?:[0-9]{1,3}.){3}[0-9]{1,3}$');
      return pattern.test(ip);
    })
    .withMessage(ERROR_INPUT_API.locations.isIp)
    .bail()
    .trim(),
];
