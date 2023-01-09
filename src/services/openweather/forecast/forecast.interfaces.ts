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
interface IList {
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
}

export interface IOpenWeatherForecast {
  cod: string;
  message: number;
  cnt: number;
  list: IList[];
}
