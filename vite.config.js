import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [vue()],
    base: env.VITE_BASE_URL,
    server: {
      host: true,
      port: Number(env.VITE_PORT)
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "/src/css/mixin" as *;
          `
        }
      }
    }
  };
})
