import { rest } from 'msw';
import { configApp } from '../../../src/config/app.config';
import { completeSuccessOpenWeatherGeoResponse } from '../responses-services-external/openweather/openweather-geo';
import { completeSuccessOpenForecastGeoResponse } from '../responses-services-external/openweather/opemweather-forecast';

const { urlBase, appid, pathForecast, pathGeo, pathWeather } = configApp.openWeather;
export const handlersOpenweathermap = [
  rest.get(`${urlBase}/${pathGeo}?appid=${appid}`, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(completeSuccessOpenWeatherGeoResponse));
  }),
  rest.get(`${urlBase}/${pathWeather}?appid=${appid}`, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(completeSuccessOpenWeatherGeoResponse));
  }),
  rest.get(`${urlBase}/${pathForecast}?appid=${appid}`, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(completeSuccessOpenForecastGeoResponse));
  }),
];
