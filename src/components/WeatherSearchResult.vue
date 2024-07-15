<template>
  <q-list>
    <q-item @click="searchResultClicked">
      <q-item-section>
        <q-item-label>{{ props.searchResult.address.name }}</q-item-label>
        <q-item-label caption lines="2">{{
          `${props.searchResult.address.county
            ? props.searchResult.address.county + ","
            : ""
          } ${props.searchResult.address.state
            ? props.searchResult.address.state + ","
            : ""
          } ${props.searchResult.address.country || ""}`
        }}
        </q-item-label>
      </q-item-section>

      <q-item-section side center>
        <span :class="`search-item__fi fi fi-${props.searchResult.address.country_code}`"></span>
      </q-item-section>
    </q-item>
    <q-separator spaced inset></q-separator>

  </q-list>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { SearchResProps } from "../@types/types";
import { useRouter } from 'vue-router';
import { useWeatherStore } from '@stores/weather.store';

const props = defineProps({
  searchResult: {
    type: Object as PropType<SearchResProps>,
    required: true,
  },
});

const store = useWeatherStore();
const router = useRouter();

const searchResultClicked = (): void => {
  store.$patch({
    selectedSearchResult: {
      lat: props.searchResult.lat,
      lon: props.searchResult.lon,
      name: props.searchResult.address.name,
    },
  });
  store.$patch({ isSearchOpen: false });
  store.$patch({ searchValue: "" });
  store.$patch({ timeIsChanged: false });
  store.$patch({ selectedDayId: 0 });

  router.push({
    path: "/",
    query: router.currentRoute.value.query,
  });
};
</script>