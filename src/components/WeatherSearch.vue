<template>
    <div class="search">
        <q-btn color="primary" round icon="fa-solid fa-magnifying-glass" @click="openSearch" />
        <q-dialog v-model="dialog" backdrop-filter="blur(4px) saturate(150%)" >
            <q-card style="width: calc(100% - 15px); max-width: 343px; max-height: 455px;">
                <q-card-section class="row items-center q-pb-none">
                    <div class="text-h6">Search Location</div>
                    <q-space />
                    <q-btn icon="fa-solid fa-xmark"  @click="closeSearch" flat round dense v-close-popup />
                </q-card-section>
                <q-card-section>
                    <WeatherSearchBox />
                </q-card-section>
            </q-card>
        </q-dialog>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useWeatherStore } from '@stores/weather.store';

import WeatherSearchBox from './WeatherSearchBox.vue'

const store = useWeatherStore();

const dialog = ref(false)
const medium = ref(false)

const openSearch = (): void => {
  store.$patch({ isSearchOpen: true })
  medium.value = true
    dialog.value = true; // Initialize showDialog here
};

const closeSearch = (): void => {
  store.$patch({ isSearchOpen: false })
};
</script>
