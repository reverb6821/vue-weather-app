import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { useCounterStore } from '@stores/counter';
import { createTestingPinia } from '@pinia/testing'

import HelloWorld from '../../HelloWorld.vue';

const pinia = createTestingPinia({
  initialState: {
    counter: {
      totalClicks: 0,
    },
  },
});

const wrapper = mount(HelloWorld, {
  global: {
    plugins: [pinia],
  },
})

describe('test helloworld', () => {
  it('renders correctly', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should increment totalClicks on button click', async () => {
    const button = wrapper.find('#addBtn');
    await button.trigger('click');
    const store = useCounterStore(pinia);
    expect(store.totalClicks).toBe(0);
  });

  it('should decrease totalClicks on button click', async () => {
    const button = wrapper.find('#removeBtn');
    await button.trigger('click');
    const store = useCounterStore(pinia);
    expect(store.totalClicks).toBe(0);
  });
});