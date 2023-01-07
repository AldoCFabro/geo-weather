import { setupServer } from 'msw/node';
import { handlers } from './ip-api.handler';

const Msw = setupServer(...handlers);
export { Msw };
