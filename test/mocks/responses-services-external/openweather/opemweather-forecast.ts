import { IOpenWeatherForecast } from '../../../../src/services/openweather/forecast/forecast.interfaces';

export const completeSuccessOpenForecastGeoResponse: IOpenWeatherForecast = {
  cod: '200',
  message: 0,
  cnt: 6,
  list: [
    {
      dt: 1673233200,
      main: {
        temp: 27.32,
        feels_like: 26.51,
        temp_min: 25,
        temp_max: 27.32,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1006,
        humidity: 27,
        temp_kf: 2.32,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'nubes dispersas',
          icon: '03n',
        },
      ],
      clouds: {
        all: 44,
      },
      wind: {
        speed: 2.51,
        deg: 106,
        gust: 5.28,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-01-09 03:00:00',
    },
    {
      dt: 1673244000,
      main: {
        temp: 24.78,
        feels_like: 24.15,
        temp_min: 22.93,
        temp_max: 24.78,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1005,
        humidity: 32,
        temp_kf: 1.85,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'nubes dispersas',
          icon: '03n',
        },
      ],
      clouds: {
        all: 42,
      },
      wind: {
        speed: 1.99,
        deg: 89,
        gust: 2.12,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-01-09 06:00:00',
    },
    {
      dt: 1673254800,
      main: {
        temp: 21.03,
        feels_like: 20.26,
        temp_min: 21.03,
        temp_max: 21.03,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1005,
        humidity: 41,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'cielo claro',
          icon: '01n',
        },
      ],
      clouds: {
        all: 1,
      },
      wind: {
        speed: 1.86,
        deg: 71,
        gust: 4.02,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-01-09 09:00:00',
    },
    {
      dt: 1673265600,
      main: {
        temp: 30.23,
        feels_like: 28.64,
        temp_min: 30.23,
        temp_max: 30.23,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1006,
        humidity: 25,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'cielo claro',
          icon: '01d',
        },
      ],
      clouds: {
        all: 1,
      },
      wind: {
        speed: 1.74,
        deg: 65,
        gust: 2.54,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-01-09 12:00:00',
    },
    {
      dt: 1673276400,
      main: {
        temp: 39.89,
        feels_like: 37.44,
        temp_min: 39.89,
        temp_max: 39.89,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1005,
        humidity: 13,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'cielo claro',
          icon: '01d',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 0.83,
        deg: 353,
        gust: 1.02,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-01-09 15:00:00',
    },
  ],
};
