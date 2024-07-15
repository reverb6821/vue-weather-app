<template>
    <div class="weather__hourly flex wrap items-center justify-between">
        <WeatherHourlyItem v-for="(hour, index) in scheduleHours[
            screenWidth >= 685 ? 'desktop' : 'mobile'
        ]" :hour="hour" :key="index" />
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

import scheduleHours from "../assets/scheduleHours.json";
import WeatherHourlyItem from './WeatherHourlyItem.vue'

const screenWidth = ref<number>(window.innerWidth);
onMounted(() => {
    window.addEventListener("resize", (): void => {
        screenWidth.value = window.innerWidth;
    });
});
</script>

<style lang="scss" scoped>
.weather__hourly {
    margin-bottom: 15px;
}

@media screen and (min-width: 535px) {
    .weather__hourly {
        padding-left: 15px;
        width: 100%;
    }
}
</style>