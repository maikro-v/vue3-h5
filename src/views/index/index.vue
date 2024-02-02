<script setup name="Index">
import { reactive } from "vue";

const contentList = reactive([
  "✔ ⚡ Vue3 + Vite4",
  "✔ ✨ Vant4 组件库",
  "✔ 🌀 UnoCSS 即时原子CSS引擎 兼容Tailwindcss大部分语法",
  "✔ 🍍 Pinia 状态管理",
  "✔ Vue-router 4",
  "✔ 移动端自适应方案 vw 视口适配",
  "✔ Axios 封装",
  "✔ 开发环境支持 Mock 数据",
  "✔ 首屏加载动画",
  "✔ 开发环境调试面板 Eruda"
]);
</script>

<template>
    <h1 class="text-center m-0 py-[40px]">vue3-h5</h1>
    <van-cell v-for="(item, idx) in contentList" :key="idx" :title="item" />
</template>

<style lang="scss" scoped>
@import "index.scss";
</style>