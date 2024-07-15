<template>
    <q-header reveal bordered class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          Vue Meteo
        </q-toolbar-title>
        <WeatherSearch />
      </q-toolbar>
    </q-header>
</template>

<script  lang="ts" setup>
import WeatherSearch from './WeatherSearch.vue'
</script>