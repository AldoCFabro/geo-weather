const { query } = require('express-validator');
import { ERROR_INPUT_API } from '../../utils/error-api';

export const forecastsValidator = [
  query('city')
    .optional()
    .isString()
    .custom((city: any) => {
      const pattern = new RegExp('^[a-zA-Z ]+$');
      return pattern.test(city);
    })
    .withMessage(ERROR_INPUT_API.isString)
    .bail()
    .trim(),
];
