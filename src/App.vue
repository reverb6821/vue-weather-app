<script setup lang="ts">
import WeatherMap from '@components/WeatherMap.vue'
import WeatherInfo from '@components/WeatherInfo.vue'
import BaseHeader from '@components/BaseHeader.vue'
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <BaseHeader />
    <q-page-container>
      <div class="content">
        <WeatherInfo />
        <WeatherMap />
      </div>
    </q-page-container>
  </q-layout>
</template>
