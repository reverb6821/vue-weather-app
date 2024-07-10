import {defineStore} from 'pinia';

interface CounterState {
  clicks: number;
}

export const useCounterStore = defineStore('counter', {
  state: (): CounterState => ({
    clicks: 0,
  }),
  actions: {
    increment() {
      this.clicks++;
    },
  },
  getters: {
    totalClicks(): number {
      return this.clicks;
    },
  },
});