<template>
    <span class="text-capitalize text-subtitle2 text-weight-thin">
        {{ description }}
    </span>
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
});

const description = computed(() => {
    const statusObject =
        icons[props.weathercode.toString() as unknown as keyof typeof icons].status; // getting .status object with 3 different languages
    return typeof statusObject === "string"
        ? statusObject
        : statusObject[store.language as keyof StatusProps];
});
</script>