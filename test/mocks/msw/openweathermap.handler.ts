import { rest } from 'msw';
import { configApp } from '../../../src/config/app.config';
import { completeSuccessOpenWeatherGeoResponse } from '../responses-services-external/openweather/openweather-geo';
import { completeSuccessOpenForecastGeoResponse } from '../responses-services-external/openweather/opemweather-forecast';
import { IP_PARAMS } from '../events/ip-api-params';

const { urlBase, appid, pathForecast, pathGeo, pathWeather } = configApp.openWeather;
export const handlersOpenweathermap = [
  rest.get(
    `${urlBase}/${pathGeo}/?appid=${appid}&q=${IP_PARAMS.VALID},AR`,
    async (req, res, ctx) => {
      if (req.url.searchParams.get('q') === 'Goya') {
        return res(ctx.status(200), ctx.json(completeSuccessOpenWeatherGeoResponse));
      } else {
        return res(ctx.status(200), ctx.json([]));
      }
    },
  ),
  rest.get(
    `${urlBase}/${pathWeather}/?appid=${appid}&q=${IP_PARAMS.VALID},AR`,
    async (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(completeSuccessOpenWeatherGeoResponse));
    },
  ),
  rest.get(
    `${urlBase}/${pathForecast}/?appid=${appid}&q=${IP_PARAMS.VALID},AR`,
    async (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(completeSuccessOpenForecastGeoResponse));
    },
  ),
];
