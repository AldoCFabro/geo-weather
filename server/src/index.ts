import logger from 'jet-logger';
import app, { prefix } from './app';

const port = process.env.PORT || 3000;
// Start server
const server = app.listen(port, function () {
  let message = `Personal Play server running 🥳`;
  if (process.env.NODE_ENV === 'local') {
    message += ` to go -> http://localhost:${port}${prefix}/doc`;
  }
  logger.info(message);
});

export default server;
