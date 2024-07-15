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
    decrease() {
      if (this.clicks > 0) {
        this.clicks--;
      } else {
        console.warn('Cannot decrement clicks below zero');
      }
    },
  },
  getters: {
    totalClicks(): number {
      return this.clicks;
    },
  },
});