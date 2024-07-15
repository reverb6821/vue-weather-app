<template>
    <div class="search-box">
        <div class="input">
            <input id="search" type="text" placeholder="Search..."  :value="store.searchValue" @input="(e) => searchOnInput(e)"/>
            <label for="search">City</label>
        </div>
        <div class="search-box__list" v-if="searchJSON.length !== 0">
            <q-scroll-area style="height: 200px; max-width: 300px;">
                <WeatherSearchResult v-for="(item, index) in searchJSON" :key="index" :searchResult="item" />
            </q-scroll-area>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useWeatherStore } from '@stores/weather.store';
import WeatherSearchResult from './WeatherSearchResult.vue'

const store = useWeatherStore();

import { SearchResProps, ErrorResProps } from "../@types/types";

const searchJSON = ref<SearchResProps[]>([]);

let isRateLimited = false;

const loadSearch = (): void => {
    if (!isRateLimited) {
        if (store.searchValue.length > 1) {
            fetch(
                `https://api.locationiq.com/v1/autocomplete?key=pk.1841a45b6998fdb7ba20642c77457359&q=${store.searchValue}&dedupe=1&accept-language=en&normalizecity`
            )
                .then((res: Response) => res.json())
                .then((data: ErrorResProps | SearchResProps[]) => {
                    if (!Array.isArray(data)) {
                        if (data.error === "Rate Limited Second") {
                            isRateLimited = true;
                            setTimeout(() => {
                                isRateLimited = false;
                                loadSearch();
                            }, 500);
                        }
                    } else {
                        searchJSON.value = data;
                        console.log(data);
                    }
                });
        } else if (store.searchValue.length === 0) {
            searchJSON.value = [];
        }
    }
};

const searchOnInput = (e: Event): void => {
    store.$patch({ searchValue: (e.target as HTMLInputElement).value });
};

watch(() => store.searchValue, () => {
    loadSearch();
});

</script>

<style lang="scss" scoped>
.input {
  margin-bottom: 10px;
  position: relative;
  width: 300px;
}
input {
  background: transparent;
  border: none;
  border-bottom: solid 1px #ccc;
  padding: 20px 2px 5px;
  transition: padding 0.4s;
  width: 80%;
}
input:placeholder-shown + label {
  color: #aaa;
  font-size: 14px;
  top: 15px;
}
input:focus + label,
label {
  color: #4476bd;
  font-size: 12px;
  pointer-events: none;
  position: absolute;
  left: 2px;
  top: 2px;
  transition: top 0.4s, left 0.4s, font-size 0.4s;
}
input::placeholder{
  color: transparent;
  display:none;
}
input:focus,
input:not(:placeholder-shown) {
  border-bottom: solid 1px #4476bd;
  outline: none;
}
</style>