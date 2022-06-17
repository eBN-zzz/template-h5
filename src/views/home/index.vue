<script setup lang="ts">
import { getDictOneApi } from '@/api/dict'
const a = ref('hello')
const onFetch = async () => await getDictOneApi({ name: 'hello' })
</script>

<template>
  <div class="home">{{ a }}</div>
  <VanButton type="primary" @click="onFetch">我是按钮</VanButton>
</template>

<style>
.home {
  width: 375px;
  font-size: 16px;
}
</style>
