export const configApp = {
  api: {
    port: process.env.API_PORT || 3000,
    nodeEnv: process.env.NODE_ENV || 'local',
  },
  ipApi: {
    urlBase: process.env.IP_API_URL_BASE || 'http://ip-api.com/json',
  },
  openWeather: {
    appid: process.env.OPENWEATHE_API_KEY || '8f9cc00cb6f7da85738e6a770ced5c2b',
    urlBase: process.env.OPENWEATHE_URL_BASE || 'https://api.openweathermap.org',
    pathGeo: process.env.OPENWEATHERMAP_GEO || 'geo/1.0/direct',
    pathWeather: process.env.OPENWEATHERMAP_WEATHER || 'data/2.5/weather',
    pathForecast: process.env.OPENWEATHERMAP_FORECAST || 'data/2.5/forecast',
  },
};
