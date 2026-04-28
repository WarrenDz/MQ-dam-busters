import { defineConfig } from 'vite'

export default defineConfig({
  base: '/MQ-dam-busters/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        map: 'map/map.html'
      }
    }
  }
})