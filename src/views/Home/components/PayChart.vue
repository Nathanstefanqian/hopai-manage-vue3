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
    <Echart :options="chartOptions" :height="400" />
  </div>
</template>

<script setup lang="ts">
import { Echart } from '@/components/Echart/index'
import { ref, onMounted, watch } from 'vue'
import { EChartsOption } from 'echarts'
import { getRevenue } from '@/api/dashboard'

const option = ref(1)
const options = ref([
  {
    label: '按年',
    value: 0
  },
  {
    label: '按月',
    value: 1
  },
  {
    label: '按周',
    value: 2
  }
])

const chartOptions = ref<EChartsOption>({
  title: {
    text: '营业额统计',
    left: 'center'
  },
  tooltip: {
    trigger: 'axis',
    formatter: function (params: any) {
      const value = params[0].value
      return `${params[0].axisValue}<br/>￥${(value / 100).toFixed(2)}`
    }
  },
  xAxis: {
    type: 'category',
    data: [],
    boundaryGap: false
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: function (value: number) {
        return `￥${(value / 100).toFixed(2)}`
      }
    }
  },
  series: [
    {
      data: [],
      type: 'line',
      smooth: true
    }
  ]
})

const updateChartData = async () => {
  const res = await getRevenue(option.value)
  console.log(res)

  const xData = res.map((item: any) => {
    if (option.value === 0) return `${item.year}年`
    if (option.value === 1) return `${item.month}月`
    return `第${item.week}周`
  })

  const seriesData = res.map((item: any) => item.revenue)

  chartOptions.value.xAxis.data = xData
  chartOptions.value.series[0].data = seriesData
}

onMounted(async () => {
  await updateChartData()
})

watch([option], async () => {
  await updateChartData()
})
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
