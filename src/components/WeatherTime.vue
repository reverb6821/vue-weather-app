<template>
  <span class="q-mb-sm text-capitalizetext-caption">
    {{ store.timeIsChanged ? selectedTime : currentTime }}
  </span>
</template>
  
  <script lang="ts" setup>
  import { useWeatherStore } from "@stores/weather.store";
  import { computed, onMounted, ref, watch } from 'vue';
  const store =  useWeatherStore();
  const datetime = ref();
  
  const loadTime = (): void => {
    fetch(`https://worldtimeapi.org/api/timezone/${store.timezone}`).then(
      (res: Response) =>
        res.json().then((data) => {
          datetime.value = data.datetime;
        })
    );
  };
  
  const currentTime = computed(() => {
    return new Date(datetime.value).toLocaleTimeString(store.language, {
      weekday: "long",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: false,
      timeZone: store.timezone,
    } as Intl.DateTimeFormatOptions);
  });
  
  const selectedTime = computed(() => {
    return new Date(store.getWeatherForHour.time).toLocaleTimeString(
      store.language,
      {
        weekday: "long",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: false,
      } as Intl.DateTimeFormatOptions
    );
  });
  
  onMounted(() => {
    loadTime();
  });
  
  watch(
    () => store.timezone,
    () => {
      loadTime();
    }
  );
  </script>