<template>
  <div class="PayPic">
    <header>
      <span class="title font-bold">营业额</span>
      <el-select v-model="option">
        <el-option
          :label="item.label"
          :value="item.value"
          v-for="(item, index) in options"
          :key="index"
        />
      </el-select>
    </header>
    <Echart :options="lineOptions" :height="400" />
  </div>
</template>

<script setup lang="ts">
import { Echart } from '@/components/Echart/index'
import { lineOptions } from '../echarts-data'
const option = ref(1)
const options = ref([
  {
    label: '按年',
    value: 1
  },
  {
    label: '按月',
    value: 2
  },
  {
    label: '按日',
    value: 3
  },
  {}
])
</script>

<style lang="scss" scoped>
.PayPic {
  display: flex;
  min-width: 1250px;
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
