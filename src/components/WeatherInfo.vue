<template>
        <section class="q-pt-sm" v-if="!loading">
          <WeatherWeekly/>
          <q-item class="main__info block shadow-2">
            <div class="main__flex">
              <div class="full-width">
                <div class="q-ma-md">
                  <p class=" title text-h2 ">
                    {{ store.selectedSearchResult.name }}
                  </p>
                  <WeatherTime />
                </div>

                <div class="q-mb-sm flex row flex items-center q-ma-md">
                  <WeatherTemperature
                    class="text-h2"
                    :value="store.getWeatherForHour.temperature"
                  />
                  <WeatherIcon
                    :hour="store.selectedHourId"
                    :weathercode="store.getWeatherForHour.weathercode"
                  />
                  <WeatherIconDescription
                    :weathercode="store.getWeatherForHour.weathercode"
                  />
                </div>
                <WeatherDetails />
              </div>
              <WeatherHourly />
            </div>
            <BaseHourSlider />
          </q-item>
        </section>
  </template>
  
  <script lang="ts" setup>
  import { useWeatherStore } from "@stores/weather.store";
  import { onMounted, ref, watch } from 'vue';
  import WeatherIcon from './WeatherIcon.vue';
  import WeatherTime from './WeatherTime.vue';
  import WeatherDetails from './WeatherDetails.vue';
  import WeatherWeekly from './WeatherWeekly.vue';
  import WeatherHourly from './WeatherHourly.vue'
  import BaseHourSlider from './BaseHourSlider.vue'
  import WeatherTemperature from './WeatherTemperature.vue'
  import WeatherIconDescription from './WeatherIconDescription.vue'

  const store = useWeatherStore();
  const loading = ref<boolean>(true);
  
  const loadWeather = () => {
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${store.selectedSearchResult.lat}&longitude=${store.selectedSearchResult.lon}&hourly=temperature_2m,apparent_temperature,precipitation_probability,windspeed_120m,pressure_msl,relativehumidity_2m,weathercode,winddirection_10m&daily=weathercode,sunrise,sunset,temperature_2m_max,temperature_2m_min&current_weather=true&relativehumidity_2m,apparent_temperature&windspeed_unit=ms&timezone=auto`
    )
      .then((res: Response) => res.json())
      .then((data) => {
        store.$patch({ weekDaysWeather: data.daily });
        store.$patch({ timezone: data.timezone });
        store.$patch({
          selectedHourId: Number(
            new Date(data.current_weather.time).toLocaleTimeString("uk", {
              hour: "numeric",
            })
          ),
        });
        store.$patch({ currentWeather: data.current_weather.time });
        store.$patch({ hourly: data.hourly });
        loading.value = false;
      });
  };
  
  onMounted(() => {
    loadWeather();
  });
  
  watch(store.selectedSearchResult, () => {
    loadWeather();
  });
  </script>

<style lang="scss" scoped>
.main{
  @media screen and (min-width: 858px) {
    & {
      padding-top: 25px;
    }

    &__info {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }

  @media screen and (min-width: 535px) {
    &__flex {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>