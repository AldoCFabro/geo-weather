import { Request, Response, NextFunction } from 'express';
import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import { validationResult } from 'express-validator';
import { errorResponse } from '../network/response';

export const requestInputValidation = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  console.log('hay error', errors);
  if (errors.isEmpty()) return next();
  const errorMessage = errors.array().map((err: any) => err.msg);
  errorResponse({
    req,
    res,
    message: ReasonPhrases.BAD_REQUEST,
    status: StatusCodes.BAD_REQUEST,
    data: errorMessage,
  });
};
