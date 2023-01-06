export const configApp = {
  api: {
    port: process.env.API_PORT || 3000,
    nodeEnv: process.env.NODE_ENV || 'local',
  },
  ipApi: {
    url: process.env.IP_API_URL || 'http://ip-api.com/json',
  },
};
