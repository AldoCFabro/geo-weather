import { ILatLogDTO, ILocationDTO } from './interfaces';

export const latLogDTO = (params: ILocationDTO): ILatLogDTO => {
  const { lat, lon } = params;
  return { lat, lon };
};
