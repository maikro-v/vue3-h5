<script setup name="Index">
import { onMounted, ref } from "vue";
import api from '@/api'

const contentList = ref([]);

onMounted(async () => {
  const { err, data } = await api.example['funs']({
    // args: {
    //   id: 20240208
    // },
    // params: {
    //   a: 2
    // },
    // data: {
    //   name: 1
    // }
  })

  contentList.value = data.list
})
</script>

<template>
    <h1 class="text-center m-0 py-[40px]">vue3-h5</h1>
    <van-cell v-for="(item, idx) in contentList" :key="idx" :title="item" />
</template>


<style lang="scss" scoped>
@import "index.scss";
</style>