import { Request } from 'express';

export interface RequestForecasts extends Request {
  query: {
    city?: string;
    ip?: string;
  };
}
