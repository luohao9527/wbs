import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import WindiCss from 'vite-plugin-windicss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCss({
      resolve: {
        alias: {
          '~': path.resolve(__dirname, './'),
          '@': path.resolve(__dirname, './src'),
        },
      },
      scan: {
        dirs: ['.'],
        fileExtensions: ['vue', 'js', 'ts', 'html'],
      },
      attributify: true,
    }),
  ],
})
