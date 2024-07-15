<template>
    <img class="icon" :src="icon" :alt="description" />
</template>

<script lang="ts" setup>
import { useWeatherStore } from "@stores/weather.store";
import icons from "@assets/weather-icons/icons";
import { computed } from 'vue';
const store = useWeatherStore();
import { StatusProps } from '../@types/types';

const props = defineProps({
  weathercode: {
    type: Number,
    required: true,
  },
  hour: {
    type: Number,
    required: true,
  },
});

const iconTime = () => {
  if (
    props.hour >
      Number(
        new Date(
          store.weekDaysWeather.sunrise[store.selectedDayId]
        ).toLocaleTimeString("it", {
          hour: "numeric",
        })
      ) &&
    props.hour <
      Number(
        new Date(
          store.weekDaysWeather.sunset[store.selectedDayId]
        ).toLocaleTimeString("it", {
          hour: "numeric",
        })
      )
  ) {
    return "dayIcon";
  } else {
    return "nightIcon";
  }
};

const icon = computed(() => {
  const weatherIcon = icons[props.weathercode.toString() as unknown as keyof typeof icons];
  return weatherIcon ? weatherIcon[iconTime()] : null;
});

const description = computed(() => {
  const statusObject =
    icons[props.weathercode.toString() as unknown as keyof typeof icons].status;
  return typeof statusObject === "string"
    ? statusObject
    : statusObject[store.language as keyof StatusProps];
});
</script>

<style lang="scss" scoped>
.icon{
  margin-right: 10px;
  width: 50px;
}

</style>