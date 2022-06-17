import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import VueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname)
  console.log('%c 【env】-11', 'font-size:13px; background:#44A08D; color:#FFB88C;', env)
  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    plugins: [
      vue(),
      VueJsx(),
      AutoImport({ imports: ['vue', 'vue-router'], dts: 'src/types/auto-import.d.ts' }),
      Components({ resolvers: [VantResolver()], dts: 'src/types/components.d.ts' }),
    ],
    server: {
      port: 4000,
      proxy: {
        // 选项写法
        // '/api': {
        //   target: 'http://localhost:3000',
        //   changeOrigin: true,
        //   rewrite: path => path.replace(/^\/api/, '')
        // }
      },
    },
    build: {
      minify: 'terser',
      outDir: env.VITE_OUT_DIR || 'dist',
      sourcemap: env.VITE_SOURCEMAP === 'true' ? 'inline' : false,
      brotliSize: false,
      terserOptions: {
        compress: {
          drop_debugger: env.VITE_DROP_DEBUGGER === 'true',
          drop_console: env.VITE_DROP_CONSOLE === 'true',
        },
      },
    },
  }
})
