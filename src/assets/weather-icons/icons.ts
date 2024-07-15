import thunder from './thunder.svg'
import thunderLight from './thunder-hail-light.svg'
import thunderHeavy from './thunder-hail-heavy.svg'
import snowModerate from './snow-moderate.svg'
import snowLight from './snow-light.svg'
import snowHeavy from './snow-heavy.svg'
import snowGrain from './snow-grains.svg'
import rainModerate from './rain-moderate.svg'
import rainLight from './rain-light.svg'
import heavyRain from './rain-heavy.svg'
import manyCloudDay from './many-clouds.svg'
import manyCloudNight from './many-clouds-moon.svg'
import fewCloudDay from './few-clouds.svg'
import fewCloudNight from './few-clouds.svg'
import cloudyDay from './cloudy.svg'
import cloudyNight from './cloudy.svg'
import clearDayIcon from './clear.svg'
import clearNightIcon from './clear-moon.svg'

const icons = {
  0: {
    dayIcon: clearDayIcon,
    nightIcon: clearNightIcon,
    status: 'clear sky',
  },
  
  1: {
    dayIcon: fewCloudDay,
    nightIcon: fewCloudNight,
    status: 'mainly clear',
  },
  
  2: {
    dayIcon: manyCloudDay,
    nightIcon: manyCloudNight,
    status: 'partly cloudy',
  },
  
  45: {
    dayIcon: cloudyDay,
    nightIcon: cloudyNight,
    status: 'foggy',
  },
  
  48: {
    dayIcon: cloudyDay,
    nightIcon: cloudyNight,
    status: 'depositing rime fog',
  },
  
  3: {
    dayIcon: cloudyDay,
    nightIcon: cloudyNight,
    status:'overcast',
  },
  
  51: {
    dayIcon: rainLight,
    nightIcon: rainLight,
    status: 'light drizzle',
  },
  
  53: {
    dayIcon: rainModerate,
    nightIcon: rainModerate,
    status: 'moderate drizzle',
  },
  
  55: {
    dayIcon: heavyRain,
    nightIcon: heavyRain,
    status: 'intensity drizzle',
  },
  61: {
    dayIcon: rainLight,
    nightIcon: rainLight,
    status: 'slight rain',
  },
  63: {
    dayIcon: rainModerate,
    nightIcon: rainModerate,
    status:'moderate rain',
  },
  65: {
    dayIcon: heavyRain,
    nightIcon: heavyRain,
    status:'intensity rain',
  },
  
  56: {
    dayIcon: snowLight,
    nightIcon: snowLight,
    status:'light freezing drizzle',
  },
  57: {
    dayIcon: snowHeavy,
    nightIcon: snowHeavy,
    status:'intensity freezing drizzle',
  },
  66: {
    dayIcon: snowLight,
    nightIcon: snowLight,
    status: 'light freezing rain',
  },
  67: {
    dayIcon: snowHeavy,
    nightIcon: snowHeavy,
    status:'intensity freezing rain',
  },
  71: {
    dayIcon: snowLight,
    nightIcon: snowLight,
    status:'slight snowfall',
  },
  73: {
    dayIcon: snowModerate,
    nightIcon: snowModerate,
    status: 'moderate snowfall',
  },
  75: {
    dayIcon: snowHeavy,
    nightIcon: snowHeavy,
    status:'heavy snowfall',
  },
  77: {
    dayIcon: snowGrain,
    nightIcon: snowGrain,
    status: 'snow grains',
  },
  80: {
    dayIcon: rainLight,
    nightIcon: rainLight,
    status:'slight shower',
  },
  81: {
    dayIcon: rainModerate,
    nightIcon: rainModerate,
    status:'moderate shower',
  },
  82: {
    dayIcon: heavyRain,
    nightIcon: heavyRain,
    status:'violent shower'
  },
  85: {
    dayIcon: snowLight,
    nightIcon: heavyRain,
    status:'slight snow shower',
  },
  86: {
    dayIcon: snowHeavy,
    nightIcon: heavyRain,
    status:'heavy snow shower',
  },
  
  95: {
    dayIcon: thunder,
    nightIcon: thunder,
    status: 'thunderstorm',
  },
  96: {
    dayIcon: thunderLight,
    nightIcon: thunderLight,
    status:'thunderstorm with light hail',
  },
  99: {
    dayIcon:  thunderHeavy,
    nightIcon:  thunderHeavy,
    status: 'thunderstorm with heavy hail'
  },
};
  
export default icons;