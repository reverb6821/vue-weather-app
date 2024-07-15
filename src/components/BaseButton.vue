<template>
    <q-btn color="primary" padding="xs lg" :icon="icon" size:xs @click="store.$patch({ mapMode: props.value })"></q-btn>
</template>

<script lang="ts" setup>
import { useWeatherStore } from '@stores/weather.store';
const store = useWeatherStore();

const props = defineProps({
  value: {
    type: String,
    required: true,
  },
  icon: String,
});
</script>