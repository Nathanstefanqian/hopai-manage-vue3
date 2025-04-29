<template>
  <div class="PhotographerPic">
    <header>
      <span class="title font-bold">摄影师画像</span>
      <div class="btn">
        <!-- <el-tree-select
          v-if="option == 1"
          class="mr-10 w-100"
          v-model="areaId"
          :data="areaList"
          :props="defaultProps"
          :render-after-expand="true"
          placeholder="请选择地区"
        /> -->
        <el-select v-model="option" class="w-30">
          <el-option
            :label="item.label"
            :value="item.value"
            v-for="(item, index) in options"
            :key="index"
          />
        </el-select>
      </div>
    </header>
    <Echart :options="barOptions" :height="400" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { getAreaTree } from '@/api/system/area'
import { getPhotographerPic } from '@/api/dashboard'
import { Echart } from '@/components/Echart/index'
import { barOptions } from '../echarts-data'
import { defaultProps } from '@/utils/tree'
const option = ref(1)
const areaId = ref()
const areaList = ref([])
const options = ref([
  {
    label: '地区',
    value: 0
  },
  {
    label: '性别',
    value: 1
  },
  {
    label: '等级',
    value: 2
  }
])

const updateChartData = async () => {
  const res = await getPhotographerPic(option.value)
  if (res?.length) {
    const xData =
      option.value === 0
        ? res.map((item) => item.region)
        : option.value === 1
          ? res.map((item) => (item.gender === '男' ? '男' : '女'))
          : res.map((item) => item.level)
    const counts = res.map((item) => item.count)
    barOptions.value.xAxis.data = xData
    barOptions.value.series[0].data = counts
  }
}

onMounted(async () => {
  areaList.value = await getAreaTree()
  updateChartData()
})

watch([option], () => {
  updateChartData()
})
</script>

<style lang="scss" scoped>
.PhotographerPic {
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
