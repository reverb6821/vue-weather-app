<template>
  <div class="block shadow-2">
    <span class="text-h4 text-weight-medium">Map</span>
    <div class="flex items-center justify-between row q-py-md q-pl-md">
      <BaseButton :value="'wind'" icon="fa-solid fa-wind" />
      <BaseButton :value="'temp'" icon="fa-solid fa-temperature-three-quarters" />
      <BaseButton :value="'clouds'" icon="fa-solid fa-cloud" />
      <BaseButton :value="'rain'" icon="fa-solid fa-droplet" />
      <BaseButton :value="'pressure'" icon="fa-solid fa-thermometer" />
      <BaseButton :value="'radar'" icon="fa-solid fa-satellite-dish" />
    </div>
    <iframe class="widget"
      :src="`https://embed.windy.com/embed2.html?lat=${store.selectedSearchResult.lat}&lon=${store.selectedSearchResult.lon}&detailLat=${store.selectedSearchResult.lat}&detailLon=${store.selectedSearchResult.lon}&width=650&height=450&zoom=6&level=surface&overlay=${store.mapMode}&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1&marker=true&metricWind=m%2Fs&metricTemp=%C2%B0C`"
      frameborder="0"></iframe>
  </div>
</template>

<script lang="ts" setup>
import { useWeatherStore } from '@stores/weather.store';

import BaseButton from './BaseButton.vue'

const store = useWeatherStore();
</script>

<style lang="scss" scoped>
.widget {
  width: 100%;
  height: 450px;
  border-radius: 15px;
}
</style>