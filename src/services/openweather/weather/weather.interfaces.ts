export interface IOpenWeatherWeather {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    },
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

/* {
  "coord": {
      "lon": -59.095,
      "lat": -29.2409
  },
  "weather": [
      {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
      }
  ],
  "base": "stations",
  "main": {
      "temp": 311.22,
      "feels_like": 308.79,
      "temp_min": 311.22,
      "temp_max": 311.22,
      "pressure": 1012,
      "humidity": 14,
      "sea_level": 1012,
      "grnd_level": 1005
  },
  "visibility": 10000,
  "wind": {
      "speed": 2.87,
      "deg": 115,
      "gust": 2.97
  },
  "clouds": {
      "all": 80
  },
  "dt": 1673200511,
  "sys": {
      "country": "AR",
      "sunrise": 1673168733,
      "sunset": 1673218799
  },
  "timezone": -10800,
  "id": 3433715,
  "name": "Goya",
  "cod": 200
} */
