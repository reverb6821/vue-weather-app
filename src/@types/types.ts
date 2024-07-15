import weatherIcons from '@assets/weather-icons/icons';

export interface SearchResProps {
  address: {
    country_code?: string;
    name: string;
    county?: string;
    state?: string;
    country?: string;
  };
  lat?: string;
  lon?: string;
}

export interface ErrorResProps {
  error: string;
}

export type languageType = 'en';

export interface StatusProps {
  en: string;
}

export type weatherIconsKeyType = keyof typeof weatherIcons;

export interface HourWeatherProps {
  time: string[];
  temperature_2m: number[];
  apparent_temperature: number[];
  windspeed_120m: number[];
  winddirection_10m: number[];
  relativehumidity_2m: number[];
  pressure_msl: number[];
  weathercode: number[];
  precipitation_probability: number[];
}

export interface SelectedSearchRes {
  lat?: string;
  lon?: string;
  name: string;
}

export interface WeatherWeeklyDayprops {
  weathercode: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  date: string[];
  time: string[];
  sunrise: string[];
  sunset: string[];
}

export type windDirectionType =
  | 'N'
  | 'NE'
  | 'E'
  | 'SE'
  | 'S'
  | 'SW'
  | 'W'
  | 'NW';

export type mapModeType =
  | 'wind'
  | 'temp'
  | 'clouds'
  | 'rain'
  | 'pressure'
  | 'radar';