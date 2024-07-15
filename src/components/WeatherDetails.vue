<template>
    <q-list class="q-mb-sm">
        <q-item class="detail-info">
            <p class="detail-info__label text-subtitle1 text-weight-bold">
                Feels like
            </p>
            <div class="detail-info__spacing" />
            <p class="detail-info__value text-subtitle1 text-weight-light">
                {{ Math.round(store.getWeatherForHour.apparentTemperature) }}°
            </p>
        </q-item>
        <q-item class="detail-info">
            <p class="detail-info__label text-subtitle1 text-weight-bold">
                Wind
            </p>
            <div class="detail-info__spacing" />
            <p class="detail-info__value text-subtitle1 text-weight-light">
                {{ Math.round(store.getWeatherForHour.windSpeed) }}M/s, {{ store.getWeatherForHour.windDirection }}
            </p>
        </q-item>
        <q-item class="detail-info">
            <p class="detail-info__label text-subtitle1 text-weight-bold">
                Precipitation chance
            </p>
            <div class="detail-info__spacing" />
            <p class="detail-info__value text-subtitle1 text-weight-light">
                {{ store.getWeatherForHour.precipitationProbability }}%
            </p>
        </q-item>
        <q-item class="detail-info">
            <p class="detail-info__label text-subtitle1 text-weight-bold">
                Relative humidity
            </p>
            <div class="detail-info__spacing" />
            <p class="detail-info__value text-subtitle1 text-weight-light">
                {{ store.getWeatherForHour.humidity }}%
            </p>
        </q-item>
    </q-list>
</template>

<script lang="ts" setup>
import { useWeatherStore } from '@stores/weather.store';

const store = useWeatherStore();
</script>

<style lang="scss" scoped>
.detail-info {
    display: flex;
    align-items: center;
    width: 100%;

    &__label {
        margin-right: 10px;
    }

    &__value {
        margin-left: 10px;
    }

    &__spacing {
        height: 2px;
        width: 100%;
        border-bottom: 0.5px solid #adadad;
    }

    &__label,
    &__value {
        flex-shrink: 0;
    }
}
</style>