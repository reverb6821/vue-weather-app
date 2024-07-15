<template>
  <div class="weather__daily block shadow-2 flex items-center justify-center relative-position" :class="{ 'weather__daily--selected': props.index === store.selectedDayId }"
    @click="dayClicked(index)" v-if="loading">
    <div class="weather__daily__date">
      <p class="weather__daily__title text-subtitle1 text-weight-bold">{{ dayInfo.weekday }}</p>
      <span class="weather__daily__day text-caption">{{ dayInfo.monthday }}</span>
    </div>
    <WeatherIcon class="weather__daily__icon" :weathercode="weathercode" :hour="12" />
    <div class="weather__daily__temperature-range justify-center">
      <span  class="weather__daily__max text-subtitle2">
        {{ Math.round(maxTemperature) }}°
      </span>
      <span class="weather__daily__min text-subtitle2">
        {{ Math.round(minTemperature) }}°
      </span>
    </div>
  </div>
</template>t


<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import { useWeatherStore } from '@stores/weather.store';
import WeatherIcon from './WeatherIcon.vue'
const store = useWeatherStore();

const props = defineProps({
  date: {
    type: String,
    required: true,
  },
  weathercode: {
    type: Number,
    required: true,
  },
  minTemperature: {
    type: Number,
    required: true,
  },
  maxTemperature: {
    type: Number,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

const loading = ref<boolean>(false);

const weekdayOptions: Intl.DateTimeFormatOptions = {
  weekday: "long",
  timeZone: "UTC",
};
const monthdayOptions: Intl.DateTimeFormatOptions = {
  month: "long",
  day: "numeric",
  timeZone: "UTC",
};

const dayClicked = (index: number): void => {
  store.$patch({ selectedDayId: index });

  if (index === 0) {
    store.$patch({ timeIsChanged: false });
    store.$patch({ selectedDayId: index });

    store.$patch({
      selectedHourId: Number(
        new Date(store.currentWeather as any).toLocaleTimeString("uk", {
          hour: "numeric",
        })
      ),
    });
  } else {
    store.$patch({ timeIsChanged: true });
  }
};

const date = new Date(props.date);

const dayInfo = ref();

const updateDayInfo = (): void => {
  dayInfo.value = {
    weekday: date.toLocaleDateString(store.language, weekdayOptions),
    monthday: date.toLocaleDateString(store.language, monthdayOptions),
  };
};

onMounted(() => {
  updateDayInfo();
  loading.value = true;
});

watch(
  () => store.language,
  () => {
    updateDayInfo();
  }
);
</script>

<style lang="scss" scoped>
.weather__daily {
  margin-right: 12.5px;
  margin-bottom: 7px;
  min-width: 175px;
  opacity: 0.5;
  transition: opacity 0.2s;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  &:after {
    display: block;
    background-color: #fff;
    width: 100%;
    height: 4px;
    right: -20px;
    position: absolute;
    bottom: -4px;
    left: 0px;
    display: block;
    content: "";
    transition: opacity 0.2s;
    opacity: 0;
  }

  &--selected {
    opacity: 1;
  }

  &__icon {
    width: 35px;
  }

  &__date {
    margin-right: 10px;
  }

  &__title {
    font-size: 14px;
    margin-bottom: 4px;
    text-transform: capitalize;
  }

  &__day {
    font-size: 13px;
  }

  &__icon {
    margin-bottom: 5px;
    height: 35px;
  }

  @media screen and (min-width: 858px) {
    & {
      width: calc(100% / 7);
      min-width: auto;
      margin-right: 0;
      border-radius: 0;
      text-align: center;
      margin-bottom: 0;
      flex-direction: column;

      &:first-child {
        border-top-left-radius: 10px;
      }

      &:last-child {
        border-top-right-radius: 10px;
      }

      &--selected {
        &:after {
          opacity: 1;
        }
      }
    }

    &__max {
      margin-right: 15px;
    }

    &__min {
      opacity: 0.8;
    }

    &__date {
      margin-right: 0 !important;
      margin-bottom: 10px;
    }

    &__title {
      margin-bottom: 2px;
    }
  }
}
</style>