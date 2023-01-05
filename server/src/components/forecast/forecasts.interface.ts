import { Request } from 'express';

export interface RequestForecasts extends Request {
  city: string;
}
