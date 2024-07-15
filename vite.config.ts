import { fileURLToPath } from 'url';

import type { UserConfig as VitestUserConfigInterface } from 'vitest/config'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

const vitestConfig: VitestUserConfigInterface = {
  test: {
    globals: true,
    environment: 'happy-dom',
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    template: { transformAssetUrls }
  }),
  // @quasar/plugin-vite options list:
  // https://github.com/quasarframework/quasar/blob/dev/vite-plugin/index.d.ts
  quasar({
    sassVariables: 'src/assets/styles/variables/quasar-variables.sass'
  })
  ],
  test: vitestConfig.test,
  resolve: {
    alias: {
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@stores': fileURLToPath(new URL('./src/stores', import.meta.url)),
    },
  },
})
