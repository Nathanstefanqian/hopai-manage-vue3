<template>
  <div class="card">
    <div class="box">
      <header>
        <span class="title font-bold">申诉订单</span>
      </header>
      <Echart :options="pieOptions" :height="400" />
    </div>
    <div class="box">
      <header>
        <span class="title font-bold">热销产品</span>
      </header>
      <Carousel />
    </div>
    <div class="box">
      <header>
        <span class="title font-bold">用户分析</span>
      </header>
      <Echart :options="circleOptions" :height="400" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Echart } from '@/components/Echart/index'
import { pieOptions, circleOptions } from '../echarts-data'
import Carousel from './Carousel.vue'
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  width: 100%;
  justify-content: space-between;

  .box {
    display: flex;
    width: 31%;
    height: 400px;
    padding: 15px;
    background-color: #fff;
    border-radius: 10px;
    flex-direction: column;
    box-sizing: border-box;
  }
}
</style>
