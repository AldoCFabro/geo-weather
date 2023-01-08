interface IMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}
interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
interface IWind {
  speed: number;
  deg: number;
  gust: number;
}

export interface IOpenWeatherForecast {
  cod: string;
  message: number;
  cnt: number;
  list: [
    {
      dt: number;
      main: IMain;
      weather: [IWeather];
      clouds: {
        all: number;
      };
      wind: IWind;
      visibility: number;
      pop: number;
      sys: {
        pod: string;
      };
      dt_txt: string;
    },
  ];
}

/* "forecast": {
  "cod": "200",
  "message": 0,
  "cnt": 5,
  "list": [
      {
          "dt": 1673211600,
          "main": {
              "temp": 310.61,
              "feels_like": 308.27,
              "temp_min": 310.61,
              "temp_max": 310.61,
              "pressure": 1009,
              "sea_level": 1009,
              "grnd_level": 1004,
              "humidity": 15,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03d"
              }
          ],
          "clouds": {
              "all": 41
          },
          "wind": {
              "speed": 2.61,
              "deg": 110,
              "gust": 2.56
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2023-01-08 21:00:00"
      },
      {
          "dt": 1673222400,
          "main": {
              "temp": 307.62,
              "feels_like": 305.51,
              "temp_min": 301.63,
              "temp_max": 307.62,
              "pressure": 1009,
              "sea_level": 1009,
              "grnd_level": 1005,
              "humidity": 19,
              "temp_kf": 5.99
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03n"
              }
          ],
          "clouds": {
              "all": 38
          },
          "wind": {
              "speed": 2.56,
              "deg": 108,
              "gust": 4.12
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2023-01-09 00:00:00"
      },
      {
          "dt": 1673233200,
          "main": {
              "temp": 302.3,
              "feels_like": 300.89,
              "temp_min": 298.15,
              "temp_max": 302.3,
              "pressure": 1010,
              "sea_level": 1010,
              "grnd_level": 1006,
              "humidity": 25,
              "temp_kf": 4.15
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 58
          },
          "wind": {
              "speed": 2.51,
              "deg": 106,
              "gust": 5.28
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2023-01-09 03:00:00"
      },
      {
          "dt": 1673244000,
          "main": {
              "temp": 296.08,
              "feels_like": 295.34,
              "temp_min": 296.08,
              "temp_max": 296.08,
              "pressure": 1010,
              "sea_level": 1010,
              "grnd_level": 1005,
              "humidity": 35,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03n"
              }
          ],
          "clouds": {
              "all": 47
          },
          "wind": {
              "speed": 1.99,
              "deg": 89,
              "gust": 2.12
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2023-01-09 06:00:00"
      },
      {
          "dt": 1673254800,
          "main": {
              "temp": 294.18,
              "feels_like": 293.41,
              "temp_min": 294.18,
              "temp_max": 294.18,
              "pressure": 1010,
              "sea_level": 1010,
              "grnd_level": 1005,
              "humidity": 41,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 1
          },
          "wind": {
              "speed": 1.86,
              "deg": 71,
              "gust": 4.02
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2023-01-09 09:00:00"
      }
  ],
  "city": {
      "id": 3433715,
      "name": "Goya",
      "coord": {
          "lat": -29.1444,
          "lon": -59.265
      },
      "country": "AR",
      "population": 70245,
      "timezone": -10800,
      "sunrise": 1673168787,
      "sunset": 1673218827
  }
} */
