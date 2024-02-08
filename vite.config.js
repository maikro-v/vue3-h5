import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createHtmlPlugin } from 'vite-plugin-html'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';
import UnoCSS from 'unocss/vite'
import mockDevServerPlugin from 'vite-plugin-mock-dev-server'

// 当前工作目录路径
const root = process.cwd();

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {

  // 环境变量
  const env = loadEnv(mode, root, "")
  return {
    plugins: [
      vue(),
      // 按需自动引入vant组件，无需从main.js中全部注册
      Components({
        resolvers: [VantResolver()],
      }),
      // UnoCSS 即时原子CSS引擎
      UnoCSS(),
      // 开发环境下提供 Mock 服务
      mockDevServerPlugin(),
      // 允许 setup 语法糖上添加组件名属性
      vueSetupExtend(),
      // 注入模板数据，在html中可使用data定义的数据
      createHtmlPlugin({
        inject: {
          data: {
            ENABLE_ERUDA: env.VITE_ENABLE_ERUDA || "false"
          }
        }
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      host: true,
      proxy: {
        "^/api": {
          target: 'http://127.0.0.1',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '/api'),
        }
      }
    }
  }
})
