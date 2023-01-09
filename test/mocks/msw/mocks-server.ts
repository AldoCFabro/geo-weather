import { setupServer } from 'msw/node';
import { handlers } from './ip-api.handler';
import { handlersOpenweathermap } from './openweathermap.handler';

const Msw = setupServer(...handlers, ...handlersOpenweathermap);
export { Msw };
