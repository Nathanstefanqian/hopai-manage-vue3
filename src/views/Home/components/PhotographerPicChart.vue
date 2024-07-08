<template>
  <div class="PhotographerPic">
    <header>
      <span class="title font-bold">摄影师画像</span>
      <el-select>
        <el-option :label="1" />
      </el-select>
    </header>
    <Echart :options="barOptions" :height="400" />
  </div>
</template>

<script setup lang="ts">
import { Echart } from '@/components/Echart/index'
import { lineOptions, barOptions } from '../echarts-data'
</script>

<style lang="scss" scoped>
.PhotographerPic {
  display: flex;
  width: 100%;
  padding: 30px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  flex-direction: column;

  header {
    display: flex;
    width: 100%;
    justify-content: space-between;

    .title {
      font-size: 20px;
    }
  }
}
</style>
