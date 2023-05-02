import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// const { DEV } = process.env
console.log(process.env)
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],

  resolve: {
    alias: {
      //'@': fileURLToPath(new URL('./src', import.meta.url)),
      '@': resolve(__dirname, '/src'),
      'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
    },
    // 省略后缀名引入
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json']
  },
  server: {
    host: true
  },
  build: {
    target: 'modules',
    outDir: 'dist', //指定输出路径
    assetsDir: 'assets', // 指定生成静态资源的存放路径
    minify: 'terser', // 混淆器，terser构建后文件体积更小
    // 构建后是否生成 source map 文件
    //sourcemap: import.meta.env.VITE_DEV,
    cssCodeSplit: true,
    terserOptions: {
      compress: {
        // 生产环境时移除console.log调试代码
        drop_console: true,
        drop_debugger: true
      }
    }
  }
})
