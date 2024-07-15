<template>
    <div class="weather-part column items-center justify-center text-center" @click="hourClicked">
        <p class="weather-part__time text-h6 text-weight-medium">{{ props.hour.time }}</p>
        <WeatherIcon class="weather-part__icon" :weathercode="store.getWeatherCodeForHour(props.hour.hourId)"
            :hour="props.hour.hourId" />
        <WeatherIconDescription
            class="weather-part__description"
            :weathercode="store.getWeatherCodeForHour(props.hour.hourId)"/>
    </div>
</template>

<script lang="ts" setup>
import { useWeatherStore } from '@stores/weather.store';
import WeatherIcon from './WeatherIcon.vue'
import WeatherIconDescription from './WeatherIconDescription.vue'


const store = useWeatherStore();

const props = defineProps({
    hour: {
        type: Object,
        required: true,
    },
});

const hourClicked = (): void => {
    store.$patch({ timeIsChanged: true });
    store.$patch({ selectedHourId: props.hour.hourId });
};
</script>

<style lang="scss" scoped>
.weather-part {
    cursor: pointer;
    width: calc(25% - 10px);

    &__time {
        margin-bottom: 5px;
        font-size: 15px;
    }

    &__icon {
        margin-bottom: 7px;
    }

    @media screen and (min-width: 535px) {
        & {
            width: 50%;
        }
    }

    @media screen and (min-width: 685px) {
        & {
            width: 25%;
        }
    }
}
</style>