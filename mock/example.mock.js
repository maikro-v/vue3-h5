import path from 'node:path'
import { createDefineMock } from "vite-plugin-mock-dev-server";

const definePostMock = createDefineMock((mock) => {
  mock.url = path.join('/api/example', mock.url)
})

export default definePostMock([
  {
    url: "/funs",
    delay: 500,
    body: {
      code: 200,
      message: "OK",
      data: {
        list: [
          "✔ ⚡ Vue3 + Vite4",
          "✔ ✨ Vant4 组件库",
          "✔ 🌀 UnoCSS 即时原子CSS引擎 兼容Tailwindcss大部分语法",
          "✔ 🍍 Pinia 状态管理",
          "✔ Vue-router 4",
          "✔ 移动端自适应方案 vw 视口适配",
          "✔ Axios 封装 1. 类型智能推导params、2. 错误捕捉，无需写try~catch包裹处理",
          "✔ 开发环境支持 Mock 数据",
          "✔ 首屏加载动画",
          "✔ 开发环境调试面板 Eruda"
        ]
      }
    }
  }
]);
