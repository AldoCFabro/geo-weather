import { Request, Response } from 'express';
import { StatusCodes, ReasonPhrases } from 'http-status-codes';

interface IParamsResponse {
  req: Request;
  res: Response;
  message?: string;
  status?: number;
  data?: any;
}

export const successResponse = (params: IParamsResponse) => {
  const { req, res, message = ReasonPhrases.OK, status = StatusCodes.OK, data = {} } = params;

  res.status(status).send({
    error: false,
    status,
    message,
    data,
  });
};

export const errorResponse = (params: IParamsResponse) => {
  const {
    req,
    res,
    message = ReasonPhrases.SERVICE_UNAVAILABLE,
    status = StatusCodes.SERVICE_UNAVAILABLE,
    data = {},
  } = params;
  res.status(status).send({
    error: true,
    status,
    message,
    data,
  });
};
