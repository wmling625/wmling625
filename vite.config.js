import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: '/index.html',
        cat: '/cat.html',
        dog: '/dog.html',
        fish: '/fish.html',
        tiger: '/tiger.html'
      }
    }
  }
});
