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
import { onMounted, ref } from 'vue'
import { Echart } from '@/components/Echart/index'
import { pieOptions } from '../echarts-data'
import Carousel from './Carousel.vue'
import { getAnalysis } from '@/api/dashboard/index'
import type { EChartsOption } from 'echarts'

const circleOptions = ref<EChartsOption>({
  tooltip: {
    trigger: 'item',
    formatter: '{b}: {c} ({d}%)'
  },
  series: [
    {
      name: '用户分析',
      type: 'pie',
      radius: '50%',
      data: [],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
})

onMounted(async () => {
  const res = await getAnalysis()
  circleOptions.value.series[0].data = [
    { value: res.activeUsers, name: '活跃用户' },
    { value: res.newUsers, name: '新用户' },
    { value: res.returningUsers, name: '回流用户' },
    { value: res.silentUsers, name: '沉默用户' }
  ]
})
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  min-width: 1250px;
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
